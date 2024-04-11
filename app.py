import os 
from flask import Flask, render_template, request, jsonify, url_for, send_from_directory
from datetime import datetime, timedelta
import uuid
import atexit
from apscheduler.schedulers.background import BackgroundScheduler
import shutil
import logging
from PIL import Image
import io
import torch
from transformers import Pix2StructForConditionalGeneration, Pix2StructProcessor, PretrainedConfig
from transformers import pipeline
from datasets import load_dataset
import soundfile as sf
import torch
import sounddevice as sd

import whisper

# Suppress informational messages
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'  # 0 = all messages are logged (default behavior)
                                          # 1 = INFO messages are not printed
                                          # 2 = INFO and WARNING messages are not printed
                                          # 3 = INFO, WARNING, and ERROR messages are not printed

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

# Path to Current Working Directory
dir_path = os.path.dirname(os.path.realpath(__file__))



synthesiser = pipeline("text-to-speech", "microsoft/speecht5_tts", device=0 if torch.cuda.is_available() else -1)

embeddings_dataset = load_dataset("Matthijs/cmu-arctic-xvectors", split="validation")
speaker_embedding = torch.tensor(embeddings_dataset[7306]["xvector"]).unsqueeze(0).to(device)
# You can replace this embedding with your own as wel

stt_model = whisper.load_model("base")


class VQAModel:
    def __init__(self):

        # Initialize the model with the loaded configuration
        self.model = Pix2StructForConditionalGeneration.from_pretrained("google/pix2struct-docvqa-large", torch_dtype=torch.bfloat16).to(device)
        
        self.model_path = dir_path + '/models/model_weights_Pix2StructForConditionalGeneration__20_14 days, 3_52_26.pth'
        # print(f"Loading model from {self.model_path}")
        self.load_model()

        # Initialize the processor
        self.processor = Pix2StructProcessor.from_pretrained("google/pix2struct-docvqa-large")

    # Load the model weights
    def load_model(self):

        # Load the state dict (the model weights)
        try:
            self.model.load_state_dict(torch.load(self.model_path))
            print("Model loaded successfully.")
        except Exception as e:
            print("Error loading model: ", e)
        
        # Clear any cached memory to avoid memory leaks, especially useful when using CUDA
        torch.cuda.empty_cache()

        
    def predict(self, image, question):
        inputs = self.processor(images=image, text=question, return_tensors="pt").to(device, torch.bfloat16)
        self.model.eval()
        with torch.no_grad():
            generated_ids = self.model.generate(**inputs, max_length=150)
        answer = self.processor.decode(generated_ids[0], skip_special_tokens=True)
        
        return answer

model = VQAModel()

app = Flask(__name__)
app.logger.setLevel(logging.INFO)  # Set the logger level directly


# Define the path for the audio folder within the user's home directory
AUDIO_FOLDER = os.path.join(app.root_path, 'temp_audio')

# Check if the directory exists, and if not, create it
os.makedirs(AUDIO_FOLDER, exist_ok=True)

# Function to clear the temp_audio folder on server start
def clear_audio_folder():
    for filename in os.listdir(AUDIO_FOLDER):
        file_path = os.path.join(AUDIO_FOLDER, filename)
        try:
            if os.path.isfile(file_path) or os.path.islink(file_path):
                os.unlink(file_path)
            elif os.path.isdir(file_path):
                shutil.rmtree(file_path)
            print(f'Cleared {filename} from audio folder.')
        except Exception as e:
            print(f'Failed to delete {file_path}. Reason: {e}')

# Call the function to clear the audio folder on server start
clear_audio_folder()

# Function to clean up old files periodically
def cleanup_old_files():
    now = datetime.now()
    for filename in os.listdir(AUDIO_FOLDER):
        file_path = os.path.join(AUDIO_FOLDER, filename)
        file_time = datetime.fromtimestamp(os.path.getmtime(file_path))
        if now - file_time > timedelta(hours=1):  # Adjust time as needed
            os.remove(file_path)
            print(f"Deleted {filename} due to expiry")

# Scheduler to clean up files every hour
scheduler = BackgroundScheduler()
scheduler.add_job(func=cleanup_old_files, trigger="interval", hours=1)
scheduler.start()

# Shutdown the scheduler when the web process is stopped
atexit.register(lambda: scheduler.shutdown())

@app.route('/get-audio/<filename>')
def get_audio(filename):
    return send_from_directory(AUDIO_FOLDER, filename)

@app.route('/api/text2speech', methods=['POST'])
def text2speech():
    max_length = 598  # Adjust based on your model's specific limitations

    text = request.json['text']
    print(text)

    if len(text) > max_length:
        print(f"Text length ({len(text)}) exceeds the maximum allowed length ({max_length}). Truncating...")
        text = text[:max_length]

    try:
        speech = synthesiser(text, forward_params={"speaker_embeddings": speaker_embedding})
        
        # Save the audio to a file
        audio_filename = f"{uuid.uuid4()}.wav"  # Generate a unique filename
        audio_path = os.path.join(AUDIO_FOLDER, audio_filename)
        sf.write(audio_path, speech["audio"], speech["sampling_rate"])
        
        # Generate a URL to access the audio file through the get_audio route
        audio_url = url_for('get_audio', filename=audio_filename, _external=True)
        
        return jsonify({"status": "success", "message": "Audio generated successfully", "audioUrl": audio_url})
    except Exception as e:
        print(f"Error in text-to-speech generation: {e}")
        return jsonify({"status": "error", "message": str(e)}), 500


@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    if request.method == 'POST':
        file = request.files['image']
        image = Image.open(io.BytesIO(file.read())).convert("RGB")
        question = request.form['question']
        answer = model.predict(image, question)
        return jsonify({'answer': answer})
    


@app.route('/api/lectures')
def get_lectures():
    base_path = os.path.join(app.static_folder, "images", "lectures")
    lectures = []
    for week_dir in sorted(os.listdir(base_path)):
        week_path = os.path.join(base_path, week_dir)
        if os.path.isdir(week_path):
            images = sorted(os.listdir(week_path))
            if images:
                # Assuming all images are relevant and sorted alphabetically
                first_image = images[0]
                lectures.append({
                    'name': week_dir,
                    'img': f'/static/images/lectures/{week_dir}/{first_image}'
                })
    return jsonify(lectures)

@app.route('/get-images/<week>')
def get_images(week):
    app.logger.info("Fetching image paths...")
    # Construct the path to the specific week's directory
    week_directory = os.path.join(app.static_folder, "images", "lectures", week)

    image_paths = []  # Initialize an empty list to store image paths
    try:
        # List all png and jpg files in the specified week's directory
        for file in os.listdir(week_directory):
            if file.endswith('.png') or file.endswith('.jpg'):
                # Append the relative path to the image_paths list
                image_paths.append(f'/static/images/lectures/{week}/{file}')

        app.logger.info("Image paths: %s", image_paths)
        return jsonify(image_paths)
    except Exception as e:
        app.logger.error(f"Error fetching images from {week_directory}: {e}")
        return jsonify({"error": f"Error fetching images from {week_directory}"}), 500
    
@app.route('/api/vqa', methods=['POST'])
def handle_vqa():
    try:
        # Extract the image and question from the request
        file = request.files['image']
        question = request.form['question']
        image = Image.open(io.BytesIO(file.read())).convert("RGB")

        # Get the answer from the model
        answer = model.predict(image, question)

        return jsonify({'answer': answer})
    except Exception as e:
        print(f"Error in VQA processing: {e}")
        return jsonify({"error": str(e)}), 500
    
@app.route('/transcribe', methods=['POST'])
def transcribe_audio():
    if 'audio' not in request.files:
        return "Audio file is required.", 400
    
    audio_file = request.files['audio']
    audio_path = "./temp_audio.ogg"  # Temporary save location
    audio_file.save(audio_path)
    
    # Transcribe the audio
    result = stt_model.transcribe(audio_path)
    transcription = result["text"]

    # Cleanup and response
    os.remove(audio_path)  # Clean up the temporary file
    return jsonify({"transcription": transcription})

if __name__ == '__main__':
    app.run(debug=True)