import os 
from flask import Flask, render_template, request, jsonify
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

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

# Path to Current Working Directory
dir_path = os.path.dirname(os.path.realpath(__file__))



synthesiser = pipeline("text-to-speech", "microsoft/speecht5_tts")

embeddings_dataset = load_dataset("Matthijs/cmu-arctic-xvectors", split="validation")
speaker_embedding = torch.tensor(embeddings_dataset[7306]["xvector"]).unsqueeze(0)
# You can replace this embedding with your own as wel
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
            generated_ids = self.model.generate(**inputs)
        answer = self.processor.decode(generated_ids[0], skip_special_tokens=True)
        
        return answer

model = VQAModel()

app = Flask(__name__)
app.logger.setLevel(logging.INFO)  # Set the logger level directly

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


@app.route('/api/text2speech', methods=['POST'])
def text2speech():
    text = request.json['text']
    print(text)
    speech = synthesiser(text, forward_params={"speaker_embeddings": speaker_embedding})

   
    # Play the audio
    sd.play(speech["audio"], speech["sampling_rate"])
    sd.wait()  
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

if __name__ == '__main__':

    app.run(debug=True)