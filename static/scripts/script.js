let currentWeekImages = [];
let currentIndex = 0;
let lectures = [];  // Will hold the fetched lecture data.
//const fs=require('fs');
let isInLectureMode = false;
data=[
    {
        "transcript": "As you guys have probably already noticed that I'm currently an assistant professor at our AI program.",
        "week": 1,
        "page": 1
    },
    {
        "transcript": "And let me quickly talk about my research. So, here is my email address, if you have any questions regarding to your course or regarding to your future, you know, or any other minor stuff you can feel free send me an email. My research and regular focus are on these 4 directions. So first of all, I'll majority of my papers, I focus on transfer learning. So specifically, I focused on as more domain for the domain adaptation. So later I will explain what the domain adaptation meaning here. Next, I am interested in manifold learning, which is kind of an expansion of space is different from our training space. And next, I am interested in the shape analysis, and this is really, relatively related to the medical field. And lastly, recently, I'm more focused on the audio denoising problem.",
        "week": 1,
        "page": 2
    },
    {
        "transcript": "Let's see some of examples. So, first, right is about the domain adaptation. So, in this slide, we will see our source domain and the test domain. And during in our Machine Learning, we, we, we have like the training data set and test data. But in this case, we will refer our training data set as a source domain and our test data set as a target domain. So now as you can see there, you cannot see significant difference between your source domain and the target domain. So here, for example, those last 3 objects from the product domain, and here in just about the outline of the clipart domain. So now you will observe the difference between these 2 domains.  If you apply some existing Machine Learning models, you may not get a high accuracy. And those traditional machine models where include all models that I will cover in the fall semester. Which means that for those traditional methods, it will not get a very high accuracy. And similarly, we have another kind of data set. In the medical field, for example, we have the T1 images, and we have the flair images. If we try to segment the T1 images focused on the parameter, if we are then applying our model to the flair image, we will and not get a very good result because you see the difference between your tumor images and the flair images, and even worse, your source domain can be only like images, but your target domain can be just some text. Now you can direct the difference between images and the task. Right? And then this is the problem of the domain adaptation that we want to mitigate. The difference between a training and a test domain.",
        "week": 1,
        "page": 3
    },
    {
        "transcript": "And I will introduce one more of the previous that I developed out of these examples. That's exactly how manifold, which means that if we are keeping sampling some samples, from the source domain to the target domain. So now, you can see this image in the shoes. How monkey changes the interviewer working human being right. It's corresponding to those plan dot here. So, this is about the time frame of the many goals.",
        "week": 1,
        "page": 4
    },
    {
        "transcript": "And also, this is about another application in the medical field that causes shape analysis, which means that we want to check your shift changes with the increasing of your age. As you probably noticed that with the increasing of age, you may more likely to get some diseases. Right? And this is the meaning of this task. So, for example, your input of all the network is just the age. For example, in this case, it's just 60. And the output is the output is just about one the shape of your brain structure. So here, it's specifically referred to the corpus callosum, which is one of our brain structures that is related to your memory. And, specifically, we are related to the outcome of diseases. If you found that your corpus callosum is very small, you are more likely to get autonomic diseases. Right? So then get a prediction model. You cannot use both to prevent getting those kinds of diseases.",
        "week": 1,
        "page": 5
    },
    {
        "transcript": "And we also have applications. We rely see the he's the animals like here in just about fly heart segmentation. The purpose of here is to try to segment the fly heart area. And then you can see how this area keeps changes. Right?",
        "week": 1,
        "page": 6
    },
    {
        "transcript": "And we also have other applications in the cow teat segmentation and classification. So again, I just use some results about the cow teat area. Those keep in the bounding box to refer to the location, and at this given color segment a teat area. And this different number means different classes of the diseases. If it is 1, it means normal. If it is 2, it means it's abnormal. So sometimes, you will see there two there. Because the truth is that most of the cows are very healthy. Right? Just a few of them can get diseases. But then later, you will see a lot of them.",
        "week": 1,
        "page": 7
    },
    {
        "transcript": "And, basically, we have another lecture about audio denoising. You probably have noticed that audio denoising is more likely in this another field that's not, for example, in the internal process. However, we also converted the audio signals to audio images. So, after that, we can do some kind of process of the audios. But eventually upload and get some segmentation model. We can try to can segment the audio images, after we apply the inverse of short time Fourier transformation. We can get a denoised audio.",
        "week": 1,
        "page": 8
    },
    {
        "transcript": "And now we can quickly listen. For example, in this case. Can you hear anything? But if you look at the Signal here in the left hand, you see a lot of, like, noise, you just bring it over. But On your right hand, once you get the denoised, you can see a clear pattern of this sound. Right? This is called a realization of the purpose of audio denoising.",
        "week": 1,
        "page": 9
    },
    {
        "transcript": "And then even further, we have other applications related to the audio separation. So, you can also pay attention to these 2 figures, as you can see here. Right? See, on the left hand, this figure is about the noisy mixing birds. By the right hand, there are 2 different colors. So, the yellow color means the bird sound 1, here and the blue color means the bird sound 2. So, this is, um, becomes, becomes an image segmentation problem. Right? ",
        "week": 1,
        "page": 10
    },
    {
        "transcript": "Also, we have other applications that are about audio enhancements. As you can see in the left and also in the blue color refers to the noise bird sound and this little bit of this red area refers to the bird sound as you can see from here. The original audio is very tiny, very small. Right? However, if you apply the audio enhancement you can see it very big. It's very annoying that you cannot hear the audio enhanced sounds. I'm trying to play it. This is actually the denoised bird sound, very tiny. This one is pretty big.",
        "week": 1,
        "page": 11
    },
    {
        "transcript": "Now always, for our online students, if you have any questions, basically, approach to stop me. I would like to hear the feedback from you guys. Okay? Do not be shy. Okay. Also, any questions? So now, probably we are starting with our Machine Learning course. So that's the first time with the course overview. And some things that is very important to all of you, specifically the final score. Right?",
        "week": 1,
        "page": 12
    },
    {
        "transcript": "So here is the textbook, you guys might need to read. It is called like a bible in Machine Learning field. In it is like written by the Bishop, the Patent Recognition and Machine Learning. And here is an online link, you can click it and download it that is an online free PDF. It is not needed to buy the new one, but you can buy a new one if you want to read the text. And then this here is just our Canvas page, and you can feel free to have some discussions online.",
        "week": 1,
        "page": 13
    },
    {
        "transcript": "And again, about our prospect, I think, all of you should have noticed about that. Right? Actually, the last latter class is May 10th. And our first time is Wednesday, this time, at this location and again the zoom link of the class. For, this is the only very good for the online students. But for others, I very encourage you guys to come in person. Unless you have some good reasons, yes, a good reason. And don't say you are too tired. Okay.",
        "week": 1,
        "page": 14
    },
    {
        "transcript": "And we also have office hours. It, it is in every Wednesday at 4 - 5 PM. And just come to my office. I think most of you, you're all of them come to the sixth floor. It's at 205. I see some of you guys, but some of you, I did not speak on this matter and then see you guys to come. Feel free to stop in the office hour after any kind of questions. Okay?",
        "week": 1,
        "page": 15
    },
    {
        "transcript": "And then again, syllabus, how many of you check out about our syllabus? None of you? Okay. That's fine. I will also cover about that part.",
        "week": 1,
        "page": 16
    },
    {
        "transcript": "So here, I found some prerequisites. So, basically just fundamental mathematics. You already probably get from the first semester. And also, I will even next week, I will try to give you guys a quick review of some math that is required in this class. And I think we've got Python by professor Pablo. It's good.",
        "week": 1,
        "page": 17
    },
    {
        "transcript": "So, here, about assignments, some percentage that you have to know. It's, like, its discussions, some participation is, like, 10 percentage. Homework. And you guys, we have a kind of lots of homework, like each week, we will have some homework. It will not be that difficult. You need to devote some time on it. I'm sure you guys will get it. But finally, I will only select the highest selection of them for your final grade. And lastly, it's about the final project. It's about 30 percentage. For that reason, your final project is like your first year come to my office, talk to me to select your favorite project, you want to work on, so then you need to write a quick proposal for that. At the last day, you need to present your final project, then do and maybe answer questions for your audience. I will not have any exams. But if you guys like exams, tell me, I will make an exam for you. Okay. I, I, I really hope some students tell me you guys want some exam. I can remove this grading system percentage lower if you guys can tell me some exams or final exam. Are you ready? Complete? No. No. Nobody likes exams. Okay. So, let's have to just keep this format. Professor: What about? Student: I have, I have one question about team members. Is there any limits of the numbers of members in a group? Professor: The team member you mean? Student: For the project or the final presentation? Professor: Yes. Yeah. So that's we are depends on your guys. If you guys sound like other at the most, I would like to say 2 students per group. Because, totally, we have around 12 students. Right? So, at the most, like, 2 person in 1 group, but you can do it by yourself. I think in that case, you will get some kind of extra points for that if you're doing it by yourself. Okay. Student: Got it. Thank you. Professor: Any other questions? No. Okay. Great.",
        "week": 1,
        "page": 18
    },
    {
        "transcript": "And I think any of you are from the first semester. No? It's from the second semester. You should know about this in different data grades. Right?",
        "week": 1,
        "page": 19
    },
    {
        "transcript": "And again, about the details of our class schedule. So, we are in the first week, and then next week, we'll talk about basic math, and the data preprocessing. In the third week, we are talking about classification, after that, we will talk about some regression, and least squares, and then we will talk about the PCA. I think there's some of you probably already talked about some, something about the PCA. Right? Okay. Those are the few guys. After, we're gonna talk about the matrix factorization, and the Gaussian mixture model, basically, some neural networks, decision trees or a vector, and we have 2 weeks for holidays. Did you guys notice that? If not that I wanna tell you, you have 2 weeks at a holiday. It'll be a better time to start. And after that, we have, like, neural network, ensemble method, and then we are finished about the whole semester. I have to emphasize that. So, all, like, all the contents in this Machine Learning course are very important to you. Because of your future interviews, they definitely will ask questions from this machine learning class. Remember about that. And even if they will ask you to implement some of these algorithms. Previously, like, one of the algorithms happened to be that is about this decision tree. The interviewer will ask you to implement or reimplement this decision tree from scratch. So, so then, during this homework, you guys are ready to think about the first, like you have an interview. How you can implement those algorithms by yourself. Okay. That is very important. Any questions so far? No?; Student 1: Do we have the final project? Professor: Yes, let's go try to find it into our syllabus again. So, here is the all content that I will cover in the whole semester. As you can see here, we have like final project and some implementation of it. In middle, you only have like thirteen different homeworks. Each of them, you will have a kind of smaller work. Student 1: So, are all the projects independent for that or like a team works? Professor: You mean the homework? Student 1: No. The projects. Professor: The final project, as one student asked, it can be teamwork, but it depends on. It's no more than two persons. Student 2: And for the next interview. Professor: Yeah. For homework, just in the interview, some very small, small work. Like today, we will, I'll ask you guys to answer; What is machine learning and what is the future of it? Maybe next class, I want to give you guys a little bit easy stuff to that. And then for the other middle, I might need you guys to implement it from scratch. So, you treat them carefully, and like during your interview how you will implement those kinds of algorithms. Like Gaussian mixture model, how you will implement. How you will implement the Decision Tree. Right? If you guys are ready, it's a very good job in this class. I mean, in a future view, in a future view, ask you the same questions. We have no question about that. You have immediately implemented. You definitely have a good impression on them. So, they might need might hire you immediately, hopefully. Okay?",
        "week": 1,
        "page": 20
    },
    {
        "transcript": "So now let's talk about passed out today, that is introduction of Machine Learning.",
        "week": 1,
        "page": 21
    },
    {
        "transcript": "Professor: So here in the big picture of Machine Learning, just a particular way we are start from artificial intelligence, that is the name of our program, artificial intelligence. What do you think about artificial intelligence? Student 1: About Artificial Intelligence? It's like human intelligence is imitated by things. Professor: Okay. Good. What about other thoughts? What do you think about Artificial Intelligence? Okay. Good. What about other thoughts? What do you think about Artificial Intelligence? Yes. Exactly. What about other thoughts? This is so. Yeah. It's still kind of. What about other thoughts from online students? Your mind, what do you think about Artificial Intelligence? And did you notice some difference between AI and Machine Learning? Which one is bigger? Yeah. Student 5: If a variety is Machine Learning some of way implementing AI. And since this, AI is a set of methods that can use methods can study by itself to solve some problems. Professor: Yes. Exactly. You got it. In the next few slides, we are first introducing AI and then we are talking about Machine Learning. So, we will talk about AI a little bit. For the other differences between AI and the Machine Learning has already noticed in this bigger. Right?",
        "week": 1,
        "page": 22
    },
    {
        "transcript": "But first of all, for the AI, what is AI? So actually, in one sentence, then more like AI is the science of making intelligent machines which can perform tasks that require intelligence when performed by humans. And therefore, important components that is the 'Perception', the 'Learning', the 'Abstraction', and 'Reasoning'.",
        "week": 1,
        "page": 23
    },
    {
        "transcript": "So, first of all, was the 'Perception' of we also can say it as 'Representation'. So, in AI, 'Perception' is a process to interpret, acquire, select, and then organize the sensory information from the physical world to make actions like humans.",
        "week": 1,
        "page": 24
    },
    {
        "transcript": "But what about 'Learning'? So, the 'Learning' is the ability of a system to improve its behavior based on experience. So, most likely, it's behavior based on experience. Right?",
        "week": 1,
        "page": 25
    },
    {
        "transcript": "But the 'Reasoning'? 'Reasoning' is a way to infer  facts from existing data. It is a general process of thinking rationally, to find valid conclusions. What are the differences between Machine Learning and machine reasoning? Right? So, what is about to find patterns? Machine Learning is always to try to find some logical between these patterns, and why the other one is about to understand relationship, it's more like a human being, with seeing a deep understand. What was the relationship between them? Like tackling new problems with a deductive and inductive reasoning approach.",
        "week": 1,
        "page": 26
    },
    {
        "transcript": "Professor: What about 'Abstraction'? So, 'Abstraction' is a fundamental mechanism underlying both human and artificial perception, representation of knowledge, reasoning and learning. It aims to take knowledge that is discovered at a certain level and applying it at another level. So then, another question. So, among those four different aspects. Which one, but you're assuming it's mostly important or mostly difficult for AI on our desk. So, 'Perception', 'Learning', 'Abstraction' or 'Reasoning'? Which one? Like, which one? What was the challenge? How about you? Student 1: Abstraction. Professor: Why Abstraction? Professor: Yes. You're saying that that is difficult establishes. But yeah. Yeah. That's that is a problem. Right? Student 2: 'Reasoning'. Professor: Ok. What about others? Do you agree with her or you have a different opinion? Okay. So, now, let's direct you to the answer.",
        "week": 1,
        "page": 27
    },
    {
        "transcript": "So, what about the bottleneck of the AI? So, actually, it's just about the abstraction and the reasoning. The key reason is about for the AI is still very difficult for them to make sense of the theory behind all those objects. Especially about reasoning and really about understanding the mechanism behind those problems. Sometimes it is very difficult for, like, human beings. Right? Especially about deductive and inactive. If you want Machine Learning to do some tasks that have never turned before, it is very challenging for them.",
        "week": 1,
        "page": 28
    },
    {
        "transcript": "And here, in a big picture of the AI system architecture. It's more about end-to-end of headlines. There are lots of applications. There's lots of augments there, so probably I would kind start from those 'Robust AI'. There are I only here just mentioned the, like, of 5 different aspects, like the 'Explainable AI', 'Metrics and Bias Assessment', 'Verification & Validation' is more like you like your phone, you use a face to unlock it. Right? And the 'Security', the other is about some 'Policy', 'Ethics', 'Safety', 'Training' problem. And also, there are a lot of modern, modern, like, computing devices as you are seeing on. You definitely guys see CPUs. Right? You know about the GPUs. I've been watching that you already heard about that. And you probably notice about the GPU, which is more robust work than CPU, and you have this 'Custom' and the 'Quantum' computing and other staff. Right? But before, again, those cannot use in Machine Learning models, like that data is always our first task. Right? Altogether, data, here is about 'Data Collection', 'Data Management', like 'Data Labeling'. Especially the amount that the 'Data Labeling' is a big challenge for all existing Machine Learning. For those, you definitely need to provide feedback about a data set. So, in that initial stage, it's a requirement for humans to provide something. So, that is a bit of a reason why 'Data Labeling' is now still very challenging. Also, we have so many different implementing models or Machine Learning models, but 'Data Labeling' is also a very difficult process. And after that, we have some algorithms, yeah, just several different types. Like, 'Unsupervised Learning', 'Supervised Learning', we also have 'Reinforcement Learning', etcetera. Another side, we have, like human and computer interaction so that we can get better performance. So, for the human and the computer interaction, the HCI, and it really would take a little bit longer time than single computer models. But, you know, it'll get a much higher accuracy. So, love it, this area is also very popular. And also, we have several other applications. So, let's mention 1 of all those applications. Any questions? No, okay. Great.",
        "week": 1,
        "page": 29
    },
    {
        "transcript": "Professor: Now, let's talk about what is different between AI and the Machine Learning. So, you already noticed that Machine Learning is just a branch of AI, but what are the details of them? So, for the AI, in that scientific field concerned with the development of algorithms that allow computers to learn without being actually programmed, but for the Machine Learning is just a branch of it which focuses on methods that learn from data and make predictions on unseen data. And then for the Machine Learning, we really care about prediction, channel, that kind of prediction. Right? So, here is the general process of Machine Learning. So, during the training stage, we have a labeled data set. What about label data set? Student 1: Labels are input data. Professor: What do you mean by labeled input data? Student 1: Features and labels. Professor: Features and labels. Yeah. Yes. Exactly. I agree with that. What about other labels in the data set? Oh, you, you questioned that? What is the label of the data? Okay. Great. Yeah. Go ahead. Student 2: A label data? Professor: Yeah. The label data. What is labeled data? Student 2: I think, we can have some datasets, for example, we have several samples, and each sample has some labels that it identifies some class, for example. Professor: Yes, good. I see you guys now appreciate it. Right? So, the label of data will provide some labels for the datasets. For example, like images, give an image of a cat. The label is a cat. You have labeled it. So, it is a labeled data set. Right? So, for example, you've got stock price prediction sold on stock price of your labels of it. Right? Give you give you your time series data. And, yeah, another stage of Machine Learning is called 'prediction' or called the test stage. We have another kind of labeled data set. But we will use this time, we will try to use trained Machine Learning models based on the training stage we can check to make some predictions, for the test data set and then even we want to evaluate the performance the performance of the Machine Learning models. Right? Any question? Okay. Student 1: Is Reinforcement Learning in this category? Professor: I do not have yet that yet. In few slides, but Reinforcement Learning is different from those, so here we will see it. Okay? That's a good question.",
        "week": 1,
        "page": 30
    },
    {
        "transcript": "So next, I want to briefly mention about the history of the Machine Learning.",
        "week": 1,
        "page": 31
    },
    {
        "transcript": "So, definitely, you know, we will go back to a long time ago. Right? It's like 70 years or so ago, but that is in the 1950s, the first light of Machine Learning is very related to the checker player. So out of that, in the 1960s, like the earliest offer of the neural network, it's called Perceptron as it was born at that time. However, after that, it was proven that Perceptron is not working. So then, we'll be able to expand more reasons about their products. In the 1970s, we also have other coming algorithms.",
        "week": 1,
        "page": 32
    },
    {
        "transcript": "So, then, let's go back to the 1980s. So, we have advanced Decision Tree and the Rule Learning after the previous. Later in the 1990s, so, in this case, we will have more bulk view of Machine Learning like that. There's a mark, finding some text and learning, some Reinforcement Learning and Inductive Logic Programming, etcetera.",
        "week": 1,
        "page": 33
    },
    {
        "transcript": "Even recently like in the 2000s. This is like a majority of traditional Machine Learning algorithms that are already invented. At that time, for example, the Support Vector Machine, the kernel methods, the graphical methods, statistical relational learning, from transfer learning, etcetera. And then, it includes you like knowledge about 10 years ago in the 2010s. In that stage and like Deep Learning is ready and becomes popular. Right? So, out of that, in the next decade, like 2010, the Deep Learning is most likely everyday work. So, it going to increase that economy.",
        "week": 1,
        "page": 34
    },
    {
        "transcript": "Next, I would like to introduce what is Machine Learning. And why should we study? How we care about Machine Learning? Right?",
        "week": 1,
        "page": 35
    },
    {
        "transcript": "Have you ever thought? How easily we can recognize face, the color, the shape or handwritten characters. How will the children learn to balance or develop preference to some taste. Right? I don't know whether guys have some time to think about that, or even like human's cognitive abilities have transformed every aspect of our lives. And the human mind is a set of cognitive gadgets, and specialized to learn.",
        "week": 1,
        "page": 36
    },
    {
        "transcript": "So, this is about the intuition of showing how it handles themselves? Actually, there are no specific features that identification given and they just given from the experience. Like an infant, like a poor baby would be content just the first time of experience. Right? Which your parents pose them like we probably noticed that our eyes can take an image like every 200 milliseconds, and then we have like 5 pictures per second, and totally around 300 pictures by per minute, as there are lots of amount of data sets giving as input. But does that mean? Where they're increasing our age, definitely they see more and more images. Right? What about the word? And that's about our children. So really humans learn from experience. Right? Once or sometimes if you make a mistake in that first case, you'll probably, in the next time you try to avoid it. Right? If you, even in the second time, you may make a mistake again, but there's so many times so definitely you can recognize it, and definitely, you can avoid providing some mistakes.",
        "week": 1,
        "page": 37
    },
	{
		"transcript": "And then another good question about how Machine Learning is different from traditional programming? Here's an example here. If I ask you how to write a program like a pseudo code to identify a cat, to identify a cat in an image. How would you do it? Any ideas? Student 1: You mentioned. I'm not very good to do. And I'm here. No ideas, but traditional model is bigger. Professor: Yes. That's a very good spectrum. What about some thoughts about your guys? Use traditional programming, how to identify this cat? Any thoughts? It comes without a result, still without a solution. So, we really talk about some, in the early stage, without computer vision problems. But the kind of the easiest solutions you can think of to how to distinguish, whether this is a cat or not. What about online students? Do you guys have any thoughts? How can you write a program about identifying whether this is a cat? Student 2: For example, if, for example, if some type, like, triangle, and for each for each part of body, like, for example, for eyes, eyes like green or black. And for and for each, for each type of body to make some if statement and check if it's related to the cat or not. Professor: Good. You have a similar solution to your classmate. So, let's see. Student 3: Can I say something, professor? Professor: Do you have another solution? Student 3: Yeah. Yeah. So first, we convert this RGB image to black and white image, and then we make a decision. We can make a classifier like logistic regression classifier or gradient boosting classifier, which classifies the image? Professor: Yeah. So, actually, your answer is similar to Juju. You did use that. This is the more likely some kind of advanced solution.",
		"week": 1,
		"page": 38
	},
	{
		"transcript": "So, let's give us the very, you know, early stage whether we can do for that. As some of you've noticed that. So, we have a bunch of if-else statements. If you like some quote, follow through fast. The key thing is, we want to detect some small parts of the kind of images. Right? For example, we want to detect the color, we want to detect the shape, we want to detect the length. And we have so many different if-else statements, so finally to decide whether that is correct. But 1 question is, is that enough? How many those standard if-else statements do you needed to make? How many? You don't know right. Even than better, right? Because there are so many parts of the image, right? And this is the big. So that's very about some traditional programming, because traditional programming is, we're not a care about the images, the computers classify itself, right? Only care about some small staff, how to make them together. But in this case, the Machine Learning is more likely think of a whole image, not just for example, or small parts.",
		"week": 1,
		"page": 39
	},
	{
		"transcript": "For example, can we manually write an algorithm or hard code that caters all the variations? Like traditional methods, can they do that? Probably very challenging. Right? Because different possess of cats. Right?",
		"week": 1,
		"page": 40
	},
	{
		"transcript": "Very challenging. I mean, different shape, strange shape. Somehow has the cat more like water. It can be in any shape. Right? So that means that you need to test your very challenge with that environment.",
		"week": 1,
		"page": 41
	},
	{
		"transcript": "So then, for the Machine Learning algorithms, an algorithm that will then follow from data or experience, and then there's no need to formulate explicit rules. In the algorithm, performance gets better with experience or data. If you have more and more data, definitely, your Machine Learning algorithm can output a good accuracy but we're heading about that. Even sometimes, you know you cannot get more data, but you can do some data augmentation. Try to generate some big data. You have also tried to get some better results. Then models will be allowed to get an application plan.",
		"week": 1,
		"page": 42
	},
	{
		"transcript": "So now, we talk about the question. So, what is the Machine Learning? And this is very about it. The early stages of computers in 1959, so the field of study that gives computers the ability to learn without being explicitly programmed.",
		"week": 1,
		"page": 43
	},
	{
		"transcript": "And this guy says that Machine Learning is the study of computer algorithms that allow computer programs to automatically improve through experience. And then in this case, we'll care more about automatically. Right? That is important because we want save our time because we are human beings. Right? And well lazy, we cannot do everything, we want some computer to do that.",
		"week": 1,
		"page": 44
	},
	{
		"transcript": "And the Machine Learning algorithms ingest data and model, like, more like the hypothesis. So, the learned model can be used to detect the patterns, detect the trends, detect the structures, etc. from data set. And then we make predictions on unseen or the new data set. And the letter when we will talk more about those unknown applications.",
		"week": 1,
		"page": 45
	},
	{
		"transcript": "The next question is, 'Why study Machine Learning?' Why is it important? Here's the key thing that we want to develop a better computer system to help us. So, to develop computer systems that are to, that is difficult and inexpensive to construct them manually because they require a specific detailed skills or knowledge tuned to a specific task. As usually the knowledge engineering bottleneck, if you have your own data set, data set especially in industry, every company even has their own data set. Right? In that case, you need to build your own model again, create some labels, retrain this situation that you cannot prevent. So, this is called the bottleneck. Why do we have that? To develop systems that can automatically adapt and customize themselves to individual users. For example, personalized news, the mail filtering. For example, sometimes, you have some app, and give you some exceeding news that you care about that. Right? But keep give your some coming out in this file. And also in your mail, so every day you get lots of spam email. Right? So, you can also detect that. Nothing is about personalized tutoring. We also can discover new knowledge from large database. This is really about the data mining part. For example, about the market basket analysis. And about the medical text mining to get some most common past experience, or whether you have some diseases, some kind of information, some drugs you take. Right? So, that can give you personal recommendation for that.",
		"week": 1,
		"page": 46
	},
	{
		"transcript": "So, why Machine Learning is necessary? So, learning is the hallmark of intelligence. So, many would argue that a system that cannot learn is not intelligent. So, actually, without learning, everything is new, right? A system that cannot learn is not efficient because it reloads each solution and repeatedly makes the same mistakes. So, why is the learning possible? Because there are regularities in the world. You can find some common patterns between a lot of them. We have a data problem. Right?",
		"week": 1,
		"page": 47
	},
	{
		"transcript": "You will try to use Machine Learning. For example, in the speech recognition. For example, you'll use Siri and ask her to do something for you. Right? To customize, to find something for you like in the speech recognition.",
		"week": 1,
		"page": 48
	},
	{
		"transcript": "And also, in the visual recognition with Machine Learning to try to recognize whether this is a dog or whether it's a cat. Okay.",
		"week": 1,
		"page": 49
	},
	{
		"transcript": "And also, about the face detection to recognize where in the face, again, those kinds of bounding box. Right? And also, about the expression recognition of whether you are happy or whether you are sad, right? We have some different things.",
		"week": 1,
		"page": 50
	},
	{
		"transcript": "And also, we can recognize the handwritten digits. For example, this kind of very weird. Right? It is weird. Right?",
		"week": 1,
		"page": 51
	},
	{
		"transcript": "And also, some models are customized, as I've said before. For example, the personalized medicine, the personalized recommendation, like a home assistant, they are uniquely, and we are uniquely. Everybody is a unique person. Right? We have lots of human races. Right? So, that in the future, the personalized stuff will be very important for all of us. Models are based on a huge amount of data sets that you guys already mentioned that. For example, like genomics. Like a stock price prediction.",
		"week": 1,
		"page": 52
	},
	{
		"transcript": "And also, like, self-driving cars care about autonomous driving. Right? So, this is all about some bigger data stuff.",
		"week": 1,
		"page": 53
	},
	{
		"transcript": "And even we can use Machine Learning to help us explore something that not exist. For example, the navigation task because our human has never been there before, right? Who can use some robot machine help us be explored first. Right?",
		"week": 1,
		"page": 54
	},
	{
		"transcript": "You care about the human capacity to be augmented. Maybe use Machine Learning tools. This is whether, oh, this part is really the corpus callosum. Remember my previous slide, this part is really about the corpus callosum. This part, this part. So, this part is actually related to memory. Now, that you will have some kind of increase so in parts of it. Let's say in the future, we will find those parts if they shrink, you might have some problem with that. Okay.",
		"week": 1,
		"page": 55
	},
	{
		"transcript": "Another trend is about why Machine Learning models are so popular. Right? Because there are so many places that we needed to use Machine Learning. For example, in the medical images that I mentioned before, in the speech recognition, and even in the robotics. And that, especially in that computer vision field, like the personal identification, the activity recognitions, some object detection, and the autonomous driving. And then also there's another key reason that we wanna use Machine Learning as we want to include some existing Machine Learning models. Right? And also, there are availability of large volumes of datasets, and we want to make a sense of data. So, nowadays, it's very easy to get a lot of data sets. Right? There's a lot of images from your phone. But do you want to segment your images on your phone? Do you want to do that? Then you find an object in your phone image. No one wants to do that. It's not necessary. Right? So, in your data set, if you can't do label it, there is no sense in this data. And also, that CRM custom customized software. For example, the speech recognition, software or spam filter, color detector, and all of those part that so we want to use Machine Learning, and this is the key reason why Machine Learning nowadays is so popular and important.",
		"week": 1,
		"page": 56
	},
	{
		"transcript": "And also, there are lots of related disciplines. For example, it is directly related to the AI. I think, you guys, we have another class for the Artificial Intelligence, probably, I will teach it next semester. It depends on whether it is we have a lot, we have more professors become my colleagues, but anyway, you guys need to take this class. And probably in the future, you need to take another class, called Reinforcement Learning. That is close to this Artificial Intelligence. Another discipline called Data Mining, and all of you guys are familiar with that, and about the probability and the statistics, information theory, and numerical optimization, the computational complexity theory, and control theory, psychology, neurobiology, linguistics, and the philosophy. All those different disciplines that, remember, need the Machine Learning algorithm to have us.",
		"week": 1,
		"page": 57
	},
	{
		"transcript": "So, now I want to talk about the taxonomy of Machine Learning. We typically have around this kind of 4 different aspects. Like the Supervised Learning, the Unsupervised Learning, the Semi-supervised Learning, and the Reinforcement Learning, another category of Machine Learning. For the Supervised Learning, we will use labeled data set. Right? And Unsupervised Learning, just discover patterns in unlabeled data set. There are no labels for data set. And for the Semi-supervised Learning, you will get trend of a small portion of your labels for data set. But for the Reinforcement Learning, we will not talk about labels or no labels, but we will care about how did you act based on the feedback or co-called reward from your environment. Like, for example, the play GO, here.",
		"week": 1,
		"page": 58
	},
	{
		"transcript": "Is this slide is more about, it's just classified into the three. And in the previous slide, we had Semi-supervised, another kind between these ones. Other majority, we have these 3 different categories. For example, in the Supervised Learning, we will have our typically known tasks like Classification, Regression, and a Ranking problem. For the Unsupervised Learning, we will have, like, the Clustering, the Dimensionality Reduction, the Unsupervised Density Estimation. And the lastly about the Reinforcement Learning. So, after Reinforcement Learning, firstly, doesn't use labeled unlabeled data in the traditional sense. In the Reinforcement Learning, an agent learns via its interactions with an environment, so-called feedback-driven policy learning. So, we will care about its feedback from the interactions between your environment. And there are also, let me come out with any message that I need to mention, let's say, the Semi-supervised learning that we've already mentioned. And we have Active Learning. We have Transfer Learning. We have the Multitask Learning. We have, like, Imitation Learning. So here, a kind of related to the Reinforcement Learning. And we have Few-Shot Learning in nowadays, and I don't know whether some of you have heard about that or not. And even we have the Zero-Shot Learning in Machine Learning. We probably have no labels or data set but we still can predict them, so-called the Zero-Shot Learning. This is a kind of fancying learning algorithms, but we'll not cover in this class. You probably will see it in your future classes.",
		"week": 1,
		"page": 59
	},
	{
		"transcript": "So, next thing is about the details of Supervised Learning. For example, we have numerical classifier functions, like linear classifier, the perceptron, especially about logistic regression. I think, all you should know about from your first semester, right, about this logistic regression, about the support vector machines (SVM), and also about the neural networks. So, all of those are numerical classifier functions, and you will have some parametric functions, parametric or probabilistic. Specifically, they are related to some probability kink of function, like Naive Bayes discriminator, Gaussian discriminant analysis the GDA, the HMN, the hidden Markov models, the probabilistic graphical models. And we have non-parametric models. So, this is related to some instance-based functions. For the non-parametric models, they need just that those models very depend on data set. They don't care about some kind of parameters. For example, the KNN the k-nearest neighbors. It cares about its nearby instance, right? The kernel regression, and also similar to kernel density estimation, some local regression. And we have, we have the symbolic functions, like the decision trees, the classification, the regression trees. Right? Decision trees for as I can apply for this period to the task list. And we have the ensemble learning, like the bagging, the boosting as the Adaboost and random forest. For majority of those kinds of methods, we will cover the rest of the semester, you'll see about that.",
		"week": 1,
		"page": 60
	},
	{
		"transcript": "What about another category is Unsupervised Learning, like categories and techniques. For example, Clustering, the k-means clustering, the Mean-shift clustering, the Spectral clustering. The Density estimation function, like GMM the Gaussian mixture model, the Graphical model. And the data dimensionality, the Dimensionality reduction method, like the PCA, like Factor analysis. So, all of those are some Unsupervised Learning.",
		"week": 1,
		"page": 61
	},
	{
		"transcript": "Professor: Now, let's try to talk some framework of existing Supervised Learning and Unsupervised Learning. You know about Reinforcement Learning. Right? So, given a bunch of images of training data set, labeled data set, let's find these images like in the box, the cat. After we used some kind of feature extraction, and with its labels, we will try to train some Machine Learning algorithms. And after that, we can try a good predictor to detect whether it's cat or whether it's dog. Right? So then, keeping any test image. Also, after feature extraction, we can get some predicted labels. Right? However, why important the process is called feature extraction. What does that mean? And here, what is feature extraction? Student 1: Taking the specific qualities of that content, but we are giving those labels. Professor: Yes. Any other thoughts about feature extraction? Student 2: We have some data, we have some information, but we're using some methods. We can get some more information from the data, some additional information. Professor: Yes. It can be yes, exact! Specifically, more about the feature extraction is like some kind of method to extract some key features from data. So, here, it is images. The key features from images. For example, those cats, if you want to extract some corners, some conture information, some boundary information. So, those are so-called the super power features that we can extract. But, in our machine learning class, we will not talk about how to extract features. But in our another different learning class, we will talk about how to extract those deep features or in the traditional features. I think, maybe all you, guys, should take that Deep Learning class. Right? I guess, you've already registered. Right? You already did that. Yeah? Last semester. Yeah. But again, for the feature extraction, you guys will learn in tomorrow's class. Okay. So, later you will get more sensitive of it.",
		"week": 1,
		"page": 62
	},
	{
		"transcript": "Another task about the Unsupervised Learning. What role for clustering? For example, in this case, you have no labels about the images.  But here, previously, you had also those cats, so this is called labels. Right? In this case, you have no labels. You just have images. Right? After you do feature extraction, and can get this kind of one-dimensional vector for each image, and also you try to train some machine learning algorithm. You have, like, these different clusters. So, this is really based on some clustery method. Right? For example, that like some KNN, k-nearest neighbor. You will probably choose, the given the K is equal to 1, you will definitely choose the most of closed samples as in the same category. So, for example, if these two cats are very close to each other, you say, you're thinking they should be in 1 category right, and you can put it here. But if you find this cat and this dog, they are different from each other, like distance between these 3 images is big. So definitely, you need a support into 2 different classes. Right? So eventually, you can't get those two different classes. That is co-called Unsupervised Learning.",
		"week": 1,
		"page": 63
	},
	{
		"transcript": "Lastly, I want to briefly mention about Reinforcement Learning. So actually, this is about overall framework of Reinforcement Learning. As you can see here, you'll probably have your environment state. You have several states for that state S. If you try move, so which state. And for example, you will play this little game, you have some kind of observations whether you can jump, whether you can feed something, whether you can eat something. Right? And you will get some reward, so rewarding typically about your score. So, if you can jump some obstacles, you will get a high score, right? So that is so-called reward in this case. The action, action doing, in this case, is maybe just about to move forward, move back, or jump, right? Those support that 4 different actions that you can perform in this task. And out there, you have some agent state. So, after you perform a kind of action, you will jump to another state. For example, if you take action for walk, you can move to that forward step, right? You make some reward; you'll get some score or you'll lose score. So that's probably reward here. But anyway, you guys will learn more details about that in the AI, Artificial Intelligence course or Reinforcement Learning class. And specifically, for one student who says that he's interested in gaming, this is very important for you, these two classes. The AI and this Reinforcement Learning. But sometimes, usually for this AI or Reinforcement Learning, for the homework, you guys have some kind of gap, to place some gap, whether you can win or not.",
		"week": 1,
		"page": 64
	},
	{
		"transcript": "And also, this is about the traditional flow work for the classification. And this is exactly we need to learn in this class. So, in this class, we'll only utilize a kind of traditional machine learning models. For example, I like the Decision Tree, the SVM, the KNN, the MLPs, the Naive Bayes. So, those all of those traditional methods. And that this is the problem, something called the feature extraction that I've mentioned before. For example, you will try to extract the SIFT feature, the HoG feature, SURF features. So, in the tomorrow's class, we will more care about the feature extraction model.",
		"week": 1,
		"page": 65
	},
	{
		"transcript": "And here's about lots of machine learning algorithms. For example, by the Numerical functions, we have linear regression, numerical neural networks, support vector machine. And the Symbolic functions, we have Decision trees, propositional logic, rules for first-order predicate logic. And we have for the Instance-based functions, we have k-nearest-neighbor and the case-based reasoning. And we have for the Probabilistic Graphical Models, we will talk about Naive Bayes, and Bayesian networks, the HMM, and even about Markov network. So, this is about awesome kind of machine learning algorithms, but again due to the limit time in the fall semester, we won't able to cover all the algorithms. But I will emphasize some very significant one, and some, someone I will ask you to do for your future interview, those algorithms.",
		"week": 1,
		"page": 66
	},
	{
		"transcript": "So then, we will move to the application field.",
		"week": 1,
		"page": 67
	},
	{
		"transcript": "For example, this is very about the medical disease diagnosis.  In the left, for about this image.  Any idea about this image?  Yes.  Actually, an x-ray of your lung units. Right? So, in this case, you can diagnose whether you have Covid or not. So, there are already a lot of publications that talk about whether diagnose whether you have or not from x-ray images.",
		"week": 1,
		"page": 68
	},
	{
		"transcript": "And we also have this person identification. So, give your face images while I try to detect where are your eyes, where is your nose, where is your mouth. Right? It's funny areas. Right? It's really about person identification. So, for your iPhone, then very we'll use those kinds of important points to unlock it.",
		"week": 1,
		"page": 69
	},
	{
		"transcript": "And lastly, it's about the biometric, about using the fingerprint. So, actually before we use that kind of squeeze to unlock home using your finger. Right? In the early world, at Windows like 2006 or something like that. And then a world, you will use your finger print to unlock your home. Right? Is that true?",
		"week": 1,
		"page": 70
	},
	{
		"transcript": "And even we can try to analyze your posture, I mean this kind. In the left hand is about a human and the right hand just tries to show a posture.",
		"week": 1,
		"page": 71
	},
	{
		"transcript": "And we also have another semantic recommendation about lab aids, just images. On the right hand, just a couple of some labels of these different objects like the cars, the roads, the trees. Right? All different kinds of labels, yes?",
		"week": 1,
		"page": 72
	},
	{
		"transcript": "Also, there is another one about the medical image segmentation. So, the left one just is one MRI image. So, left hand, we try to segment this white matter of perimeter of it. That is the blue color. The center has the yellow color and the red color here.",
		"week": 1,
		"page": 73
	},
	{
		"transcript": "Now, also, for those care about the stock. So, this is about the stock price prediction. Albeit. Right? I can also use Machine Learning to do that.",
		"week": 1,
		"page": 74
	},
	{
		"transcript": "And also, there are lots of revolution in the robotics nowadays. Right?",
		"week": 1,
		"page": 75
	},
	{
		"transcript": "So, there are lots of different robotics use the machine learning. To for example, there are several areas that we can use the robots. Like industry robots, the military, the governments, and the space exploration robots, service robot from home, the healthcare, electric. So, why are the robots used? Because some tasks, it is very dangerous for human beings. Right? And there's some repetitive tasks for some tasking you will repeatedly do it. So, human is not able to do it. And another way is by high precision tasks. All those who require high quality, like to make some GPUs. Definitely, you need a machine instead of human. Is that right? And even to save your time. And the control technologies. For example, autonomous driving, also like another thing about remote control. Right?",
		"week": 1,
		"page": 76
	},
	{
		"transcript": "So, here's about several frequently used the robotics in the industry like the painting, the cutting, some assembling, some material handling, some like packaging, machine loading, all kinds of different robotics. They have some machine learning algorithm inside. For example, like packaging, the first need is to recognize objects. So, then you can package those objects.",
		"week": 1,
		"page": 77
	},
	{
		"transcript": "And this is the users for robotics in an inventory of manufacturing like the automotive and also about is this packaging staff.",
		"week": 1,
		"page": 78
	},
	{
		"transcript": "So, here's just about some automotive kind of machine here.",
		"week": 1,
		"page": 79
	},
	{
		"transcript": "And also, there are other kinds of military or government robots as 'iRobot PackBot' a kind of bot, and the 'Remotec Andros' about those different machines.",
		"week": 1,
		"page": 80
	},
	{
		"transcript": "And even about soldiers in a kind of world, they try to use some robot, do that. And even now this, they are famous. So, a kind of them that are still that are working in Ukraine. Probably you heard about that, they use drones, like, trained to do that. Right?",
		"week": 1,
		"page": 81
	},
	{
		"transcript": "A soldier robot throws some bombs to human being. So, this is like, I'd say like the UAV, the aerial drones. And also, about the military suit. All about this case try to do some detection some problem of it.",
		"week": 1,
		"page": 82
	},
	{
		"transcript": "And also, you know about the space robot that I mentioned before to try to explore the Mars. Right?",
		"week": 1,
		"page": 83
	},
	{
		"transcript": "And also, there are lots of other service robots. You maybe have it at home or in the office, by cleaning and housekeeping. By others, so, many inspections, blah blah, there are some kind of robots you might have already seen that. However, for each robot, there are lots of machine learning algorithms, a kind of. Like for this kind of cleaning robot, that has a sensor to present how to decide what is distance between different objects. Right? Definitely, you want to avoid some objects at home, you do not want to break it. Either to break the object or to break the robot itself. What about this cleaner? The algorithm in this area is just very similar. It just only needed to get a sense of distance. Right?",
		"week": 1,
		"page": 84
	},
	{
		"transcript": "And then, many medical and healthcare applications. So, nowadays, there is more and more applications that have been heavily applied in the medical field. Like you see. Once you tried with a hospital, it was a lot of machines, which catch it with you. Right? Here is about your heart rate or other kind of measurement. All of them are machines, right?",
		"week": 1,
		"page": 85
	},
	{
		"transcript": "And also, we have some laboratory applications like the drug discovery, a test tube sorting. So, all, about can be some useful to us in a laboratory.",
		"week": 1,
		"page": 86
	},
	{
		"transcript": "And this is the famous sentence from Bill Gates that 'A Breakthrough in Machine Learning will be worth ten Microsofts'. Is that true? I think, right?",
		"week": 1,
		"page": 87
	},
	{
		"transcript": "I guess, this many the most content that we have today. So next, probably I will talk some kind of potential work you guys can do when you try to finish this course, a typical street kind of open job.",
		"week": 1,
		"page": 88
	},
	{
		"transcript": "And you, you definitely have more chance to get these three that I list. For example, the Artificial Intelligence engineering, some Machine Learning engineering, some Data analyst, all those kinds of job that you guys can try to apply. But again, you know, first of all, in the view, you guys definitely need to learn about the coding stuff. That's all about basically about Machine Learning. Questions? Right? What is Supervised Learning? What is Unsupervised Learning? That's a very easy question. They'll ask you; how do you prevent the overfitting? How do you implement the KNN stuff like that? For example, you guys have such a lot of those questions you'd like Machine Learning. And then that's the key reason, you guys need to study this course carefully, because it'll directly affect your future. Hopefully, guys you can learn a lot from this class. What is next?",
		"week": 1,
		"page": 89
	},
	{
		"transcript": "Next, actually, I have the first homework for you guys. The first homework is very easy. Right? It's just about, asking about thinking about; What is machine learning and what is the future of machine learning? Easy, right? Remember, use your own sentence. Okay? Because I have another task for you guys. That you guys probably heard about ChatGPT. Right? That's perfect. Right? All you guys heard about that. You guys need to try to use ChatGPT. Any of you have already tried that? You tried that? What about you guys? Don't? So, now you guys have chance, officially, revenue in this class. I will require you guys also to provide some answers from ChatGPT. Answers. Okay? So basically, which means that you will upload two files, two text files. Include a question and your answer. For example, your question just; What is Machine Learning and what is the future of Machine Learning? But for that ChatGPT you must modify these questions a little bit. Because it can give you some different answers. You just, you definitely want to get different answers from your classmates. Right? But the case about your own answer, always remember to write your own sentence, because in this time, I will check it, use online, a kind of detection tool, if you have come some sentence a copy from online. You probably have some trouble with that. I think you guys have already covered about academic integrity. During the orientation. Right? So, that is very important. I do not want to say that details of it, but again, try to remember it. Do not copy it from online, do not copy it from your classmates. Okay? It's okay, it's easy. Yes. Yes. Exactly. You needed to upload two text files. Right?",
		"week": 1,
		"page": 90
	},
	{
		"transcript": "So, for example, here is the example from me, from me. And since this is for the example file from ChatGPT. But question; What is machine learning and how machine learning can change the future? And this is the solution that it gives to me. So, it says, Machine Learning is blah, blah, blah, and the Machine learning has the potential to change the future in a number of ways. Some of you might get exactly the same answer. But that's fine. I do not want you guys to modify the answer from the ChatGPT. The case, I want to do that. The one thing that I want to ensure you guys not to copy from online. Especially, now if ChatGPT is very famous, very popular. That already some professor noted that some students use this right at their homework then submit it. So, now I directly want you guys to do that. So, that I can very verify whether it is you or you got a machine. You definitely finally, you after you finish this class, you will not say, well, you cannot beat a machine. Right? You cannot beat the ChatGPT with a good answer. Right? Try to avoid that. Okay? Others. Probably that's about my last slide. I hope you guys have any questions regarded to anything. Okay? Okay?",
		"week": 1,
		"page": 91
	},
	{
		"transcript": "Any more questions? What about our online students? Any questions about you guys? Any question? No? Okay. What about the homework? Otherwise, clear about? Okay. That's good. If not, so then, our class is finished today, and you guys have a good night, and now I hope I'll see more of you next week. Okay? Thank you. Thank you, sir.",
		"week": 1,
		"page": 92
	},
	{
		"transcript": "Let's get started for our today's class. Again, for that 5-piece interview, it doesn't matter if you didn't finish all of it. It's fine. But once you finish the machine learning class, make sure you are able to do it within, like, the 30 or 20 minutes. It is like a real kind of practice of the coding problem from the interview.",
		"week": 2,
		"page": 1
	},
	{
		"transcript": "Professor: So, next, let's go first slide that I bought it. It's about how to find a job in the Machine Learning. I guess, that should be most important part for you guys, right? Of all you want to find a job, right? And that case is about practice and practice. As you guys already did, like, a small interview practice, like, some similar concept. And I don't know whether you guys know about Leetcode. Anyone knows about it? No? For those who didn’t know about this website, you can try to and we can open with advice. This is the real about website that has lots of questions, especially, it contains some interview questions for your guys. Can you see now? So, this is the website of Leetcode. So, after there are lots of, like, questions, like, especially if you are interested in the Python, you guys just look at Python, you can you are interested in other languages, like C, C++ or even Java, there is lots of resources. You can do that. And I think, it should be a good time for you guys to start a bit with it. Especially, and it has lots of interview questions for those top companies, like from Google, from Meta, from Amazon, there are lots of questions, interview questions, to make sure you have time to practice with it, to challenge yourself. I think, you guys might get a similar interview question during your future interview. I guess, here, I like well, lots of questions. You needed to take a run like one year or one year half to fish all of them, but please make sure that you select the most useful questions for you guys. If you target in the future, you're really about to find a job immediately. I highly recommend you guys to start to play with it. Okay. Yes. Oh, for those online students, can you see the screen? Student 1: Yes. Student 2: Yes, professor. Professor: Can you see the screen about the Leetcode? Student 3: No, we only see the slide. Professor: But I think there should be a link in the slide. Right? So, later, to print and make sure you look at it and really start to work on some questions. Okay? So, this is about, I think it should be one major task for you guys in the future, right?",
		"week": 2,
		"page": 2
	},
	{
		"transcript": "Another kind of direction is ready. Probably, one wants to pursue, like a PhD degree, right? And there are definitely several reasons. The first reason like typical you will focus on doing some professional Research, especially you will become a professional researcher here, and then you definitely will practice with some cutting-edge technologies. Some state of art methods. It is not like the main country. It is some of the industry companies they are old. Still are using some techniques around, like, 10 years ago or even 30 years ago. And now, if you really want to pursue the PhD degree, you definitely need to do some state of art methods. And secondly, definitely, if you publish some papers, the publications will be kept forever. Right? So, eventually 180 years later, you can show something to the world. Right? The second reason, definitely, once you get a PhD degree, you can get a much higher salary, this should be true. However, saying that if bachelor students or master students use another 5 years, you'll probably have a similar salary which means that typically for a PhD degree, you need, like, 5 years to get it. But at the beginning salary should be similar to another, like, bachelor students with 5 years of experience. Right? However, for a PhD degree, you definitely have better career prospects. For example, in many companies for master’s students or bachelor’s students, you probably cannot be a manager. But if you hold a PhD degree, you'll probably become a manager. So, that's really about talk about your future career. Like for the final goal, right? And the final destination, right? But to get a PhD degree, you will apply for a PhD degree, you definitely needed to focus on the research. Right? So, this is very important for you guys for those who are interested doing research. And then you want probably, if you still want to apply for a PhD degree. So, if you want to do some research. It generates the funding, and we try to give you some kind of projects for your better experience if you apply for a PhD degree. Okey? So, this is about the best security directions in the future. After this machine, machine learning class, you can do it here.",
		"week": 2,
		"page": 3
	},
	{
		"transcript": "And today, we really want to review some basic math knowledge and about the data the data preprocessing. In the first part, we will really talk about this kind of math knowledge. For example, we will talk about the Linear Algebra, we'll talk about Vectors, Matrices, the Eigen decomposition, and we will talk about the Differential calculus, the Optimization Algorithms, Probability, Random variables, Probability distributions and the Information theory. And those are some basic maths. I believe most of you should remember or notice about that. So, if you join the class, you find some concepts you are ready forgot. At least refreshing your memory, right? You can go to, go to online and good buy it. What are they right now?",
		"week": 2,
		"page": 4
	},
	{
		"transcript": "And the second part is really about the Data Preprocessing, and we will talk about some Data Cleaning, Data Integration, Data Reduction, and Data Transformation and Data Discretization. And something you guys already did in the today's practice question. For example, Data Cleaning like I requested you guys to replace the question marker with a number about so this is really about Data Preprocessing. But unfortunately, we may not able to cover all the topics of the lesson. Let's see which we can get there.",
		"week": 2,
		"page": 5
	},
	{
		"transcript": "So, first, let's do the notation part. And so, for the first several like 6, these should be very easy to remember, and actually you guys should already notice about that. Right? Some integer like a scalar, xyz with the bold-front, lowercase, it is a vector. And ABC, it should be like matrix, and this kind of ABC should be a tensor. So, that we will be also covered. Then, we have random variable XYZ, and we have one element in a set. Right? So, this is about the number of items in set A. And this is the norm of the vector variable. This is the product of u and v. And this is very missed set of real numbers. And this is the real numbers in the dimension of n. And also, this is about a function map from x to the f(X). And here is the function that maps the n dimensional vector to a single scale. Any question about those kinds of notation? Okay? Okay. Great.",
		"week": 2,
		"page": 6
	},
	{
		"transcript": "And we have this one like the circle dot with B is the element wise product of the matrices A and B. And also, we have this A+ here, it has this pseudo-inverse of matrix A. With here, it's about the n-th derivative of function f with respect to x. And here's about this gradient. This is about the Hessian matrix of the function f. X~P is a random variable X has distribution P here. P(X|Y) is already about a probability of X given Y. This N is the normal distribution. And we have this expectation of f(x) with respect to that P(x) here. And then we have the variance of f(X). And here's about covariance. And here's about correlation. And here's about the KL divergence as in this you probably haven't heard not heard about it before. Right? Did anyone hear about this KL divergence before? Not here? That's fine. So, we'll like cover it about what is KL divergence, but it's fine. It's a kind of divergence can minimize the distribution about P and Q. And here is about cross-entropy for distributions P and Q. And this should be an exact formula. Right? There are also about other important notations.Any questions about those notations? No? Okay. That's good. So, basically, about these two slides, we will cover around the majority of notations that we will cover in the pool of machine learning class. If you're thinking about already, you know about these notations, you will be fine in this class.",
		"week": 2,
		"page": 7
	},
	{
		"transcript": "So, let's review about the first part math about vector. So, what is the definition of vector? So, that is, you know, in computer science, vector is a one-dimensional array of ordered real-valued scalars. In the mathematics, the vector is a quantity possessing both magnitude and direction, represented by an arrow indicating the direction, and the length of which is proportional to the magnitude. So, vectors are written in column form or in the row form denoted by this x in this case. So, this is the x, it's equal to 1, 7, 0, 1, and also, we can denote this x using a transpose. Right? Okay. So, for a general form vector with n elements, the vector lies in the n-dimensional space that is x should be what elements in the R, with n dimensions. Alright? As you can see here, so that has n elements here.",
		"week": 2,
		"page": 8
	},
	{
		"transcript": "So, let's see, you see some details of the geometry of vectors. So, for example, the first interpretation of a vector that is a point in 2D space in this case. Right? For example, in 2D space, we can visualize the data points with respect to a coordinate origin. For example, we have like these three kinds of points here. Right? And in the second interpretation of a vector, the direction in space. For example, the vector v is equal to 3 and 2, it's okay. Often, we are writing its transpose at the direction of 3 steps in the right and the 2 steps up as you can see probably here. And there's the notation v, like with the head, is sometimes used to indicate that the vector has a direction. Right? So, all the vectors in the figure, in this case, they have the same direction. What about the vector addition? So, we add the coordinates, and follow the directions given by the two vectors that are added. For example, we have this, this is the sum of these 2 vectors. Right? Any question about it? Good.",
		"week": 2,
		"page": 9
	},
	{
		"transcript": "So, the geometric interpretation of vectors as points in space allow us to consider a training set of input examples in Machine Learning as a collection of points in space. For example, in this particular bunch of points like these points. For example, let's say if you need a classification problem, we really, we want to discover how to separate two clusters of points belonging to different classes. In this left. For example, we end up finding this kind of line. And this line is called what? Student 1: this line is called what? Professor: Any guess about this line? Student 1: Of what? Professor: What? Student 2: The model? Professor: The model? Kind of like a model. So, what about this line? Any other guess? Student 3: Sorry, professor. Could you please, could you, could you please repeat question? Professor: Oh, the question is, so, what do you think about this line? In the Machine Learning, it's another term about this line. Say it again. Student 4: Regression? Professor: Regression? A kind of, but not exactly. Student 5: Classification line? Student 2: Task classification line. Professor: It's a kind of close. So, actually, this line has, I think about, like a hyperplane here, right? So, later we will cover about the hyperplane. There is a plane to separate these two classes. But here, it's not about lines. It's just a kind of a plane. But later, we will cover more details about it, what is a hyperplane, how to separate these two different classes, right? Or, it can improve, it can help to visualize zero-centering and normalization of training data. So, in this case. So, for example, this red is the original data. So, the middle one is the zero-centered data, and the right one is normalized data. What does this zero-centered data mean? Anyone about it what is the zero-centered data? Anyone knows about this meaning of the zero-centered data? What does this mean? You can try to compare about the left, this one and this one. You see any changes between this blue one and the green one? Student 6: In the center, the data is close to the zero. Professor: Yes, you have a good catch about that. So, basically, the zero-centered data, the mean of the data is equal to 0. So, that you can see that. This data is shaped to the center that is so called zero-center. What about normalize for that listening? Student 3: And I think. Professor: Kind of like that. Sure. You want to, like, convert your data to some kind of skill. Right? Why do you want to do normalization? Why do you want to do that? Student 2: Because we have outliers. Professor: Outliers? Student 2: Outliers, prevent from our data. Professor: A kind of. What about another guess? Why we want to do that? Yes, something like that. It's better. Okay. So, the reason we want to normalization is that we want to unify our data in some scale. For example, we will typically, we try to normalize our data between minus 1 and 1, right? So, that you can see the majority of data set. And another case, it is useful for your Machine Learning, particularly in that. The normalized data you probably use less time to change, right? Because, think about it, if you input the original data, the scale of your data set can be wide, right? It can be very big. However, you can use, you use the normalized data. So, in that case, you will adjust the data set, concentrate with each other, rights? So, that you will have less time to train your model. That is another advantage to this normalized data. Okay.",
		"week": 2,
		"page": 10
	},
	{
		"transcript": "Let's continue, the dot product and the angles. So, the dot product of vectors that is donated in this equation like u times with v and that is u transpose with v. And basically, this sum of all the elements. Right? It is also referred to as inner product, or scalar product of vectors. The dot product u times v is often denoted by u and v using this kind of brackets here. The dot, dot is a symmetric operation. This means that u times which v is equal to u transpose with v is that it's equal to v transpose with u, and also is equal to v times with you. Right? So, this already means about the symmetric operation. The geometric interpretation of the dot product; angle between 2 vectors. So, you're investing, this is about 2 different points, and here, a theta is just, just the angle between these 2 vectors. Right? And also, we can calculate by the dot product of v, the dot thought of this value that is using this equation based about what, what is this? The norm. Right? This is the norm of u and v times to the cosine theta. And also, the cosine theta is calculated by this equation, right, u dot with v over these two norms, the production of this. So, if 2 vectors orthogonal, which means the theta is just equal to 90. That cosine theta is equal to 0, then we can u times with b, that is equal to 0. Also, in the Machine Learning that cosine theta is very important. Because, sometimes it just means the cosine similarity so that we can measure the similarity between two vectors. For example, in the NLP, giving you 2 different entities, like 2 different texts. You want to calculate how similar of these two taxes where you want to calculate the cosine. So, now, another case of it, computer vision of artificial learning like give you three images, you want to measure how similar are they. So, also, you can calculate the cosine theta of these three images. So, that you have an idea of how similar of these three images. Right?",
		"week": 2,
		"page": 11
	},
	{
		"transcript": "Our vector norm is a function that maps a vector to a scalar value. So, the norm is the measure of the size of the vector. The norm of f should satisfy the following properties. For example, about the scaling, about the triangle inequality, and it must be non-negative. So, which means the fx should be bigger or equal to 0. So, generally, we have this l_p norm of a vector x is obtained as. So, in the next page we will really talk about the p value from one to two through to infinity.",
		"week": 2,
		"page": 12
	},
	{
		"transcript": "And then if the p is equal to 2, which means that we have the l2 here, also called the Euclidean norm. As you can see in this equation. So, it is the most frequently used norm. So, l2 norm is often denoted just as the norm of x with the subscript 2 omitted there. So, typically, we will try to omit this too. Just to use this, denote this as a norm. If p is equal to 1, so we will call it as l1 norm. And they use the absolute value of the elements, and we can discriminate between zero and non-zero elements. So, actually, in the future, especially about some regression problem, you probably will use l2 norm or l1 norm, to try optimize them or your models. Let's say p is equal to the infinity. So, we have l∞ norm. So, it's known as infinity norm here or maximum norm, as you can see in this screen. And we will output the absolute value of the largest element. However, if p is equal to 0, some of you might have this kind of question. So, really, we cannot say it is like the zero norm. Is not a norm at all as you can notice. Right? Any questions? No questions? Good.",
		"week": 2,
		"page": 13
	},
	{
		"transcript": "Let's continue. What about the vector projection? So, the orthogonal projection of a vector y onto vector x. So, the projection can take place in any space of dimensions that is bigger or equal to 2. So, the unit vector, which means that in the direction of x that is denoted in this way. So, typically the length of the unit vector is equal to 1. Right? And the length of the project of y onto the x is denoted in this screen that is the y norm, the norm of y times cosine theta. And the orthogonal projection is the vector that we can denote in the different and specific formula right here.",
		"week": 2,
		"page": 14
	},
	{
		"transcript": "So, now, really, let's go back to what is the hyperplane that I previously just mentioned. So, a hyperplane is a subspace whose dimension is one less than that of its ambient space. For example, we have 2D space. I have a hyperplane used as a straight line that is 1D. For example, in this case, because this is about a 2D space. So, a hyperplane is just a line. Right? In 3D, so, our hyperplane is a plan. So, typically, it's like a surface. As you can see in this example. So, this is 3D, and our hyperplane is really about a surface. Right? In a d-dimensional vector space, a hyperplane has 𝑑 − 1 dimensions, and divides the space into two halves of space. Now hyperplane is a generalization and a concept of training in high dimensional space. As you already have noticed that. In Machine Learning happens, you see boundaries. You use them for the linear classification as you can see in these examples. Data points falling in either side of the hyperplane are attributed to different classes. For example, if you are in the left, it should be one class. If you are in the right of the hyperplane, it should be another class. Right?",
		"week": 2,
		"page": 15
	},
	{
		"transcript": "So, now let's see the details about these examples in the hyperplanes. For example, for a given data point, that is w quals to 2, 1. So, there is 2 and 1 here. This is a vector here. We can use the dot product to find a hyperplane for which there is w dot v is equal to 1. So, it's very, in this case, it's about 1. Right? So, that if you say all vectors, with w times with v that is even bigger than 1 can be classified as one class. So, this part. And all vectors that is less than 1 can be classified as another class, and this is typical about our classification problem. If we want to solve in the w dot b, that is equal to 1, we will obtain this kind of equation, right, but eventually, we will get the norm of v, the cosine theta that is equal to 1 over square root of 5. That is, to say, the solution is the set of the points which w dot v is equal to 1 meaning the points lay on the line that is orthogonal to the vector w. So, it has a typical symmetry in this case. And that is the line 2 of x plus y, that is equal to 1. And the orthogonal projection of v onto w, that is a norm of v, the cosine theta that equals to this 1 over a square root of 5. And this is really about hyperplanes. Right?",
		"week": 2,
		"page": 16
	},
	{
		"transcript": "And the previous this example, just in the 2D space. So, what about in the 3D space, and it should be very similar as before. But in this case, definitely, we have, like, the 3 different directions, that is 1, 2, 3 in the 3D space, and try to find all points that satisfy this kind of w, w dot with v that is equal to 1. We can obtain a plane that is orthogonal to the vector w. And you should satisfy these two kinds of options, and also in that case of that hyperplane. This is about really about the hyperplane into that surface that can satisfy the v times with w equal to 1. And then here, it's bigger than 1, and here's less than 1, that means two different classes. Right? For higher dimensions, this should be very similar to these 2 cases. Right? 2D or 3D, I imagine that more dimensions will be very similar to these two cases.",
		"week": 2,
		"page": 17
	},
	{
		"transcript": "So, next what we want to reveal about the metrics. So, a matrix is a rectangular array of real-valued scalars arranged in m horizontal rows and n vertical columns So, each element aij belongs to i-th row and j-th column. And the elements are denoted aij or capital Aij or these two. So, basically, these are about all elements in the matrix A. On the matrix A, it has the size of m by n. Right? So, the size or dimensions is m by n or like maybe this description. So, matrices are denoted by bold-font upper-case letters.",
		"week": 2,
		"page": 18
	},
	{
		"transcript": "Professor: What about the operations in the matrix? For example, addition or also about the subtraction. So, what are the answers for these few operations, these operations? These two matrices? What are your answers for it? What is answer here? Student 1: For addition? Professor: That's correct. That's always correct. What about the scalar multiplication? It's just like we can pull this to stay out of all the metrics. What about this number? Student 2: You need to pass the value to the right. Professor: So, what about the matrix multiplication? It's A row elements try to multiply with column elements of B matrix. What about the answer for this one? Yes. Two by two matrix. What is the final answer for it? So, this is gonna be fine. I guess, you should have noticed about simple operations of matrix. It's good.",
		"week": 2,
		"page": 19
	},
	{
		"transcript": "What about transpose of the matrix? So, A with T, it's transpose, has the rows and columns exchanged. Right? So, this is the transpose of this matrix, should be equal to this one. Right? There are also some other properties such as A plus B is equal to B plus A. So, A + B with its transpose should be equal to A transpose plus B transpose. And the A transpose of with transpose should be equal to A. And, there is more properties, right? A times with B plus C, it should be very easy. What about the square matrix? That have the same number of rows and columns. We will call it about square matrix. What about the identity matrix? It means we have the ones on the main diagonal from other elements zeros. Right? So, we will call this as identity matrix of size 3 by 3.",
		"week": 2,
		"page": 20
	},
	{
		"transcript": "What about the determinant of the matrix? So, denoted by det(A). For example, for a matrix of size 2 by 2, the determinate can calculate ad minus with bc. Right? And for the larger-size matrices, the determinant of a matrix is calculated by this equation. Right? So, here, in this equation. So, Aij is a minor of the matrix obtained by removing the row and column associated with the indices i and j. What about the trace of a matrix that is the sun of all diagonal elements. Right? So, you have a sum of aii, i.e., diagonal elements. It's a trace of a matrix. A matrix for which A is equal to A transpose is called a symmetric matrix.",
		"week": 2,
		"page": 21
	},
	{
		"transcript": "The elementwise multiplication of two matrices A and B is called the elementwise product. The math notation is a circuit dot. A circuit dot with B is a11b11, basically it means each element has multiplication there.",
		"week": 2,
		"page": 22
	},
	{
		"transcript": "What about the matrix-vector products? So, you can see that matrix with the size m n, and a vector x with n real dimensions. So, the matrix can be written in terms of its row vectors. That is a1 with its transpose is the first row. Actually, you can see the a1T here. Just another kind of row vector. Right? So, that we have donated this a here, in this row. So, in each vector aiT has the size of m which means that each row will have like m elements. So, eventually, m elements. So, the matrix-vector product is the column vector of length m, whose i-th element is the dot product aiTx. For example, we want to find matrix A times with x. Basically, we will get product ax for each of their element. Right? So, notice the size of A, m by n, for x size is n by 1. Eventually, Ax has the size of m by 1.",
		"week": 2,
		"page": 23
	},
	{
		"transcript": "What about the dot product of two matrices, A and B? If they have a different size, definitely we need to make sure that this k is equal to the other one. Right? Otherwise, we will have some errors. So, eventually, we can consider the matrix-matrix product as dot-products of rows in A and columns in B. So, eventually, we can see the detail elements. And, eventually, we can find the size of n by m. The size A times with B, it's a different matrix.",
		"week": 2,
		"page": 24
	},
	{
		"transcript": "And also, we will talk about this linear dependence. For the following matrix that is B is equal to 2, 4, -1, -2. Those are set up for two columns, b1 will be 2 and 4, right, with its transpose. And b2 that is -1, -2 with its transpose. We can write b1 is equal to -2 times with b2. Right? Good? This means that the two columns are linearly dependent. If you already can write two columns, a column times with another kind of member that is a measure column. We will say these two numbers are linearly dependent. For the weighted sum that is a1, v1 plus like a2, v2 refer to as a linear combination of the vectors b1 and b2. In this case, a linear combination of the two vectors exists for which b1 plus 2 times with b2 that is equal to 0. So, that is the linear combination of the vectors. Got it? So, a collection of vectors v1, v2, to vk are linearly dependent if there exist coefficients like a1, a2, to ak that we also notice that not all equal to zero to that. Which means that the sum of ai times with vi that is 0. So, we say they are linear dependent. If there is no linear dependence, the vectors are linearly independent. Right? Any question about this linear dependent? No? Okay.",
		"week": 2,
		"page": 25
	},
	{
		"transcript": "Let's go to another case. What about matrix rank? For an n by m matrix, the rank of the matrix is the largest number of linearly independent columns. The largest number of linearly independent columns. Right? The matrix B from the previous example has a rank that is equal to 1. These two columns are linearly dependent. Right? So, we say this is the rank of B equals to 1 here. The matrix C below has a rank of C that is equal to 2, since it has too many independent columns. Good?",
		"week": 2,
		"page": 26
	},
	{
		"transcript": "For example, we wanna talk about the inverse metrics. For a square nxn matrix A with rank of n. So, A with the power of minus 1 is its inverse matrix if their product is identity matrix I. Let's say the A to the minus 1 times A that is equal to the identity I. Then with a power of minus 1 times A that is equal to I. So, I here, it's just the identity matrix. So, there are also several properties of an inverse matrix. So, A with inverse of the inverse setting equal to A. So, the inverse of the product of AB is equal to the inverse of B times with the inverse of A. And also, if the determinant of A is equal to zero, then the inverse does not exist. So, a matrix that is not invertible is called a singular matrix. So, note that finding an inverse of a large matrix is computationally expensive. In addition, it can lead to numerical instability. If the inverse of a matrix is equal to its transpose, the matrix is said to be orthogonal matrix. As you can see.",
		"week": 2,
		"page": 27
	},
	{
		"transcript": "And we also have the pseudo inverse of a matrix. So, the pseudo inverse of a matrix is also known as Moore-Penrose pseudo-inverse. For matrices, matrices that are not square, or the inverse does not exist. Therefore, a pseudo-inverse is used. If m is bigger than m, then the pseudo-inverse is the A plus that is included this term and also satisfy this product. If m is smaller than n, then pseudo-inverse is also included this term. For example, for a matrix with dimension X 2 by 3, a pseudo-inverse can be found of size 3 by 2, so this satisfies the identity of 2 by 2 matrix.",
		"week": 2,
		"page": 28
	},
	{
		"transcript": "Another title is tensors. Some of you may be familiar with PyTorch. PyTorch works with this kind of tensors. So, tensors are n-dimensional arrays of scalars. Vectors are first-order tensors. And matrices are second-order tensors, but in this case, we have a fourth-order tensor that is denoted in this way. Right? For tensors are denoted with upper-case letters of a special font face as you can see. Let's say, in Deep Learning, we will unit a bunch of images. Right? As a sort of column tensors. You might have three channels, 3-dimnesional arrays. And the 3 axes correspond to width, height, and channel. For example, we have 224 by 224 by 3. So, we have three-dimensional tensors. So, the channel axis corresponds to the color channels. For examples, those three here, right? Any question about tensors? No?",
		"week": 2,
		"page": 29
	},
	{
		"transcript": "What about Manifolds? Earlier we learned that hyperplanes generalize the concept of planes in high-dimensional spaces. Similarly, manifolds can be informally imagined as generalization of the concept of surfaces in high-dimensional spaces. To begin with an intuitive explanation, the surface of the Earth is an example of a two-dimensional manifold embedded in a three-dimensional space. This is true because the Earth looks locally flat, let's say we choose minimum space which looks flat. Right? So, on a small scale it is like a 2-D plane. However, if we keep walking on the Earth in one direction, we will eventually go back to the same location. Right? So, this means that Earth is not really flat. It looks locally like 2D space, but at large scales it folds up on itself, and has a different global structure than a flat plane. Ok?",
		"week": 2,
		"page": 30
	},
	{
		"transcript": "So, here are just some example, examples of manifolds. Manifolds are studied in mathematics under topological spaces. For example, an n-dimensional manifold is defined as a topological space with the property that each point has a neighborhood that is homeomorphic to the Euclidean space of dimension n. This means that a manifold locally resembles Euclidean space near each point. Let's say if we focus on one point on a manifold, it's like a 3D-space. Informally, a Euclidean space is locally smooth, it does not have holes, edges, or other sudden changes, and it does not have intersecting neighborhoods. Although the manifolds can have very complex structure on a large scale, resemblance of the Euclidean space on a small scale allows to apply standard math concepts. For example, we have 2-dimensional manifolds, this 3D sphere, we have torus, we have double torus, and we have Kleine bottle, here, right? The surfaces in the figure have been conveniently cut up into little rectangles that were glued together. Those small rectangles locally look like flat Euclidean planes where it is placed, again in Euclidean space. And, also for these manifolds some operations are different from our Euclidean space. For example, in Euclidean space, we will use one to one plus one that is two, right? However, in manifold, one plus one cannot be two.",
		"week": 2,
		"page": 31
	},
	{
		"transcript": "There are more examples of one-dimensional manifolds. This figure, a circle is a one-dimensional manifold embedded in 2-D space, where each arc of the circle locally resembles a line of segments. In the lower figures, there are other examples of 1-D manifolds. Note that a number 8 figure is not a manifold because it has an intersection point. It's not Euclidean locally. It is hypothesized that in the real-world, high-dimensional data, such as images, lie on low-dimensional manifolds embedded in the high-dimensional space. For example, in Machine Learning, let's assume we have a training set of images with size 224 by 224 by 3 pixels. Learning an arbitrary function in such high-dimensional space would be intractable. Despite that, all images of the same class, for example, in the cat, might lie on a low-dimensional manifold. This allows function learning and image classification. Right? We will talk about also cat images should be like a close manifold but for we have another case, let's say dog should be a kind of small things.",
		"week": 2,
		"page": 32
	},
	{
		"transcript": "As more examples of manifolds. The data points have 3 dimensions, left figure, this is about 3D dimensions, a 3-dimensional manifold. So, most machine learning algorithms extract lower-dimensional data features that enable to distinguish between various classes of high dimensional input data. For the low-dimensional representations of the input data are called embeddings. Here, for example, we have a neural network, typically about input should be limited as 224 by 224 by 3. By eventually, the output can be like one vector. For example, if you have 1000 classes, one output just for it, 1000 dimensions. Right? You will reduce the dimensions about 224 by 224 by 3. Right? 1000 dimensions. So, in the new space, like 1000, so far, embeddings.",
		"week": 2,
		"page": 33
	},
	{
		"transcript": "We will also review about eigen decomposition. And, for example, eigen decomposition is decomposing a matrix into a set of eigenvalues and eigenvectors. That should be a second kind of reviews. So, this matrix A is so-called eigenvalues, and the v is called eigenvectors here. And also there is a second kind of reviews. And, I have given you guys already a notice on later, the previous class about eigen decomposition. Right?",
		"week": 2,
		"page": 34
	},
	{
		"transcript": "And here is more details eigen decomposition. For example, if all eigenvalues are positive, the matrix is positive definite. If all eigenvalues are positive or zero-valued, the matrix is positive semidefinite. And, if all eigenvalues are negative or zero-values, the matrix is negative semidefinite. So, the eigen decomposition can also simplify many linear-algebraic computations. For example, about this determinant of the A can denoted as lambda 1 times lambda 2 times up to lambda n. If any of the eigenvalues are zero, the matrix is singular. It means, it does not have an inverse. So, however, not every matrix can be decomposed into eigenvalues and eigenvectors. Also, in some cases the decomposition may involve complex numbers. And something not too interesting. Still, every real symmetric matrix is guaranteed to have an eigen decomposition according to this kind of formula, where V is an orthogonal matrix.",
		"week": 2,
		"page": 35
	},
	{
		"transcript": "And similarly, you've seen more details about the eigen decomposition. Geometric interpretation of the eigenvalues and eigenvectors is that they allow to stretch the space in specific directions. For example, in these two cases, if we have eigen values and vectors, we have to say both different. V1 and v2 have a matrix, where the two vectors are unit vectors. That is, they have a length of 1. The vectors v1 and v2 are multiplied with the eigenvalues λ1 and λ2. So, you can see how this space is scaled by in these eigen values. Right? For example, this is used in the dimensionality reduction in the PCA. Already, we need to use eigen decomposition to reduce dimensionality. And, later, we actually another week, we will talk more about PCA stuff. I've noticed you guys have used PCA previously. Right? We will reveal about PCA together later. If you have questions about this part already, in our machine learning class, we will talk about this stuff.",
		"week": 2,
		"page": 36
	},
	{
		"transcript": "And here is another case about the singular value decomposition. For this very close-similar to the previous one. Right? I'll skip of this part.",
		"week": 2,
		"page": 37
	},
	{
		"transcript": "So next, we will talk about the matrix norms. But first, it's about Frobenius norm. So, it calculates the square-root of the summed squares of the elements of matrix X. And, I'm looking at the formula you should be familiar with this Euclidean form. Now, right? Euclidean norm, typically, we have to think about, it is like L norm. Spectral norm is the largest singular value of matrix X. Denoted as this equation. And the singular values of X are σ1, σ2, until σm. L 2, 1 norm is the sum of the Euclidean norms of the columns of matrix X. Max norm is the largest element of matrix X. Any question? Good.",
		"week": 2,
		"page": 38
	},
	{
		"transcript": "So next, we want to talk about the differential calculus. Also, it's very important number for you guys to try to calculate the gradient, some questions. We will review it later with neural networks. For example, you have a function f that a map from the R to R, the derivative of f is defined as this question. Right? Is this correct? What means this h should be very small, right? Very close to zero. That is almost zero. Let's say if the f prime exists, f is said to be differentiable. If f prime c is differentiable for c is between a and b, then f is differentiable on this interval. Right? A and b. Also, we can interpret for the derivative f prime as the instantaneous rate of change of fx with respect to x. That is for a small change in x, what is the rate of change of fx. So, given y is equal to fx, where x is an independent variable and y is a dependent variable, the following expressions are equivalent. Especially, try to calculate the first derivative. Those are the symbols that are differentiation operators that indicate operation of differentiation.",
		"week": 2,
		"page": 39
	},
	{
		"transcript": "There are more details about some rules are used for computing the derivatives of explicit functions. For example, the derivatives of the constants should be equal to zero. The derivative of the linear functions that is equal to a here. Right? What about the power rule, the derivative of x to n? That is n x to the power of n minus 1. Right? And here is the derivative of exponentials. Here, that is also equal to ex. The derivative of the logarithm that is 1 over x. And here is the sum rule. And here is the product rule. And here is the chain rule. I think for you guys, you should know these rules from before. Right? But the previous rules are very important. Especially at that point, we need to use product rule and chain rule.",
		"week": 2,
		"page": 40
	},
	{
		"transcript": "As you can see, the derivative of the first derivative of a function fx is the second derivative of fx. The second derivative quantifies how the rate of change of fx is changing. For example, in physics, if the function describes the displacement of an object, the first derivative gives the velocity of the object. That is the rate of change of the position. The second derivative gives the acceleration of the object. That is the rate of change of the velocity. Right? If we apply the differentiation operation any number of times, we obtain the n-th derivative of fx. So, that is denoted by this equation.",
		"week": 2,
		"page": 41
	},
	{
		"transcript": "It's about the Taylor series. So, the Taylor series provides a method to approximate any function fx at a point x0 if we have the first n derivatives, from 0 to n here. For instance, if n is equal to 2, the second derivative approximation of a function fx is equal to this equation. Similarly, the approximation of fx with a Taylor polynomial of n-degree derivative is equal to this equation. That is most important for you guys. Similarly, we have this sum of the order mentioned. For example, the figure shows the first-order, the second-order, and the fifth-order polynomial of the exponential function fx = e to x at the point x0 equals to 0. So, this is x, and x equals to 0. Here is observation of the one, two and five Taylor series.",
		"week": 2,
		"page": 42
	},
	{
		"transcript": "And now, more details about the geometric interpretation, geometry. And we have to pay attention to this figure, as previously. So, the first derivative of function is called the slope of the tangent line to the curve of the function. For example, this function fx, the first derivative, we are talking about is this slope. It's this dashed line. Questions?",
		"week": 2,
		"page": 43
	},
	{
		"transcript": "That's about partial derivatives. So far, we looked at functions of a single variable, that is f, R one to R one. Functions that depend on many variables are called multivariate functions. Let say, y is equal to f x while x is equal to x1, x2, to xn be a multivariate function with n variables. The input is an n-dimensional vector that is x equals x1, x2, to xn transpose and the output is a scalar y. The mapping is a function f from dimension n to dimension one. The partial derivative of y with respect to its i-th parameter xi is this equation, f x1, x2, to xn minus f x1, x2, to xn. To calculate the partial derivative with respect to xi. This symbol is pronounced del or we can just say partial derivative of y with respect to xi. For the notation of partial derivatives, the following are equivalent. That is partial derivative of y with respect to xi and can be denoted with those different symbols. It is just partial derivative.",
		"week": 2,
		"page": 44
	},
	{
		"transcript": "What about the grading? So, you are familiar with about gradient. We can concatenate partial derivatives of a multivariate function with respect to all its input variables to obtain the gradient vector of the function. The gradient of the multivariate function fx with respect to the n-dimensional input vector x that is x1, x2, to xn transpose, is a vector of n partial derivatives. As you can see this gradient of x. That gradient of n partial derivatives with respect to x1, x2, to xn. Right? When there is no ambiguity, the notations these, these two are often used for the gradient instead of this nabla. Because this symbol nabla here, also pronounced gradient of f with respect to x. In Machine Learning, the gradient descent algorithm relies on the opposite direction of the gradient of the loss function L here with respect to the model parameters theta here for minimizing the loss function. So, adversarial examples can be created by adding perturbation. This is an example in the direction of the gradient of the loss L with respect to input examples x for maximizing the loss function. I know, sometime in the future, we will have a task with very about series of data. You guys will generate images, do some tech events. I know, we have another class where we will talk about how to generate some images. But any way, we want to emphasize the importance of gradient here.",
		"week": 2,
		"page": 45
	},
	{
		"transcript": "So next thing is about the Hessian metrics. To calculate the second-order partial derivatives of multivariate functions, we need to calculate the derivatives for all combination of input variables. That is, for a function fx with an n-dimensional input vector x that is this vector xn. There are n square second partial derivatives for any choice i and j. Right? Two dimensions are this case. For the second partial derivatives are assembled in a matrix called the Hessian. We have this Hessian matrix. So, computing and storing the Hessian matrix for functions with high-dimensional inputs can be computationally prohibitive. For example, the loss function for a ResNet50 model with approximately like 23 million parameters, has a Hessian of 23 million by 23 million that is a lot. Right? I cannot apply any kind of Hessian to try to remember all the parameters.",
		"week": 2,
		"page": 46
	},
	{
		"transcript": "The next one is about the Jacobian matrix. So, the concept of derivatives can be further generalized to vector-valued functions from n dimensions to m dimensions. For an n-dimensional input vector x, that is this one, the vector of functions is given as this. Right? The matrix of first-order partial derivates of the vector-valued function fx is an m by n matrix called a Jacobian. It's here. For example, in robotics a robot Jacobian matrix gives the partial derivatives of the translational and angular velocities of the robot end-effector with respect to the joints or axes velocities of this Jacobian matrix. Robot. I want to mention, this Hessian matrix and Jacobian matrix are some about strange. Interviewer may ask questions: What is Hessian matrix? What is Jacobian matrix? So, somebody tell me during the interview this kind of questions. You need to remember what is Hessian matrix, what is Jacobian matrix. Right? These questions are very relative to the partial derivatives.",
		"week": 2,
		"page": 47
	},
	{
		"transcript": "Next is about the integral calculus. So, for a function fx defined on the domain a and b, the definite integral of the function is denoted as this kind of integral. So, the geometric interpretation of the integral is the area between the horizontal axis and the graph of fx between the points a and b. So, the integral calculates the area. Right?",
		"week": 2,
		"page": 48
	},
	{
		"transcript": "Next is something we will use in Machine Learning. It's optimalization. Optimization is concerned with optimizing an objective function, finding the value of an argument that minimizes of maximizes the function. So, most optimization algorithms are formulated in terms of minimizing a function fx. Minimization is accomplished vie minimizing the negative of an objective function. For example, we want to minimize negative function fx. In minimization problems, the objective function is often referred to as a cost function or loss function or error function. Optimization is very important for machine learning. The performance of optimization algorithms affect the model’s training efficiency. Most optimization problems in machine learning are nonconvex. Meaning that the loss function is not a convex function. Nonetheless, the design and analysis of algorithms for solving convex problems has been very instructive for advancing the field of machine learning.",
		"week": 2,
		"page": 49
	},
	{
		"transcript": "So, here I will mention more about 2 terms. First of all, it's about expected error. Number 2 is about empirical risk. For the expected risk, basically, we have something as an expected function to get. However, from the empirical risk is something you will hear about more in optimization. You can probably have this kind of strange function. It's about two different terms, about expected risk and empirical risk.",
		"week": 2,
		"page": 50
	},
	{
		"transcript": "Now, what about stationary points? Stationary points, or critical points, of a differentiable function fx of one variable are the points where the derivative of the function is zero. That's fx prime is equal to zero. It's just the first derivative is equal to zero. And we have the three stationary points can be the minimum, the maximum and the saddle point. Right? These three different cases. The minimum and maximum points are collectively known as extremum points. For example, you have this minimum, you have maximum in this case. And here, you have some additions. If the second derivative of fx is bigger than zero, it is the minimum. The second derivative is less than zero, it's the maximum. If the second derivative is equal to zero, that point can be a saddle point, right, maybe not.",
		"week": 2,
		"page": 51
	},
	{
		"transcript": "So, here we will talk about the local minima. In Machine Learning, we want to avoid a kind of local minima. We want the global minimum.",
		"week": 2,
		"page": 52
	},
	{
		"transcript": "Here here's about the saddle points. The gradient of a function fx at a saddle point is equal to zero, but the point is not a minimum or maximum point. The optimization algorithms may stall. For example, in this space 2D, at the saddle point, it doesn't reach the minimum. Right? Here is another saddle point. Here.",
		"week": 2,
		"page": 53
	},
	{
		"transcript": "The convex optimization. A function of a single variable is concave if every line segment joining two points on its graph does not lie above the graph at any point. So, that's we can say it is convex. Right? We can try to do align 2 points. For example, a concave function, no line segment joining two points on the graph lies above the graph at any point. The convex, no line segment joining two points on the graph lies below the graph at any point.",
		"week": 2,
		"page": 54
	},
	{
		"transcript": "And here are more details about convex functions.",
		"week": 2,
		"page": 55
	},
	{
		"transcript": "This is convex, non-convex, convex again. Right? As you guys should be familiar with different concepts.",
		"week": 2,
		"page": 56
	},
	{
		"transcript": "Another important like Jensen’s inequality. It's if we let alpha one is equal to lambda and alpha two is equal to one minus lambda, the definition of convex function becomes this kind of problem. And this problem can be mathematically solved about this is kind of form. This inequality is also identical this kind of problem. That is let's say the expectation of a convex function is larger than the convex function of an expectation.",
		"week": 2,
		"page": 57
	},
	{
		"transcript": "And what about convex sets? A set X in a vector space is a convex set is for any a and b that are in X, the line segment connecting a and b is also in X. Here are details about it. For all lambda in the one zero, we have this formula. In the figure, each point represents a 2D vector. So, the left set is nonconvex, and the other two sets are convex. Here are about two properties.",
		"week": 2,
		"page": 58
	},
	{
		"transcript": "And here is about derivatives and convexity. A twice-differentiable function of a single variable f is convex if and only if its second derivative is nonnegative everywhere. And also, a twice-differentiable function of many variables f is convex if and only if its Hessian matrix is positive semi-definite everywhere.",
		"week": 2,
		"page": 59
	},
	{
		"transcript": "It's time to mention about this kind of optimization. The optimization problem that involves a set of constraints which need to be satisfied to optimize the objective function is called constrained optimization. For example, for a given objective function fx and a set of constraint functions cix. We should minimize this kind of fx but the subject this kind of equations.",
		"week": 2,
		"page": 60
	},
	{
		"transcript": "Also, you guys should know about Lagrange multipliers. One approach to solving optimization problems is to substitute the initial problem with optimizing another related function. So, we can try to solve this optimization problem. For here, in the support vector machine, we will talk about more details how to use Lagrange multipliers for support vector machines.",
		"week": 2,
		"page": 61
	},
	{
		"transcript": "So, this is the projections again. As you guys probably heard about it. Right?",
		"week": 2,
		"page": 62
	},
	{
		"transcript": "This is projection again.",
		"week": 2,
		"page": 63
	},
	{
		"transcript": "Here is about some first-order versus second order optimization. Here are some details of it.",
		"week": 2,
		"page": 64
	},
	{
		"transcript": "Here is more about the lower bound and infimum.",
		"week": 2,
		"page": 65
	},
	{
		"transcript": "About this case, I'll talk about more details of it because we have limited time.",
		"week": 2,
		"page": 66
	},
	{
		"transcript": "Let's quickly talk about homework. The second one is just about to finish it. Now, you have more time to fix it. The first question should be easy, just calculate the second derivative of Gaussian function. Is that clear? Use Jupyter Notebook. I will send a kind of questions for this assignment. You need to write your LaTeX in Jupyter Notebook. If you don't know how to use LaTeX in Jupyter Notebook. For those online students, do you have any question?",
		"week": 2,
		"page": 67
	},
	{
		"transcript": "",
		"week": 2,
		"page": 68
	},
	{
		"transcript": "",
		"week": 3,
		"page": 1
	},
	{
		"transcript": "Okay. And let's try to review what is the probability. In tuition, so in a firm process. Several outcomes possible. So, when the process is repeated, a large number of times each outcome occurs with a relative frequency of the so-called probability. So, if a particular outcome occurs more often, we say, it is, it is the most probable. So, the probability applies to a contest. First of all, in actual repeated experiments. For example, you don't record as a power of 1000 cars, driving by 0.057 of them are grid. And then you estimate the probability of car being green, as you see clear, like 57 divided by 1000, so you eventually get rid of some small number, and this is so part the probability here. In the idealized conceptions of a repeated process. For example, you consider the behavior of an unbiased six-sided die. The expected probability of rolling a 5 is 1 by 6 which equals 0.1667. Right? That it should be That's same. Another example is that you need to you need a model for how people's height distributed, which is our normal distribution to represent as I expected the regular probabilities.",
		"week": 3,
		"page": 2
	},
	{
		"transcript": "So next, the trying to solve machine learning problems securely will manage into dealing with uncertainty party pieces, as well as the stochastic and that problem. Non deterministic authorities in probability theory, it provides a mathematical framework of representing and quantifying uncertainty and there are several different sources of uncertainties. So, for example, the first 1 can be that any inherent stochastic history in the system being mode modeled as another concrete example, so most interpretation of quantum mechanisms describe the dynamics of some atom particles has been probabilistic. Another reason because the uncertainty can be the income, incomplete of the ability So even deterministic systems can appear, you know, stochastic, when we cannot observe all the variables at jobs or behavior of the system. Another reason can be the incomplete of modeling. So, while we use our model, that a master has covered some of the information we observed, that is part of information without the uncertainty in the model's prediction. So, for example, the discretization of real number of values that I mentioned negative reduction, etcetera. Right? Because of that, always unnecessary information. So, you would think that is unnecessary. But in terms of data, the cell phone you should be used for that was another reason of the uncertainty of the model.",
		"week": 3,
		"page": 3
	},
	{
		"transcript": "Then we quickly review about the random variables, our random variables, as a variable that can take different values, for example, x that is equal to your rolling a die. So, the possible ways of acts a compromise the sample space, for example, or to other outcome space that is as equal to 1 to 6, right? Because it is like, they have 6 different sides. So, we denote the event of seeing a 5, as equal to 5 or x that equal to 5 is this different equation. And as a probability, it's so called is donated is distributed. Also, the P5 can be used to donate as appropriate, is that x is a value of 5. Probability distribution is a description of how likely a random variable is to take each of its possible states. A compact notation is common. So were PX, the probability distribution of the random variable x. Also, the notation x that has the probability distribution p x can be used to donate as a random variable x as a probability of PX. And, definitely, for the random variable, it can be either it gets greater or the continuous that just creates a random variable. I have a finite number of stages. For example, the sides of die and the continuous random variables has infinite number of states for example is the height of a person. It can be infinite numbers. Right?",
		"week": 3,
		"page": 4
	},
	{
		"transcript": "Here, some kind of laws of the probability. For example, as a property of an event A, in a given sample s, this denotes as PA, must satisfies the following properties. Like non negativity. So, which means that for a variety of all events, it should be bigger than 0. And all possible outcomes. For example, if we sum all down, probability that it should be equal to 1. And here, another the property, the activity of the disjointed event, which means that, for example, everyone and the entry used to be equal to 0, so it would be, which means there is no common unit between this a1 entry and also the probability of a1, the universe, the edge should be equal to the probability of a1, then pass out probability of a2. Right? Next, the probability of random variable px must obey the axioms of the probability over the possible values in the sample space s.",
		"week": 3,
		"page": 5
	},
	{
		"transcript": "And here's another example of our discrete variables. A probability distribution of discrete variables may be described as a probability mass function. So, also named the PMF, so later you might need it to remember what is PMF that is just probability mass function here. And our probability distribution over continuous variable may be described as TDF as a probability density function. For example, waiting time between the eruptions of old faithful, and a PDF gives the probability of an infinitesimal region with volume delta x here, to find out a probability of the interval a and b we already have of the integration between of a and b of the probability p x under with DX. Right? Because this is how we find those appropriately over a kind of certain interval there.",
		"week": 3,
		"page": 6
	},
	{
		"transcript": "For the multivariate random variables, so we may need you to consider several random variables at a 1 time and that if a several random processes occur in parallel or in sequence. For example, for models that relationship with in several diseases and symptoms. And another example is that you process images with millions of pixels. And then each pixel is 1 random variable. Next, we will be studying the probability distribution defined over the multiple random variables. And those include the joint, the condition, and marginal distribution. The individual random variables can be grouped together into a random vector because they represent different properties of an individual, statistical unit. Multivariate random variable is a vector of multiple random variables. So, for example, I the capital x can be represented by X1X2, to XN, and with its transpose.",
		"week": 3,
		"page": 7
	},
	{
		"transcript": "So, now let's talk about joint probability distribution. So, the probability distribution that acts many variables at that time is known as a joint probability distribution. But you're able to say about all kind of variables that we have that joint probability. So, Given any values of x and y, of 2 random variables x and y. So, what is the probability that the capital X is equal to small x and capital Y is equal to small y. So, simultaneously, so that is the probability of x equal to small x, and y equal to small y, denotes the joint probability, and we may also write in the PS for the initial to represent its probability. And from this figure, you can find that. As I joined the probability, P1X is equal to minivan. So, the minivan is here. Right? This is a minivan. And y is European, so you are, yeah, that's like joining probability, if x is equal to a minivan and y is equal to Europeans, then we can the probability of 0 point 1481. Right? So, this is a we need to consider about the both cases.",
		"week": 3,
		"page": 8
	},
	{
		"transcript": "Another distribution is called marginal probability distribution. So, for the marginal probability distribution has a probability distribution of a single variable. So, previous for jointly, they consider 2, right? But here, we only consider about European just consider about 1, it'll calculate the best number. Join them, appropriate distribution PXY. For example, we may need to use several. For example, we may need to use the sum rule for example the probability of capital x is equal to small x and we sum all the probability across other kind of variables. Across other kind of variable than the y. So, as you can see here, either some or other probabilities across the y here. And for continuous run variable, summation has replaced by integration. So, here, just an indication up here. And this process is called marginalization. So, as you can see in this figure, so now let's say what's the probability of marginal probability of the p x equal to minivan. So, that basically, we need to calculate to the probability of the where x is equal to minivan, all these 3 properties together, right? So, eventually, we can get a 0 point 333 as it's marginal distribution often acts equal to a minivan.",
		"week": 3,
		"page": 9
	},
	{
		"transcript": "Although last week, distribution we mention is about conditional probability distribution. As you look at it from the name, So the conditional probability distribution is a probability distribution of 1 variable, provided that another variable as taken a certain value, for example, it can be connected in this period of probability of x is dependent on -- given the small y here. And also, it can be a right in this equation. And also, similarly, in this figure, if we want, you can calculate it, can additional probability of y, y European x is equal to minivan, so we can calculators are probably at first that we needed to find his joint view, probability that is about this 1. Right? Then divide by the other case. So, you eventually will get this this kind of probability of why it's equal to European giving x is equal to minivans. Now, can I get 0 point 443 as is condition conditional probability? I guess, no questions about it. Do you have any questions? Okay.",
		"week": 3,
		"page": 10
	},
	{
		"transcript": "I think this is nothing you guys should know for me now is that his patients go alright. So, our calculate as a conditional probability for 1 variable, 1 conditional probability for another variable unknown. For example, this is the probability of x, given y, that is can be calculated in this clearing. It's called a base rule. And again, it's the multiplication rule that for the joint distribution is used as you it's just a kind of move a little bit to another side. By symmetry, we have another PY of x that is able to have no problem conditional probability of asking why those times the probability of PY, and there's a term of referred to as the PX, here, we can also name it as a prior probability of that initial degree of belief of x, and here's PXY is a posterior probability. After the Incorporations of knowledge of y and the PyX is so called the likelihood of the y, in the x, and the p y here is just evidence. And eventually, the bases theorem is just can be understanding in this way. So, once we try to estimate in something where we're trying to reuse this likelihood, this kind of priors.",
		"week": 3,
		"page": 11
	},
	{
		"transcript": "And then, we'll talk about the independency. So, the two random variable x and y are independent if the occurrence of y does not reveal any information about the occurrence of x. For example, true successive rolls the die, are independent. So therefore, we have why the p x of y that is just equal to PX, because they are independent. And the here is the notation here. As noted from independent random variables that the PXY that is just equal to the times up to p x times with p y. In other cases, the random variables are dependent, for example, getting a king on successive draws from a deck, that can be drawn and not replaced. And two random variables x y are conditionally independent to give another random variable z if and only PXY given z, that is equal to negative p, x given z times the probability of y given z here.",
		"week": 3,
		"page": 12
	},
	{
		"transcript": "Continuous and multivariate distributions just means that for some concept of joint, marginal and conditional probabilities apply for continuous random variables. So, the probability distributions use the indication of continuous random variables instead of summation of discrete random variables. It's an example about the 3 components to gaussian mixture, probability distribution in 3 d dimension.",
		"week": 3,
		"page": 13
	},
	{
		"transcript": "The expected value. So, the expected value or the expectation of our function, you have with respect to your probability distribution p x as average or the mean where x is drawn from PX. For example, for a discrete random variable x, it can be calculated using the formula. Summation of all the p x, probability of x, over, a bunch of acts that had a sum of it. However, I think it is our pitching as a random bet of facts that we are being kept connected using some communication here. Right? So, when the identity of the distribution is clear from the context, we can write, you know, as this kind of expectation here, so if he is clear, it's random variable used, just write it at the expected. So, meaning, it's the most common matter of central dependency of a distribution by the far, random variable, f x is equal to f x that means the mu is equal to the expectation of xi then can be further be right at this point. And the signal just means that you get where I'll schedule as an average of all the samples XRI. Right? All the other measures of central tendency like, for example, I median and mode.",
		"week": 3,
		"page": 14
	},
	{
		"transcript": "Variance gives the measure of how much the values of function f x divide from given from the expected values, as we sample values of x from p x. And then here is the equation how we calculate the variance here. Once our variance is low, the value of f of x cluster near the expected to be valuable, and usually, the variance is the commonly denoted by sigma square, and as they are above the grid, it's similar to a bunch as FX is able to xi, minus mu here. Variance is commonly denoted as sigma square and here is how you find the standard deviation. The square root of variance is the standard deviation which is denoted by sigma equals square root of variance of x.",
		"week": 3,
		"page": 15
	},
	{
		"transcript": "Covariance gives the measure go hoe much two random variables are linearly related to each other. For example, is this 1 can you observe some covariance? Between x and y? 0. No? Right? It's better to go to opposite right. But about this 1, you probably can find Hi. Correlation between x and y. And this solution, pessimism is a positive 1, and if, like, indeed, this way should be on technical relationship. And then x to the y. Any questions? Sure. The correlation.",
		"week": 3,
		"page": 16
	},
	{
		"transcript": "The correlation coefficient is a covariance normalization by the standard deviation of the 2 variables that it just and we can be calculated by is a covariance of x y is occupied by, that's the sigma of x times of the sigma of y. Right? And I can also mend up here, this correlation or efficient at the net as a role x y here. And is between the minus 1 and the 1. What does minus 1 mean? And then it only reflects the linear dependency between variables, and it does not matter, the nonlinear dependencies between the variable, So, for example, in this case, so here it's about linear dependence with noise. From 1, typically is very high and positive. Then to 0.8 0.4 0, basically, there's no there's no kind of correlation, and minus 4. 0.4, and minus 0.8, then to minus point with mister strong activity. And also here is the linear dependence without noise, it basically means that you can find a very clear relationship with each other. So, what about this nonlinear, especially, but nonlinear, you cannot even use this. Okay. Remember for this correlation, you reach us for nonlinear.",
		"week": 3,
		"page": 17
	},
	{
		"transcript": "A covariance metrics consists of multivariate random x with states of x that is n dimensional arrays as a n-by-n matrix such as the covariance Xij, that is equal to the covariance of xi and yi. That is about the overall metrics. And there's a diagonal element of the covariance metrics the variance of the elements of the vector, so about the covariance of xi and xi should be just equal to the variance of xi. So, also, we -- has noted that is that matrix is symmetric, since the covariance of xi xj that is equal to progress of xj and xi here.",
		"week": 3,
		"page": 18
	},
	{
		"transcript": "But different probability distributions. So, for example, our Bernoulli distribution, it is like a binary random variable X with states of 0 and 1. So the random variable can encode a coin flip, which comes up 1 with a property b and 0 based probability of 1 minus p. Right? And notation should it be x that is should be it should be compiled the ways that rule p here, like, a pretty rare coin. Then, a uniform distribution, the probability of each value. For example, I, in the 1 to n, is the is equal to the PI, it's equal to 1 over n. So, this is notation should be x, it should be, like, u n here, but in a figure, here n is equal to 5, and the probability is just 0.2.",
		"week": 3,
		"page": 19
	},
	{
		"transcript": "For example, the binomial distributions to perform a sequence of n independent experiments, each of which has a probability of p of the succeeding, for example, where the p should be between 0 and 1. So, the probability of getting care successful in n trials should be like this notation should be accepted, by nominal entry here. And we also have a poisoning distribution, which means that a number of events occurring independently in a fixed interval of time with known rate lambda.",
		"week": 3,
		"page": 20
	},
	{
		"transcript": "So, the most well-known Gaussian distribution, you know, kind of the normal distribution or the economy of the fair share distribution and there here is the mean and its variance.",
		"week": 3,
		"page": 21
	},
	{
		"transcript": "For the Multinoulli distribution, it is an extension of Bernoulli distribution from binary class to multi class. Remember a previous we mentioned about Bernoulli distribution is just our binary, right, just to have 2 sides there. Like the Multinoulli distribution is called as a category called distribution or generalized Bernoulli distribution, but the Multinoulli is, like, probability distribution that describes the possible results of a random variable that can take 1 of over k possible categories. So, our category random variable is just discrete random variable with more than 2 possible outcomes, such as the roll of die. Machine learning, we have set our data example x1, x2 and corresponding to the data example xi as a k, class label. There is a yi equal y1, y2 to yin and k means different clusters, and it corresponds to 1 whole importing. In one hot encoding is also called 1 of k class label yi equal y1, y2 and so on yik representing one hot encoding. Let's denote the probabilities for assigning the class labels to a data example by p1, p2 to pk, we know that the pj should be between 0 and 1 and the sum of pj should be equal to 1 for different class of j from 1 to k. The Multinoulli probability of the data point, the xi is the probability of xi that it can be like it's a product of all the probability here. Right? So, similarly, we can take place the probability of all data. Examples as these come out and products of all of them together.",
		"week": 3,
		"page": 22
	},
	{
		"transcript": "So, lastly, we are mentioning about, and other important part about information theory. So, you know, information theory, it can start in some encoding, decoding in some transformations, some manipulation of information. It is a branch of applied mathematics that will resolve the above around the quantifying how much information is presented in different signals, as such, information theory provides a fundamental language of discussing information processing in computer systems. For example, in machine learning applications that use cross entropy loss as derived from the information theoretic consideration similar work, like in this paragraph they actually defined it. It's an information theory invested for the first time to study messages over a noisy channel, such as communication via radio transmission So we actually more care about some unusual information.",
		"week": 3,
		"page": 23
	},
	{
		"transcript": "Here are more details about the so-called the self-information. So, the basic intuition behind the information theory is that learning that an unlikely event has occurred is more informative than learning that a likely value has occurred. For example, a message you say the sun rose this morning. Should be all, you are nice but you notice about this 1. This is so uninformative that it is unnecessary to be sent. But a message is saying, there was a solar eclipse this morning is very informative, right, so that here. For self-information, we really care about some unusual information. So, based on that intuition Shannon defined the self-information of an event X and the equation for it is Ix equal to the negative log of the probability of x. So, ix is the self-information, and the p x is the probability of event x. So, that your self-information output is a piece of information received from the event x. So, for example, if we want to send the code off with 0010 over my channel. So, you got to 0010 is a series of code of that. And in this case, the last is and is able to move forward. Right? So, that encodings are bit 0 or 1 that occurs with the probability of 1 over 2. So, for instance, in this case, the p, the probability should be well over to or with the power of n so then, we can calculate the self-information. Of IX. The x is 0010. And here it's the equation, and here it's about its probability. So, you eventually calculate this. Okay. So, the self-information is for to recognize how the information, how big it is. And you spend your files in the big or event. This probability or just It's not just a probability because we take the negative log here. So, with the probability, which are we present how important of that independent. So probably when we are assigned, for example, in this message, we will assign more value to this information. Yes. But to why the result has 4 bits. Maybe yes. So, each code is about 1 bit. Right? So, once you calculate it by this equation, you will eventually get 4 bits. Right?",
		"week": 3,
		"page": 24
	},
	{
		"transcript": "Next, it is about the entropy. So, for a discrete random variable x that follows a probability distribution P with a probability mass function px the expected amount of information through entropy also called as Shannon entropy. It's defined in this principle. So basically, it's calculated what? What does this mean? it's really about expectation of all these kinds of criteria of ours. Right? So based on the expectation definition that is equal to this equation, we can rewrite the entropy as this can now be created. It basically means making all the event x across all the small x. Here, for example, PR, Probability or PX that comes with a lot of PX. So, if X is a continuous random variable, then follows a probability distribution p here, with a probability density function px for the entropy. So now, in this case, it should So, we have an integration in this case. Right? And for continuous random variables, the entropy is also called a differential entropy. And for those attributes, also very important and other machine learning models, especially, for neural networks is very important.",
		"week": 3,
		"page": 25
	},
	{
		"transcript": "For example, intuitively, we can interpret the self-information as this one I(X) as the amount of surprise. We're at the same particular outcome with a lesser surprise, when seeing a more frequent event. Similarly, we can interpret as our entropy, H(X) here, as the average amount of surprise from observed a random variable X. So therefore, distributions that are closer to a uniform distribution will have high entropy. And because there is a little surprise in one way, we will draw some Sample from uniform distribution, since all samples have a similar value, as you can see here.",
		"week": 3,
		"page": 26
	},
	{
		"transcript": "Other, the kl divergence. I've given you most of you might not familiar with these k l diverges, but it's fine. Is also for the relative entropy. It can provide a measure of how different 2 probability distribution are. So, for our probability distribution PX and QX, it has QX over the same random variable x, the k l divergence is calculated in this kind of equation, and for our discrete random variables, this is equivalent about other some here. When base 2 logarithms are used kl of divergence provides the amount of information in bits. So, your machine learning is a natural logarithm is used, the best and there's a long-time information is provided and not there. So, KL divergence can be considered as the amount of information lost when the distribution Q is used to approximate the distribution P. For example, in the GAN, P is the distribution of true data, Q is the distribution of synthetic data You'll pay attention to each other by didn't want to. I recognize the P and Q in this case.",
		"week": 3,
		"page": 27
	},
	{
		"transcript": "And for kl divergence, it's still on would be a satisfied with a non-negative property which means the kl would be bigger or equal to 0. So, 1 KL is equal to 0, if I only the PSX and the QS, are the same distribution. But most important property of kl is that it is non symmetric, which means that this 1 is not only attached to each other. And because Kl divergence is no negative and it matters the difference between distribution is often considered as a distance metric between 2 distributions. However, kl divergence is not true distance metric, because it is not symmetric, and there's a symmetric method this does. Yeah. You order the equivalent to the choice of whether you use KR, KR, KR, Q over P. Of negative divergences called non negative, and the symmetry is called Jensen Shannon divergence in which can be done in this equation. About the m is an average of 2 distribution. M. And the kl divergence is very useful in some kind of special kind of machine learning, for example, in the first class, I mentioned some of my work is related to domain adaptation, use that case. That's why we have 2 different domains right. We have source domain, we have time domain, we are more likely to reduce the kl divergence between the two domains so that we can measure them together. Is there like a rule of thumb for the value of the k l divergence that's acceptable? You either have 2 different distributions. Otherwise, it's not useful. Right? For example, you got a credit, let's say, in our typical machine learning, you only have x training sample x here. Right? The inner domain. At that patient, we will have 2 different domains. We have a soft domain or have a type domain. In this case, we really have merged together. Try to reduce the KL divergence. Okay. How's that? How's your question? I was just asking you if you're like a value that you a target value, perhaps, well, you know, that's most give you this kind of number. Definitely, the smaller, better. Right?",
		"week": 3,
		"page": 28
	},
	{
		"transcript": "Okay. So now I've always come to you guys to familiar with its cross-entropy loss, right, right, level. So, cross entropy is the closely related to the KL divergence and it is defined as the summation of the entropy h of p entropy, and the kl divergence is DKL p over q here, and eventually can be rewriting in this way. Automatically, we can write cross entropy in this case, so some of you might see this equation. So, in machine learning, let's assume a classification based on set of data point X1X2 to xm, that needed to be classified into k classes. For each of them, example, xi, we have a past level yi here, which means that your label y model, that you build distribution p here, So the goal is to train a classifier, for example a neural network, a parameter by theta. That outputs are a pretty good class level of i hat, alright, predict the level of y hat for the estimated distribution of q. So, in this case, the cross-entropy loss between the 2-distribution p and the estimate dispersion q is calculating this cross-entropy loss. And nearly, we were trying to minimize them. Because they're smaller than the better. Right?",
		"week": 3,
		"page": 29
	},
	{
		"transcript": "Otherwise, it's a maximum likelihood. Cross entropy loss is closely related to maximum likelihood estimation. I suppose, call it MLE here. Right? And in machine learning, we want to find our model There's a package that maximized the probability that the data is assigned as a correct class. For example, arg max of theta of p. But classification problem from previous pages, we want to find parameters theta so that for the data examples x1 to xn the probability of outputting class labels y1 to yn is maximized. Which means that we try to get. There are character levels by using some kind of models. That that you said. For some examples of predictive class and why It have will be different than the true class why I bought the gold is a final theta that resulting in an overall maximum probability. So overall, this is like a very sort of the automatic output in the model, there is there is a promotional truth, this kind of minutes up. It's a probability. And this is the truth based that p1 to pn does not depend on the parameter data, and that we can assume that we have no prior assumption with it, on which set of parameter theta are better than any others. Because that, there's a key here, there's a likelihood and a therefore that makes some likelihood, estimation, etcetera is based on solving this kind of problem. This is the reason why it is called the maximum likelihood.",
		"week": 3,
		"page": 30
	},
	{
		"transcript": "For the total number of n observed data points x1 to xn the predicted class labels for theta examples xi is yi hat. Using Multinoulli distribution as a probability of predicting true class yI is equal to this 1 is a probability of x over data, product of all of y hat IJ, where j belongs from 1, 2, to the k, can you step in the k clusters here? For example, we have problem with 3 classes car, house, tree, and an image of a car x I, and the true label yi is gonna be 100. Let's assume a predicted label yi hat should be like 0.7, 0.1 and 0.2 then the probability is given by this equation that we should have calculated. Just about to 0.71. So now we can predict the label as which class. Assuming that the data examples are independent the likelihood of the data given the model parameters theta can be written as p of x1 to xn which is the product of the yin. It is the numerical calculations product of many transformations, for example, like this 1, because they really will change this, like, product to, like, summation. So, it should be much easier to calculate your That's the reason why we use a lot of likelihood here. So, it eventually becomes a 2 summation of yi-to-yi hat here. So, are negative, a lot of likelihood. A lot of us minimize our approach is negative, blah blah, so you're measuring. They should be just equal to the but the cross-entropy loss here. So last, the same as the minimize cross entropy. Plus. So here is a bigger problem of it. And now up to now, I believe we already cover All are important to mess back on. I mean, it's all cost. I see here you guys see in some part, and you have a lot of familiar with that.",
		"week": 3,
		"page": 31
	},
	{
		"transcript": "You can go back to the slides and then maybe read the other post, just say make sure you understand the majority of them then you should be good in this case. So, this is about other references.",
		"week": 3,
		"page": 32
	},
	{
		"transcript": "In the next part, we talk about the data from a preprocessing. So, similar as you guys did, you got a kind of homework there's some cleaning and a missing data with some number, like, like, something like that. So here is it has some options that are where we have cover today about data preprocessing like some data properties, some major tasks. So, in data processing, data cleaning, data integration, data reduction, data transformation, data discretization, and summarize the data preprocessing techniques.",
		"week": 3,
		"page": 33
	},
	{
		"transcript": "So, first what about the data quality. Why preprocessing the data? And definitely, they are a lot of reasons. Right? For example, measures for data quality a multidimensional view. For example, accuracy correct or wrong, accurate or not, completeness not recorded unavailable consistency some modified but some not dangling timeliness timely update believability how trustable the data are correct interpretably how easily the data can be understood. So how easily the data can be understood, right? There are all the different reasons that we needed to preprocess the data.",
		"week": 3,
		"page": 34
	},
	{
		"transcript": "So here are the major tasks that we are needed to do data preprocessing. For example, but in the data cleaning, we will try to fill out the missing results, most of the noisy data, identify and remove some outliers. And in data integration, integration of multiple databases, data cubes or files. In data reduction, for example, we are trying to reduce the dimension and energy of the data and that way we'll do some data compression, etcetera. And for the data transformation, and the data reduction, numerosity reduction and data compression.",
		"week": 3,
		"page": 35
	},
	{
		"transcript": "",
		"week": 3,
		"page": 36
	},
	{
		"transcript": "So that's there are several reasons that we needed to do that for example, some data has incomplete, so lack of attribute values, lacking some certain attributes of the interest or contain only some aggregate data. For example, some occupations that is equal to nothing. Right? So missing data there. And noising means that it contains some noise on errors, on outliers. For example, the salary is able negative 10. Is a wrong data right. And an inconsistent, so contain some discrepancies in the codes on names. For example, age is equal to according to your birthday is equal in this number. Right? For given the people you have different age, you have different birthday right, previously is a rating like a registry. So now someone really is as of ABC. Right? It's different and there are some other discrepancies to duplicate the recall. And even sometimes, there are some intentional mistakes. For example, like general 1 as everyone's birthday It means the wrong way. And as there are several reasons why we needed to do our data cleaning here.",
		"week": 3,
		"page": 37
	},
	{
		"transcript": "For our incomplete or missing data. So, data not always available. Many tuples have no recorded value for several attributes such as customer income in sales data. Missing Dara may be due to equipment malfunction inconsistent with other recorded data and thus deleted data not entered due to misunderstanding. Certain data may not be considered important at the time of entry, not register history or changes of the data. Missing data may need to be inferred.",
		"week": 3,
		"page": 38
	},
	{
		"transcript": "How can we handle missing data. So, we were trying to get them that during your learning, it should be very easy to understand, but just understand them. Right? Ignore the tuple usually done when the class label is missing when doing classification, not effective when the percentage of missing values per attribute varies considerably. And another way maybe we try to fill in the missing various manually, maybe it's some kind of tedious or infeasible. But typically, we may need like, fill in, like, the mean of some missing values. Right? So, fill in it automatically with, a global constant, for example, unknowing a new class, and the attribute mean like that. I said, the attribute means of all samples belonging to the same class smarter by with the most probable values. So, the inference is best as the Bayesian formula or the decision tree here are several ways you can't draw. Alternatively, you're like affiliates on a weekly measure state.",
		"week": 3,
		"page": 39
	},
	{
		"transcript": "All about noisy data. So, that in noisy, we just mean that, the random error of variance in a measured variable. Variable. So, incorrect attribute values may be due to faulty data collection instruments, data entry problems, technology limitation and inconsistency in naming convention. So, other data problems, which required data cleaning, for example, are duplicated records, incomplete data, inconsistent data.",
		"week": 3,
		"page": 40
	},
	{
		"transcript": "And has more Less of us that we can handle some missing data for, like, a binning, like first sort the data and partition into equal frequency bins then one can smooth by bins means, smooth by bin median smooth by bin boundaries and etcetera. Regression that smooths by fitting the data into regression functions, clustering detects and remove outliers and combined computer and human inspection detect suspicious values and check by human example deal with possible outliers.",
		"week": 3,
		"page": 41
	},
	{
		"transcript": "In data, Data Cleaning as a Process, Data discrepancy detection Use metadata for example domain, range, dependency, distribution Check field overloading Check uniqueness rule, consecutive rule and null rule. Use commercial tools Data scrubbing: use simple domain knowledge (e.g., postal code, spell-check) to detect errors and make corrections. Data auditing: by analyzing data to discover rules and relationship to detect violators for example correlation and clustering to find outliers. Data migration and integration Data migration tools: allow transformations to be specified. ETL; Extraction Transformation Loading tools allow users to specify transformations through a graphical user interface Integration of the two processes like Iterative and interactive for example Potter’s Wheels.",
		"week": 3,
		"page": 42
	},
	{
		"transcript": "",
		"week": 3,
		"page": 43
	},
	{
		"transcript": "So next, we want to talk about the data integration, Data integration combines data from multiple sources into a coherent store. Schema integration, for example a customer with id matching customer b with id, integrate metadata from different sources. We look at the entity identification problem, identify real world entities from multiple data sources, for example Bill Clinton is equal to William Clinton. Detecting and resolving data value conflicts for the same real-world entity, attribute values from different sources are different possible reasons different representations, different scales, for example metric vs. British units. So next, we want to talk about the data integration. And data integration, so in the best of me is they were trying to combine data from multiple sources, in GI or hand the stores or the schema indication, maybe, for example, you're gonna charge your matches at customer ID that they equal to the e customer ID, so which means that they're integrated from different sources. And the entity identified problem. So, identify, we have real entities from multiple data sources, for example, peer printer is equal to the well-intended. Is that correct? So, detecting some results in some data, very complex. For the 7-megawatt entity, attribute values from different sources are different. Multiple reasons for different representations, different skills. That, for example, the magic combined with some practice units.",
		"week": 3,
		"page": 44
	},
	{
		"transcript": "That's try to say how do we handle some redundancy, debt integration. So, redundant data occur often when integration of multiple databases. For example, like object identification the same attribute or object may have different names in different databases and another one is derivable data one attribute may be a derived attribute in another table. For example, annual revenue. The redundant attributes may be able to be detected by correlation analysis and covariance analysis and careful integration of the data from multiple sources may help reduce or avoid redundancies and inconsistencies and improve mining speed and quality.",
		"week": 3,
		"page": 45
	},
	{
		"transcript": "So next thing we want to talk about is correlation analysis, nominal data. The larger the χ² value, the more likely the variables are related the cells that contribute the most to the χ² value are those. Whose actual count is very different from the expected count correlation does not imply causality for example number of hospitals and number of car-theft in a city are correlated so basically these both are causally linked to the third variable population.",
		"week": 3,
		"page": 46
	},
	{
		"transcript": "Here, we talk about the calculation of chi square and let us consider an example of playing chess and not playing chess and like science fiction and not like science fiction. The Χ square chi-square calculation numbers in parenthesis are expected counts calculated based on the data distribution in the two categories like mentioned below. It shows that like science-fiction and play chess are correlated in the group.",
		"week": 3,
		"page": 47
	},
	{
		"transcript": "Another 1 is about the correlation and we talk about numeric data this time. Correlation coefficient also called Pearson’s product moment coefficient r a and b to the summation of the A and B like mentioned below. Where n is the number of tuples, A and B are the respective means of A and B, sigma A and sigma B are the respective standard deviation of A and B, and summation of ai and bi is the sum of the AB cross-product. If A and B are greater than 0, A and B are positively correlated A values increase as B. The higher, the stronger correlation. And lastly the A and B is equal to 0 if they are independent and product of a and b is less than 0 means they are negatively correlated. Analysis is a flexible move. Just a month, you need to calculate the correlation coefficient that we mention the earlier, right? But also named the Pearson product movement of provisions like the legend in these ways. And the heads just an it's a meaning of any total number 2, and the air, air heads, and b heads are the representative, mister A and B and the supermarket just the division of MP, the signal is just across product. If the IV is bigger than 0, which means the NB are positive, correct, them. And when AR AB is equal to 0, they are independent, because they are less than 0 with negative. Or later. There are several ways that you can analyze the relationship in here.",
		"week": 3,
		"page": 48
	},
	{
		"transcript": "So, in this case, it's just true. We realize different relationship. For example, bottom one shown is similarity from negative 1 to positive 1. So really is now negative white's strong negative point and positive 1 is the strong quality of relationship between the x axis and y axis here.",
		"week": 3,
		"page": 49
	},
	{
		"transcript": "That correlation also can be viewed as a linear relationship. The correlation measures a linear relationship with objects that as I reviewed earlier. Right? To compute correlation, we standardize the data objects A and B and take their dot product. It should be easy to calculate about how it will be here.",
		"week": 3,
		"page": 50
	},
	{
		"transcript": "Here are details about what you can calculate the covariance. Again, the positive covariance, the negative covariance and the independence. All of those you should be familiar with that. Right? So that we can really skip about this part.",
		"week": 3,
		"page": 51
	},
	{
		"transcript": "Covariance, so this is an example that can be simplified in computational as this covariance A B that is equal to the expectation and minus this A hat B hat here. Details then, I will let you know guys this kind of an example. If you really want to challenge yourself or test yourself whenever you understand covariance, you can do this example by yourself. Right?",
		"week": 3,
		"page": 52
	},
	{
		"transcript": "Then, we'll talk about the reduction in the data preprocessing part.",
		"week": 3,
		"page": 53
	},
	{
		"transcript": "So, data reduction obtains a reduced representation of the data set that is much smaller in volume but yet produces the same or almost the same analytical results. So why reduction? So why we want to use that? So that database or data warehouse may store terabytes of data, complex data analysis may take a very long time to run on the complete dataset. There's a reason why we want to reduction of data. There are data reduction methods. For example, wavelet transforms, the PCA, and the feature creation, the feature subset selection. The numerosity reduction. So, regression and log-linear models, the histogram, clustering, the data cube aggregation. So, data compression. Well, I will first try to quickly give you an overview of those different methods and then, in another side, we'll be ready to talk about regression a bit in binary.",
		"week": 3,
		"page": 54
	},
	{
		"transcript": "So, let's continue. So first of all, data dimensionality reduction. I think you guys noticed about the curse of dimensionality, so when the dimensionality increases, data becomes increasingly sparse and density and distance between points which is critical to clustering, outlier analysis becomes less meaningful the possible combination of subspaces will grow exponentially. Next is dimensionality reduction that is avoid the curse of dimensionality help eliminate irrelevant features and reduce noise reduce time and space required in data mining allow easier visualization, and another is dimensionality reduction techniques for example wavelet transforms, principal component analysis and supervises and nonlinear techniques.",
		"week": 3,
		"page": 55
	},
	{
		"transcript": "And this is about PCA. So that means is to find the projection that captures the largest amount of variation in data in the original data are projected onto a much smaller space resulting in the dimensionality reduction, we find the Eigen vectors of the covariance matrix and these Eigen vectors define the new space. So, in order to determine data are projected on a smaller space, resulting in a dimensionality reduction, we find the eigenvectors and of the covariant matrix, and those eigenvectors depend on a new space. So, actually, you can see, so here are like a major excess of the datasets there.",
		"week": 3,
		"page": 56
	},
	{
		"transcript": "For the PCA, so I would like to skip this part a little bit because then we have another specific class that we will review it again. Let's try to skip that.",
		"week": 3,
		"page": 57
	},
	{
		"transcript": "So, another way to reduce the dimensionality of the data is redundant attributes duplicate much or all the information contained in one or more other attributes. For example, purchase price of a product and the amount of sales tax paid and the irrelevant attributes that contain no information that is useful for the data mining task at hand. For example, students’ id is often irrelevant to the task of predicting students GPA.",
		"week": 3,
		"page": 58
	},
	{
		"transcript": "Heuristic search in attribute selection, there are second possible attribute combinations of d attributes. Typical heuristic attribute selection methods. For example, the best single attribute under the attribute independence assumption, choose by significance tests.  So, best step-wise feature selection. The best single-attribute is picked first, then next best attribute condition to the first. And step-wise attribute elimination.  So, repeatedly eliminate the worst attribute and the best combined attribute selection and elimination. So, optimal branch and bound. So, use attribute elevation and backtracking to do that.",
		"week": 3,
		"page": 59
	},
	{
		"transcript": "And even for the attribute creation that's specific where you use the feature generation. So general and correct, you can view attributes or features that are coming captured, that are important information in the dataset more effectively is that original ones. There are 3 generated methodologies. For example, attribute extraction, so domain-specific, mapping data to new space, seem like data reduction. For example, these kinds of methods. Attribute construction, combining features, so discriminative frequent patterns in some kind of chapter 7 here. And data discretization there. There are several methods, so we can do that.",
		"week": 3,
		"page": 60
	},
	{
		"transcript": "The second data dimension is the numerosity reduction. So, reduce data volume by choosing alternative, smaller forms of data representation. Parametric methods. For example, regression.  And non-parametric methods, do not assume models, major families like histograms, clustering and knn stuff.",
		"week": 3,
		"page": 61
	},
	{
		"transcript": "As the first of all, the first part of parametric models, there's different regression model, multiple type regression, linear regression, and log linear regression. ",
		"week": 3,
		"page": 62
	},
	{
		"transcript": "And this, I also will skip this regression a little bit, because we will cover it in the details later about.",
		"week": 3,
		"page": 63
	},
	{
		"transcript": "Linear regressions should this easy one, linear regression. The multiple regression should be multivariable, and the log-linear models.",
		"week": 3,
		"page": 64
	},
	{
		"transcript": "And here's about the histogram and analysis. So, divide data into buckets and store the average sum for each bucket which means that this is, like, bucket like, you are like, each of different bin. Right? Each of bin, for example, one bin can represent, like, 1 to 10, like, 10 to 20 is like equal each of bin wide. Then you can calculate the frequencies of each of bin. That's it. The initial rules like the equal width were missing the equal bucket range. For example, this, which means that it should be the whites of it should be equal. Another way is like equal frequency or equal depths, which you just like as this kind should be equal. So, there's 2 different rules for the partition of it.",
		"week": 3,
		"page": 65
	},
	{
		"transcript": "So then, we are talking about the clustering. So, partition data into clusters based on similarity, and store the cluster presentation. For example, centroid and diameter only. Can be very effective, if a data is a cluster but not if data is smeared there. Can have hierarchical clustering and be stored in multi-dimensional index tree structures. There are many choices of clustering definitions and clustering algorithms. The cluster analysis will be studied in the depth in chapter 10 later.",
		"week": 3,
		"page": 66
	},
	{
		"transcript": "And in the sampling, in the sampling, it should obtain a small sample s to represent the whole data set N. And allow a mining algorithm to run in complexity that is potentially sub linear to the size of the data. The key principle here is to choose a representative subset of dataset. Simple random sampling may have poor performance in the presence of skew. And develop adaptive sampling method that is stratified sampling. Note for sampling may not reduce the dataset. So, newly for sampling the N tries to give you the whole dataset. Some part is left less.",
		"week": 3,
		"page": 67
	},
	{
		"transcript": "And there are different types of sampling, quite simple random sampling, and the sampling without a replacement, and sample with replacement and stratified sampling additional dataset that draw samples from each partition It is proportionally or approximately the same percentage of data. And the user conjunction with the skewed data layer.",
		"week": 3,
		"page": 68
	},
	{
		"transcript": "Has some graphic about with or without replacement. For example, this is our raw data. I could use a simple random sample of result in placement, and that, for example, gets this case, and there's just another development here.",
		"week": 3,
		"page": 69
	},
	{
		"transcript": "And for the sampling, for clustering or stratified sampling, so this is a word that again for clustering and basically 1 should classify into data cube aggregations or lower level of the data.",
		"week": 3,
		"page": 70
	},
	{
		"transcript": "And the data cube aggregation the lowest level of a data cube base cuboid the aggregated data for an individual entity of interest example like a customer in a phone calling data warehouse. Then the multiple levels of aggregation in data cubes further reduce the size of the data to deal with the reference appropriate levels use the smallest representation which is enough to solve the task. The queries regarding aggregated information should be answered using the data cube, when possible.",
		"week": 3,
		"page": 71
	},
	{
		"transcript": "And then the data compression, so there are extensive theories and well-tuned algorithms typically lossless but only limited manipulation is possible without expansion. For example, in audio and video compression typically we have loss compression with progressive refinement. Sometimes small fragments of signal can be reconstructed without reconstructing the whole. So, for the time sequence is not audio. So, typically short and vary slowly with time. So, dimensionality and numerosity reduction may also be considered as forms of data compression here.",
		"week": 3,
		"page": 72
	},
	{
		"transcript": "Here is another part about data compression. This is like an original data. What does this lossless mean? That's less than use model. basically, you probably have some kind of original data. When we apply lossless compression or approximation to data, we aim to reduce its complexity while preserving all of its original information. Sometimes in your computer, a union, zip a file, another file, or eventually unzip the file. So, you get some kind of similar information. But for the loss less in this means that if you're compressed, your data, for example, your compressed, your very big, big model, so your metric, and the statistics won't be lost.",
		"week": 3,
		"page": 73
	},
	{
		"transcript": "So, lastly, we will quickly mention about data transformation and data discretization there.",
		"week": 3,
		"page": 74
	},
	{
		"transcript": "A function that maps the entire set of values of given attributes to a new set of replacement values witch each old value can be identified with one of the new values. These are some methods. For example, smoot, feature construction, aggregation, normalization, min-max normalization, z-score normalization, normalization by decimal scaling and discretization. Concept hierarchy climbing.",
		"week": 3,
		"page": 75
	},
	{
		"transcript": "And here's the more details about min-max normalization, and z-score normalization and normalization by decimal scaling. Right? So, all different ways. And for the first one, the second one, those 2 methods should be some frequently used in the normalization methods yet.",
		"week": 3,
		"page": 76
	},
	{
		"transcript": "But discretization, basically three types of attributes. For nominal, ordinal, and numeric. For example, nominal values from an unordered set, we have an unordered set like color, some profession. Ordinal means values from an ordered set. For example, military or academic rank. And numerical, just real numbers. It should be easy to understand like integer or real numbers. In the discretization, to divide the range of a continuous attribute into intervals. Interval labels can be used to replace actual data values. Reduce the data size by discretization. Supervised compared to unsupervised. Splitting top-down versus merge bottom-up. Discretization can be performed recursively on an attribute. Prepare for further analysis. For example, the classification. So, for before your classification, you really need to process the data. For example, convert this kind of video and audio data to some kind of numerical presentation. But eventually, you cannot put text in some kind of model. Right? It should be definitely some numbers.",
		"week": 3,
		"page": 77
	},
	{
		"transcript": "And here are just some methods like, typical binning, some histogram analysis, or clustering, some decision tree analysis, like correlation analysis that just we reviewed before.",
		"week": 3,
		"page": 78
	},
	{
		"transcript": "And we have equal-width partitioning of the histogram, and the equal-depth partitioning into histogram.",
		"week": 3,
		"page": 79
	},
	{
		"transcript": "And binning methods are called smoothing, and here is just some kind of detail. For example, bin 1 should be at this number. This is really you focus most by being missed be like a lot of different bins. If we try to smooth by bin boundaries, like in this way. So, there are different ways that we can participate sizes of the data there.",
		"week": 3,
		"page": 80
	},
	{
		"transcript": "And here, just about the visualization, about the different base in terms of, like, these bins will be equal to the frequency, and this is the k means clustering shows better results eventually like that.",
		"week": 3,
		"page": 81
	},
	{
		"transcript": "Here are some details of the classification. For example, decision tree analysis, like, supervised, using entropy to determine the split point, and top-down, recursive split, and the correlation analysis that we already mentioned is chi-square. Right?",
		"week": 3,
		"page": 82
	},
	{
		"transcript": "The concept of hierarchy generation which means that organizes concepts that is attribute values hierarchically and is usually associated with each dimension in a data warehouse. The concept hierarchies facilitate the drilling and rolling in a data warehouse to view data in multiple granularity. The concept hierarchy formation recursively reduces the data by collecting and replacing low level concepts such as numeric values for age by higher level concepts such as youth adult or senior. The concept hierarchies can be explicitly specified by domain and or data warehouse designers. The concept hierarchy can be automatically formed for both numeric and nominal data. For numeric data use discretization methods shown before.",
		"week": 3,
		"page": 83
	},
	{
		"transcript": "Here is the hierarchy generation for nominal data that is the specification of partial or total ordering of attributes explicitly at the schema level by users or experts that is street city state and country. Specification of hierarchy for a set of values by explicit data grouping for example urban chaplain Chicago and the specification of only a partial set of attributes for example only street or city not other and lastly for automatic generation of hierarchies or attribute level by the analysis of number of distinct values for example set of attributes like street city state and country.",
		"week": 3,
		"page": 84
	},
	{
		"transcript": "So, here's just about example of how ours is different than cases, but a country like how many progresses or how many states do you have as many cities, how many streets there.",
		"week": 3,
		"page": 85
	},
	{
		"transcript": "",
		"week": 3,
		"page": 86
	},
	{
		"transcript": "So, let's just quickly review about the use of data preprocessing. We mentioned today by the data qualities and data cleanings, data integration, and data reduction. And the data transformation and data discretization. I would like to say, up to now, we already covered some very basic concepts in machine learning. So, we have already covered about this mass background. And also, we couldn't imagine about that standard preprocessing under those some see that you guys should already know. Right? You shouldn't have any difficulties from now. And from ready from next week. We will learn some machine learning algorithms in detail. So today, maybe we have a little bit of time. Let's try to start with a little bit about regression stuff.",
		"week": 3,
		"page": 87
	},
	{
		"transcript": "",
		"week": 3,
		"page": 88
	},
	{
		"transcript": "So now let's see about the regression. So, we will very quickly talk about some differences between the regression and the classification. Then we’ll mention about simple linear regression, multi linear regression, some polynomial regression, some regression metrics, and some classification metrics. You guys should know about all of that.",
		"week": 3,
		"page": 89
	},
	{
		"transcript": "So now, what is what is the difference between regression and classification? They don't know whether it's classification. Yeah. Okay. We catch a mixed price here. What about I mean, as and other answers of our participants speaking with question and classification? I think for regression, your predictive target is the numerical data, and for the classification is like your predictive target is. It's not the numerical data. It is the It is the ordinary or the classification data. Is that correct? Yes. Kind off. So, I will answer this question later. So now, let's first tell what is the classification. The classification is really. We want to classify things. Or even with different categories. Like, do a bunch of other images of cat, dog, or other animals, but classification is just 1 possible. Classification. So now let's talk about what are the other differences between regression and classification. For classification, so actually, the output is nominal. This is something you need to remember. And the regression, the output is a very continuous number. There can be any continuous number. Right? But for the classification, there can be just a norm, which means that can be 1, or 2, or 3, or 4. It can be these numbers. Right? It cannot be, but classification cannot be 0.1, 0.2, 0.3. All of our regression, there can be any continuous number. You can see the difference here, what about you? Okay. Good. Other regressions are typically, the easy 1 is just a normal linear regression. It means just y equals to mx plus b. On about the multiple regression, that means just that we have a different regression in mind, different available, in the regression. But about polynomial, polynomial is missing that we have different degrees of regression. Right? As you can see. And about the classification, some methods like classification like k nearest neighbor some decision tree classification, and some random forest classification. So, during the classification, we're really more likely to find this boundary between different classes, right? But it was a regression. We really wanted to figure out data. Right? Just see the difference from the channel. Any questions so far? No? Okay. Let's continue.",
		"week": 3,
		"page": 90
	},
	{
		"transcript": "Linear regression is a linear model for example a model that assumes a linear relationship between the input variables x and the single output variable y. Most specifically that y can be calculated from a linear combination of the input variable x. When there is a single input variable x the method is referred to as simple linear regression and when there are multiple input variables that often refer to multiple linear regression.",
		"week": 3,
		"page": 91
	},
	{
		"transcript": "So now, this is so called a simple linear regression problem. A single x, a single y, the form should be y, equal to b 0 plus, b 1 times with x 1. So here, x 1, just so called an independent variable. Or IV here. The dependent variable DV here should be Y. So B0 is constant, and the B1 is the coefficient So from the equation.",
		"week": 3,
		"page": 92
	},
	{
		"transcript": "So, again, 1 kind of model about to predict your salary with your different experience of years. For example, here, the equivalent of the salary is able to B 0 across B1 times with variance. And then you can try to predict how much salary will be increased during the years. Right? I think it's typically You should be just a simple linear regression model. No question? 1. Yes, sir.",
		"week": 3,
		"page": 93
	},
	{
		"transcript": "Okay. Good. And then here's another example you can just to try later, you might be interested to calculate the number of years of experience with salaries. So, salary is a dependent variable DV And, IV is the independent variable again.",
		"week": 3,
		"page": 94
	},
	{
		"transcript": "It's just the cases that you can perform. Simple linear regression. For example, you can import data. You wanna try to import this kind of data and let you guys know, no need of missing data, you can try to split into training and test then you will feature scaling by a least of preferred here, and then you will try to or maybe the salary was in years. You tried to do our predictions. So, then you were trying to verify your predictions. So, then you tried to You verified how good it is for you has let's say, it's about the system of linear regression.",
		"week": 3,
		"page": 95
	},
	{
		"transcript": "What about multiple linear regression, which means that you have multiple variables, you put a variable in fact. So here, for X1, X2 X and all of those are called so called independent variables. And for the B1, B2 to BN, it's still called a coefficient, and for the b0s, they are should constant. And then y should be the dependent variable. So, this is about called the multiple linear regression.",
		"week": 3,
		"page": 96
	},
	{
		"transcript": "This is about multi linear regression. The multiple linear regression requires at least two independent variables, which can be nominal, ordinal, or interval-ratio level variables. And a rule of thumb for the sample size is that regression analysis requires at least 20 cases per independent variable in the analysis. So, first, multiple linear regression requires the relationship between the independent and dependent variables to be linear. The linearity assumption can be best be tested with scatter plots. The following two examples depict curvilinear relationship left and a linear relationship right.",
		"week": 3,
		"page": 97
	},
	{
		"transcript": "But, anyways, we had some other examples that you can try to view with the multiple linear regression. So, for example, in this case, what are other input variables?",
		"week": 3,
		"page": 98
	},
	{
		"transcript": "So now you can see that for the first 3, it should be easy, right, because it's just the numbers. What about this, these states. Probably 1 way you try, you need to denote to this different number. For example, New York to be 0, and for California 1, whatever, there can be 2, so you can we'll present this text as a number 1. Right? Because eventually you need to use numbers during the table. So then over here, the D1 is just can be represented about the dummy variables. Right? So, this is about multilinear regression.",
		"week": 3,
		"page": 99
	},
	{
		"transcript": "And here's another case about polynomial regression, regression equation is a polynomial regression equation if the power of the independent variable is more than 1 then the equation below represents a polynomial equation that y is equal to a plus b multiplied by x square.",
		"week": 3,
		"page": 100
	},
	{
		"transcript": "While there might be a temptation to fit a higher degree polynomial to get a lower error. This can result in overfitting and always plot the relationships to see the fit and focus on making sure the curve fits the nature of the problem. Here is an example of how plotting can help as described in the below image.",
		"week": 3,
		"page": 101
	},
	{
		"transcript": "So here, it's about some metrics, about this regression problem. So, for example, MAE, MSE mean square error. It's typical for those numbers that are smaller the better. So, you may have to go. How good of your best model, you probably needed to report those kinds of different values about this ranking. But anyway, you need to gather small numbers for these different metrics.",
		"week": 3,
		"page": 102
	},
	{
		"transcript": "And now what about classification metrics? So, a classification task can be evaluated in many different ways to achieve specific objectives of course the most important metric is the accuracy often expressed as generic accuracy as noted below by the formula. One minus the ratio of the number of misclassified samples to that of the total number of samples. Right? That's it. It's called an accuracy. Right? And there is no problem with this. Right? Okay. So, you know, it's scikit learn that can be accessed by using some accuracy score, by calling the function. So, then this is the function, and this is the y test, and this is the ground truth you have. And here are the prediction values. For example, we've got 0. 9 quality is pretty high, but good accuracy. Right?",
		"week": 3,
		"page": 103
	},
	{
		"transcript": "Other ways to try to see about the confusion matrix, right? It is necessary to be able to differentiate between different kinds of misclassifications. So, we are considering about the binary cases with conventional notation. For example, the 0 can be negative and I mean positive, because the relative weight is quite different for this reason. We introduce the following definitions like true positive is a positive sample of criteria classified. The false positive is a negative sample classified as a positive, and the true negative is a negative sample of correctly classified. And false negative is a positive, example, classified as negative. It is confusing right, but try to memorize the true positive, whatever the true negative, what about the false positive, or false negative?",
		"week": 3,
		"page": 104
	},
	{
		"transcript": "So last thing again. False positive and false negative can be considered as similar entity but think about a medical prediction. while a false positive can be easily discovered with further tests but a false negative is often neglected with repercussions following the consequences of these actions. For this reason, it is useful to introduce the concept of a confusion matrix. But typically, here, just everything is a binary classification here, it's the confusion metrics. So, this is the true positive value, and the true negative values you have false negative and false positive. Right? So, here are just the 4 kinds of numbers there.",
		"week": 3,
		"page": 105
	},
	{
		"transcript": "For example, in sklearn library, you can import the confusion matrix from the metrics of sklearn. So, yeah, you how you call it. Take away the confusion metrics. That is y, truth, equal to your ground truth, and this is a prediction. Then you will assure you this is the, if you have your elementary expression, and we will have false positive, and true positive, we will soon see, we will move on again by Well, I see how you can get accuracy from your confusion matrix. Right? Actually, you know, I don't know how to take the accuracy based on your confusion metrics. So actually, it's just a 55 to 68, then divide the thumb of all of them. You take the diagonal elements, then divide the elements and you get the answer. That's it. Good. So, another useful direction is to try to measure some other metric such as precision. That means that true positive divided by true positive plus false positive.",
		"week": 3,
		"page": 106
	},
	{
		"transcript": "And also, you can calculate another 1 that says, recall, it is equal to true positive to the sum of true positives and false negatives. And this is also some useful stuff there.",
		"week": 3,
		"page": 107
	},
	{
		"transcript": "And here is also 1 another line, a 1 line is calling the function of the precision score. On second line is called as precise score, and then you get a better scope. And this ability to detect positive examples among all the actual positives can be accessed using another measure.",
		"week": 3,
		"page": 108
	},
	{
		"transcript": "ROC curve. So, it's a ROC curve or receiver operating characteristics is a valuable tool to compare different classifiers that can align a score to their predictions. So, in general, this score can be interpreted as a probability so it is bounded between 0 and 1. The plane is structured like in the following figure.",
		"week": 3,
		"page": 109
	},
	{
		"transcript": "In this case. In the x-axis means the false positive rate or specificity. And the true y-axis means the true positive rate or positive sensitivity. And here, if you have a random guess, so here, so have a random performance just like these blue lines are a lot of results for the random guess. Random guess, of 0.5 of probability. Right? But if you're very small, very close to this area, you will get a very worst performance. Or, let's say, for your data point very close to this part, you will get a very good performance. Did you get that? Okay. Good. I think most of you guys should know about the ROC curve. Right?",
		"week": 3,
		"page": 110
	},
	{
		"transcript": "This is already mentioned, well, the dashed oblique line represents a perfectly random classifier. So, all the curves below this threshold perform worse than a random choice, while the ones above it show better performances. Of course, the best classifier has a ROC curve split into the segments 0, 0 to 0, 1, and 0, 1 to 1, 1 and our goal is to find the algorithms whose performance should be as close as possible to this limit. To show how we create a ROC curve with scikit learn we are going to train a model to determine the scores for the predictions this can be achieved using the decision function to predict probability methods. We are going to train our model to detect the score for the predictions, and it can be achieved using some decision function of the predictive mobility method.",
		"week": 3,
		"page": 111
	},
	{
		"transcript": "For example, this gets just a few lines on the course. No matter this is the first line just about how you separate the data to 0.25 as a test of 0.75 as a training. And as for this case, we use a logistic regression model LRM, and so then we work out some predictions from another model. So, then we can compare the roc curves for them. Okay. We report these ROC curves so that we can plot them.",
		"week": 3,
		"page": 112
	},
	{
		"transcript": "And this is also another way. So, let's say Let's see what's the code and here it is.",
		"week": 3,
		"page": 113
	},
	{
		"transcript": "So now that is the figure that we really want to get. Again, the x-axis is just a positive rate, and the y-axis represents for the true positive. And here, this blue line, again, is about a random guess. And this red line is a result from the logistic regression. What does this mean? This means what? I want some answer from you. What does this mean? Why does it have a good performance? Yes, that's correct. So, also, I think for those online students, you should get it. It is very good. Because it is in this area. And, also the AUC score achieves that .97 which is pretty high, right, in many classification models.",
		"week": 3,
		"page": 114
	},
	{
		"transcript": "I think it should be too much for today. I think you guys have a very brief understanding about the regression and the classification metrics. And the start from next week, we'll be ready to do some kind of a little bit difficult understanding about mass or staffing. For example, about just the logistic regression, I feel we already have this kind of positive about logistic regression. Right? Sounds good. A little. A little? No. No. I have all the logistic regression. Or something, but it was more like a really linear regression. Okay. Okay. Good.",
		"week": 3,
		"page": 115
	},
	{
		"transcript": "And, again, in this case, where I have another homework 3 for this week. But this case should be another easy homework for you guys. Questions are about and that's a very easy home model of your guys. The question is about How to change a classification problem to a regression problem. And how to change a regression problem to a classification problem. Yes. More than 300 words there. For ChatGPT is also. No, I don't care about ChatGPT. I more care about answers from you guys. Because, in the first homework, some of you gave me very limited answers. It's not enough. Okay? It is too short. It's not a sort of idea. Right? So, now, I really want you to think about your idea about how to change it. For example, in a classification problem, how can you change a regression model to a classification problem? Give us, maybe give me an example of how you can do that. You, guys, have you any kind of problem? Got it? This question? It should be very easy. Right?",
		"week": 3,
		"page": 116
	},
	{
		"transcript": "Okay. I think that's it for today. For our online students. Do you have any other questions?",
		"week": 3,
		"page": 117
	},
    {
        "transcript": "So, now let's get started with this lecture with today, we're going to talk about the logistic regression model and the least squares, hopefully, we can cover all of it.",
        "week": 4,
        "page": 1
    },
    {
        "transcript": "Last week, we briefly mentioned about differences between the regression and the classification. And we talk about the simple linear regression and a multilinear regression and the polynomial regression. We're also mentioned several metrics regarding to regression problem, and the classification problem. What are the commonly used metrics for the classification problem? Can you remember? What is kind of metrics that we regularly used for the classification problem? Yeah. Confusion metrics can be one. What else? That's pull that student. Pull it back. Accuracy. Definitely, can you remember. Yes. So, we also have other metrics such as f1 scores or other scores, also about ROC curve is another metric to evaluate your models. You may have found that this regression is something that we will learn today is not from the previous class.",
        "week": 4,
        "page": 2
    },
    {
        "transcript": "And, yes, I would like that we will briefly mention about classification problem again and Will try to answer the question, why not use linear regression for a classification problem? And then, we will really go to the details of logistic regression. For example, how the hypothesis presentation and some cost function, logistic regression with gradient descent, regularization. And then we will talk about how to generalize the binary classification to multi-classification. And lastly, we will talk about the least squares regression.",
        "week": 4,
        "page": 3
    },
    {
        "transcript": "The vision of classification problem again. So, typically, if it is a binary classification then we have 2 classes. Right? We'll use 0 to represent the negative class and we'll use the 1 to represent the positive class. There are several applications. For example, in your email, you may detect whether it is spam or not spam, in a medical part once we want to identify whether it is tumor, or tumor is malignant or benign, and for the transaction, we will detect whether it is fraud or no fraud, right? Yeah. Several examples about classification, binary classification problem.",
        "week": 4,
        "page": 4
    },
    {
        "transcript": "As a review about the earlier linear classification that we discussed last week, So, in this example, we have so many different lines here, and those lines are called what? Those lines are what? What. Those lines are what? Regression? Yes. It is the regression line, but we usually call it as hyperplane or call it as decision boundary, right? If in the left hand we choose the event in class if it is in the other side, we'll choose the class 2 here. Right?",
        "week": 4,
        "page": 5
    },
    {
        "transcript": "Why we mention a problem of it is not a good way to use linear regression for classification problem. Do you know why. Yes, that can be. That's the 1 point about here. So, actually, we more care about the details. Okay. Yeah. That can be another answer for it. But, here, we not want to use linear regression that he is a linear regression will be affected by some outliers points a lot.",
        "week": 4,
        "page": 6
    },
    {
        "transcript": "So, let's talk more details of it. So, now, give an example of tumor size, and it's my definite to see whether the tumor is the malicious or a benign. So, now, let's say, if we want to use a linear regression to fit these data points. Where it is now. Long. The line should be this way or should be this way. So, this way? How should we be this way? Which way? You see him this way? Come on? Are you guys agree that? so actually so you guys need to notice that. A linear regression, we act your own freedom that once. We want the data point that at close, not the line is close to the data point. Right? So typically, we are use this as the linear line. That it can now point to right, because it fits a lot of data points, right? And this regression lines that you guys can calculate to fit those datasets. So, let's say, in this case, we can define a threshold, right, was a linear regression, and h theta x here means the output of your need. The theta here means the parameters. So, let's say, for your outputs, it's bigger than 0.5, we are trying to predict it as 1. If not, we were just predicting it as 0 here, but so, let's say here is a threshold 0.5. So which part is negative, and which part is positive. Is this example. Here's the threshold 0.5. Say it loudly. You mean this part is positive? Why it is positive? Do you think this part is positive or negative? It's kind of negative, right? Let's see more details. So, actually, we're using this line as kind of our decision boundary. So, if it is below 0.5 you look this part, it is negative. If it is bigger than 0.5, those parts. So those 4 points, where we will say, it is positive, right. So, in this example, you may think that this linear regression should be a good model, right. Can you realize the purpose of classification? Can you do that for this dataset? Is it a good one? Good one, right? Because it can successfully separate those two different classes, but however, let's see another case.",
        "week": 4,
        "page": 7
    },
    {
        "transcript": "So, this is similar as before, let's say, we have another out layer. So now for linear line, Well, it's for this guy. What will change? What will change? This line, but be close to this point right, is that true? You guys learn about linear regression, right? Alright. So now in this case, we kind of for this green line should be close to this point, right, because its boundary fit all the data points. But now, did you notice something different? Here. So let's say we still want to use the previous 0.5 as the threshold. So, what will change? The answer is here. so, if you would fit the best of the regression line. There still won't be enough to decide any point by which we can differentiate classes. It will, put some positive class examples into negative classes. So, in this example, what 10 points will be pushed to the negative? In this case? How many points now? 3, 3 points. Are you guys agree with him? How many points will be pushed to the left? 7 points? This is four, and you will have another three right. So, actually, you will put these 3 points where previously should be in the positive class, right? So, in this case, here is the decision boundary, so in this case, you will move to the negative points. So, in this case, a linear regression did not do a good job. Right? This is the key reason why we won't to use the linear regression for classification problems, because it will be affected by outliers a lot, right. Now, you get the point? Okay. Good.",
        "week": 4,
        "page": 8
    },
    {
        "transcript": "So, let's very talk about logistic regression. So, logistic regression is one of the basic and the popular algorithms to solve a classification problem. So, let's say, in the future, if your reviewer asks a question about what is the usage for the logistic regression. Is it for a regression problem or is it for a classification problem? If you say logistic regression if for regression problem. Then we're done with it. But remember about that, logistic regression is really for classification problem. So that we will discuss more about it. It's known as a logistic regression, because its underlying technique is quite the same as linear regression, and the term logistic is taken from the logit function. That is used in this method for classification. What is logit function here? You guys remember? You mean y or you mean x? Y is 0 to 1, why? Okay, so let's say, here is about logit function. So, x is 0 to 1. And Y should be any real numbers, right? Now, what you said is called the sigmoid function. So now you guys notice the differences between logit function and sigmoid function. Did you see it? So, let's say what is the range of the logic function. What is x range? That's 1 in this model. Can you see it? 0 to 1, right. So, what about x range in your sigmoid function? What? Your x is between what for sigmoid function. That's it. The ideal range of x is between what? Connectively even is, which is the positive you use. Right? Because you know why your sigmoid is between 0 and 1, right. Because 0 and 1 is so called the probability, are you notice that. So now you have seen the logit function is kind of opposite for sigmoid function that you guys need to remember. Yeah. Kind of yeah. There has differences between them. Okay. remember about it.",
        "week": 4,
        "page": 9
    },
    {
        "transcript": "Okay. So, now, as your review about the previous classification. So, even in binary classification, we have 1 as positive and 0 as negative. So, in that case. Let's think about the previous linear regression model. So, the model is h theta x. That is equal to theta transpose times x. So basically. That's w x plus b. Right? for linear regressions. Everything you guys need to know, right? And this output can be bigger than 1, or negative 1, and even can be any number. Is that correct? Okay. Yeah. So then what about the logistic regression? So actually, we want the output is between 0 and 1. And this is very close the line of probability. Right? between 0 and 1. So previous, this tell you x can be any number. We can do what so that it can be between 0 and 1. What kind of function?",
        "week": 4,
        "page": 10
    },
    {
        "transcript": "Let's say, if we want to achieve the rule of between 0 and 1, what should we do here. Any guess. What should we do so that we can get an interval between 0 and 1. Any guess. No. It's 1 divided. It's not exactly about 1 divided. It's kind of so actually, once I point out you guys can remember, so this is really about sigmoid function. Sigmoid function by the. Actually, once we apply sigmoid function, it just naturally becomes what?",
        "week": 4,
        "page": 11
    },
    {
        "transcript": "You know, like So, here's the details of the sigmoid function so, the x or z can be any number and the y between 0 and 1, and this function is so called a sigmoid function, or we call it a logistic regression. So, I think up to now, you guys know what we need to do to apply for it is a line of edition, the sigmoid function for a linear regression right so that it changes into the logistic regression. And then eventually, we have to add negative to h of x here as the 1 divided by 1 plus e minus theta T times with x. But this part, this part is really about z right the z is donated in the equation about theta T times x.",
        "week": 4,
        "page": 12
    },
    {
        "transcript": "So let's try to integrate of hypothesis output. Let's say the h of x, that is equal to the estimated probabilities, that is y, is equal to 1 on the input of point x. So, give an example, your x is equal to the transpose of the x0, and x1. What is x0? x0 is equal to what? What is x0? Any guess about x0. What is x0 here? It is kind of. But we usually called it as a bias. So, the x0 here is so-called a bias. So, previous, about linear regression, we may have w x plus b, right? So, this b, the bias, so, eventually, the B, we can be incorporated with x. We can bind them together. So, that, you will find that your weighted first dimension should be like, 1. So, that is the bias. Give a, example, let's say h theta x is equal to 0.7. What does this mean? Yes. So, actually, so, that means that you can tell the patient that 70 percent chance that tumor will be malignant, right? Any questions?",
        "week": 4,
        "page": 13
    },
    {
        "transcript": "And that has more details that we will try to integrate our logistic regression. So, supposing that predicted is the y is equal to 1 once you see the x is bigger than 0.5. Why? This is z is bigger than 0 Is this correct? Why z should be bigger than 0. If y is equal to 1, What? Say it again? Yes. Those key points there. Yeah. So once let's say we try to predict y is equal to 1. You have to make sure you would like to see z is bigger than 0, because you can see from the plot, right? If it is close to 1, the definitely the z should be bigger than 0, right. If it is negative, so definitely, your z should be less than 0. Can you hear me? Good. Previous we mentioned about lots of about these thetas, right?",
        "week": 4,
        "page": 14
    },
    {
        "transcript": "So, let's review this function again. So, given a bunch of functions of x, xi to x capital i, so we have another kind of weights. w1, wi to w capital i here. And for the linear regression, guys, also notice that you really have like a sum of all the weight that passes plus b as a bias here. So that we can get our kind of GZ, and z is what? Z is just the sigmoid function, right, So, after that, you can get a this. What's this? Yeah, this is the probability. What is the w and b here is what? Yes. And we also call them as what? Together, we'll call this as what. Parameters, theta, right? So, exactly this w and b is our theta here, right? This is the weight and bias together just the set of thetas. The p just about the probability of x, in the category c1, right.",
        "week": 4,
        "page": 15
    },
    {
        "transcript": "So, let's try to see more about the decision boundaries. So, let's say, for example, the h x is equal to g theta 0 plus theta 1 times x1, plus theta 2 times x2. So, here is more examples. Let's say if theta 0 is equal to negative 3, and the theta 1 is equal to 1, theta 2 is equal to 1 here, and that we try to predict y is equal to 1 given this kind of what, this is what. This function is more like what kind of function? Is it like a line or circle or what? This is what. This is what. It's a line, right, actually. So, this is actually this line that we brought out here, right? So, you this is bigger than 0 it should be the positive. Right? If it less than, then it should right.",
        "week": 4,
        "page": 16
    },
    {
        "transcript": "Here are other examples. So, let's say if the h x is equal to g theta 0 plus the theta 1 times x1 plus the theta 2 times x2, Then plus the theta 3 x1 square and then plus the theta 4 x2 with the square here, here's more detail and different parameters of this. So then, there should be if we apply to those different numbers to it, what will we get? What will we get here? Get what? As what. Okay. Yes. Eventually, you will get like those, and then this is so-called circle, right? You got circle here, right? Good. And then, our point is just positive and negative inside is the negative 1. By measuring. And the further, we have extended the results. As you see that there can be more, like, from theta 0 to theta 1, to theta 6 blah blah, eventually, right. So, maybe we can further have kind of function in those, and then we can predict some kind of point like this. Similarly.",
        "week": 4,
        "page": 17
    },
    {
        "transcript": "But in this case, you may have question about why is this logistic regression have so, many different kinds of parameters. Right? Where does this form come from? So, here are the overall representations of a logistic regression hypothesis. And we have this like theta 0 plus theta 1, blah blah blah is to the theta n xn here, right? So, you're wanting this problem. How we can get this kind of function here? So, let's try to consider learning from our function f. That is mapping from x to y, and we are x should be a vector of real-valued features from x1 to xn, and Y here is a Boolean function is, it is just 0 or it is just 1. So, assume all xi are conditionally independent given y, and the model, P xi depends on giving y is equal to y k, as a Gaussian function, denoted in this one, right, and we also try to model P y, the probability of y has Bernoulli function as pi, who are using P y is equal to pie. Right? So, let's say what's going on about the probability of Y given x1 to xn. What, because the previous, as I mentioned, that P y is equal to pi, right, let's say, it's a Bernoulli functions.",
        "week": 4,
        "page": 18
    },
    {
        "transcript": "So, first of all, let's try to apply the Bayes rule. So, here is about probability of y is equal to 1 given x. So, apply the Bayes rule, what should be the probability here. Or should it be the probability of y is equal to 1, and then times with the probability of x, giving y is equal to 1, right. Is it correct? Can I apply the Bayes rule for this one? Let me use. So, what is the Bayes rule of this one? Anyone wants to write the equation for us. Ayush is that you? Go ahead. Write for us. You don't know. Can you remember bayes rule? Maybe you can have it a try. The Bayes rule about this one. Just apply the Bayes rule. And it doesn't matter. Yeah. You can just write. What are you think about the Bayes rule in your mind, regarding this one. We got not crazy about this just about, right. Is this correct? Do you agree with him? No. It should be 1. Can you write for us? The first one? So, we are more likely to use the first one which is so called the Bayes rule for you guys. For those you can't remember it, read again in our previous slide. So, this is the something we will use. So, actually, let's try to compare with those 2 again. So, this is the P x for probability of x given y just this which the denominator is correct, so, what about the denominator? Here is just p x. So, p x is about the probability of x. A probability of x should combine all the probability of y in the 0 and the probability of 1, right. So that is can be subplace in this case. Right? 1 and 0. Right? Right? On this equation. That's not it. So then, next step we need to try to divide by probability of y is equal to 1, and probability of x, given y is equal to 1, we can get this kind of equation, right, when we try to divide it by this one? We get this case right. So, next, we will try to apply the exponential and also about the log n. What does this mean? So, you will get what? So, let's say if the value of x here is equal to 1, the same, right, same as x. So, then we'll try to just apply this case, right, so we have this exponential and the logarithm, part here. So next, we try to separate here, right, with this. What we'll do? That is this part. So then that's the reason why this part the first part, we have said this is the pi, and why this is pi? It's from probability. Right? And then we try to apply all the cases about all I in this case. Right? We still have this model here. Eventually, we will try to, tried to use the probability of x given y, so, that is really about Gaussian function. Right? So, I will not explain too much here. But anyway, so, eventually, those party just means here. And then this party is so-called theta I that we want to mention, and this is eventually why we can get a lot of status here. Right?",
        "week": 4,
        "page": 19
    },
    {
        "transcript": "Can you get it? Okay.",
        "week": 4,
        "page": 20
    },
    {
        "transcript": "Okay. That's good. Let's try to talk about the next part. It's about cost function of a logistic regression.",
        "week": 4,
        "page": 21
    },
    {
        "transcript": "So, let's say, if we have a training set with examples, x1 to x2 to xm. And here's x should be is x0 to xn again. x0 is what? Bias again, right? And there's a y, should it be either 0 or 1. And the h theta x is just about this sigmoid function. Right? So, this should be times theta transpose x here. So, that case is, how can we choose the parameters, theta here?",
        "week": 4,
        "page": 22
    },
    {
        "transcript": "As track ready, it talked about, it's a previous cost function for the linear regressions. Remember in our linear regression, basically, we try to define cost function, that is this is what? H theta x y is what? This is what? I mean, so, everything from h theta xi. What is this? From linear regression. So, it's output. It is the output of the linear regression. And is this the yi, is ground truth originally there? And this is the sum so that we can calculate the cost. And we have to make it to cost as this equation, so, eventually we can say the cost of h theta x y should be equal to one over 2 and then bra of this. This is from linear regression. Right?",
        "week": 4,
        "page": 23
    },
    {
        "transcript": "What about the logistic regression here? So, actually, this is the function that we defined, but the logistic regression. So, if y is equal to one so, we will use negative log h theta x. If y is equal to 0, that will use negative log 1 minus h theta x here. Let's say, in this case, if the cost is equal to 0, if y is equal to 1, you see that it's equal to 1. Is this correct? For example, even let's say h x is close to 0 if we close to here. Now the cost should be infinite, right? So how can you draw this kind of plot here? It should be this way or should be this way? Any guess about this line. How this line changes here? In this part. h theta x is closer to 0, is closer to 1, and this part is close to what? How to draw this function here. Yeah. Here are two guesses for you guys. This is the first 1, but this 1, second 1 should be in this way. Which might be that the first one or second one? This line or this line. Why you choose? Why? So which 1 is this line? First 1. Are you guys agree with him? Yes, confused. Confused it. Okay. Why confused here. That's say if y is equal to 1, the cost is equal to 0. To be here, right? This is 1. This is y prediction. But this is a prediction, prediction is equal to 1. So, that cost is close to 0. So, then you have 1 point here, but, oppositely, if h of x is close to 0, so that costs to be given it. You have these 2 points. Right? So, then naturally should be the first 1. But is that right? But you have these 2 key points. 1 point here, 1 point here, should be like this. Right. And that's that. So, this is the plot of the cost function here.",
        "week": 4,
        "page": 24
    },
    {
        "transcript": "",
        "week": 4,
        "page": 25
    },
    {
        "transcript": "Can you hear me now? Oh, yes. So, let's say, if we try to combine them together, so, eventually, we will form the overall function our cost function, for the logistic regression, as you can see here. So, why should we do it this way? So, this is first part, why should we time with one. This is the second part. Why? We need to use the one minus y here. And guess, why do we want to use this one minus? Cause this is we want to match any positive number. Right? After applying this you should get positive. Right? So eventually, it will give you reduced cost function, right? We should use the negative. That's the reason why we use one minus to be here, so, eventually form the overall cost function. So, let's say the y is equal to 1. This the equation is equal to what. Y is 1. This is part. But you got it by. So, you should use negative log h theta x. If the y is equal to 0, so, that definitely is the second part. Right? So, we will get the negative log one minus theta x. So, it should be the same as the previous one. Remember, we have this negative here. Right? So, the negative the front.",
        "week": 4,
        "page": 26
    },
    {
        "transcript": "But here is the overall, that's just a regression for this cost functions. So, eventually, we tried to plug in. Right? Let's try to plug in with m examples. So, you should see the xi yi. So, eventually the cost should be previous step we mentioned. But this part, this part, this part, you see. Alright. By over m, then the sum from i to m, we mentioned that about previous for those functions. Right? And this is the case that you guys need to learn all kinds of about logistic regression. Eventually, for example in our gradient descent, we are really trying to minimize those functions. Let's say, during learning you are trying to find a parameter theta, and that is just minimized j theta here, j here, then generate prediction, given new x, generate the output of h theta x. This is logistic regression that we try to predict the probability of it. Yeah. I mean, questions here. What about online students? Are you guys have any questions so far? Okay. No. Let's continue.",
        "week": 4,
        "page": 27
    },
    {
        "transcript": "So, let's talk more about where does these cost functions come from another way that's to try to use likelihood function to see it. How can I get this? Similar as before, we have many examples from x1, y1 to xm ym. The maximum likelihood estimation for the parameter theta. So, definitely should be MLE here. So, we try to maximize the parameter for probability from x1 y1 to xm ym here. And they it can be donated with this part. Right? Continue the product from i equal 1 to the m. Now you go right? And then as far as our maximum condition for the maximum likelihood estimation for the parameter theta here.",
        "week": 4,
        "page": 28
    },
    {
        "transcript": "So, let's say our goal is what. Our goal is to try to choose the parameter theta to maximize the likelihood of training data. And this is like the probability of y, which y equal to one given the x, and this is probability of y equal to 0 given the x here. And this is just typically h theta x. And this should be 1 minus h theta x. That's you guys get it. What about our data model, likelihood? You should be also like to continue the product from i to 1 to the m. About all the parameters of p theta here, all the points. And this is the conditional likelihood that is of probability of yi given the probability of xi. Right? And here is the overall stuff that we tried to optimize. That is the maximum conditional likelihood that this is about here.",
        "week": 4,
        "page": 29
    },
    {
        "transcript": "So, as for how we can get the closed-form solution we were trying to discuss more about it, expressing the conditional log-likelihood. What about this? Once we take the log of the product. What can we get? Once we try to take the log all the product. What can we get? This is what? This is what? You know, you will have the sum. Is that correct? Right? So that's why the reason why this part changed to this one. Are you guys get it? And further, we can donate to this previous is the extension of all about the probability of yi given xi here, so, it's just final equation about everything here, and can think about the first this part is before to what. Let's say why y is equal to here. Any guess, any reasons? Why the probability of y given x is equal to here? You should notice what about the y. The y, we have how many we just have 0 and 1. That's the reason why you can expand this should be 0 or what. This part is what? And eventually, I can get another version of it, so, eventually is this equation. Great. And this is similar as before. Once we try to get a cost function y is equal to one. You should be, like negative log h theta of x. If y equals to 0. So, we can get the negative log of 1 minus h theta x.",
        "week": 4,
        "page": 30
    },
    {
        "transcript": "Next, the point that we try to discuss about the logistic regression using gradient descent method, how we can get approach this kind of parameter theta here.",
        "week": 4,
        "page": 31
    },
    {
        "transcript": "Or is the j theta here is what. J is what here? Yeah. J is the cost function, also called the objective function because we define and our goal is what? Just try to minimize J theta here. What about good news? Good news is that it is a convex function. At a convex function, this what, you can find a minimum number of it. But the bad news is what. There's not analytical solution. We have to use the gradient descent to approximate this number. Right? So, that is remember this is the key points about gradient descent. Right? We have the theta j, and the theta j minus alpha. That is the directive of j theta that respects to each theta j here. Right? What about alpha here? What is alpha here. Yes. That's correct. Alpha is learning rate. So, then next step you're trying to think of updates, all the parameters of theta. So, here, this is about how we calculate these derivatives, all these equations.",
        "week": 4,
        "page": 32
    },
    {
        "transcript": "So, let's continue about it. Once we try to plug in. It should become this one. Right? Okay. You're mine. The slow. It's kind of like snow. It's really about the learning rate. How fast it is? Eventually, should it be just the about this part. Right? You see this? That's the reason. We've already checked the derivative respected to the theta J here that becomes here. But that's the key reason why the change in another way. Right? That's good point.",
        "week": 4,
        "page": 33
    },
    {
        "transcript": "Let's try to remember, what is the gradient descent for linear regression. This is the previous for the linear regression we get. And here's now, we have a logistic regression here. Any difference in your mind? No difference? What? This part? that part? so this and that part is similar. Right? What I'm thinking is that, what is the h theta x. H theta x is the same for linear regression and logistic regression? Are the same here? What is the h theta of x for the linear regression? Why is it equal to what say again? It's a linear line. It's a mathematics, so, you say. It is more like w x plus b, that is the h theta x. What about the h theta in logistic regression? Can you remember, we just mentioned? Exactly. That is the sigmoid function. So, that's the reason the key difference is in h theta x. H theta function previously, it's just about linear equation, but in this case, it is really about a sigmoid function. So, in this case, the teacher can pause people to watch. That Yes. So, theta t, so it combines both the weight and the bias here. Right? So, that would be called the theta T. But always remember, in the first dimension, we have bias. And this is function for the logistic regression. So, this is the key difference between linear regression and the logistic regression during the gradient descent. In which part? Alpha. Yes. That's a good point. So, actually this part is already there.",
        "week": 4,
        "page": 34
    },
    {
        "transcript": "Next part we will talk about the regularization. Next, we wanna discuss about regularization here.",
        "week": 4,
        "page": 35
    },
    {
        "transcript": "Previously, we mentioned about the maximum conditional likelihood estimate like MCLE and also mention and now, what about MAP? What is MAP? The max. What is MAP? Any guess, about MAP is what. It is what? It is the maximum prior about MAP. Right? And this is the case in that is how the maximum conditional a posterior estimate. MCAP and this is how we donate in this case. What is the difference between them, the only difference is about in the prior. What is the prior? The P theta is prior here. In the next slide, we will mention more details about P theta. This is very about Gaussian functions. This P theta is really about prior. Only difference between MCLE and MCAP here.",
        "week": 4,
        "page": 36
    },
    {
        "transcript": "And here is the common choice of P theta that we usually try by the normal distribution will be the identity covariance, and a pushes parameter towards the zeros. And here are different kinds of regularizations, and it can help, it can help avoid a very large weight and overfitting. That's the one reason, why we want to use MAT. Because we very try to avoid by weight and overfitting. So, yeah, the case about all different kinds of regularization that you can see here.",
        "week": 4,
        "page": 37
    },
    {
        "transcript": "Then eventually, we try to see a difference about the gradient descent. Right? So, first part, you guys already noticed that this is about maximum conditional likelihood estimate, MCLE results, and here are the results about the MCAP. So, the only difference is that and another kind of parameter, not parameter, is a penalty here, alpha, lambda, theta j here, and lambda here is a kind of parameter. So, this is the key difference that once you introduce the part here, so, you eventually will get a kind of penalty once you try to use gradient descent. And then this is the difference between MLE and MAP here. Maybe we can take a 5 minutes break, we can refresh your memory. We have lots of math here. Right? Do you think it's a math instead of machine learning? By the way, we are going to machine learning part. This is the key theory. You really need to know the math behind it. Try to understand those, you are easy to implement code. Right? Cause the code will base on it. You guys will see it. Okay. That's try to have 5 minutes break.",
        "week": 4,
        "page": 38
    },
    {
        "transcript": "Maybe we can get started. So, actually, up to now, I would like to say for the majority about the logistic regression you should have best common about everything up to now. So, the next one I want to discuss about the multi-class classification, because previously we just talked about the binary classification problem. So, what about the multi-class classification we try to use logistic regression method.",
        "week": 4,
        "page": 39
    },
    {
        "transcript": "Here are more examples, for example, email holder or tagging, you may have multiple tagging for example, emails from work. Emails, from friends, from faculty, from Hobby, etcetera, right? What about medical diagrams? So, some sometimes you are not ill, you get a cold or maybe you catch flu. Right? About the weather, it is sunny, it's like cloudy, it's rainy, it's snow, it is all different classes. For different multi-class classifications, right?",
        "week": 4,
        "page": 40
    },
    {
        "transcript": "What about the difference between the binary classification and the multi-class classification? So, from the plot, it's just very intuitive. Right? So, because in a multi-class classification, we have more than 2, that's it, right?",
        "week": 4,
        "page": 41
    },
    {
        "transcript": "So, how about the logistic regression in the multi-class classification? So, we so-call one versus all, or one versus all the rest. So, this is about 3 classes, right. So, it's in this case, for the logistic regression, we usually perform as assuming it as a binary classification problem. What we do here is for example, for the h theta x, we're trying this class, this is the class one right, this is blue, the real class. All the rest, we plan as another class, right? So, what about h theta 2 here? So, we actually care about the. X 2 here, this is class 2, and this is all the rest. What about the h theta 3 here, we just care about the real numbers, and others so-called all the rest, right. And this is so-called one versus all here. And this is the equation that we try to pay attention to this multi-class problem that h theta i x. I is what? Classes. Yes. And this is the best about the probability of y equal to i, that a given x, and parameter theta here. Right? So, this is actually we're trying to pay attention h theta i x here.",
        "week": 4,
        "page": 42
    },
    {
        "transcript": "To train a logistic regression classifier h theta i x for each class i to predict the probability that y equals to i. So, let's say, given a new input x. We will try to pick the class i, then try to maximize i in the h theta i x. This is the best maximum probability, right? This part is very about the probability of that. Is that correct? So, then you guys need to remember what about the for the multi-class that is try to maximize the probability of each class, the corresponding class, right? This is about multi-class that you guys need to remember.",
        "week": 4,
        "page": 43
    },
    {
        "transcript": "What about some methods comparison, the generative method and the discriminative approach, the naive Bayes. So, let's try to estimate the probability of y and the probability of x given y, and this is about prediction. About the logistic regression, where we are trying to estimate the probability of P y over x. Right? Also, called the discriminant function. So, then we will study about the SVM later, but you guys need to remember for the logistic regression, we really try to predict this probability y over x. Right?",
        "week": 4,
        "page": 44
    },
    {
        "transcript": "And then here are some more readings guys, try to look at the details of it.",
        "week": 4,
        "page": 45
    },
    {
        "transcript": "And the next step, we're willing to try to let you guys to remember what we learned from this class so far. So, we have learned about the hypothesis representation, this is very about a sigmoid function, and we learn about a cost function of the logistic regression so, this is really about this, right? For the y, if y is equal to 1, it should be negative log h theta of x and y is equal to 0, they should be negative log one minus h theta x here. And what about the gradient descent? You guys need to remember we use after alpha should be 1 over m this sum h theta x minus y then times with x j i here. That's about the regularization. Remember with the additional what. For the addition what we can get it. Right. Yes. For the addition prior, so, that we can get this kind of equation. The alpha, lambda, theta j is really about another penalty here. So, lastly, we learned about the multi-class classification, for using logistic regression that is try to maximize the probability in the corresponding class. As you see, the key point from this lecture about the logistic regression.",
        "week": 4,
        "page": 46
    },
    {
        "transcript": "Next, let's try to explain about the details. How do you guys need to implement the logistic regression from scratch with Python? So, previously you guys just call function from scikit learn. But in this case, you guys need to implement by yourself. And here are the details that you guys can look for. So, first of all, it's about standardization. So, this mu is about what. It's about the normalization of the data. Right? This one is easy. The next thing is initializing of your parameters. You will have a feature vector that is size m by n and plus one. Why it plus one? All is a feature vector; you have m times n plus 1. Why is this plus 1? And also, you have weights, kind of weights, or theta here, n plus 1 times 1. Why is n plus 1? This is the ambient number of points, and the n here is the number of observations or number of features in each point, right, so, why is n plus 1? Yes. So, that is a bias. So, you guys need to remember once you try to implement it, you should make sure the dimensionality. I'll say you have n plus 1. Keep in mind. And next, you needed to implement the sigmoid functions should be very easy. Right? But this is the thing that you guys need to remember that is about the dot product of this feature vector, and the weight here. Next step, you guys need to define a function of the cost function. So, this is the cost function that you guys need to define in your homework. Next step is really about the gradient descent. Right? The gradient descent, this is the key part, right?",
        "week": 4,
        "page": 47
    },
    {
        "transcript": "Let's see about the kind of gradient descent. Stochastic gradient descent that you guys familiar with. Let's try to quickly overview about it. Right? We have L. We have loss functions. We have f. We have the function parameterized by theta here. We have x and y, training inputs, and y is the output. And then this is the key part why how can you finish the gradient descent? Is really about repeat. The number of iterations that you guys need to define. Right? And for each xi, probably, you can skip this part, but you need to definitely calculate what is the estimate output. You'll have a function f, right? h theta x need to calculate about output that is y hat. Y hat is the prediction of your. Y hat is the prediction of what? Of your logistic regression model, right? And after that, you can calculate a loss. The loss will tell you how far of y hat i and output here, right? So, next, you really, you need to use this how you should move the theta to maximize the loss. And see how it updates eventually, you use theta minus, eta, and the eta is equal to alpha, as the slides. Just a learning rate. Another parameter guys need to define previously, right? And eventually, that is about gradient descent. That's you guys needed to use in your homework.",
        "week": 4,
        "page": 48
    },
    {
        "transcript": "So, for previously, the gradient descent that you guys already know what? In the gradient descent, what will you learn here? What are the key things that you guys can learn here? In the gradient descent. Parameters. The parameter just about what, what kind of parameter? What? What? It just the weight and bias that you can learn, right. And this should be the 6 steps that you guys need to do the homework about the logistic regression model. So, then we will try to review it again about the logistic regression. To be honest, it's not always this, not always this. You can it's better if you use this, but sometimes you have a very strange dataset. You need to standardize the dataset. But it is not necessary for this part. This is something I want you guys to keep in mind. Given in the future, you guys need to use normalization of your data. That's good. Yeah. Any questions from our online students. Oh, no.",
        "week": 4,
        "page": 49
    },
	{
		"transcript": "And the after that the 6 step is about the prediction. How you can make a prediction? So, once you get weight and bias from the gradient descent that you guys can really make predictions in any new points, right? That you can get a y hat. So, that after some steps you can calculate accuracy. This is just about what does this mean. Those part means what? Yes, this is the total number of points. The total number of points you already predict. Right? And then divide by the length of y and get accuracy of your model. Right? So, now after now, we’ve finished about our logistic regression part. Any questions so far?",
		"week": 4,
		"page": 50
	},
	{
		"transcript": "So, then we will talk about the we will quickly talk about the sklearn really about the multi-class classification is a logistic regression. So, this is key things that we try to load about the dataset from sklearn. Then we try to load the linear model from to the logistic regression then we try to use the dataset to make prediction. So, this is just a few lines, guys, now about sklearn is very easy to handle logistic regression. Right? But, you know, another case, during an interview your future could be, the future reviewer might ask you to implement logistic regression from scratch. This can be one interview question for you guys. Which means that during you guys' homework, you guys need to pay attention to it not try to google it. Because for you, you need to remember about all the content in the slides. Try to think about carefully by yourself, instead of google the answers. It's not good for you guys. So, anyway, if you guys have any questions, let me know about your limitation of it.",
		"week": 4,
		"page": 51
	},
	{
		"transcript": "Let's try to go to another section about this lecture. That is very about the least squares regression that you guys probably notice about it. Is that true? But anyway, we just have a few slides that try to review. Regularization? In your mind do you think it is useful? Not sure. So, yeah. That is the key good question. So, for that regularization, we're really to want to avoid over-fitting problem. For regularization, you will add another penalty, right? In gradient descent part, you will make it smoother and avoid to give over-fitting of it. That's the one advantage. And another thing is about the dataset, the dataset. If you just have a few datasets, it will be very easy to decrease gradient descent. So, in that case, the regularization should be another option. Previously, we talk about the logistic regression about classification problem. Right? Now, let's talk about the least squares regression. It's not in this case. It's very about regression problem.",
		"week": 4,
		"page": 52
	},
	{
		"transcript": "So, giving a dataset that x or y to xn and yn where x. Should be x and y are not random. The Yi is equal to alpha plus beta xi plus Ui are random variables from i to n. The random variables from Ui to Un have zero expectation and variance sigma square here. So, the method of least squares that try to choose for alpha and beta, let's try to satisfy this equation. That means What's this? This is what? It's really about least error right, but this part is about yi minus alpha. It's called what? No matter how, we have a few slides to discuss with the details of it. But now you guys need to remember, this is the overall part that we need to optimize for our least squares regression. Right?",
		"week": 4,
		"page": 53
	},
	{
		"transcript": "So, next, the observed value yi corresponding to xi and the value alpha plus beta xi on the regression line that is y is equal to alpha plus beta x here. So, typically, this just a fitting line, right? And this is just 1 point, but you have another point, and this is the point from the regression line here. Right? And here are the object functions that want to achieve the least square estimation. Is that clear about this function?",
		"week": 4,
		"page": 54
	},
	{
		"transcript": "So, next, we very want to discuss how we can estimate those parameters. For the least square, we will choose a value for alpha and beta such that this kind of function is minimal. You'll find the least square's estimates we differentiate S. Alpha beta with respect to alpha and beta respectively. Right? That we will set the derivatives is equal to 0. Is it the correct way? okay. So then, if let's say, let's check that derivative with alpha with respect to here. Take the directive about S with respect to alpha. What can we get here? Take a piece of paper out. You need to find equations now. You have paper in hand you can try to calculate. If you do not have a paper, we have blackboard. Who do not have paper here? Oh, Now, who want to do it for us? This part should be very easy. Right? Should I call name? Raise your hand. Go ahead, do it for us. Please respect to alpha. Just respect to alpha. This one. This S. Square also. Square. Yes. This is square. This is sigma i to n, yi minus alpha minus beta xi and then square. That's it. You miss this one. So, this is the overall S here then you check the derivative with alpha. Any of you already have answers? No. No answer? You have answer? Do you write down? No? Okay. No worries. You should be first. Let's do what's going on. Yeah. It's fine. Yes. And also, do you have answer? Just a respect to alpha. Okay. Let's see. Do you have answer? No. It doesn't matter. There has 2 here. Right? It has the square here. Right? Once you have this kind of problem, you probably will move this 2 to be here in the front. Then you will copy this, right, then do a derivative with this to alpha again. Right? Yeah, move two to the front, then copy this one here. Yes. Yes. Continue. Yes. This is the 2. Yeah. Yeah. Copy it again. Copy this full equation, and then you will time with another derivative that is respect to alpha. Yeah. So, now alpha should be negative 1, right, so, you'll can pull negative 1 in the front. Right? Yeah. it should be no. but the xi it should put there. Right? Yeah, the combination of xi was those right. It's about but it doesn't matter. I understand your part. Yeah. Go ahead. Yeah. It's fine. You guys get an answer? Let me check if you guys have. Oh, yes. How about you? Do you have answer here? Seems correct. Now let's say more details about alpha here. So, first, this is just very easy about this. This one, once you try to take respective with alpha, you will put the 2 in this front right? You can see you put the 2 to the front then you copy of this equation. So, then, the second one you check the derivative in the inside is negative one, right? So, you will have negative 2 here. So, now, because we need to set it to 0, so here the negative 2 is gone. Right? This is really about the first one. Right? Does that make sense? That part? In the second part? Let's really do it closely. So, the key things are what? The key thing is about the square here. The 2 here. Right? The first one, your first part you should get this 2. That is fine. sigma from i to n then you will have yi minus alpha then minus beta xi here. This is your first part, right. The second part will take derivative respect to alpha. The inside should be negative. Is respective to the alpha to be negative 1. Once you try to set them into zero, you can cancel this negative 2. This is the key thing that eventually we have this part. What about the respective to. Let's try to expand this first. What is the answer for this one? Once you try to expand those. What will you get? Show us, what’s the answer for this one? Try to expand this. What can you get in this equation equal to zero? Can you come to write for us? For this one, what can you get? Now you really notice that although you guys have the kind of background. Once when you calculate, kind of confusing, right? And this the key things and very normal machine learning course and practice. This one? Can you pull the n to here? Yeah, make it better. Yes. Yes. Is it correct? This one is right. Let's look into details. The detail is n alpha here. Why you have n? The sum of alpha. So, you will have n alpha here. Good right, do you get it? What about the second one? The second one. What is the difference about the second one? Second one is what? Write for us for the second one. Which is with respect to the beta. What is the answer for the beta? It is just times with sigma of xi. Get it? No matter you can do it. No matter how, you can do it for us. Where is the alpha come from? This is two, sorry. Sorry it's two, okay. So, now, next you need to take it respective to the beta. Yes. What is the answer for this part? To the beta? This is zero. Yes. What about this part? This should be just xi. We will keep the summation here. So, eventually, should be just xi in the right. Right. You guys understand it? Okay, good. Go back, so, now, this finally get this one. The only difference is that the additional xi here that is equal to zero. So, once you try to expand those one, you will get this equation, right? Next with the most important part for you guys is how to solve this alpha and beta here.",
		"week": 4,
		"page": 55
	},
	{
		"transcript": "This is key thing again. You guys have two minutes to solve this kind of problem. Pinxue, can you show for us? This one, probably solves alpha and beta. You need to solve beta first. So then after that, cause once you get beta, alpha should be very easy here. Go ahead, come. Come to solve this alpha and beta. Write down, I will check each of you to get something solution. You don't need to cancel alpha. For example, if you want to calculate the beta, you need to cancel this alpha. Right? To cancel the alpha out, For the first 1, what do you need to do? You first need to divide by n. So, then cancel this part, right? So, then you can cancel this alpha alright. The first equation divided by n, then times with this part. Go ahead. Can move them together. Most of this n to be there. move the n to this part and this part. Just one over n here, one over n, one over n right here. Okay. So, now go ahead. Then times with this part. No. This equation, you still need to times with. You can check that, but it's fine. You can write eventually about that part. You actually can do that. But now, you need to calculate that first then. Is it easy? It's not that easy as you saw right? Finish. This beta? You finish. Is this correct? How can you get this one? Is this correct? Can you explain to us what's this? This part? Why you remove, this is what? This is this part? What's this? Explain to us. How can you get this equation? Okay. So, let's try to verify whether this correct or not. Okay. So, this is about really about alpha, and compare. Is this correct? Can try to pull this n out. Should be times with n here times with it here. There should be equal. Right? Is this correct? Yes. What about if we have beta here. How can you get alpha? Is it easy to get alpha? For example, this case, there should be alpha just equal to what we move just this part then divided by n. Right? Is that correct? So, then become just becomes here, right? That's correct. This part? You missed a square, right. There's no square. It should be another square to be here. So, here about the details of it.",
		"week": 4,
		"page": 56
	},
	{
		"transcript": "So, this is, again, about alpha and beta here. All the negative in the middle, you probably have this part, this part just about the covariance x y, and this part about variance of xi. So, eventually, we are trying to get about this covariance xi divided by variance xi. And also, this equation is equal to this one, x y bar, and x bar comes with y bar, and divided by the x square hat of mean, and mean of x with the square. Right? And eventually is this. If you guys do not believe, if you have time, you can try to verify whether this equation is equal to this one. Try to test your knowledge whether this one is equal to this one. Okay. It's kind of homework. Let's continue with it. Once you get the alpha and beta. Check this equation. Those are 3 key points. Try to write down what it is alpha and beta here. Calculate this with respect to these 3 points, right, 1, 2, 3, 1.8, 5, 1. What is alpha and beta? If you calculate, just let me know what's your answer for your beta here. What those 3 points again? Did anyone get the beta here? Beta is what? Can you write down here. Write down here. For online students, do you get some results about beta and alpha? Not yet. So, n should be just equal to 3. Are you guys get the same results? Or you have different answer. Let's say if this is the exam during the course, I give you guys this kind of calculate. How long do I need to calculate this equation? There still have answer from any of you? Do you get the answer? You can write down your answer here. Yeah, that doesn't matter. Okay, this is your answer. What about other students? Did you get the similar result? Here? Juju, did you get some result now? Yeah. I got beta have 9 point 22492452499999. 25. What about your alpha? Alpha not yet. 1 second. I see you guys probably get the different answer. Opposite, oh you write in opposite. It doesn't matter. What about the rest of you guys? Did you calculate the alpha? Alpha is 2.3499999. Is that right? What about others? Still no answer yet? Let's say, if it is an exam, you guys already take too many minutes to calculate this equation. Right? The step is hard? Okay. Now let's try and see whether you guys have a good number for it.",
		"week": 4,
		"page": 57
	},
	{
		"transcript": "It should be very easy for you guys to calculate another one. As I said before, what's this? This is really we need to talk about the residual. So, this is a way to try to explore whether the linear regression model is appropriate to a model given our bivariate dataset is to inspect a scatter plot of the so-called residuals ri against the xi here. So, the i-th residual ri is defined as a vertical distance between the i-th point and the estimated regression line. So, for example, this should be yi minus alpha hat minus beta hat xi. Why it has that hat here? What does this hat mean for this kind of? It should be estimated parameters. So, that we had hat here. And this is so-called the residual that we can get from the model. But always you needed to remember that sum of all residues should be equal to 0. Is that true?",
		"week": 4,
		"page": 58
	},
	{
		"transcript": "This can be a quick test of your knowledge about this least square estimation. Can you get the alpha and beta a little bit? Let's try let me try to write down this. What should be 1, 2, 3, 1.8, that we have y 1 and 3 points here. What is the alpha and beta? That's give you several seconds for our online students. So, for this is 3 points. Can write down the 3 points here, and then try to estimate the alpha and beta. So, the 3 points are these 3 points. 1, 2, 3, 1.8, and the 5, 1. Do you see these 3 points? Do you see it? Yes. Got it. Let's try to go back to this equation. So, the answer is what alpha should be, no the beta should be negative 0.25. It should be good. And this one should be 2.35. Right? Now, this is the number. You guys can remember, right. Always try to be patient. Even for this, it's so simple calculation. Most student can do it, you see, you still can get something wrong. Right? So, always keep in mind. Be careful with everything. As you look for the rest, it should be very easy for you guys to calculate about the residual. I will just skip this part. You guys can try to calculate once you have time.",
		"week": 4,
		"page": 59
	},
	{
		"transcript": "Let's try to continue. So, that should be everything from today. You guys think about and really about to implement the logistic regression model. And then once you implement your model, you need to compare results from the function, from the sklearn, and they try let me try to quickly go through the homework with you guys.",
		"week": 4,
		"page": 60
	},
	{
		"transcript": "",
		"week": 4,
		"page": 61
	},
	{
		"transcript": "Now, do you have any questions? No. Good. Let's get a study. So, in today's lecture, we will talk about the principal component analysis, and also, I will briefly mention about the factor analysis. And I believe all of you guys should have learned something about PCA previously in Professor Pablo's course. Right? In this case, today maybe we will review the PCA in very quick fashion, and I will I will check your guys whether you really understand it or not. Okay.",
		"week": 5,
		"page": 1
	},
	{
		"transcript": "So, let's get started. This is about last week, we talked about this regression stuff. But this week, we will put this regression in 100, so that we will focus on It's a PCA a little bit. So, what is about this week, we are talking about the PCA and the factor analysis. In next week, we will talk about the metrics vectorization. So, after that, we are really talking about some classifications and regression again.",
		"week": 5,
		"page": 2
	},
	{
		"transcript": "Let's say, today's outline. So first of all, let's say, what's the reason What other reasons we want to use the PCA.",
		"week": 5,
		"page": 3
	},
	{
		"transcript": "So, what is the motivation? Clearly, firstly, the motivation is that we want to reduce the dimensionality. Right? And in PCA, it's a one way to simplify complex high-dimensional data. And summarize data with a lower dimensional real valued vector.",
		"week": 5,
		"page": 4
	},
	{
		"transcript": "And then here's the typical the goal of PCA. So, for example, given data points in d dimensions, and then we want to convert the convert them to data points in the r dimensions. So, here, r should be less than d. So, typically, will we require that that r here is way less than d here. Right? Or is the minimum loss of information. And do you know why we want to avoid the high dimensional data? And it was, if you do the follow-up of successful data, and for some past view, so that enormous data could be a host problem for national it could be problem also for computer machine to compute all the checking and yes. Yes. That's correct.",
		"week": 5,
		"page": 5
	},
	{
		"transcript": "So, let's try to see the more reasons here. And then you guys should have heard about the curse of dimensionality. Right? So that increasing the number of features will not always improve the classification accuracy. As you probably can see in this plot. This is the number of dimensionalities of your features. And as here is about your performance. So, in practice, that inclusion of more features, might not, might actually have worse performance. As you can see, once we try to achieve this point, your performance is actually going down. Right? The number of training examples required increases exponentially with the dimensionality of d, that is about the k power of d here. So, here, k is just the number of bins your features. So, for example, in this case, we have 3 bins, and then if it is 2 d, it should be like a 3 with a power of 2. If it is in the 3 dimensions, so, then we get a 3 with the power of 3. So eventually, those should be exponential with the k with the power of these. Now, we have noticed that it really requires lots of dimensions. Right? And that's the reason we want to kill the dimensions of your features.",
		"week": 5,
		"page": 6
	},
	{
		"transcript": "What is the objective in here? So that is straightforward. We try to choose optimum set of features of lower dimensionality to improve the classification accuracy. Intuitively, we probably want to stop our dimensions in this kind of level. Right? And there are different methods can be used to reduce the dimensionality. For example, about the feature extraction and the feature selection. So, later, we will go through about those two methods separately.",
		"week": 5,
		"page": 7
	},
	{
		"transcript": "So, first of all, let's look at the feature extraction. It ends to find a set of new features. That is to say some mapping function 'f' from existing features. So, for example, here you have x. The x consists of a bunch of points from x1, x2 to xN. So, once you try to apply some function, let's say, f(x) here, you get the y. So why should it be from y1, y2 to yK? In this case, your K should be way smaller than N, and this is one method that so-called the feature extraction. So, this is a feature map the mapping function f() would be linear or nonlinear. So, for example, if your x is just an image, right? You can think about your f(x) as a neural network. So, typically, the neural network is a nonlinear function. Right? So, then, you can project your data to like a one full dimension. For example, if you will have 1000 classes, there should be 1000 dimensions. Right? For feature selection, it ends to chooses a subset of the original features. Given this example from x1 to xN similar as before, right, we have this x. So, once you perform the feature selection. So differently, in this case, your y should be what? It's kind of. Now, you should compare the difference between x and y. So now you all deserve that. Your y just a subset of your x, right? So, this is so-called the feature selection. You will choose the first K features here. You will think they are important. So, that's the reason you want to keep the first K, our top K features here.",
		"week": 5,
		"page": 8
	},
	{
		"transcript": "More for the feature extraction. So, for the linear combinations are particularly attractive because they are simpler to compute. And in the help, we can able to track those kinds of combinations. So, given x that is real number with N, so, find a K by N metric with its transpose T such that we can satisfy this kind of requirement, that y equals to times with x, there should be still in the real base of the K dimensions in this case. So, this is another kind of donation. As previously as a previous we said, this is the f(x), A function. But now, actually, it has another metric T here. And as this is the projection from the n-dimensional space to K-dimensional space. I use this kind of metric T here.",
		"week": 5,
		"page": 9
	},
	{
		"transcript": "From a mathematical point of view, find an optimum mapping y that is equal to f(x) is equivalent to optimizing an object objective criterion. So different methods can be used to get some different object functions. For example, the minimum, minimize the information loss. And the maximize the discriminatory information, and those are some typical oh criteria that you can apply to during the feature extraction part.",
		"week": 5,
		"page": 10
	},
	{
		"transcript": "And there are several popular linear feature extraction methods. For example, PCA that we will cover today and also about LDA. And also, there are other methods like ICA, some projection pursuit, some isomap, locally linear embedding or LLE. So today, we were only focused on the first part. But if you guys are interested in it. You can feel free to explore other topics. And LDA should be another frequently used method, but it's not a requirement in this class. And also, the LDA should be very similar to PCA. If you guys understand about PCA, it should be, you guys should catch about LDA in a very quick way.",
		"week": 5,
		"page": 11
	},
	{
		"transcript": "So, let's first look at, at the data set. So, what does the data compression mean or what does the data dimensionality reduction mean here? So, for example, if we want to reduce the 2D point to 1D, your x-axis is what? The cm, the centimeter. Right? And your x2 should be the inches. So now, from here, just the 2D points. Right? So, in this case, if we want to change it in 1, in 1D.",
		"week": 5,
		"page": 12
	},
	{
		"transcript": "So, for example, project to the z1 here. So, actually, if we just focus on the x direction, we're more likely just to put them down. Right? And this is so-called for example x1 here, which has changed it to z1, then x2 to z2. So similarly, from xm, you need to change it to the zm, and this is how we change it from 2D to 1D in this example.",
		"week": 5,
		"page": 13
	},
	{
		"transcript": "And then here's another example that showed you about the data dimensionality reduction from 3D to 2D, so this is about 3D data, right, because it has 3 coordinates, x1, x2, and x3. The three dimensions. And here is another view of these data points. So eventually, our goal is to try to project these 3D data to 2D in this case. Right? And this is, again called the data compression from 3D to 2D in this case.",
		"week": 5,
		"page": 14
	},
	{
		"transcript": "So, let's try to discuss more about the PCA problem formulation. In this case, we try to reduce a 2D 2-dimensions to 1-dimension and find a direction or a vector, u1 that is real number with n dimensions onto which to project the dataset so it has the minimum projection error. So, reducing the n-dimension to k-dimension should be similar. So, find the k vectors u1, u2, to uk onto which to project the data, so as to minimize the projection error here.",
		"week": 5,
		"page": 15
	},
	{
		"transcript": "Here's about another example. So, it's 2D Gaussian dataset. It's Gaussian. Right? Okay. What is the first component that you guys might? Axis, so what is the first component? Do you guys already have some idea about PCA? Right? What is the first component in this picture? Say it out loud. The position. What kind of position? So where do you think it is the first component? 0 point? It's not a 0 point. I mean, is this dataset? Which direction is the first component? What does the first component mean? No idea. You guys already learned it. Right? Any answers from our online students, what is the first? What is the first? First component. Original point. That line is the line that's directing the dataset. Yes, exactly. So, actually, the first component means the most important axis that can donate your data set, right? So, in this case, definitely the most important one.",
		"week": 5,
		"page": 16
	},
	{
		"transcript": "Should be in this straight line, right, in this direction. Right? So, this is the first component or first axis. Right? Do you remember? Do you recall it? Okay. So, what is the second one? Second component is what? No idea? Do you mean, it's lines that's like a couple of whoa. Do you mean by that? So, actually, that's correct, because you're all components are orthogonal to each other. Right?",
		"week": 5,
		"page": 17
	},
	{
		"transcript": "So definitely, your second biggest component should be orthogonal to this line. It should be this way. Right? So now it tells you 2 most important axes in your plot. This is the 1 and this a second one. So, this is a realization of your 2 most important components here.",
		"week": 5,
		"page": 18
	},
	{
		"transcript": "So, next let's try to talk about the details of PCA.",
		"week": 5,
		"page": 19
	},
	{
		"transcript": "And here are the overall steps. That you guys should remember it. And I don't know whether you guys implement the PCA previously in detail. No. Really? In Pablo's class. He told me that he gives you guys a project related to it. We can Hey. So, you guys did implement. Right? Yeah. Okay. So, did you familiar with those steps? Yes. Yes. Yes, or no? Okay. Let's try to review about it. So first, our goal is what? our goal is try to find the r-dimensional projection that best preserves the variance. The first step, you try to calculate the mean. next one you need to calculate covariance matrix, sigma of original points. They should be easy right? So next, all the most important step is tried to compute the eigenvectors or eigenvalues of sigma. So then, the third step is to try to select the top r eigenvectors. And of course, that way, if you want to reduce dimensionality, you need to project a point into some subspace expanded by them. So, this y as your new point or as your reduced dimensions. y is it equal to A, A is what? A is the reduced eigenvectors. You can select the top k of this A, it's just some rows of your eigenvectors. And the mu here is just about the mean here. So now you guys should maybe you can remember a little bit about the PCA, the steps.",
		"week": 5,
		"page": 20
	},
	{
		"transcript": "So, let's try to go to more details about it. So, first of all, what are the differences between the variance and the covariance? It matters the spread of the set of points runs the center of the mass or the mean, right? And the variance means the matter of the deviation from the mean. For the points in one dimension, what about covariance? So, covariance, measure of how much each of the dimensions vary from the mean with respect to each other. So, covariance is the measure between two dimensions. The covariance sees if there is a relationship between two dimensions, and again, covariance between one dimension is the variance.",
		"week": 5,
		"page": 21
	},
	{
		"transcript": "Again, the left example, you should be positive covariance. Right? And the right hand should be negative of covariance. Right? Okay.",
		"week": 5,
		"page": 22
	},
	{
		"transcript": "And here is the equation that you guys can calculate the covariance, and you can use the final relationship between dimensions, in high dimensions data sets, so here is just the mean. The xij minus the mean and xik minus the mean again, so this is how you calculate. But here should be transpose, so that you can really calculate for covariance metrics here.",
		"week": 5,
		"page": 23
	},
	{
		"transcript": "So, after you get a covariance metric sigma, you are the what. You can calculate the eigenvector and eigenvalues. Right? And this is also so-called difficult for you guys. So, you'll have a square matrix A. So, you have x, x here means eigenvectors. Right? Lambda here is just. Sorry. It should be just what? The x just should be the eigenvectors, and the lambda should be eigenvalues, the in this case. As a 0 vector cannot be an eigenvector, and the 0, 0 can be an eigenvalue. Why? So, giving an example in here. This is the example. This lambda is eigenvalues. Right? Can this be 0? No. Why not. Because it holds some value and it cannot be input. Any other have the different answer? So, x here is eigenvector. Right? It is vectors. And then A is just a matrix. For example, this is like this can be 2 by 2, and then this can be in 2 by 1, So, eventually, this should be sorry, this should be 1 by 2, and this can be 2 by 1. Eventually, can you get a 0? Yes, or no? So, let's say A the matrix. That's no. In this case, it should be just a square metric. It shouldn't be shouldn't be 1 by 1. But, again, eventually, can you have a case that lambda is equal to 0. Is that possible? This is a 2 by 2. This is also a 2 by 2 vector. Can you eventually get a vector with all zeros? No. I think you guys are confused. Right? Let's say, A here is the matrix. So, this is A. Ix that he gives you the lambda ax. So, as let's say, it has the matrix size of 2 by 2. 2 by 2, this x, and we also like to 2 by 2. This 2 by 2 matrix by some numbers here, 2 by 2, 2 by 2, 2 by 2. So, lambda here, that's it's also 2 by 2. Is that possible that lambda can be equal to zero? Is that possible? No. No? Why says no. Even this is equal 0, it reduces all examples can be zero. Is that possible? Eventually, these products are equal to zero. Is that true? No matter what is number you're starting it. Eventually, you can get all zeros. Right? Is that possible? the product all that can be 0? No way? It's gonna be a long you in the first example is it possible to be zero? Is that possible? It's possible. Right? Why now, this is just for different numbers. Definitely, it should be, let's say, this minus 2, this 2, this should be 1. What's the number here? What is first number here? There is 0, right, is that possible? It's possible, right? Significantly, for the other answers, you can have all the zeros in this case. Right? Which means that your lambda can be zeros, right? But your eigenvector can not be zeros in this case. So here is another complete example.",
		"week": 5,
		"page": 24
	},
	{
		"transcript": "So now let's try to prove here this x that equal to [1,2] here is eigenvector for this case. How to do that? Take a piece of paper out. Let's see whether you can get values. Usually, use the equation here probably. Use this equation to prove it, and then you will get a similar stuff as I said here. For our online students, can you see this example here? Is zip 2, life for your guys. Can you see this example? No. We can't see that. You cannot see it? That doesn't matter. it's just a that's too bad. Maybe next time I can write here, maybe better. But anyway, in this case, you guys can try to prove whether this x is the eigenvector for A here. Do you complete? Yeah. Can you write answer here for us? 2 eigenvectors for this. Can you write down your answer how to get this? On professor, we can see your next slide in our screen. Really? You see the next slide? Yes. That's too bad. You guys get some answers there. How about now. Can you see? Still, because I think it is, like, a note to show the speakers. So, it’s good now. Let me do it again. How about now? Oh, yes. That that that's the regular. Okay. Okay. That's good. You got it that? Basically. What I mean here so here is x. Right? Yeah. You should have. A too here and 1 to there. Yeah. It should be it should be like a. Is the same? It seems not the same. You should be. There's gotta be another way to do that. You can do that here. It's better. Let's see what's the solution here okay. You guys get it? If you don't get it, let's see the answer hear. So first, let's get Ax. So, what is Ax here. So, you have A as this matrix 2, 2 by 2. Right? You have this x as 2 by 1. So, you eventually get a matrix size of 2 by 1. Right? So now, what is the answer for this one? Ax, you get all zeros. As an example, I explained previously, you get all zeros. So, in this case, where is lambda? Lambda should be equal to 0. So that you can satisfy, you get all zeros. Right? As I depend, this is the reason why lambda can be 0, but you are eigenvectors cannot be 0. So, in this case, definitely, your x to e is equal to 2 1 should be eigenvector for your matrix, right? So, guys, guys get this part, right. Awesome.",
		"week": 5,
		"page": 25
	},
	{
		"transcript": "And, here are more features about that previous equation. So, let's try to move this equation a little bit. So, for example, we move the lambda x to the left side, you get this 0, so then we'll put the x out so that we get x minus with the lambda, I, then comes with x equal to 0. So eventually, let's try to say, if we can define a matrix B, Let's say, if B is equal to A minus lambda I here, so in this case, you can get another new equation that is BX equal to 0. Some of you may catch that. If B has an inverse, which means that x is equal to B inverse with 0. That is equal to 0, right? Is that correct? Is this correct? From here to here. It's correct, right. So that box, the vectors cannot be 0. Right? So, in this case. So, therefore, we can get another kind of draw form there. So, x will be an eigenvector of A, if and only if B does not have any inverse, or equivalently det B is equal to 0. What is det here? The determinator of B, yeah, is equal to 0. All you can write in here, you needed to calculate a determinant of A minus lambda I, I is what? eigenvalues. Yes. Correct. It should be equal to 0.",
		"week": 5,
		"page": 26
	},
	{
		"transcript": "Let's continue. So here, another example. In this example, you were ready to do similar stuff as you did. How many to get the eigenvalues? This is another way to calculate. Now, I needed someone give me some answers to me. So, calculate this, and tell me what are the eigenvalues you got it here. Let's try to test it yourself whether you really can calculate these simple eigenvalues. Anyone get some answer here? What is yours? 1, 2. Okay. You have 1, 2. What about others? I have -1 and -2. You have -1 and -2. You have all of these results that Yujie got. Let's see which one is correct. Did anyone of you get? -1 and -2, okay. Are you sure your answer is correct? That's saying the answer is from other students. If that so difficult for this answer? Juju. Did you get some results? I got Manus 1 and Manus 2. Manus 1. How about others how about Ming-How. Do you get some answers here? -1 and -2. Okay. I guess, majority of all, guys are getting some answer, let's see which one is correct. Oh, now, from here. So, definitely, it could be -1 and -2, right. Did you get something right here? So now it's just like a lambda 1 minus 2 times lambda plus 5, and it should be plus 12, right? There should be that. So, eventually, it should be equal to 0, we get -1, -2 here. So now I see you guys already get the key part about the eigenvalues. So actually, note that. The roots of the characteristic equation can be repeated. That is lambda 1 is equal to lambda 2 to lambda k. If that happens, the eigenvalue is said to be of multiplicity k here. And then here is another example. let's try, like is a little bit difficult for you guys. What about those, what about this answer? This 1. Do you remember how you calculated the determinant of the matrix size of 3 by 3? Really? Can you remember? Can you see it? This is how come that it is? Can you say, what about in this case? What is the number? Can you remember? What is the first one? That's kinda little bit of challenging for you guys, but that's the matter. I put it here. For you guys, this is 3 by 3 determinator, right? So, this is gonna be everything you need to calculate. And this is extremely easy example to get it. So, what's your answer in this case? And this is the way how you calculate it. You get it? Pinxue, do you get it? No. Why? It seems you are confused. You have any questions? No. What's your answer here? What's this? Yeah. If you have a question, just ask. Can you understand those? You know? Know this, this is how you calculate to determinator of matrix size 3 by 3. Right. So, what's your answer for this case? For this example? It's what? It's 8. It's 8. How you calculate the 8 if I've already given you this one? What's the answer here? What is A here? So here is this, you need to through this equation. Write down, write this equation first. What is lambda I minus A, write down this one first. Go ahead. Go to the blackboard and show us about how to calculate this one. Go ahead, yeah, show us. This is really important for you guys to understand. Yeah here, write down. Yes. Exactly. Do you guys get it? It should be easy right. It's just eventually you get lambda that is. Lambda one equal to lambda 3 is equal to lambda 3. You got just 2 here. Right. For our online students, do you have some questions? No? Yes, or no? No questions. Okay. Good. Let's continue.",
		"week": 5,
		"page": 27
	},
	{
		"transcript": "So, again, let's talk about the steps. Again, so firstly, you needed to give a bunch of data set that is N by M vectors, that's just step 1 you calculate the mean, should be very easy right. The second step you calculate the subtract your sample with the mean. That is phi_i, that is equal to xi minus x bar here, x bar just a mean. And next thing, calculate the covariance matrix, according to this equation, right? And eventually, you can donate it in this way. And this is the first 3 steps, should be easy to be handled, right. Let's try to go previous slide to see what are the difference? In this equation, what is the sigma? Are them the same? Are they the same? They are the same, right? Now, you see you guys. I just changed the donation a little bit if you guys are getting confused, right?",
		"week": 5,
		"page": 28
	},
	{
		"transcript": "So next, you guys probably have some kind of difficulty in the computer eigenvalues and eigenvectors. But previously, we already discussed how we get eigenvalues. Right? So that example you guys maybe no more how you calculate eigenvalues. And then we will discuss more about how to get this step-in detail. In this case, that is, say, as a sigma x the ui is equal to lambda i, ui, sometimes where we assume lambda 1 is bigger than lambda 2 is bigger than lambda N and eventually. We needed to notice that. For most software packages, it returns the eigenvalues or corresponding eigenvectors is in decreasing order. So, if not, you can explicitly put them in this order. Remember, you need to put them in this order. Okay. If you if it is in different order, you will do not correct. Remember about that. Since, sigma x is symmetric, that u1 to uN form an orthogonal basis in the real values of N dimensions, and we can represent any matrix x here use this kind of equation. So that is x minus x bar. So, this is previously the standard data. Right? That is can be donated from the using the sum of yiui. So eventually, it should be y1u1 plus y2u2 plus to yNuN here, right, uN here. And the yi can also calculate it in this one. And this is just a change of basis. So that we said, is the u1, u2, to uN is form an orthogonal basis in the real values of N dimension matrix. And the similarly you can see in this case. And also, you need to notice that most software packages, the normalize of the ui here to unit length to simplify the calculation, if not, you can normalize by yourself. Do know how to normalize a vector? A vector. How you can normalize a vector. Mobile has been doing this next way and the subtract. Really? Are you sure you say something correctly? how you get the? How you normalize this data? Just use this phase. Because you need to normalize into unit length, and that's just equal to 1, equal to 1. How to do that? Each value of the vector needs to in square. And the square button. It should be a vector divided by its norm. Right? It's just for example, for vector v, you get a unit length, v divided by a norm of v, right? That's it. But the norm of v is calculated like you said you square those and sum of each number, right?",
		"week": 5,
		"page": 29
	},
	{
		"transcript": "Good. The last step is definitely about a dimensionality reduction step. That is approximate to x only use the first k eigenvectors. Typically, we require that k is way less than N. That is what you said. The corresponding to the k largest eigenvalues where k is a parameter. As you have seen so previously, this is expected in the equation that we donate this data set. Right? So, let's say, if we want to get the less dimensions, so eventually, we will choose the first k dimensions. For example, they eventually, this data x can be reconstructed by using y1u1 plus y2u2 until we get an ykuk, right? So, this is so-called the K. Top k eigenvectors. And then eventually, this is similar. This is a previous data set, and then eventually you can represent this data set to use previously, it is y, y1 to yN, so now you get the y1 to yK here. So, this is about dimensionality reduction step. This is another way to realize to reduce about your data set. If let's say K is equal to N, what does this mean? It means that you are reconstruct the x data set, is equal to your original data set. And means further, it implies that there's 0 recognition error, right? Because your reconstruction data is exactly same before. But typically, we not required to use this. We do not value you get results that K is equal to N, which means you do nothing. Right?",
		"week": 5,
		"page": 30
	},
	{
		"transcript": "It's not useful. And this is an alternative way to realize the PCA algorithm. So, after we get the mean, normalization ensure every feature has 0 mean and the optionally feature scaling. So, we get this sigma kind of this sigma is what? This is what? Sigma is what? This is what? Sigma is what? Sigma is what? Sigma is what? The mean. The mean of what? No? What is the x value? xi. xi is 0 standard data. So as this is xi is equal to original x minus mu. Sigma is what? Still cannot remember? Is it the mean of covariance? It is not a mean, it's just the covariance. Covariance. This one is just the covariance, right? Isn't it? You need to focus on this. What's this? This is really calculated about covariance, because this x is already, as you're expanding here, it's already having zero mean here. What about those, what is SVD here? Any of you know? What is SVD here? It's the decomposition. Yes, exactly. And then, yes, and now here is a quicker way that you can calculate eigenvalues and eigenvectors. So previously, you need to calculate the eigenvectors and eigenvalues by using this kind of a little bit complex, this equation, right, and in the most software you guys can calculate SVD here. So, in next slide, I will talk about SVD. So, eventually, the x the U is called the left eigenvectors. We will rely on the left one so that you can get a reduced number of top k eigenvectors. And then z is your reconstruction data again, so then you can get this one, okay.",
		"week": 5,
		"page": 31
	},
	{
		"transcript": "Let's try to recall about of singular value decomposition here. So, this is, the first root is so-called the principal eigenvalues which has an associated orthonormal eigenvector u here, which means the transpose of u that it times with u, that is equal to 1, right? And the subsequence roots are ordered such as lambda 1 is bigger than lambda 2 is bigger than lambda M with the rank D non-zero values. And eigenvectors form an orthonormal basis that is u here is previous as similar previously. And eigenvalues decomposition of x the transpose that is equal to this equation, whereas U can see the loss of u1, u2 to uM, and the sigma here is just equal to the diagonal of this lambda 1, lambda 2, to lambda M here. So similarly, the eigenvalues decomposition of x transpose x is equal to this one, it should be eventually, the SVD is closely related to the above x equal to U sigma with the square root of the sigma here, times VT here. Here's the left eigenvectors U, right eigenvectors V, and singular values is so-called a square root of eigenvalues. So how you can get eigenvalues based on this result sigma here? So here is about this is the sigma 1 over 2 is the singular values. How can you get the eigenvalues here? This is the square root of eigenvalues. In another way, you should take what? Take square, you can get the eigenvalues. Right?",
		"week": 5,
		"page": 32
	},
	{
		"transcript": "And then similarly is now you guys have more idea about SVD. Eventually, you can get the U, S, V here, right? So, you will use this U as the eigenvectors and the square of S as eigenvalues. And this is another very quick view. So, in your homework, you guys are allowed to use SVD. If you want to, you can use SVD. If you don't want to, you can use eigen times directly from. You can both of. You can calculate both eigenvalues and eigenvectors.",
		"week": 5,
		"page": 33
	},
	{
		"transcript": "It depends on your own choice. What about the interpretation of the PCA, as probably I mentioned before, So PCA chooses the eigenvectors of the covariance matrix corresponding to the largest eigenvalues. The eigenvalues correspond to the various of the data around that eigenvector directions. Therefore, PCA project the data along the directions where the data varies most. For example, in this case, the u1 should be the largest one, and u2 should be the second largest one, right? As I said previously, because the PCA preserves as much information as in data. Preserving as much variance in the data set. So here, u1 and u2. You can try to preservative it so that you can get a lot of information about data set.",		
		"week": 5,
		"page": 34
	},
	{
		"transcript": "Now this is the first example, I will tell you guys how to do the PCA firstly, and you guys will have the chance to calculate the PCA by yourself later. So, you guys needed to pay attention to this one heavily, Definitely, the first step is what? Before calculate the covariance matrix, you need to calculate what. Mean. Mean. Yes. You need to calculate the mean and then, it should be each x should minus with mu here. So, eventually, you get a sigma x as these numbers, whatever it is. And the next step is to calculate the eigenvalues and the eigenvectors. And you can calculate it in this way. Right? Remember about this one, this equation. Right? you need to sigma x, then minus lambda I here. So, this is about your sigma. So minus lambda. This is a previous one so then you get this. And then, you can calculate this eigenvector, eigenvalues here right.",
		"week": 5,
		"page": 35
	},
	{
		"transcript": "After you calculate the eigenvalues, you can calculate eigenvectors. So why? First, if you get lambda 1 here. So now, you have lambda 1, 9.34 here. You can put the lambda 1 to be here. So, this is the lambda 1. Right? So, lambda 1 should be 9.34. So, after you solve this equation, you can get the similar. This result has this one, and this is better in a normalized data set. So, 1 here. And this is about your second eigenvalue, right? So then if you calculate the second eigenvector, you need like to substitute the previous lambda 2 to this equation, so you can solve this one, again, get another kind of eigenvector, and this is all the steps you guys need to calculate. And eigenvalues and eigenvectors here. And eventually, this is another donation of the first component and second components u1 and u2 there. And this is so-called the eigenvectors in these two directions there. Notice that if ui is a solution, then cui is also called a solution where c cannot be 0, right. Eigenvectors can be normalized to a unit length using this equation that we've just discussed. Divided by its norm. But it's not always necessary to get it to normalize to a unit length. Right?",
		"week": 5,
		"page": 36
	},
	{
		"transcript": "So here are the examples that you guys need to do. So, let's try to take a 5 minutes break. So, once you guys come back, you guys can get study how to calculate about eigenvalues and eigenvectors of this number. Okay. good. Probably, I think we can get back now. What is our first step again? Yes. So now calculate the mean of this write down this x1 to x6. Calculate the mean of it. Calculate the mean of it. This first step about is to calculate this mean vector. Right? And tell me, what is the mean you get? The mean. What is the mean of this vector? 4.5, 5. 4.54? 4.5, 5. Let me write down. 4.55 Just one number, It's 2. 4.55, 5. Good. Thank you. Why. Is that correct? Alright. Yes. Yes. Okay. That's true.",
		"week": 5,
		"page": 37
	},
	{
		"transcript": "Correct yes. The first step is 4.5 and 5. What is the next step?",
		"week": 5,
		"page": 38
	},
	{
		"transcript": "Yes. So next step, we try to subtract with a mean vector from the given feature vectors. So now, let's try to use x1 minus with mu. So, tell me what you can get here. It is new here. That means you guys have finished. Finish? Okay. What is the first number? What's this? Okay. That's it. It should be easy to calculate. Right? So, the first 1 should be -2.5 and -4. Right? Yeah. Yeah. And the guys all of you guys get this number, right? Yes. Ming-How, do you get this number? Is it correct? It's correct, right. What is the next step? Next step is covariance, this is little bit complex. Now, you guys can start it. I guess all of you guys have laptops, right. You can use the laptop to calculate the covariance here. If you did not have, you can use your calculator to get the covariance.",
		"week": 5,
		"page": 39
	},
	{
		"transcript": "So, this is the covariance matrix that you can get. But I will for the, similar, I will for the m1 to m6 here. So, tell me where eventually the covariate matrix here. Tell me the eventual numbers here. What's that? This is what numbers? I think this should be, this should be 5 or 10 and then 10, 16. Show me this one. Do you know how to calculate the covariance? I've already given you m1 to m6. So, this part, this part is already down or eventually the covariance number. Based on this. It is what? It is just the sum of all those 6 ends. Right? Then divided by what? By number of sum. This n is equal to what? The number. What is n here? It's 6. Right? So, for a time, you should directly put the answer here. Cause I think, based on those as long as I have the calculator, it should be quite easy for you guys get it. Right? So, the covariance matrix that is equal to number. So, once you get the covariance matrix, the next step is what. I will get the covariance matrix. What is the next step? Yes.",
		"week": 5,
		"page": 40
	},
	{
		"transcript": "Next way, you want you to calculate the eigenvectors and eigenvalues. So now lambda is eigenvalue let's say for metrics M it is a solution of the characteristic equation that is M minus lambda I, that is equal to 0. Which means that you should minus this one. Can anyone calculate and tell us the? Maybe it's difficult. Can you quickly get what is lambda here. So, in this case, I guess, you should be getting some kind of second lambda. Just give me the second lambda. That should be fine. You get something? So here is the equation. Right? Let's say what's going on. So, you eventually get the lambda1 is 8.22 and lambda2 that is equal to 0.38. But anyway, I think you guys already know how to calculate Right? Give you guys some time; I assume you guys are able to give me lambda1 and lambda2. Right? At this part, it should be easy to get it. So, next step, once you get the eigenvalues, you need to calculate eigenvectors. Right?",
		"week": 5,
		"page": 41
	},
	{
		"transcript": "And this step may be a little bit different from the previous one, and the here is a previous equation, and the here is exactly you've got. So, tell me what is the X1 and X2 here. Hear me, I use that example about the X1 and X2. So please calculate this one. Alright. So, once you have the eigenvectors. What is lambda here? This is the first step. Remember previously we have 2 eigenvalues, right. You need to substitute this previous lambda 1 here so then you get the 8.22. This 8.22 is the first eigenvalue, right? So, once you get the equation, you get this full equation. So, then you need to solve how to get X1 and X2 here.",
		"week": 5,
		"page": 42
	},
	{
		"transcript": "Let's go it deeply. So, let's try to explain what can we got. So, in this case, once you try to expand this one, it should be 2.92 times with X1 plus 3.67 times with X2, then equal to 8.22 X1 right. So eventually, you get two equations. So based on those, our first can get this one, is this part. And from second one you get this one. So, then, what is your X1 X2 here? Can you give me an example of the X1 and X2? Write down your X1 X2 here. Write down. Write down for your answer. Give me a give me X1 and X2. Yeah. It doesn't matter. Thank you. Give us 1, you think, and you want to give us one you think, and you want to give us. This is your X1 is equal to 3. This is your one guess. Do you have another guess? Based on this one. So, this is the first equation I get. What about those, the second equation? Is that correct? Is this one correct based these two equations. Is that correct? You can get those two. Right? But eventually, those should be very similar to each other. Right? Can you calculate the norm of it? Calculate the norm of this vector. Tell me what is your unit length of it? So, this is really about the eigenvectors. This is true. Right? You can use a computer, just use Python. Just to put this array then divide by its norm. Right. And tell me when this your answer is from these two, are similar, or the same, or something else? You can write down the norm for these two. You get it? Yeah. What's that? You can write it down there. Bring your laptop to there. Let's see what is your answer. It's the same. Same? You see it? You got you got calculated? What is the output here? What is the norm of this? Do you calculate? Is that same? Yeah. What are these mean? Although, you get two eigenvectors. Are they similar? Are they the same? Are they similar? Right. So eventually, if you calculate the norm, you should be very similar to each other. Is that correct? Right? Although you see these two are different, but once you get the norm of it, divided by norm, you will get similar stuff. And here is one answer that is just from this first equation, you can get X1 that is equal to 0.69 X2, and from two you get eigen vectors. This is one answer that Yujie write here. This is correct, right? And eventually, so now, up to now, you say you can calculate eigenvectors, right. You get it? Good. And this is also called the first component, right? You guys already able to calculate.",
		"week": 5,
		"page": 43
	},
	{
		"transcript": "And once you track two parts of this previous donations, X1 is equal to bla 0.69 X2. And this is so-called projection direction of the points, the previous all points. So previously, you have this kind of 6 points right, and this should be the majority of the first component of it. And then, if you calculate the, if you are interested, you can go back and calculate the second vector. So, second eigenvalue, right? eigenvalue. So, second eigenvalue is 0.38. So, you can get the second direction so that it should be perpendicular to this one line, it should be just very short. Let's do this. So, I think, up to now, you guys already able to calculate eigen values and eigen vectors, right? No problems at all. So that in the future, if your interview asks you how to calculate eigen values and eigen vectors, are you guys able to answer that? Maybe, for example, tell me the steps you can get calculated the PCA. You guys should notice about that. And this should be 1 interview question for you guys.",
		"week": 5,
		"page": 44
	},
	{
		"transcript": "Lastly, for this another example. Use PCA algorithm transforms the pattern 2 1, this should be giving a little sense. 2 1 in previous example. So that based on the eigenvectors, the previous equation, can you project into 1 dimension? Can you do that right now? What is the projection of 2 1? So, if you care about, you'll calculate reduction, right? Previously we get the first and second eigenvectors. The majority focus on the first eigenvector. What is the projection of 2 1 here? Can you calculate that? So here is the detailed equation. But the feature vector has the transform that if this is the eigenvector. Where are eigenvectors? This is the eigenvector. Use this 1, then times the feature vector. What is the feature vector? feature vector is what? It's 2, 1, right? What is the mean vector? Is 4.55, right? You guys have already calculated it. Then, tell me what is reduced dimensions. What is that number? Your first dimension? Any guess? So, calculate and tell me, what is the reduced dimensions here? Does anyone get the answer here? How about our online students? Do you get some answers here? So, your eigenvectors are here, 2.55 and 3.67. And here is about you really need to calculate it. Heider. Do you get it? No? Yes, or no? Do you know how to calculate it? So, what is the final answer here? No. No, answer. There should be a transpose here. Transpose is eigenvector. There should be a transpose. This is your eigenvector. Right? Transpose of it should be one by two. Ans this is two by one. And you eventually got a number of 1 by 1. That is what. Did you get it? Did you get the answer? What's this? You think the number is minus 6 or something? What about our online students? Did you get some answers here? I got -6.375 and -4. I think it's only one answer, right? Yes. -6 something okay. Get similar. What about other students? Got it? NO. Let's see what's going on of this one, okay. Unfortunately, you guys did not get it correctly. Let's see what's going on. So, this is about the eigenvalue. Right? eigenvector, right, is transposed should be this one This should be first one 2,1, then just minus this mean, right? So eventually, why you guys get minus 6. Which part is not correct? Because this, ShengHan, which part did you get it wrong? Uh-huh. I did not I did not use the dot product. I use multiply it. Sorry. Okay. That's probably the reason. So now you guys notice that how you reduce 2 dimensions to first dimension. Right? And the similarly, if in the homework, just in the homework, I give you some n dimension, and I ask you to reduce into 2 dimensions. You should have got a similar use similar equation, right? You know how to do that right. So, eventually, if you are in your feature size, a vector of dataset X with size of like n by like, 1000, you should reduce the dimension to n times two using the same equation here. You guys get it, right? So now I see here we have finished every step, 5 steps of PCA. Do you guys have any questions so far? Minghow, do you get it? It seems you are confused. Which part of it? Is this part? Did you get this part? Yes. You got it. What about previous eigenvectors? Did you get this eigenvector? You get it right. So, then it's fine. You get an eigenvector. You know about eigenvalues. Then you know how to get these reduced dimensions, then that's it. You know about PCA.",
		"week": 5,
		"page": 45
	},
	{
		"transcript": "So, next, let's try to talk about the number of k, right? How you determine ultimate the number of k here? So typically choosing based on how much information or variance we want to preserve here. For example, if we choose smallest k that is satisfied by the following equation based on this. So, this is the t here, where t is the threshold. For example, let's say, if the threshold is bigger than 0.9, that is t is equal to 0.9. In this case, we want to preserve the 90 percent of information, or 90 percent of variance of data set, right? So that you can determine the number of k. If k is equal to N that is the previously mentioned that we preserved 100 percent of the information in the data set. This is just a change of basis. That is x hat is equal to x here.",
		"week": 5,
		"page": 46
	},
	{
		"transcript": "And here is about how many components and with the relationship of the percentage of variance. For example, this PC1 means the principal component 1, And I have already account around, like, 22 percent right, this is just 1, and this is 2, this is 3. So, usually, your first of 5 or 6 components can contribute to more than 90 percent. Usually, you will choose around 6 like components that should be enough, try to cover your original data set. Right? Questions? No. Okay. Good.",
		"week": 5,
		"page": 47
	},
	{
		"transcript": "An approximation error or the reconstruction error can be computed by just x minus with x hat here. Just you need to calculate about its loss in this field. And it also can be showing that as an approximation error can be computed as follows is similar.",
		"week": 5,
		"page": 48
	},
	{
		"transcript": "This is a concrete example about the I believe you guys may try them before, the previous face images right, so one image as a vectors of pixel values, the face images are extremely high dimensions, for example, if one image had a size of 100 by 100, so you eventually have like 10000 dimensions, that's huge, right. So, this will be significantly slow and there are lots of storage that are required for your computer. But very few 10000-dimensional vectors are valid face images or usable, fast images. We want to effectively model the subspace of face images. And then, we can try and use PCA to achieve this goal. Do you guys do the similar tasks previously in last semester? Yeah. Yeah. Okay.",
		"week": 5,
		"page": 49
	},
	{
		"transcript": "Awesome. So, then, I believe you guys should have noticed about that. This is about the mean face. Right? It's the mean face of all images, and here are the top k eigenvectors. From the U1 to Uk, you have different dimensions. It has a lot of different faces, right, and different face bases there.",
		"week": 5,
		"page": 50
	},
	{
		"transcript": "And if you want to try to reconstruct images, the face x in the face space can be reconstructed by using this equation, right? And specifically, you can think about this. So, this is the reconstructed image. You have this mu, right. Then you plus lots of the eigenvalues from U1, U2 to U4. This is all about the eigenvalues. What is where? w is what? It's weight. It's just the weight. Right? Similar. So eventually, by combined, all of those important eigenvectors, we can reconstruct the original image, and this is particularly about the PCA, how it works here. Right?",
		"week": 5,
		"page": 51
	},
	{
		"transcript": "Here, for example, if we try to use 4 components So now you can get reconstructed images like this, and as this is about 200 components, you can almost like the original images, right? And this is about another 400 components you get everything about those. So, after computing eigenvectors using the 400 of face images from ORL face database, you can see this is very good images you can already get. No questions, right.",
		"week": 5,
		"page": 52
	},
	{
		"transcript": "Very and this is about -- this is very about SIFT features realization. The top 3 components of SIFT features described from a set of images are computed and the map those principal components to the principal components of RGB space. And the pixels with similar colors share the similar structures as you can compare these two, right? You know, we're actually some most important features. If you try to use PCA, you get the most important part of it in the image. For example, this boat one, there's red one, right?",
		"week": 5,
		"page": 53
	},
	{
		"transcript": "And let's try to see. So, this is another application with the PCA in the image compression. This is original image. And have a size of 372 by 492 image into patches, each patch is an instance that contains 12 by 12 pixels on a grid. And we can view this as 144-D vectors, because they have lots of dimensions.",
		"week": 5,
		"page": 54
	},
	{
		"transcript": "If we try to use a compression 144 dimensions to like 60 dimensions, so in this case, let's say, what's the performance use PCA compared to the original image, right.",
		"week": 5,
		"page": 55
	},
	{
		"transcript": "So, in this case, you probably barely can see some important features. Right?",
		"week": 5,
		"page": 56
	},
	{
		"transcript": "So here is about first 16 the most important eigenvalues. It is kind of fuzzy, but this still contain many important features that you need to reconstruct this image.",
		"week": 5,
		"page": 57
	},
	{
		"transcript": "So, this is just to use like 6D. What are 6D mean? 6D means what? Say loudly. Six what? Yes, definitely, you use the first 6 components while calculating to reconstruct original image. You can see a little bit of fuzzy here. Right? Let's see what other results.",
		"week": 5,
		"page": 58
	},
	{
		"transcript": "So, this is the most -- the 6 most important eigenvectors.",
		"week": 5,
		"page": 59
	},
	{
		"transcript": "As about 3D, you can get an even fuzzy stuff, right?",
		"week": 5,
		"page": 60
	},
	{
		"transcript": "Because you just reconstruct the original image based on the three most important features.",
		"week": 5,
		"page": 61
	},
	{
		"transcript": "And it's just 1D. Let's say, if you just rely on this, this should be the first one, right, it's just a very fuzzy, you probably cannot choose the correct object, you can just see background in this case. Right?",
		"week": 5,
		"page": 62
	},
	{
		"transcript": "And again, here is just about 16, Ahh 60, most important eigenvectors in the previous image.",
		"week": 5,
		"page": 63
	},
	{
		"transcript": "And this is a 2D discrete cosine basis about their relationship of it.",
		"week": 5,
		"page": 64
	},
	{
		"transcript": "And here is about our previous in my previous paper, I also use that ORL kind of face recognition. So here is about the first eigenvector. But I use another method called principle or geodesic analysis. Today, we'll talk about the principle of modern analysis. The principle of geodesic analysis is just based on another field. It's not in the face space. It's in the manifold space.",
		"week": 5,
		"page": 65
	},
	{
		"transcript": "And here are some results. I got a classification for this. So, basically for this blue color is the use of PCA you can remove this K-means here. You can just focus on the result from PCA model. It can achieve maximum like 90 percent a 95 percent of accuracy, but it uses another model that I developed it can achieve 99, almost 100 percent is PGA model, but it's another -- just another application. That is related to this PCA stuff. And this PCA actually is very important in the early stages before emerge deep neural networks, because it's very useful to reduce dimensionality. But nowadays, because we already have different neural networks, we usually use the autoencoder. You guys notice about that, heard about that? Autoencoder. No. Autoencoder. Have you heard about that? That doesn't matter. So, this is just one kind of neural network that is able to reduce dimensionality. Your first have kind of encoder here. An encoder is that you try to reduce dimension for the like the view of encoder. That's all. So, this is called encoder. This is the encoder, which means for example, you can see those images, you know, those images. So, the output of this is latent space. If you get latent space, you really get a small dimension. For example, you have, capital d dimensions, so this space to be small in dimension. And then you have like a decoder here. Make your dimensions go back to original D. So that you can really calculate the error between them, right. For example, here is original image I after this decoder, you can get another image I', right. So that you can calculate the loss that is I minus I' here. By minimizing the loss, you can optimize this network here. And this network is so-called autoencoder. And this is nowadays. People use autoencoder to reduce dimensionality. And typically, the autoencoder can give us a better result than this PCA. So, this is nowadays, we use this kind of method. Hopefully, guys, we are using that later, and you will see about it.",
		"week": 5,
		"page": 66
	},
	{
		"transcript": "Here's about other dimensionality reduction methods. So, this PCA we have already discussed. And then we have independent component analysis. We have multidimensional scaling and then we have LDA, the linear discriminant analysis etcetera. But they are all have kind of similar way to do that. Again, our final purpose is to reduce dimensionality right.",
		"week": 5,
		"page": 67
	},
	{
		"transcript": "Next, I want to quickly mention about kernel PCA. And will explain the reason why we want to use kernel PCA here. Did you guys learn about kernel PCA? No. Never. Okay. That's good. This can be kind of new for you guys.",
		"week": 5,
		"page": 68
	},
	{
		"transcript": "Performing PCA in the feature space. So that x is equal to x1 to xm with the matrix size of N by m. So, differently, in this kind of example, this m means number of, the N means the dimensions, and the m means the number of instances. So, u here is the eigenvector of the sigma, and the u is the linear combination of the samples, as we discussed previously. So, we have those right we have this lambda u is equal to sigma u here, right. And this sigma is what, sigma can be donated in this way. Right? Again, this xi has zero center. Right? So, this is about sigma. The sigma, right. And this u is you that eventually can get this kind of equation. We try to put the mu inside of this two x and we try to calculate what is u here. So, u is equal to this kind of equation. To simplify, we get we can donate the middle part as alpha here to the alpha i. So eventually, we can say that u is equal to this, like sum of all alpha i and the xi here.",
		"week": 5,
		"page": 69
	},
	{
		"transcript": "So, let's try to copy the previous equation here. Again, this part is just about alpha i. Right? And then we get a kind of lemma here. So, to calculate the alpha with the dimensions of m in the real values. So just use linear, an inner product, the gram matrix that the Kij is equal to this one. So, remember, this capital Kij is equal to Xi T transpose and xj here, right? And we don't need to calculate the values of xi. So, we just need to remember about the Kij is equal to this equation. Right? Remember, previous K is equal to this one xi transpose times with xj right.",
		"week": 5,
		"page": 70
	},
	{
		"transcript": "So, let's try to go back to original equation. So, this is the previous one that we've got. Right? So, then we can substitute to XiT, sigma u is equal to lambda xi T u right. So, based on those, we can do what. We can time with Xi T in left and right. Get it, so that we can get this equation. Right? Notice that we have this u here so that we can get a u inside of this equation eventually, and this is in sigma. Again, should be variance, then this party is a variance. And this part should be just the u here. Right? And then in the right hand, we have this u as we see here. And by applying some kind of trick here, you eventually get this answer. This is blah, blah, blah. Right? That is equal to lambda, this part is similar. And then we can further donate this should be K square, right? So that we can get a K square in this part. Right. And where K should be m by m metrics. And this is a should be K alpha that is equal to m lambda alpha. If K is the invertible, so it should be strictly positive definite there. So, we can get this kind of equation right.",
		"week": 5,
		"page": 71
	},
	{
		"transcript": "Next, we try to get the kernel here. So how to use alpha to calculate the projection of our new sample. So, eventually, you have this transpose t, here, this is also our u previously, we have t, and then we have alpha, but now we have the K here. K is so-called kernel in this case. Again, we do not need to calculate the Xi here. So, let K dominate Kij is equal to this phi x and the phi xj. Right. So eventually, you can use a portion to represent this phi here. Right? So that in this case, we really have a kernel in this case, in this example. And notice that, that should be centered in the feature space, and this is just the for the easy to donate so eventually should be minus all the mean here. Right? And this is so-called kernel PCA. The kernel PCA, the key reason is that we want sometimes we have, like, complex dataset with high dimensions. If we want to project in the low dimensions, for example, from, like, 2 d to 1 d or 3 d to 2 d, we probably want to use this PCA, kernel PCA. Cause kernel PCA give you a very good way, if the dataset has some strange structure. You will find it is very useful to use kernel PCA. And you guys maybe a little bit confused.",
		"week": 5,
		"page": 72
	},
	{
		"transcript": "I have another example in this case. So now let's say, this is a very result from let's say, this is a dataset. This is one data set, second to a third one if we use PCA, what can we get. You may get a confused right. Where is the first or second one a little bit confused. Right? You cannot separate with the dataset. Right?",
		"week": 5,
		"page": 73
	},
	{
		"transcript": "However, if you use kernel PCA, you can project a data in this case. Is it easy? It should be very easy to observe three different clusters use the kernel PCA, right. So that is why the kernel PCA is useful. The key reason is that if you want to project some kind of manifold-based dataset, for example this case, it is like a circle, and like into this case, this space is really about it's very clear for different classes, right. And this is about kernel PCA.",
		"week": 5,
		"page": 74
	},
	{
		"transcript": "And lastly, let's quickly talk about factor analysis.",
		"week": 5,
		"page": 75
	},
	{
		"transcript": "The factor analysis is a parametric procedure used to analyze the interrelationships among a large number of variables and to explain those variables in terms of their own underlying dimensions. Before let's to say the factors or components. The factor analyses adjust 2 types of variables that is observe variables, or latent variables that you can say underlying factors that are relatively independent of one another.",
		"week": 5,
		"page": 76
	},
	{
		"transcript": "And then here's the more details or the usages of the factor analysis, the issue of whether factor structures should be theory-based or data-based depends on whether the analysis is a confirmatory or exploratory. So, the exploratory factor analysis, also for the EFA seeks to uncovered the underlying structure of a relatively large set of variables. And the researcher's a prior assuming is that any indicator may be associated with any factors and blah blah. That is the most common form of factor analysis. Now there is no prior theory. One uses factor loading to discern the factor structure of the data. A second types is called the confirmatory factor analysis is also called the CFA seeks to determine if the number of factors and the loadings of observed variables on them conform to what is expected on the basis of pre-established theory. A minimum requirement of CFA is that one hypothesize beforehand the number of factors in the model. Here is just some explanation of 2 different models. But the key things are about, you need you guys need to remember what are the difference between Factor analysis, and a confirmatory analysis. Do you guys what would you guys talk about factor analysis, previously? No. Okay. That's good.",
		"week": 5,
		"page": 77
	},
	{
		"transcript": "So, then you guys probably need to remember about the differences, about PCA and the FA, and the PCA is what. We have discussed earlier, right? So, let's say, this is the Y1, Y2, Y3, Y4. We'll have 4 different dimensions. So, once you by assigning different kind of weights, you will reduce dimension to C right. Like smaller. However, factor analysis of things a little bit like opposite way.",
		"week": 5,
		"page": 78
	},
	{
		"transcript": "For example, this is really about the factor. Factor means what? You need to calculate on the line or the latent space, how you need to contribute to a different y, for example, is this one, this one. This is the Y1 equal to this, where Y2 is equal to this equation. For factor analysis, you really need to find what, find some points, some factors that is behind your Y1, Y2, Y3, Y4. And this is u1, u2, u3, u4 just about this kind of thing. This b is just our weight. And this is you can think little bit. This is just some difference about PCA and factor analysis. It's kinda. You get it? Yes, or no? So, one is making it smaller and one is tried to explore latent space that are some methods that contribute to your own dataset. And I think, once you guys grasp the key differences, that should be fine for you guys in factor analysis. I think these are the major contents for today.",
		"week": 5,
		"page": 79
	},
	{
		"transcript": "Now this should be homework 5. You guys should get another homework 5 there. The first step you guys need to implement is PCA. And then you need to reduce the data to the 2 dimensions, then we need to pull out 2 dimensions that a lot of that you guys need to compare the results with t-SNE view from sklearn.",
		"week": 5,
		"page": 80
	},
	{
		"transcript": "You get it?",
		"week": 5,
		"page": 81
	},
	{
		"transcript": "Let's talk about today's lecture. So, that we'll talk about the matrix factorization here.",
		"week": 6,
		"page": 1
	},
	{
		"transcript": "That's a quick review of last week. We're talking about this PCA, kernel PCA, and the kernel analysis. And those concepts are very related to that today's lecture about the matrix factorization. So, later we will review about more details of why the ideas so similar to each other.",
		"week": 6,
		"page": 2
	},
	{
		"transcript": "That's today's outline, we will first talk about the motivation of the matrix factorization. Next, we'll introduce the details of it. After that, we will, as I said earlier, we will briefly mention about the PCA and SVD in the MF. Also, there should be another message there. Then, we will talk about the More General Decompositions. Lastly, we will talk about the Nonnegative Matrix Factorization, and then about some algorithms how to get a kind of different matrix here.",
		"week": 6,
		"page": 3
	},
	{
		"transcript": "First, let's look at the motivation here. So, why we want to study the matrix specialization. So, before we answer this question, let's try to talk about this so-called recommender systems.",
		"week": 6,
		"page": 4
	},
	{
		"transcript": "And you guys probably noticed that nowadays, there are so many videos in the YouTube, like the 400, hours of video are uploaded to the YouTube every minute. Like, when it's happening in Amazon, they are like 353 million products. And 310 million new users. We have 83 million playing subscribers and streams about is 35 million songs, right? So, think about it. When there's so many different videos of sounds. Who cares about all videos, products and songs? So, people may care about a few. Personalization. Connect users with content they may use or enjoy.",
		"week": 6,
		"page": 5
	},
	{
		"transcript": "So, for an example, yeah, some main movies that you can find in the Netflix, in that website, you can try to use some for the series or movies, if you want to, watch.",
		"week": 6,
		"page": 6
	},
	{
		"transcript": "And for example, this Amazon holiday can see some items that have won the YouTube buy, for example, t food, and this is another 1. And then you're gonna have some more about those objects and the products. Right? And based on others of recommendation or best on your previous history.",
		"week": 6,
		"page": 7
	},
	{
		"transcript": "Even before, let's try, say you want to buy some books, in the machine learning. Too many different books that you can buy from the store because this reminds me. The good 1 is utilized in this box.",
		"week": 6,
		"page": 8
	},
	{
		"transcript": "Now, again, another simple example using that computational radius, as you can see here.",
		"week": 6,
		"page": 9
	},
	{
		"transcript": "So, this task, actually, is defined here where we actually have lots. So, we have many different users like more than 500,000 users, and we have more than 20,000 movies, and we have in more than like 100,000,000 rates I'm not I will go in here, what, try to obtain lower roads, these pair errors, so called IMSE Zender. Netflix's existing system on 3,000,000 with total ratings. So, how we can get some good ratings about a different movie price. So, this is about development.",
		"week": 6,
		"page": 10
	},
	{
		"transcript": "How we'll go? And here is this kind of about that I need a leaderboard that is conducted around, like, more than 10 years ago.",
		"week": 6,
		"page": 11
	},
	{
		"transcript": "Again, let's set up. The items are what. There are movies, sounds, products, etcetera, And the users, so here it's about giving the users, such as we have arrays, we have bought, etcetera. Like use it as municipal, purchase, or use it as a purchaser, etcetera, all of them by minutes, and we have some kind of hidden bag Sometimes you can get a 5-star rating on non-click on next to purchase etcetera. So, the key assumptions here is that we wanted to represent a radius that numerically and user and item metrics, the user only read as among of items the metrics is vast, as you can see here. So, you have several, 3 users here, and you have, like, 3 items here. Some parts of these metrics are missing. Right?",
		"week": 6,
		"page": 12
	},
	{
		"transcript": "Let's try to see another video of it. Again, we have this given the user here and then here's about moving maps. And again, it's about giving our breaking here. So, sometimes, because of the use, I only read a few items and when could they like to renew for example preference for the algorithm, the item.",
		"week": 6,
		"page": 13
	},
	{
		"transcript": "So, where is our goal? So, actually, this is how the metrics come in. Completion problem are also part of the metrics even. The transition problem, that is to transfer the table into a bigger user by moving metrics. So, here, let's look at the details of these metrics. You see so called the weighted metrics. Basically, each goal is a different user here, and the access will be presented in a different movement. And you look at how this some kind spots and reading metrics. Right? So, sometimes, for this person, he or she already likes to attend with this movie history, but I want now they're moving and that it has a lot of personal minds, which means that no data, no reading there, So that easiest canal, sparse reading metrics. As I said, our database is really about the user and the movie as part of that matrix. And our task, we try to find the missing data. For example, for recommending new movies to users failing in the question remarks. And there's also question remarks in grade or moment to figure out. Right? For an injured person, right? For example, for this person that comes to a cat, what can I wait Should be here, you know? And there are lots of algorithms. Like, for example, list of quire method, gradient descent, non-negative matrix factorization, low matrix completion, PCA, SVD, etcetera. So then, into this lecture, we'll be talking more about schema and algorithms. How can it help us to solve those kinds of matrices, completion problem. That's providing some unknown area of arrival. So, this is the reason why plan is the matrix factorization is important.",
		"week": 6,
		"page": 14
	},
	{
		"transcript": "So, actually, the latent factor model models, in our current state, I can check the plan there are ratings by characterizing both items and the users, a number of factors K, you further bronze are ready for us was arrested. We can associate with those factors with the idealized concepts like some different types, like, comedy, drama and actions, or for children, and also for other unknown kind of dimensions. So, how can write down the rating matrix R such that those or similar latent factors are automatically discovered. For this simple question, I'm saying it's yes.",
		"week": 6,
		"page": 15
	},
	{
		"transcript": "The letter will be ready to help you to do that. And this is you're messing about out of your own programming metrics. And this is due from the component to the C and the U. Is something that we want to decompose as matrix. Is that clear? For this goal, the matrix factorization. Now going what? So, add for them is almost equal to the see until it's, right? Our work, while justifying C and U, so that, you know, fine. You have any idea how do we do that? No, never mind. So, we have to well, we have to cover a detail about it later.",
		"week": 6,
		"page": 16
	},
	{
		"transcript": "Remember, in the last week, we talked about the principal component analysis, about the PCA, What's this? This this like this, but This is not his what? This kind of direction is what? The direction is what? Yeah. For the accident, your first component to write, and test your first component, and this is a second important component to write. This is something we learned from last week.",
		"week": 6,
		"page": 17
	},
	{
		"transcript": "Later, let's review how PCA affects metrics factorization. We define that for each crucial input, the vector x(i) is approximated. As you can see, we utilize an orthogonal basis for the principal subspace, and z represents the encoded vector. This approach allows us to achieve the correct sparsity load in the metrics form. Is that clear? For instance, if we subtract u from x, we obtain a recognizable form, enabling us to rewrite this computation in a different way. However, it's important to note that this 'a' can potentially represent various AI-related diseases or illnesses. So, we are ready to proceed. Okay, go ahead.",
		"week": 6,
		"page": 18
	},
	{
		"transcript": "So, PCA is approximately the x that is similar to you received, then you can rewrite the data set as it is this way. For x and signal, it has a dimensionality of if I am right, so then if we find the first component. So, that has some divide, cadets, okay, equal to 1. Right? This is about and this slide means 1 canal components, if we just focus on 1, and this is you here. And then, k, what k is just about to come out adding vectors so you thing about that in that similar way. And some blue line is when or how do vector. So, eventually, you have a size of 2 by n and this kind of metrics. So based on the size of the metrics, so this is the rank k of estimation. So, since you here were choosing to minimize the reconstruction error, as this is the optimum rank k approximation in terms of that. X minus UZ here, the other part is everywhere. Now, you're going to have my DK found in the PCA. We'll catch that has matrix factorization.",
		"week": 6,
		"page": 19
	},
	{
		"transcript": "So, let's discuss the measurements that we talked about last week, as we did then. This time, we're focusing on reformulated SVD. We aim for X to consist of real-valued embeddings. When we apply SVD, we have X equal to U times Sigma times V^T, where V^T signifies the transpose. The singular values are crucial here. I noticed your point about adding values, U, V, and the chest post. So, without going into too much detail, we can assume that the singular values decrease in order. In other words, Sigma 1 is greater than Sigma 2, which is greater than Sigma. And again, this should be clear in your mind. I'm not entirely sure, but it may result in a more significant metric for a single manifold. If we want to calculate the third largest eigenvalue of your X, it's basically about the trace of the transpose multiplied by X itself. So, in the end, it all comes down to the diagonal elements and their powers, right?",
		"week": 6,
		"page": 20
	},
	{
		"transcript": "So next, let's try to see more details about low-ranking algorithm approximations. So, we have our user x minus b, that's saying about another way where we try to, of course, it might. The x here. Our goal is what is kind of kind of smaller or low-ranked B that is close to x. And according to your previous SVD formula, we can rewrite it again in this example. And then eventually, we had a B star that is equal to sigma IUIVIT chess pass with all of a sudden from 1 to the k. Okay. And the thing about primary here, possibly in the district. And sigma must be in decreasing order for this! as we discussed earlier.",
		"week": 6,
		"page": 21
	},
	{
		"transcript": "And then for each answering of XAB. And that is almost equal to a U sigma VT. As I mentioned, so I know we can rewrite it as from I, from 1 to k, and we get all other kinds of small I with this kind of donation wire. For each entry XAB, if we're thinking about the Bth column of X, it can be approximated that has you see a period, basically, because we just think about 1 column. So that this will just be the 1-column parameter so that we have this UI here. If we're seeing above the Bth column of x, it is an approximation that as again, from the I equal to 1 to k, we have a sigma VBUI. But in this case, because we only think about is that Ath, we're also that addition to your head here.",
		"week": 6,
		"page": 22
	},
	{
		"transcript": "And then the SVD of an mxm matrix can be computed in O either which number is smaller. This is about computational time. It is a growth point of operations Also for the pros. The truncated SVD is computing only the top k singular vectors and the singular values can be computed against O. Again, in the ordinary, and happens with k, Well, so in this case, it's much smaller than this point. Right? You'll see about if you have about them, what is it like at this kind of time? It should be 10000 in the pipe. Right. It should be like a matrix of 100. It means that it is just a, but it's the computation. If you require a bit of your time. And there are our top k candidates in the order of magnitude of the singular vectors.",
		"week": 6,
		"page": 23
	},
	{
		"transcript": "Now, let's try to realize that the PCA and SVD again here. So, this has been our closest relationship with you. So, as you remember, this is the X, it's equal to U SIGMA VT and that U, sigma and VT provide a real-valued matrix factorization of X. U here is the n by k matrix, with orthonormal columns. U transposed U we will always get the identity matrix, right, with k by k, size. And the way here is also about another orthonormal kxk matrix. But in this case, that checkbox V transposed is equal to V inverted. This sigma you might get is just a diagonal matrix, which is the non-negative value. singular values. As singular values or eigenvalues, conventional all the way from largest, just smaller. So, in this case, it is possible to shoot that. The first step, k, singular vectors, corresponds to the first k principal components. Right? More precisely, we can see that. But see the previous 1 mentioned that, in fact, the matrix factorization is into for a given matrix x here, we want to find the u and the z here. Right? You will be seeing an SVD, which means that a z is equal to sigma comes with V transposed. Got it. So, this is a kind of relationship between, PCA and SVD and matrix factorization. It's terrible. Okay. Great.",
		"week": 6,
		"page": 24
	},
	{
		"transcript": "Let's continue with that. So now let's try to talk more general and decomposition. The problem with PCA: it describes the columns of the mean, the adjusted of data matrix in terms of the generic vectors., and those 2 vectors don't have any physical meanings, as they simply correspond to directions along which data has large variance. So, there's just no meeting behind it. And in practice, we might prefer decompositions that are more interpretable, which means that we want to know what are the details of each matrix. Right? We want to find some meaning of it. So next, let's try to give up a nation here. So, giving a matrix a, as a size of m by n, we're going to get an m approximation that is almost equal to the same time it was you, with some matrix c, which has a size of m by k, and the u has a size of k by n, have the columns up here.",
		"week": 6,
		"page": 25
	},
	{
		"transcript": "Again, here are the previous definitions. So now the question is, if the matrix u is unconstrained, that is, it can be picked up arbitrarily. Now, what is the use that can minimize this kind of outcome? It is just a result of a matrix factorization. This is just calculated as an error again from here. Confused, just in a notation changes, right, there's no significant difference between this 1 and the previous 1 was replaced the same.",
		"week": 6,
		"page": 26
	},
	{
		"transcript": "Let's try to talk about CU decomposition probably can solve the previous problem. So, we probably want to use a top case, singular vectors, or single values, to weight each of the matrix A here. So, we recall that the bth column of air that is equal to this panel. We created that we talked about previously arriving. So, we wanted to pursue another parameter called the pipe being here, that is we want to get a meaning of all these things to color. And this, we define a probability distribution of the columns of a, because these are hyper vectors are also similar to each other. And we can think about a pipe here that important column b was a lower right approximation.",
		"week": 6,
		"page": 27
	},
	{
		"transcript": "And here, about the detailed algorithm that we can finish this kind of a CU decomposition. So, we try to fix the k, that is from 1 to n, and then we have a small epsilon here. Epsilon is a what? Epsilon is what? Epsilon should be a kind of a very small number you will use it. Right? This is about the way you will define it. And typically, this is about the overall algorithm you need to first compute the pipe using the top k single vectors or single values from the SVD of A. And from the b equals from 1 to n here. You can generate a random r that is between 0 and 1 here. Right? Then you will try to compare if r is smaller than this kind of a value or not. This is either smaller than 1 or smaller than this kind of a number. Which one is small, then it keeps the bth column of A. So eventually, you're going to return the matrix C, consisting of the select columns of A. So, this is the 1 algorithm that I can calculate the CU decomposition.",
		"week": 6,
		"page": 28
	},
	{
		"transcript": "Theorem which means that with a probability, at least 99 percent of the previous choice of columns satisfies. More recent work has reduced the number of columns that you need to pick as well as the time complexity of finding a good CU decomposition. As one way, you need to balance that quality of talent complexity. Another way you guys need to find good results eventually. Right?",
		"week": 6,
		"page": 29
	},
	{
		"transcript": "So, this is about the CU decomposition. So, later, we have another kind of CUR decomposition basically.  So let me have another CUR decomposition. So, this method is actually that you can use another matrix, the R m by n. So given this signal as before, we want to compute another approximation that it has equal to CUR either for some matrix, C, U, and R. But in this case, u has a size of k by k, and R has a size of k by n. So, this is a little bit closer to the SVD. Right? Because as we do, you have new SIGMA and there's a VT here, right, that has a similar matrix as dimensions. Again, we have the columns of C, which are chosen from the columns of A, and the rows that are chosen from the rows of A here. And then we have a similar sampling strategy to find an approximately good decomposition of this form. Okay?",
		"week": 6,
		"page": 30
	},
	{
		"transcript": "So next, let's try to talk about approximate convex hulls. So why should we get those matrix factorization methods, how we can optimize our models or optimize these object functions? Right? So, we want to talk about complex parts. So, again, this is the previous definition of the CUD decomposition. We want to find the decomposition of this form that minimizes the Frobenius norm us equivalent approximating to the columns of A, with by the convex hull of the columns of C! So, whatever that means, be the reconstruction on U if we wanted conic hulls instead? So, what are the conic hulls?",
		"week": 6,
		"page": 31
	},
	{
		"transcript": "This is how we want to approximate conic hulls here. And again, this is how to find the decomposing of this form.",
		"week": 6,
		"page": 32
	},
	{
		"transcript": "And this is how we organize this kind of problem. Given matrix A compute this s equal to similar to CU again. And this is the try to minimize this kind of error, right? So, this is between the original matrix and the approximation. And here are some subjects or constraints, so that C is bigger or equal to 0 and U should also be bigger or equal to 0. So, again, is this a convex optimization problem? Oh, this kind of model. That's how you predict, it is our convex problem. We can always try to find some minimum values that should be good in our head square. Is this a convex position problem? There's a line.",
		"week": 6,
		"page": 33
	},
	{
		"transcript": "So, let's talk about all the details of errors. Address, this is a noun. This is an example of what is called the biconvex optimization problem. So, you know, that's what we're trying to talk about what is the biconvex optimization problem?",
		"week": 6,
		"page": 34
	},
	{
		"transcript": "So, here is the definition of function f that is directly from Rm by Rn, so-called the biconvex, if f.y is a convex function, for each fixed y value to R by n dimensions. And the fx. is also another convex function for each fixed x to Rm. And which means that also, that x y should it be a convex problem, convex function. Those kinds of functions arise frequently in application domains. So, they are nonconvex in general so applying that gradient descent does not necessarily result in convergence to a global minimum. Is that true?",
		"week": 6,
		"page": 35
	},
	{
		"transcript": "Let's talk about the block coordinate descent. So, the main idea: exploit the fact that f is convex in each block of variables to try to find the local optimum. Let's try to pick randomly, an initial base that is x 0 and y 0. So, we will repeat this until convergence. We will try to x in t+1 that is within this kind of minimum baggers. Now, we try to minimize this x given all other geese, and what would I try to choose a variety? T Plus 1, if it is, in the minimum of this kind of functions, which means we're up on a minimum of y, if anything x t plus 1. So, if f is differentiable, this procedure must converge it to a critical point, why?",
		"week": 6,
		"page": 36
	},
	{
		"transcript": "And what happens if the isn't differentiable? What is differentiable? What happens? So, we kinda take the derivative of this function. Yes. That's it. Differential means that if you can find the derivative. Right? If it is not, differentiable you cannot find a derivative. Right? Well, for not differentiable for the loss function, it probably you cannot, calculate its rating. So that's it's a key part.",
		"week": 6,
		"page": 37
	},
	{
		"transcript": "So here is about, 1 example, so that a fxy as a picture, the absolute value of x plus y, and plus the 3, that is a y minus with x. So as in this kind of function, you will find some tricky parts.",
		"week": 6,
		"page": 38
	},
	{
		"transcript": "Let's say, if x is equal to 4, y is equal to 4, so it can be another point to you here, right, before you are that correct? That coordinate that you stand out, cannot demand progress without changing both x and y. So even can you find a minimum, in this case, like in this kind of strange shape? You always find small, small, small in the area. But, actually, can you find progress without changing? Without changing both x and y, seem to manage. Let's say, I have only changed x, or if I only change y, having always a final and equal number, that is that you only check your y. I have what you get, the minimum, the global minimum. So, I tell you, the global minimum should be within some point there. Right? So, can you get it? You only check me why. Or cannot get it. I see, like, when only change x, still do not get it. So, this is, well, this is a biconvex problem. Right? We cannot find the local minimum. We try to use gradient descent.",
		"week": 6,
		"page": 39
	},
	{
		"transcript": "We try to use gradient descent. So that next, we try to fix this kind of issue. There are so couple non negative matrix factorizations. And similar to before where you have this try to find the minimum between the error and this kind of minimum and the subject to see and use. This is a previous stress, but in this case, we try to fix U to them and tell them this. And you can explain that this is really about a convex optimization problem. And then, in this case, we already have another fine result.",
		"week": 6,
		"page": 40
	},
	{
		"transcript": "Look how far was it. How can you solve this problem? Good. Yeah. You can really use gradient descent and you get good results with this case.",
		"week": 6,
		"page": 41
	},
	{
		"transcript": "So, matrix factorization can be also used for matrix completion problems. So given a matrix M which need not to be completely specified, by find a completion of M that has certain properties. For example, we have completed m to a positive definite matrix, and for example, we have low-ranking approximations.",
		"week": 6,
		"page": 42
	},
	{
		"transcript": "So, here, is another complex example that already covers early slides. For example, this is about recommendation systems, again, for some movies. This is the items, it's the users, and let's try to get this new matrix if you will kind of click on this from this 1 right? So, this is the items, this is the users. That's it.",
		"week": 6,
		"page": 43
	},
	{
		"transcript": "If you want, just details of this one. So, what's the number of this?",
		"week": 6,
		"page": 44
	},
	{
		"transcript": "So, what is this number? So, this is the help of corresponding to these 2 columns. I've got this kind of number. What is this number? So, this one is low. This 1 is the 0.5 0. 5 0. 5 0. 5. This should be 0 points. This is, no, this is just 6. So, this is 0. 5 0. 5. This is negative 0. 5. What is this number? Is that true? So why it hasn't been developed for this 1? Professor: Do you know how to get this number? Student1: I have no idea. Professor: So, what is the answer to this one? Student1: This is a minus 2. 0Professor: This is a minus 2. What about this number? What about our online students? 2. It's 3.8 It's March 1.8. The answer is what? The answer is What? Sorry? The three? Wow. I need someone by the ingredient was, and maybe you Ovadia. What is this 1? It was let's do that. That's a negative 5. Yes. Net is 0, but fine. 5 0. That's 0. That's 0. That's 0. That's 0. You have thoughts in there too. Yeah. 0.5 or 0.5. Net 0.5. Next 001 0.5, I guess. That's it. Yes. 6. This is the error on the screen. Yes. Is there 1 why? Yes. I understand. It's too important to pull. What is this number? Is it 2. 38? No. No. No. I cannot say, I said, you should have done a final sale. Yeah. So how do you get a correct answer for it? Both. The correct answer is poor. Right? I'm sure. Good to know I'm making mistakes because this is a kind of simple kind of operation. So, you actually you can avoid it here. Right?",
		"week": 6,
		"page": 45
	},
	{
		"transcript": "And then next, we try to talk about the official, so kind of great design on how we try to get these results. And then we can express finding the \"closest\" low-rank matrix product as an optimization problem. Again, here by Aij minus (CU)ij as a square, and this is the square of the Frobenius norm of the entries of that are given.",
		"week": 6,
		"page": 46
	},
	{
		"transcript": "And here, what's this? What's this? Yes, it's the regularization. Right? A previous A, CU, and the I, j are just to some kind of parameters in your model you want to optimize. Right? So why do you want to optimize it? And then here are the reasons that we want to add that again. So, the term has this end is called a regularizer and it's often used in machine learning applications to encourage more well-behaved solutions here.",
		"week": 6,
		"page": 47
	},
	{
		"transcript": "So next, and this is a non-convex problem: how to approximately solve it?",
		"week": 6,
		"page": 48
	},
	{
		"transcript": "What I needed to use. Bring this one again. Right? Oh, so let's try to see it. Student 1: Sorry, professor. I have a question here. Because we are trying to, like, use CU to predict our no value in the original matrix, right? Yes. But here, we don't know the AIJ. So how can we? Professor: We know we know AIJ. The AIJ is normal. Student 1: This is a given matrix? Professor: Yes. That’s the given matrix. Student 1: Yes. Oh, okay.",
		"week": 6,
		"page": 49
	},
	{
		"transcript": "Very good. So, again, overall, objective function again.",
		"week": 6,
		"page": 50
	},
	{
		"transcript": "Yeah. It's similar to each other. Right? Oh, I'll just you get it? Okay. Let's try to verify you guys, also right away. The CI is equal to you. CI plus I'll call that blah blah blah, let's try to see whether it is correct. There's a bar here. There are 2 here. You move this in more negative inside, you should be given minus lambda c to see here. Right? So, actually, I get rid of 2, because lambda has just term return. It doesn't matter over to you or none of over to you. Right? So, this is why it's cracked. Right? And the similarity that gets a result by UI, it should be also similar to a true upper, which is ARAY and lambda, a similar right. Good. What about our online students? You gather those. Can you gather that? Yes. Okay. I trust you guys. You should have kind of, you know, how do you get this great assignment. And I view these delays. They should be in my last slide about the matrix factorization o and those are all the important values you guys needed to do to implement. And this is a party that you guys need to implement for your homework.",
		"week": 6,
		"page": 51
	},
	{
		"transcript": "And homework is very simple. That is try to implement the matrix factorization using NumPy. In this case, for matrix factorization, only use NumPy. I won't allow you guys to use any other packages, just NumPy is enough for this kind of function. And then you need to compare your results with NMF. What's this? NMF is what? Do you remember what is NMF? What's this? Have you already forgotten? Matrix factorization? What is N here? Normal? Non-convex? What about other answers? Non-negative? Yes, non-negative. This is a non-negative matrix factorization. Okay, let's try to see your homework.",
		"week": 6,
		"page": 52
	},
	{
		"transcript": "",
		"week": 6,
		"page": 53
	},
	{
		"transcript": "So today, what I'll talk clustering. So, in your mind, what is clustering? What`s clustering mean here? For example, in 5 groups, and we've got some data and for classification and want to write by some rules we could use this method.",
		"week": 7,
		"page": 1
	},
	{
		"transcript": "And here is a brief outline. Well, first, I'll talk about what is the motivation of the clustering and goal discovery, and there are different types of customers that will want to be brief mentioned. And then lastly, I want to talk about k-means clustering, which is also one kind of methods that is frequently used in real world applications.",
		"week": 7,
		"page": 2
	},
	{
		"transcript": "So, let's move to the first part. Okay. That`s clustering is unsupervised learning method. So, for example, given your data X1, X2 to XN. And then we try to find a natural path for you on the grouping of the data. And then it has some example applications. So, for example, we try to identify similar energy use customer profiles. So <X> = time series of energy usage. Second example is about try to identify anomalies in user of behavior of computer security, and then your <x> = sequences of user commands.",
		"week": 7,
		"page": 3
	},
	{
		"transcript": "So here is another example about Magellan image of Venus.",
		"week": 7,
		"page": 4
	},
	{
		"transcript": "And this is a different prototype of volcanoes. So, compare these different applications you may find that they are probably different than photo clusters regarding some kind of fuzzy image. Right? And then you try to find some new seeds here in, among all of those images.",
		"week": 7,
		"page": 5
	},
	{
		"transcript": "The reason why we want to use clustering method is that, for example, your labeling is expensive. And then this is a typical common that we are made in the future, especially for the computer vision field give you so many metadata, for example, bunch of videos. We want to label those videos? Probably not. Right? Because it can take you around, like, wherever you have to label all the videos. The other reason is that you want to find some monotypes in the dataset without knowing any level of it try to find some characteristics among all those different datasets.",
		"week": 7,
		"page": 6
	},
	{
		"transcript": "And again, it's another view of the goal of clustering. So, given a set of data points, each described by a set of attributes. We try to find clusters, so that the inter-cluster similarity is maximized, and the inter-cluster similarity is minimized. What does this mean? So generally, the first we want to make sure that inter-cluster similarity is maximized, which means that we want to try to distinguish between different clusters, right? For example, we have 2 clusters here. We want the distance between these different 2 clusters to be separated with each other. Right? At the same time, we also want to achieve the goal of the intra class inter-cluster similarity is minimized. Which means that, if we only focus on one class, like one class here, right? There should be all those datasets should be a concentrated with each other right, as you can see here. In this example. These two clusters, each of them has nearby points, are closer to each other. This is the goal that we want to achieve. So later we will try to define the definition of a similarity in matter. Right? So, what is the similarity we want to get here?",
		"week": 7,
		"page": 7
	},
	{
		"transcript": "So, yes, this is another example. So, what is the natural grouping of this objects? So, for example, now, if you want a group or you want to do a finishing cluster of these different people. What can you get? So, what's your result here? Oh, okay. What was that? As said, I want also said, no. Male and female. Right? By age. Yes. Color can be another one. But the best color they were very similar to each other. Right? Okay. Yes. That's correct.",
		"week": 7,
		"page": 8
	},
	{
		"transcript": "So, let's try to see 2 commonly used, like, separation. So first of all, it's about, you can classify them if based on different factors, for example, this this part is about the Simpson’s family. I don't know if you see any kind of pattern before. But anyway, those people are in family. But for others, there can be some school employees. And another 1, as that you guys mentioned, we can use the males and females. So now, you may know is that the clustering has a subjective role. There are different ways that you can try to do our correct clustering Either way, you cannot say they are wrong. You should have, you can accept the right. And this is how you interpret the dataset. And then this is also lead to another disadvantages of clustering, right, it already depends on the distance function that you determined here.",
		"week": 7,
		"page": 9
	},
	{
		"transcript": "So next thing you may want to know, what is the similarity. Right? For similarity is the actual hard to define, but in this case, similar to each other, you, see? Can you see dog here? But if we're relying in growth at this part, we will say, yeah, very similar to each other. Right? If we only focus on some part, we say, yeah, probably. Another setting. This is still depending on the certain way.",
		"week": 7,
		"page": 10
	},
	{
		"transcript": "And then here, we try to distance metrics here. Definition: Let O1, and O2, be two objects from the universe of possible objects. The distance (dissimilarity) between O1, and O2 is a real number denoted by D(O1,O2). On the left 1, we have a lot of different kinds of chimpanzees, right on the monkey, and a later where you found this distance is 0.23. Are they the same are they similar? What do you think about this? Now, why is this by looking at objections to the sequel? The suggestion here is to give me that you find something to say whether that's enough or not. Hands on the other possible programs. What? Hence on the other possible programs. Yes, which means that eventually, if we just focus on this example, you're starting to see about all other examples. Maybe you find several examples you tell me whether this is similar or not. This is another about the text, the similarity between the different texts, like we have, different Peter and Piotr. Right? And this is how measures similarity here, and also, you'll have this fingerprint, right? And this seems very similar to each other. Because either giving you a very high value here. Questions?",
		"week": 7,
		"page": 11
	},
	{
		"transcript": "And then, yeah, as a different approach, that this matter should escape. For example, the distance between A and B is equal to the distance between B and A. So, this is called symmetric property. And the distance between a and a should be equal to 0. And this is a constancy of the self-similarity. And the distance between A and B is if it is equal to 0, so then we have to make sure that A is equal to B, and this is a positivity and order separation. And there is, it also is to satisfy the triangle criteria here. For example, the distance between A and B that it should be less or equal to the distance between AC plus the distance of BC. So, let's try to quickly approve that, approve it. So why should it be correct here?",
		"week": 7,
		"page": 12
	},
	{
		"transcript": "So, for example, let’s say, if distance A and B is not equal to your distance B and A. Otherwise you could claim \"Alex looks like Bob, but Bob looks nothing like Alex\". So, typically, here, this is not a result. This is not correct. Right? Let's tell you for the distance between 2 As and not equal to 0. Maybe you can find us somewhere. Otherwise, you could claim \"Alex looks more like Bob than Bob does\". This is also not right. You should find another example here.",
		"week": 7,
		"page": 13
	},
	{
		"transcript": "This is another 1, If the distance of A, and B is equal to 0, then we should satisfy that A is equal to B, otherwise, they are objects, you know, that are different bodies you cannot tell apart, and also about triangle an input here. So, you can print that. \"Alex is very like Bob, and Alex is very like Carl, but Bob is very unlike Carl.\" Typically, if I use these, this kind of common examples, you should notice that all those single properties, it shouldn't be right. Let's continue.",
		"week": 7,
		"page": 14
	},
	{
		"transcript": "So, here, we want to mention about 2 different types of clustering. So, first of all, is about partitional algorithms that construct various partitions and then evaluate them by some criterion. And the second one is hierarchical algorithms that create a hierarchical decomposition of the set of objects using some criterion. The left hand is a hierarchical algorithm. Right hand, there is the partition algorithm. So, from here, and tell you what the other differences between them? And a pre-audit. So, level 5 when I get trees. From supplier. What about the other part? On the right path, you're more likely to find some singular variations that are important to you from the objects. Right? So, in the next few slides. Let's try and talk about the hierarchical algorithm and the partitional algorithm separately here.",
		"week": 7,
		"page": 15
	},
	{
		"transcript": "First of all, so here is about the Dendrogram. It is a very useful tool for some summarizing similarity measurements here is a brief donation of this tree structure. So first of all, we have it as a root. This is the root here, and then we have a different ellipse, and then this part is called the internal node. Right? And definitely, this part is called the internal branch. And this big 1 is called the terminal branch. The similarity between the 2 objects in the Dendrogram is represented as a height up to the lowest, the internal nodes they share. What does this mean? The similarity between the objects. In a dynamic room representing it as the height of the lowest internal model they share. What about this case? So, compare those 3, Which 2 should be similar to each other? The right is basically in the same kind of nodes, right, compared to this one.",
		"week": 7,
		"page": 16
	},
	{
		"transcript": "So those two are the only one dataset that can be perfectly clustered using a hierarchy algorithm. Right? Let's say, this is a cow flow, and the left part is all more like some monkeys right. So, you have this given kind of monkeys, and here you have like some animals that are more like a real-world human being. Right? Do you see the difference? But this isn't just our ideal case. Right? In real-world applications, you know, we have been very difficult to find and approve clustering with this type of hierarchy algorithm. Because typically, your datasets, we have very similar to each other.",
		"week": 7,
		"page": 17
	},
	{
		"transcript": "This is the demonstration of hierarchical clustering using strong edit distance. So, for example, in the left part. So why are those 2 should be similar to each other? Why? Start with p. Right? I have it. But there's also m here. Why are those situations more similar than the state here? Yes. Why are we saying that? Now we're saying that but what a structure of this period is the proposal, then this characteristic stuff that we see. Right? You got it. Okay? Hello? So, let's say you'd be in the future, I do a bunch of text to you have what your choices come out with hierarchy. Do you know, how to do that? If I give you this bunch of texts. Do you have any idea in mind how to cluster it? If I have a distance. If I have a distance, yes. There can be one. Put a way to do that.",
		"week": 7,
		"page": 18
	},
	{
		"transcript": "Hierarchal clustering can sometimes show patterns that are meaningless or spurious. For example, the tight grouping of Australia, Anguilla, St. Helena, etc. is meaningful; all these countries are former UK colonies. You have this, right? As you can see from this part, from those part, those all should be you'll see, this is kind of similar countries. And previously, you should just belong to the UK audience, right? However, the tight grouping of Niger and India is completely spurious; there is no connection between the two. Is that right? Right?",
		"week": 7,
		"page": 19
	},
	{
		"transcript": "And we can look ahead at the dendrogram to determine the correct number of clusters. So, from here, you see some different clusters here. So basically, how many customers do you have? Two? Just two? I found that the picture is so happy. Do you find something interesting here? Yes. Well, typically we'll just have two different classes. Although, in each class, you may see there are a bunch of small already small hierarchies, some partition, right, but basically, typically we have these two. And we can, according to this hierarchy algorithm, I can help you solve some problems, obviously, with these kinds of numbers in here.",
		"week": 7,
		"page": 20
	},
	{
		"transcript": "So next up, we're gonna try to say why? Sometimes it's a hierarchy. It's very useful, for example, the raw potential use of a dendrogram to detect outliers Right? So typically, it's very easy to find that these 2 clusters are separated with a chance of running, especially for this kind of background. You've got these 2, you have these 2 clusters. And then the surprise -- surprisingly, you have another point is that it's a way. From away from them. It is away from all the other parts. So, this is a single isolated branch. It's suggested that a data point that is very different from all hours prior. It means that in the future, you may think about this can be a way that can help you throw away all different outliers. Typically, if you are the machine learning, we engage with those different outliers, because either way it significantly affects your final results.",
		"week": 7,
		"page": 21
	},
	{
		"transcript": "So here are more details about hierarchical clustering. Let's start with the right part. Since we cannot test all possible trees, we will have to heuristic search of all possible trees. We could do this. The first one. Starting with each item in its own cluster, find the best pair to merge into a new cluster. Repeat until all clusters are fused together. The second one. Top-down, divisive, starting with all the data in a single cluster, consider every possible way to divide the cluster into two. Choose the best division and recursively operate on both sides.",
		"week": 7,
		"page": 22
	},
	{
		"transcript": "So, we will have begun our distance metrics. Which are compensating for the distance between every pair of objects in our database. So, I'll try to understand the benefits of this vehicle. Why are there so many dealers? But you get it. But as we already have noticed from previous slides, the distance between the cell should be always equal to 0 lines, so that we get also a different 0. What about instance resisting two people? Well, what does 8? What 8 means? Okay.  Good or not? Or we say, yeah, which 1 is more likely to be in 1 cluster? So, these two women would be more like it in one. You know, what? You know. Right? This 8 means it is the vector of bigger numbers. It means that these two samples or these 2 people should be in 1 class.",
		"week": 7,
		"page": 23
	},
	{
		"transcript": "Bottom-Up, agglomerative. Starting with each item in its own cluster, find the best pair to merge into a new cluster. Repeat until all clusters are fused together. So here are some possible combinations. For example, conveyor can we consider all possible merges. For example, this is all different is possible. It's passed. Right? So that's What is the next item? To know, that's the right among those 2, those 2 should be the best, it seems the best.",
		"week": 7,
		"page": 24
	},
	{
		"transcript": "And as a reason, we can try to get this 1. So next, where we have this too as by cluster, and we have this another person, and here is about also other possible merging the pairs. So, then we also needed to select second and best 1. So, what is the best among others, probably about these 2 people, right?",
		"week": 7,
		"page": 25
	},
	{
		"transcript": "And similarly, we will try them together until like them, we will try to merge these 2 together. And similarly, we will go out until we finish the tree of it right away. Is that clear? Okay. Great.",
		"week": 7,
		"page": 26
	},
	{
		"transcript": "And you mentioned at this be run by merging also by people here.",
		"week": 7,
		"page": 27
	},
	{
		"transcript": "As for now, we know how you measure the distance between 2 objects. But defining the distance between an object and a cluster or defining the distance between 2 clusters is nonobvious. And then here are just the 3 different methods. For example, the first one is the single linkage, which means that are nearest neighbor. So, in this method, the distance between 2 clusters is determined by the distance of 2 closest objects, Also, this is called nearest neighbor. So, this is about a single linkage. The second 1 is about complete linkage. That is the furthest neighbor. So, is this measurable the distance between clusters is determined by, like, great the distance between any 2 objects in the different clusters. That is to say by the furthest neighbors. So, we are kind of focused on the objects that are far away from each other. The last 1 here is about the group average linkage. So, in this method, the distance between 2 clusters is a calculated as the, average resistance between all pairs of objects.",
		"week": 7,
		"page": 28
	},
	{
		"transcript": "So here, they use another method but a single linkage. So now, but anyway, from here, you can talk about the differences between the height of a single leakage and the average leakage. Do you see the difference there? The heights should be very similar to each other. Right? But in the other case, you see, it's a height thing. It's very weird, right? So, this should be, you know. Let me give you that.",
		"week": 7,
		"page": 29
	},
	{
		"transcript": "So, for the hierarchical clustering methods, this is like a quick summary. So, there is no need to specify the number of clusters in advance. The hierarchical natural maps nicely into human intuition for some domains. They do not scale well. So, the time complexity of at least, like ordinary of n square. N is the number of total objects. So, like heuristic search algorithms, the local optimum problem. So, the interpretation of the results is very subjective, and it depends on lots of reasons how you will think about the different datasets that we already discussed so far.",
		"week": 7,
		"page": 30
	},
	{
		"transcript": "So next, we want to briefly mention about the partition of clustering. And this is a non-hierarchy, and each instance is and placed in exactly of K nonoverlapping clusters. Since only 1 set of clusters is output. The user normally has to input the desired number of cluster k. What does this K mean? So, you miss what? K means the number of clusters. Yes. So, in this method, typically, you should have predefined the clusters. Right? For example, if you are on the system, with lots of people in 2 clusters, k is equal to 2, and you should get this result. As a result, you may use the k value as 3, you should get another different story. Right?",
		"week": 7,
		"page": 31
	},
	{
		"transcript": "And then here are the squared errors that we were we are frequently used in the previous weeks. Right? What is the CK here? CK here as well. It's a center. Yeah. It's the center. Or the center all the center of each cluster. So, in this example, this CK should be just this red. This red point is right. And the TIG just above that each. Points, and then your overall objective function is tried to just evaluate the sum of all of it, spread out. Right?",
		"week": 7,
		"page": 32
	},
	{
		"transcript": "And also, this is very important about our partition algorithms also called as K means clustering. Your first step is to decide a value for k as a determinant, how many k you want to get. And then next time, you try to initialize the k cluster of centers, randomly, if necessary. And then typically, another way is that sometimes it will be better if we choose a data point, we cannot data point. For example, if k is equal to 3, you can randomly pick up 3 data points, because if you randomly select center, those random points can be far away from your data point. We'll get a, what I'm saying. yes or no. Let me repeat again. So, sometimes it is better if you're, in neutralizing your center using some data points to sell. Is there instead of completely randomly generated points? Because sometimes, if you randomly generate those centers, it will be far away from the data point. If the centers are far away from the point. What is the outcome of it? Whatever your high has a white pen out of high. What about you actually? If your initialization is a problem from your data fine. So now the cumulative thing is that if you run the randomly selected points that are probably from your data points. Eventually, it will take you more time to train this whole algorithm, right, because, in visualization, it is far away from another point. Eventually, you're about to go back a little bit, a little bit like you're still there. Eventually, we'll go back. I think it will affect the speed in terms of convergence. But later you guys can try. Firstly, randomly initialize the clusters, or you can choose some data points. Okay? In the second step, you needed to decide the class membership of n objects by assigning them to the nearest class center. What does this mean, Decide the cross membership of n objects by assigning them to the nearest across the center. Well, it shows their neighbors who will be in the same class. In this case, at least that, you will you will need to assign your data point to its nearby center. Right? previously, you're like, in a second step let’s say, k is equal to 3. Right? You already have 3 clusters, but as they used. 5, do 3. So now, in that state, you'll probably have lots of other data points, lots of dots, right, lots of problems here. In your third step, what you need to do is try to assign the data point through each nearby center. You will get nearby here. It will be up to here. Right? Like, this way. This is the sort of sample. So, you need to calculate a distance. Alright. Calculate. Distance. So, for 1 data point, you needed to calculate. So, in times, yes, exactly. So, then, you were determined, which is its nearby cross turn? What does this mean? Give me just an example. After you add more points in one cluster and you populate the center again. Yes. For example, you have you have assigned those different data points with your cluster. So, in this case, you will try to get the mean of it as its center. You will have this as the original center and, in this case, in the first step, you have a new center. You will move this probably maybe towards here. Right? So, this is how you update your center in this case. It's clear. Right? And in the last step, if none of the n objects has changed the membership in the last iteration, we've tried to exit, and then you're finished. Otherwise, you go to the third step again, right? You are repeated. This is sort of standard. Calculate the distance of this new center. So, this is the previous center. Right? So that is it. This is your new center here; you say that it's none of these n objects are not changing. You can say that you are finished. So, this is about the overall k means clustering method. Is it difficult? Okay. That's great.",
		"week": 7,
		"page": 33
	},
	{
		"transcript": "Yeah. So, this is, let's say, this is the first example of the clustering methods That's also is it just on metrics? Should you also terminate distances don't change being, let's say, technically, you can have 2 points of minimizing distance. So, you would never be turning and you just need to be supported. So typically, no. So, for that case, either it will maintain as a previous 1, there will be similar to the previous 1, which means none of those objects are changing. Right, but you're only terminating if the center doesn't change. Right? 1 of the standard. It's about the objects. So, no objects. Membership has not changed. You check as I have on all the other points. Right. And in this case, what we use Euclidean distance. If you have any, the distance, you can give new points, so first up, we initialize the 3 clusters. Next, we calculate the distance with it.",
		"week": 7,
		"page": 34
	},
	{
		"transcript": "Probably like a kind of partition of it. Next, we try to move initial clusters to some kind of mean of other objects. So, in this case, we will see that in these 3 clusters, the center is changing.",
		"week": 7,
		"page": 35
	},
	{
		"transcript": "So now in this case, so next, you try to re-calculate your center or assign the points to this center. In this step, well, the updated center would be 1 of the data points for just the main points.",
		"week": 7,
		"page": 36
	},
	{
		"transcript": "So, this is the best on these 3, those 3 should be based on the current group of memberships, right, based on those 2 parts, just on all levels. Yes. That's not a mean distance. It shouldn't be mean of all the points, data points. Right? So, in this case, you see, the center is moved again, which means this is not optimal. How do you think you see legal offer centers? Under said, 2 ways. Why? 1 of them, another is just a 2-dollar sweep. There are points in their sector.",
		"week": 7,
		"page": 37
	},
	{
		"transcript": "And this is this should be a result of the three different clusters.",
		"week": 7,
		"page": 38
	},
	{
		"transcript": "And this is another example, a real example, to show how the data set and the data points center change. And now we have this kind of initialized 5 classes. Let's see what's going on in this, basically, use k-means clustering method here. So, this is the first problem we get. For every update, there is a change int he datapoint. But this problem, the change is little bit, right, because it's almost like the center of it. Next until you eventually, you try to gather all of them. You should see the center images are your center chain. Okay. So later, we'll dive deeper to discuss more about your homework.",
		"week": 7,
		"page": 39
	},
	{
		"transcript": "Maybe we can have, like, 5 to me this break. To me, I'm exactly where we're gonna try to discuss 1 by then. Okay? Yeah. Usually, it has to, like, the ball works. Yes. So, I'll just try to briefly mention about k-means clustering methods. It's typically what we're talking about is advantages, and its disadvantages, for example, there are several spaces like relatively efficient. For example, it shouldn't be in the ordinary of t times m and n. Where n is just a number of objects, and the k is the number of clusters, t is the number of iterations, And the normal k and the t should be way smaller at that end. Right? And often terminates as a local optimum point. And then also, there are several other weaknesses. Then what about the category data, probably difficult. It needs to satisfy K, the number of clusters in advance. And it is unable to handle noisy data and outliers. So probably in advance, you need your model’s kind of noisy or outliers, as I said, probably you can operate with a hierarchy of algorithms, and try to remove some, unless or you can use another method to remove the outliers first. Otherwise, what is better? Small k or large k? What do you mean? There's a lot When k is common or when k is bigger, min, which 1 is better? We'll go back to your question and answer. Yes. This is how do we identify all layers? All layers? So, for example, you may need to quickly find maybe from the hierarchy algorithm. Did you find the right point that there is far away from the other points? But by either way, just to calculate the mean of the data, then I'm thinking of distance mean or new or other data points. You can find a few points far away from the other points, right? And it is not suitable to discover clusters with non-convex shapes. So later we try to explore more.",
		"week": 7,
		"page": 40
	},
	{
		"transcript": "Let's go back to the previous slide. How can we measure the similarity? Alright. This is row 1, and this is animal, fingerprints.  How to measure the similarity. Extract the features. Yeah. The feature can be well learned, but if you have the feature, how to take advantage of this and everything. Never mind. We're gonna try to cover that similarity next time.",
		"week": 7,
		"page": 41
	},
	{
		"transcript": "Let's try to go a little bit away for the comment. This is a generated technique for measuring the similarities, mirrors are similarities between two objects. We needed to transform 1 into another and the measure of the effort becomes the distance measure. For example, the distance between these 2 people can change the jazz color and change the air in the shape of blah, the change in the hair part, maybe you can use this as a 3, and this can be other. The nature of it, for example, the distance between a match and the same. For example, you have a dress difference, you have average earrings, you have hair part, you have to take it out with smoking, and the lost weight, far back, you have 5. So, this can be 1 way. So, this is the cause of the edit distance or the transformation distance.",
		"week": 7,
		"page": 42
	},
	{
		"transcript": "And after that, you need to add in distance to this. Another example, it is possible to transform any string Q into string C by only using substitution, insertion, and deletion. Assume that each of these operators has a cost associated with it, and the similarity between two strings can be defined as the cost of the cheapest transformation from q to c. So here are the details, somehow similar between the Peter and another kind of Peter. So, as soon as they're following the cost function, the substitution as 1. So, one unit and insertion and deletion should be one-unit relations for both. Why is the distribution between Peter to Piotr equal to 3? For example, in this part, what do you need to change this term? Substitute to the e with the I. We arrive in this, and you'll have a 1 unit here. So, after that, you will replace the t with o. We have another unit, So, eventually, you try to delete the least. We get another Peter, so totally have 3 units here. So, then you can see the distance is like 3.",
		"week": 7,
		"page": 43
	},
	{
		"transcript": "So, what are distance metrics did k-means use? What assumptions is it making about the data? So, these are the key questions that we tried to answer later.",
		"week": 7,
		"page": 44
	},
	{
		"transcript": "This is about a 1 way. For example, the partition algorithm 2, we're using an Euclidean distance threshold to define the clusters. So, as you can see in this imaging, let's try to read it carefully so that the distance variable can affect the number of the number and the size of clusters in the similarity-based clustering method for 3 different values of distance d here. You have d 0, equal to 0.3, that is or is equal to 0.1, and this one is equal to 0.03. So typically, that's smaller of the vector d is smaller, and there are more numerous of clusters. You have more clusters later. So, for example, this key is equal to 0.3. In this case, in both, I have a valve in this case. By your last day of your days, very small, how many classes do you have? They have many, so many different clusters. Right? And this is the reason that the distance metric can affect your final performance of our clusters.",
		"week": 7,
		"page": 45
	},
	{
		"transcript": "Other, we use the Euclidean distance always. The answer is no. It will be good if the data is isotropic and spread evenly along all the directions. Not invariant to linear transformations or any transformation that distorts distance relationship. For example, in this case, sometimes it will be very difficult to use Euclidean distance but if the data is, like, equally separated, you guys can use, like, an Euclidean space. So Euclidean distance is not always useful for clustering. So counter, we have the if you use the Euclidean space, is typically means about the k-means clustering possibly should be in the flat. In this space, but let's say you have kind of multiple, like, 3D sphere, you guys probably need to use some kind of k means manifold.",
		"week": 7,
		"page": 46
	},
	{
		"transcript": "So now another question is that is normalization is desirable, is it good in this case or not? Oh, it's gonna allow me. Yes. That's correct. In this case, we do not want to get some normalized data. Because as you can see in this, your data is big, yeah, normalized data should be concentrated with each other. Right? We are using a lot of boundaries. Direction information about the separation of it, right? So, we will try to avoid it once we try to do some clustering, but in this case, you have directly told that there are 2 different clusters. In this case, it will be a little bit difficult to attend. Right?",
		"week": 7,
		"page": 47
	},
	{
		"transcript": "And then here about other distance or similarity matters. First of all, is about the distance between instant x and y, we are curious if bigger or equal to 1, or you use a kind of norm. It's the so-called Minkowski metric, d here is just 1 attribute. Let's say if q is equal to 2, What does this mean? If k is equal to. What's that? It's q as equal to 2. It is what? The square root of the sum of squares. Right? It's a super-hot and s d. Right? And this is the similarity method that I mentioned previously, this is the cosine of the angle between 2 vectors are used to give us a similarity function. This is what the precise similarity, right? So-called RMSE and this is the similarity measure I mentioned previously as the cosine of the angle between two vectors or instances gives a similarity function. The cosine similarity is one of the most frequently used similarity metrics. For example, what are 2 different tasks? The cosine distance between those 2 text, you can get the similarity between them and even for the images, you can also try to pick up the cosine similarity. So, this 1 should be something that advice that you'll need to have in your mind.",
		"week": 7,
		"page": 48
	},
	{
		"transcript": "So, when the features are binary, this comes the number of attributes shared by x and the x prime, divided by the geometric mean of the number of adjectives in x, and there's a number n x prime. So as a simplification of this, it should be able to move it this way.",
		"week": 7,
		"page": 49
	},
	{
		"transcript": "Next, we will talk about what is a good clustering. So how do you get the optimal k? So, in your case. What is the difference between a b and c here? Seeing equal distribution. Say an equal distribution. Yeah, it seems that there are three clusters. But what about the other differences? The typical of the gap, maybe this is a 1, maybe this is a 2, and this will reproduce 3. Right?",
		"week": 7,
		"page": 50
	},
	{
		"transcript": "And here's another clustering criteria. So, this is the sum of squared error so there is a lot of some errors there.",
		"week": 7,
		"page": 51
	},
	{
		"transcript": "And this is a data set, which means that the SSC is not a good criteria, in this data set because there's that. It's just that as a line, this shouldn't be just a wide cluster.",
		"week": 7,
		"page": 52
	},
	{
		"transcript": "And again, we are trying to explore, how does the classifier impact the performance, right? So, this is 1 case, and this is another case that may be this problem, and probably there are two classes, right? Because they are very different from each other. But as this 1, it will be difficult to talk about different clusters. Right? Which 1 is better? You see, m, b, which 1 is better? B, is that absolutely, correct? Right? You need definitely, you need to calculate distance because then so after that, you can tell right. But usually, we will have seen that it seems better than previously. Progress 1 k here.",
		"week": 7,
		"page": 53
	},
	{
		"transcript": "",
		"week": 7,
		"page": 54
	},
	{
		"transcript": "And to apply that partition clustering we needed to select the features to characterize the data, and then we need to collect the representative data, then we need to choose a clustering algorithm and then we specify the number of clusters. so that we can get good at the classification of your data points.",
		"week": 7,
		"page": 55
	},
	{
		"transcript": "And then, let's go back to your question. What about K? What is optimal K? You need to select. There are several ideas. The first idea is by using your new trick of cross-validation to select K, but as we speak, this means that whether or should we optimize the SSE, the trace, or different other loss functions, or some kind of problem, which means that I got familiar with the first validation. What does this mean? So, and we randomly choose several parts of the set for, yes exactly, what about others, you know, what is the cross-validation? Let's say about 5k for my cross-validation. Okay. You have 5 more. Let's say, in this instance. In 5-fold cross-validation the randomness level 4, a training and another one as a test This is the 1 time. And in the second time, we make sure this is a training as this 1 is a test. The second idea is tried to let us start at first. Look at the cluster and we decide whether they're lacking, they're lucky or not, right? How the way it should distribute that to this kind of experts? Right? Another solution is the knee solution which we will do later.",
		"week": 7,
		"page": 56
	},
	{
		"transcript": "Let's say, if k is equal to 1, which means that we only have 1 big class, right? And this is the objective function that'll use that sum of the square error as an object function. For example, in this case, this is a pretty big number here, do you know how to calculate this objective function?",
		"week": 7,
		"page": 57
	},
	{
		"transcript": "What about k is equal to? Do you see the significant changes? Your objective function is given. Pretty smaller. Right?",
		"week": 7,
		"page": 58
	},
	{
		"transcript": "What about K equal to 3? It's a further smaller. Right? Oh, that means no 1 is better. A small 1 is better. No. Why? If k is one hundred is gonna be really small. Yes. That's correct. Yeah. So, let's say, in the extreme cases, as you have many, the case, in which you have data points, this distant function can be 0. Right? It's not necessary, means as smaller, it's better.",
		"week": 7,
		"page": 59
	},
	{
		"transcript": "So now Let's say, we can plot out object function values per k equal to from 1 to 6, We can find that there's an abrupt change at k equal to 2. Right? This is too big, and this is, I think if you can change, you know, right? So, once you see this kind of sign, you will notice that as this is, like, highly suggested that 2 clusters you know, data should be the optimal K. And yet, right, because you cannot see any significant difference and this is technically what determines the number of clusters is known as the knee finding or elbow finding after now, does that answer your question? How can I find out if it's an optimal case? The other function, then let's do what. And try to plot out the object function, right, and find some significant chance so that you can find the optimal K for the dataset. As this is just a 1 sign and you determine the k, you know, anyway, it is not always correct. There. But you should notice that the optimal K should be around in this area. Definitely shouldn't be just this area. It's not should be around this area. Is that clear? Great.",
		"week": 7,
		"page": 60
	},
	{
		"transcript": "And this may we may have some kind of similar question there. So, for the high dimensional data poses a problem for the clustering that we have mentioned high dimensional data. How can we handle this highly dynamic data? Oh, why high dimensional data is a problem? Because we'd either always calculate the distance between the data points. Let's say, where data points are very high, it will take you a long time to compute it. This is data points, again and again, right? Because let's say, because each iteration you need, to calculate the distance for many times, and this has done business. It is difficult to find the t2 clusters because they are made irrelevant or redundant in the features. And all the points are equally closed. Here are just some easy solutions, for example, above the dimensionality reduction You don't remember what kind of method can you use it for it. We can use PCA. Right. This will be a good way. Another 1, what about the features, the next step? We can then choose a portion of features, right, instead of half of them. Another way, like, clustering, you do some random projection. So that will we might visit later in the future.",
		"week": 7,
		"page": 61
	},
	{
		"transcript": "And let's try the group to talk about some redundant information. Okay. I see these kinds of very white Different points. Yeah. For example, those and this part are more like the redundant or redundancy points there. Because this should be a little bit away from those data points.",
		"week": 7,
		"page": 62
	},
	{
		"transcript": "And also, there's a point that should be irrelevant. You guys will then more care about these 2 classes, right, rather than you'll also have these kinds of irrelevant features.",
		"week": 7,
		"page": 63
	},
	{
		"transcript": "And also, you guys noticed about the curse of dimensionality. Right? One hundred observations cover a dimensional unit interval between 0 to 1 well and you know consider the 10-dimension unit hyperspace with a hundred observations are now isolated in a vast empty space.",
		"week": 7,
		"page": 64
	},
	{
		"transcript": "And then we have the consequences of the curse, suppose the number of samples given to use in the total sample space is fixed and the dimension increases, then the distance of the k nearest neighbors of any point increases.",
		"week": 7,
		"page": 65
	},
	{
		"transcript": "And here's another method that I tried to solve these problems for feature selection methods. The first 1 is about the filter traditional method approach. If you have something, let's say you have all the features here, you can apply some beautiful measurements, so that we can provide some good features and after that, we can apply some clustering algorithms, like k means we discussed today. And then here's another way first off, we have all features, then we try to get a little bit of search. So, then we'll find the features. We'll do the clustering, and then we'll do the clustering again. So that by using the loop, we are finding some feature evaluation criterion after that we get the clusters. So, we will try to review these methods a little bit.",
		"week": 7,
		"page": 66
	},
	{
		"transcript": "So, the first part is about search.",
		"week": 7,
		"page": 67
	},
	{
		"transcript": "So, this FSSEM search method is called the sequential forward search method.",
		"week": 7,
		"page": 68
	},
	{
		"transcript": "For example, if you choose B, here, you adjust the sequentially from your B, and C, and D, and C there was a search A, B, and C.",
		"week": 7,
		"page": 69
	},
	{
		"transcript": "So, after that, you will try to get some customers.",
		"week": 7,
		"page": 70
	},
	{
		"transcript": "The EM, previous suggestion, expectation, and maximization, so-called EM of the result.",
		"week": 7,
		"page": 71
	},
	{
		"transcript": "So now, using a fixed number of clusters for all feature sets does not model the data in the respective subspace correctly.",
		"week": 7,
		"page": 72
	},
	{
		"transcript": "And the other data, you guys Can you try to get some feature evaluation evaluation criterion? So, on the other slide, you can verify that this is necessary Right? So, this is about the method I briefly mentioned.",
		"week": 7,
		"page": 73
	},
	{
		"transcript": "But again, this point should be the. The key part about today's lecture. And out today, you guys need to remember how to implement the k means clustering, so typically k means clustering. It's kind of an easy problem. For future interviews, maybe they will not ask you to implement k means, because they know that the k means is relatively easy. That's a bit anyway, you guys need to remember about how you implement the k means. So, you have to figure out the steps. Right? So, the first step is to decide on a value for K and then initialize the k cluster centers randomly of necessary and then as the third step decide the class membership of the N objects by assigning them to the nearest cluster center and then as the fourth step re-estimate the k cluster centers by assuming the memberships found above are correct and as the fifth step if none of the N objects changes membership in the last iteration then exit otherwise go to the step third.",
		"week": 7,
		"page": 74
	},
	{
		"transcript": "And then here is my last slide. First of all, you implement the clustering method, and that's what you need to calculate as an accuracy using the labels. So, let's try to see what are the other details of experiments.",
		"week": 7,
		"page": 75
	},
	{
		"transcript": "",
		"week": 7,
		"page": 76
	},
	{
        "transcript": "So, today, we're gonna talk about another famous model about Gaussian Mixture models, also named the GMM model.",
        "week": 8,
        "page": 1
    },
	{
        "transcript": "For outline, basically, I will first review about EM algorithm. What is em algorithm. And remember? Oh, great. Also, yes. About yeah. Oh, doesn't matter. So, later we will review EM algorithm model here. Now, next one we will talk about GM model example, and more examples, that's we will talk about how to use GMM. Then is EM of GMM. Last, we tried to review GMM model using the latent variable. Typically, from this lecture, the majority from the chapter 9 is that pattern recognition that above it. So, if you find some difficulty to understand the contact, you can go back and check about the chapter 9, that's kind of recognition.",
        "week": 8,
        "page": 2
    },
	{
        "transcript": "Let's recap, but we've learned before about k means algorithm, k means algorithm are definitely just the 5 steps. Right? But first of all, we Decide on a value for k. next you’ll initialize the k cluster centers (randomly, if necessary). in the last, like, initialization of the k clusters. Next, Decide the class memberships of the N objects by assigning them to the nearest cluster center. In the fourth step, you guys need to Re-estimate the k cluster centers, by assuming the memberships found above are correct. So, the last step, if none of the N objects changed membership in the last iteration, exit. Otherwise go to step 3.",
        "week": 8,
        "page": 3
    },
	{
        "transcript": "And let's try to quickly talk about limitation about k means. I don't know whether you guys catch something during the experiment or not. So, first of all, it is Hard assignments of data points to clusters, which means small shift of a data point can flip it to a different cluster. besides, it is Not clear how to choose the value of K. The Solution is that replace ‘hard’ clustering of K-means with ‘soft’ probabilistic assignments. Faster can be used to be stopped. Populous data, assignments with our history. So, actually, we need to estimate is probability of the data point, and this is something that we are gonna review later, it is not just based on that instance. It represents the probability distribution of data as gaussian mixture model. So, that we'll try to feel more about the gaussian mixture model.",
        "week": 8,
        "page": 4
    },
	{
        "transcript": "So, let's first try to review what is EM. The full name is called Expectation maximization. You get it? Are you sure? Yeah. You should probably forget about that. Never mind. I'm gonna have quick review about it. So actually, EM is an approach that can find maximum likelihood estimates of parameters in probabilistic models. In any probabilistic models, EM is an iterative optimization method to estimate some unknown parameters given measurement data. Most commonly used to estimate parameters of a probabilistic model (e.g., Gaussian mixture distributions). And also, it Can also be used to discover hidden variables or estimate missing data.",
        "week": 8,
        "page": 5
    },
	{
        "transcript": "So, typically, for EM algorithms, they are 3 important steps. The first step is called expectation, also named E step. In the E step, it can compute an expectation of the likelihood by including the latent variables as if they were observed. And the second important step, it is maximization, also called m step. So, in the m step. It computes the maximum likelihood estimates of the parameters by maximizing the expected likelihood found on the E step. Finally, the parameters found on the M step are then used to begin another E step, and the process is repeated. Until, you'll find that an edge of the likelihood. eventually, you can estimate of some annoying competitors. A little bit confuses Right? So, later, we will find some examples. I think it will help always out to you.",
        "week": 8,
        "page": 6
    },
	{
        "transcript": "Definitely, our first step is what, just get the initialization. Right? So, assuming you have that initial model, theta is here. Theta is what? Yes, it is parameter, right? next, you just get some Random initialization rarely works well for complex problems. And in the e step, you probably needed to compute the auxiliary function, which is also the expectation of the log likelihood of the data given the model. Remember that you need to calculate a lot.  And in the m step. You try to Maximize the auxiliary function, with respect to theta Let theta hat be the value of theta that maximizes the function. And the next thing you'll have some iterations. So, keep repeating that e step, and the m step until you find the maximum. And this is the whole process of the EM algorithm.",
        "week": 8,
        "page": 7
    },
	{
        "transcript": "Now let's first of you, we review about gaussian distribution. So, remember in a Multivariate Gaussian. It is correct. Okay. These are Multivariate Gaussian, so, it looks like this. Definitely, mu here is mean and sigma is covariance. And then you can • Define precision to be the inverse of the covariance. And then typically, in the one-dimension gaussian model, so you will have a tau which is one over sigma square. Typically, you can just use tau replace it. Right? Right?",
        "week": 8,
        "page": 8
    },
	{
        "transcript": "So, next, let's try to find out what is the likelihood function. So, give me a data set. Let's say d is equal to x n and n is from 1, 2, 3 to the capital n which is the number of samples you have. So, let's try to assume observed data points generated independently. And in it is just This is just this function. And what? The normal distribution about the distribution. Right? So, any case, it's just a kind of distribution. So, you see, in this case, you have n choice. Continue this product, all n gaussian distribution here. And Viewed as a function of the parameters, this is known as the likelihood function. What is the likelihood, right.",
        "week": 8,
        "page": 9
    },
	{
        "transcript": "And for the GMM model, it is formally defined in this way. So, a linear superposition of k gaussians, mu k is the mean and sigma k is the covariance, and gaussian mixtures called a gaussian mixture, also named gm. Right. So, this is the pi k here. This is just about the probability of each gaussian distribution. And n here, it's just one gaussian distribution. Right? So, totally, how many distribution functions do you have in this function? How many do you have? So, you'll have that k gaussian functions here. Right? Typically, it has k functions. Right? Get it. And the density is the probability of x, given that component k was chosen. the probability of choosing component k is given by the prior probability. This is a quick Overview of GMM model.",
        "week": 8,
        "page": 10
    },
	{
        "transcript": "So, let's see another example. How can we get some combination about data points, we have multiple function functions here. Again, so this is the PXI. So, in this way, we can donate it in this 1. So, it's similar to pk. Right? This is, this is gaussian function. So, in this case, you may see that it'll be different. Right? So, how many classes do you have here? Particularly, you have 3 gaussian functions. Right? So, there, you would have the pi 1, pi 2 and pi 3, and in the middle, you have the new 1, new one is what? Let me talk to your first of the gaussian function. Right? And then you would have sigma. And similar, you have mu 1, mu 2, and sigma 3 here. Right? So, these are key parameters there. If you try to plot out the possibility, it is this one. and if you want to plot out contour, it is this one. It's kind of easy. Right? you just give a number of possibility and mu and sigma so that you can get x.",
        "week": 8,
        "page": 11
    },
	{
        "transcript": "Let's say, if in another way, you would have a bunch of data points. How can it get those different parameters? For example, how can you get the mu and sigma.? So, let's to estimate the distribution of this. Later I will tell you. Maximum Likelihood Estimation (MLE) is a common method used to estimate the parameters of a statistical model. For a Gaussian distribution, the MLE estimates for mu and sigma are simply the sample mean and sample standard deviation, respectively, of the data points. Expectation-Maximization (EM) is a more advanced method to estimate parameters when dealing with more complex models like Gaussian Mixture Models (GMM). It is an iterative algorithm that alternates between the E-step and M-step until convergence.",
        "week": 8,
        "page": 12
    },
	{
        "transcript": "And again, it is another view of GMM model, once you finish estimate the parameters, how you get a different the data points. Let's say, we've done a lot of number of iterations how your data points change here. Especially about its contour Right? And this is the exactly about the process. You guys need to do your implements of the GMM. So, between it, we are seeing how the center, like in the center to get a check, how the sigma, the covariance, get a check, and even about the probability to get a check, this is the process. So, in the next few slides that I've tried to see that details how we can estimate those different parameters.",
        "week": 8,
        "page": 13
    },
	{
        "transcript": "Here is just an easy example of the real data distribution. Let's say, given any kind of data set, maybe looks like this way. Right? So, this can be Any complex function (distribution) can be approximated by using a limited number of other functions (distributions) such as Gaussian functions.",
        "week": 8,
        "page": 14
    },
	{
        "transcript": "Let's try to use if we use multiple gaussian function, can we put them together. So that. Achieve that goal of what, to try to mimic real distribution. I would like to say you cannot mimic 100 percent the dataset. This is just gaussian mixture otherwise. But anyway, you can get lots of information. And this is the key thing about why we use GMM.",
        "week": 8,
        "page": 15
    },
	{
        "transcript": "So, let's try to review about maximum likelihood of GMM. And this is something you guys probably remember in the previous slides, and we've spoken here before. The form of the GM distribution is governed by the parameters pi, mu and sigma. One way to get them is by maximum likelihood. Given these p x, you remember about this blah blah. So, and then you got n observations. And you can get log likelihood function like this one. Is this correct? Your first step, you take the log. Right? Take the log of this 1. So, then you've got more in here. Right? And then in this case, you would have multiple n here, but let's say, if you try to solve this equation, do you have any problem with you? For example, let's try to solve the parameter mu k here. In the previous weeks. Even let's say if you want to get some mu k. How will you do here? What kind of steps you needed to take here? Gradient. Right? For example, in this case, can you able to get any opinion of it? Gotcha. You need a time to calculate it. That's to the next slide.",
        "week": 8,
        "page": 16
    },
	{
        "transcript": "That's I will give you something about stuff. So, definitely, the first step is to try to assess this derivative to 0 with respect to mu k. So, typically, this is the log likelihood. Right? And then with back to mu k, I get bulbuls with this dataset. So, later you guys need to practice how you get this clear Okay. So, now from this 1, here is just a normal distribution. And in this case, it contains a mu K again, right? And this also has a mu K. This 1 is because it doesn't work. In the case of just one Gaussian, the logarithm helped get rid of the exponential function, but now there is a summation between the logarithm and the exponential. That's part of the difficulty to solve equation directly, which means that you are not able to get the solution. You can get mu k is equal to what. Probably get mu is equal to another mu k.",
        "week": 8,
        "page": 17
    },
	{
        "transcript": "Later we will review about that. There is no closed-form solution available (due to the sum inside the logarithm). Then we're going to be our alternate. As I said in 1, there's no closer form solution available due to the sum inside algorithm. Those are algorithm that we can use EM algorithm. There’re 2 different steps that This problem can be separated into two simple problems using the expectation-maximization (EM) algorithm.",
        "week": 8,
        "page": 18
    },
	{
        "transcript": "Let's try to do it slowly. So, let's introduce a k dimension binary random variable z having 1 of k representation in which a particular element z k is equal to 1 decay equal to 1, and all other elements equal to 0. So, the value of z k therefore is equal to 0 or 1. And the sum of z k is equal to 1. Right? and we see that there a k possible states for the vector z according to which element is nonzero. So, we have 3 classes here. Well, z k can be 5. So, in this case, it got me something that consists of all either 0 or 5. we shall define the joint distribution in terms of a marginal distribution and a conditional distribution, corresponding to the graphical model in this figure. the marginal distribution over z is specified in terms of the mixing coefficients pi k, such that the possibility of z k equals 1 is pi k. Why? Why we can get this? Oh, that's just wow. So, let's remember that, we only have 1 Z K equals to 1, for others just equals to zero. So, eventually, it just means a pi k possibility for each gaussian distribution. Graphical representation of a mixture model, in which the joint distribution is expressed in the form p(x,z) = p(z)p(x|z).",
        "week": 8,
        "page": 19
    },
	{
        "transcript": "And the similar as before, the parameter pi k should satisfy this equation, which should be bigger than 0 and less than 1. But together, you have equation as before, the sum of all the possibility. Right? And then, yeah, another view, because z uses a 1 of k representation, we can also write distribution in the form of this. This Pi k here. Is this correct? Why do you need this? Let's say your case equal to 3, right, we have different, we should attempt the pi k, pi 1, with z 1, then it's pi 2 and Z 2, and that comes with pi 3, z 3. Right? Remember for z k, it just has 1. Bye, right, or others, just 0. Right? You get a pi not k, which is the power of 0. So, just equal to 1. You eventually were just getting pi k. That's it. Is that correct? It's correct. So, give me an example. 1 case, go to three. So, what, you're gonna find that? So, you eventually just keep the pi k. Right?",
        "week": 8,
        "page": 20
    },
	{
        "transcript": "So, similarly, the conditional distribution of x given a particular value of z is gaussian distribution. So, in fact, it's just another similar px. It's just a gaussian distribution, and which can also be written in this formula because I remember we have this z K. Right? So, you eventually come 5 times together, you can blah blah, eventually, let's say that gaussian distribution is given by probability of z and probability of x, you can say, And the marginal distribution of x is then obtained by summing the joint distribution over all possible states of z to give. The PS, right, previously, just a brief mention of why we get this equation overall process, how do we can get at this kind of information using different pi k, a probability, and a different number of gaussian function. Right? So, from the previous review, you guys can see that how we can get the p x. Right? You got it. So, purpose what you find is the minus that that will respond to you. However, use the information of all this dataset. that is how we can get the gaussian function.",
        "week": 8,
        "page": 21
    },
	{
        "transcript": "Next, the way I want to mention is about the responsibility also called posterior probability, what does this mean. What is the posterior probability? So, previously we mentioned about this, it just the possibility of x given z. What is the posterior probability of this equation. Just PC over x. Right? It's just a small, it's a conditional. X and z so that you get this posterior from it. Right? So next time, if someone might ask you what is posterior probabilities. We shall view pi k as the prior probability of zk = 1, and the quantity gamma zk as the corresponding posterior probability once we have observed x. as we shall see later, gamma zk can also be view as the responsibility that component k takes for explaining the observation x. This part is what? You remember? What is this part? We just mentioned, what is it? What? Yes. It is a category like a posterior probability. I mean, worries. Eventually what is the probability of this 1. This is what kind of function. It's just the 1 gaussian function. Right? The previous information. Right? Because it is just about the p x. Right? P x is what? It's just about the gaussian function. What about this 1? probability equals to 1, you've mentioned this as well. It's just a pi k. Right? It's probably h gaussian function. The denominator is just the last sum of all these kinds of K, but it functions well. So, this is about Posterior probability. So that it had to maintain it in this way. And usually, we will calculate it in the first step of the experiment. So that we are gonna use this slide again. So, in this case, we will view pi k as posterior possibility of zk equal to 1. And the quantity of gamma as the corresponding the possibility, but we have to observe the x.",
        "week": 8,
        "page": 22
    },
	{
        "transcript": "Now, we are able to talk about what is the EM optimism. let's tried first to recover GMM model again. The yeah, Lamma Gheb. So, give you a bunch of data points x that is equal to x1 to xn and the log of the likelihood function is this 1, given the sum of pi k equals to 1. So, your x, each x is associated with zn here. Typically, for this zn, you have no idea about this. This is an unobservable variable here. You don't know with the details about this. And there are several parameters that you needed to get. For example, pi, pi is what? About the possibility of each gaussian function. Right? Then you have mu here, you have sigma here.",
        "week": 8,
        "page": 23
    },
	{
        "transcript": "So, you do the EM algorithm. The first steps, step. Valuate the responsibility using the current parameter values.",
        "week": 8,
        "page": 24
    },
	{
        "transcript": "This is the example we mentioned previously. the conditional probability of p(zk =1|x) denoted by y(zk) obtained by Bayes’ theorem. eventually by this way. We view pi k as the prior probability of zk = 1, and y(zk) as the posterior probability. So, this is our first e step, you needed to calculate this posterior distribution. So, about gamma, zk here. So, this is just a dummy. You need a calculate in the first step, give you a bunch of stuff. So, for example, during the evaluation, you have lots of parameters. Right? The first step once you try to calculate gamma, you need a gaussian function. You need to have. And then divided by the sum of all of them. So, you can get gamma. That first step is called an expectation step.",
        "week": 8,
        "page": 25
    },
    {
        "transcript": "So, in the second step, that is about maximization step. You need to set the derivatives of ln(p(x|pi, mu, sigma)) with respect to mu k to zero, we obtain this function. We expect the derivatives to mu K is 0. Let's try to see what's the answer for the mu K here. Let's see. So, remember, you'll find p x over sigma is this equal. Right? But now the first step, you calculate the derivative of this line with respect to the mu K. Write down the first results on this 1. So, if xn here you can write as like this equation. So, you can think about, this is just x minus mu with the square. This is the equation. You can put this sum up. Just pay attention to this 1. This is going, blah, blah. You have results? But you should write down something. Just a point. You get it. What is the just about to? The first part should be just like this. So, next, and you need to take care of the inside of the bracket. What is the derivative of this part? you should think about basically this part, this part is ex. What is the derivative of ex. it Should be also equal to EX. Right? So, in that case, for this part, it's constant. The result maintained. What does this mean? It means that if you have ex here, the next e x is equal to e x. Yeah. Next you need to calculate the derivative with respect to this part. But what is the answer for this part?  you can just think about it, it has a square of x minus mu, square times of the sigma. So, eventually, so it should be similar with this 1. But you should have some blah blah blah. But That mean, the first part is correct, right, get the first part. Actually, you should be like this. Alright. It doesn't matter. It's just used the same thing here. Hey, right. Let's try to have 5- or 10-minutes break. Once finished, we will try to calculate how you can get this mu K. You can think a little bit more, that will help you solve it. Okay. For this part, you can use gamma n k to be represent these 4 parts. But I need to tell them, and this part just use batch again, then replace this 1, and then try to see how you can solve this, get mu K. Is that clear? Good?",
        "week": 8,
        "page": 26
    },
	{
        "transcript": "And then, similarly, you will get as I said. So, in this case, I directly give you answer here, your sigma k can be equal to this equation. And then eventually, so what is the last parameter you want to get? You have mu K. You have sigma k. What is the last 1? What? Another parameter is what? Pi. Right? So, the last one is pi, right? And this is how we use before, and remember, we need to use Lagrange multiplier with respect to the mixing coefficients pi k, in this case, because you have an additional condition for the pi k, because the sum of it is equal to 1, in this case, we have this such as Lagrange multipliers there, eventually, the constant is 0, you can get this part.",
        "week": 8,
        "page": 27
    },
	{
        "transcript": "The eventually it is zero. And so, you eventually get pi k here. Right? just nk divided by n. And what are these? You got it? So, the nk is Data points in each class. Is that right? then divided by n, so you can get a pi k. Is that correct? Right. That is the data numbers of each class, and divide by n so you can get each gaussian distribution. So, let's say now, we already solve three important parameters, like mu k, sigma k and pi k. So, that we can really use EM algorithm.",
        "week": 8,
        "page": 28
    },
	{
        "transcript": "Calculated the details of it. So, here, that's the first step, the first step is. We've got the initializations. So, you initialize the mean mu k, covariances sigma k and mixing coefficient pi k here, then e step is what? Remember, what is the e step, you then evaluate the responsibilities using the current parameter values. can you remember what is the responsibility? Posterior distribution. Especially, it's just about gamma here. Remember, gamma can be made in this way. Right? in your m step, re-estimate the parameters using the current responsibilities. Remember, we had this mu K. We have this sigma K. Then we have the pi K here. So, it's a bit. And the fourth step, you need to calculate log likelihood and check for convergence of either the parameters or the log likelihood. if the convergence is not satisfied, return to step 2. So, typically, we will use some iteration here, eventually, to see if this model is correct. So, this is the basic thing about four steps.",
        "week": 8,
        "page": 29
    },
	{
        "transcript": "In the case, another view of the algorithm and it is as similar as before, you have initialized, and while it not converges, calculate about gamma znk. And this is the details of gamma znk. So, you have a homework you should do that same stuff. Just calculate. Calculate that and in the maximization, calculate mu k, sigma k and pi k. According to this different equation. then calculate log likelihood. And this is basically all the EM algorithm. Remember previously, just about this 1. It's just this. calculate is trying to see whether it is converged or not. So eventually, it's trying to see whether this is converged or not. But if it is converged, you should get parameter. Just so. Say with it.",
        "week": 8,
        "page": 30
    },
	{
        "transcript": "Now let's continue. Okay. Try to see some examples about it. Let's say, if you give this kind of data points. Let's say, if your k is equal to 2, this is what is going on.",
        "week": 8,
        "page": 31
    },
	{
        "transcript": "We use this EM algorithm.",
        "week": 8,
        "page": 32
    },
	{
        "transcript": "There are some, one.",
        "week": 8,
        "page": 33
    },
	{
        "transcript": "Two.",
        "week": 8,
        "page": 34
    },
	{
        "transcript": "Five.",
        "week": 8,
        "page": 35
    },
	{
        "transcript": "Like, eventually like twenty. You get a correct estimation of two different Gaussian distributions. Right? This is something that your GMM model got it.",
        "week": 8,
        "page": 36
    },
	{
        "transcript": "Another view, I try to quickly mention about the latent variable viewpoint of the EM algorithms. So, before that, we needed to mention on our concept about the complete dataset. That means, that means one that includes labels showing which component generated each data point. We know the label of data points. Right? we already know some labels of data points. And you can see in this simple graph, because in this case, we input pi and get z n, and combine with mu and sigma, we get xn.",
        "week": 8,
        "page": 37
    },
	{
        "transcript": "So, next as we have the Binary latent variables describing which component generated each data point. Each of that appointment. Right? So, n is each point and the case that each of the process. And that conditional distribution of observed variable can be donated in this way.  I've already discussed about that previously, mentioned Prior distribution of latent variables can be made in this way. Marginalizing over the latent variables we can use in this way. Right? Just quickly review the possibility of x.",
        "week": 8,
        "page": 38
    },
	{
        "transcript": "That's where we tried to get the joint distribution. This is the distribution of x and z. Right? We're trying to put them together, right, just put them together. So, we get another different view of all the points. So that is should be the continuous product of from smaller n to capital n and from smaller k to capital k. So, easy. Where the DNk has to make the case. DN takes out a long algorithm in this case, we'll get a little beautiful result in this case. For example, we Can use production becomes sub. Right? As the log of the continues production, this will sound like. So, come to summations of first two parts. So, after that, because you can pull up above the znk in the front right, that’s where you take the log of it. But this is zNK. You pull out, so you can get another log of 5K then plus as gaussian distribution. Is that clear?That's where we tried to get the joint distribution. This is the distribution of x and z. Right? We're trying to put them together, right, just put them together. So, we get another different view of all the points. So that is should be the continuous product of from smaller n to capital n and from smaller k to capital k. So, easy. Where the DNk has to make the case. DN takes out a long algorithm in this case, we'll get a little beautiful result in this case. For example, we Can use production becomes sub. Right? As the log of the continues production, this will sound like. So, come to summations of first two parts. So, after that, because you can pull up above the znk in the front right, that’s where you take the log of it. But this is zNK. You pull out, so you can get another log of 5K then plus as gaussian distribution. Is that clear?",
        "week": 8,
        "page": 39
    },
	{
        "transcript": "And the similar as before, you can get this kind of expectations. So, now, in this case, you have to  Get the expectation of the zn, and this is more like the first step of em algorithm of expectation of the zn. So, first is donated in this way. So, eventually, once you try to put them together. You can get as similar as before. So, eventually, this part just equal to gamma. Excellent.as similar as we discussed, that is just about distribution. So, there's 2 different views of it. Eventually, you get get the same equation. So, they have deep equivalent to each other.And the similar as before, you can get this kind of expectations. So, now, in this case, you have to get the expectation of the zn, and this is more like the first step of EM algorithm of expectation of the zn. So, first is donated in this way. So, eventually, once you try to put them together. You can get as similar as before. So, eventually, this part just equal to gamma. Excellent.as similar as we discussed, that is just about distribution. So, there's 2 different views of it. Eventually, you get the same equation. So, they have deep equivalent to each other.",
        "week": 8,
        "page": 40
    },
	{
        "transcript": "So, now let's try to quickly realize about the complete and incomplete data set. What is the difference between these 2? What? The labels. In a complete data set, you’ll know the class of points, right. And this is incomplete. there Doesn't have any information about label. So, in this case, it's just all same color.",
        "week": 8,
        "page": 41
    },
	{
        "transcript": "Let's talk about the more detail about the Latent Variable View of EM. So, if we knew the values for the latent variables, we would maximize the complete-data log likelihood which gives a trivial closed-form solution (fit each component to the corresponding set of data points). Now, we don’t know the values of the latent variables. However, for given parameter values we can compute the expected values of the latent variables.",
        "week": 8,
        "page": 42
    },
	{
        "transcript": "So, typically, this is partly about just about expectation, which is Expected Complete-Data Log Likelihood. And then eventually, which we are basically, you know, suppose we make a guess for the parameter values (means, covariances and mixing coefficients). Use these to evaluate the responsibilities and consider expected complete-data log likelihood, where responsibilities are computed using theta old. We are implicitly ‘filling in’ latent variables with best guess and keep the responsibilities fixed and maximizing with respect to the parameters give the previous results. In this case, we still need to calculate the gradient with respect to the mu K, sigma k, and the pi k, here. And then we will get a similar result as before. So, no matter how it's just another view of it. Of the EM algorithm. Alright. So that's in the latent review. you guys don't need to remember the second part, but remember that, 1 way we can directly use maximize the log likelihood to get the parameters. Another way, we can use the latent variable view of EM algorithm. And both of them give us the same result.",
        "week": 8,
        "page": 43
    },
	{
        "transcript": "Finally, I want to quickly mention about the EM algorithm in general. In the beginning of this class, we briefly mentioned about this kind of 4 steps of the Em algorithm. But here, let's try to briefly mention about its series of the e f algorithm. So, let's say, Consider arbitrary distribution over the latent variables. The following decomposition always holds like this, what's this part? This is what? It's just the log likelihood. Right? That's right. Right. It's just log likelihood, p x all over parameters. Then it equals to this loss function of q with theta plus kl divergence, but KL divergence depends on the k here. And there, you can write down You can write down the is l and the kl divergence.",
        "week": 8,
        "page": 44
    },
	{
        "transcript": "So, let's try to realize about the decomposition. It's just means that. Your data. Log likelihood equals to the summation of the kl divergence and l. The thing about the error is the q parameter and theta here.",
        "week": 8,
        "page": 45
    },
	{
        "transcript": "So, eventually, once we try to optimize the boundaries of the em step, for example, in e step, we needed to maximize the l, right, with respect to qz. it is equivalent to minimizing the k l divergence, and sets equal to the posterior distribution p(z|x, theta), as you can see, the probability of the x and the parameter theta. In m step, we try to maximize bound with respect to theta. And it is equivalent to maximizing expected complete-data log likelihood. Each EM cycle must increase incomplete-data likelihood unless already at a (local) maximum.",
        "week": 8,
        "page": 46
    },
	{
        "transcript": "And this is the extent what we need here. So, previously, we have this data log likelihood, it consists of kl, l and the error. So, eventually in the EM algorithm, you try to maximize this. In the e step, we try to maximize l.",
        "week": 8,
        "page": 47
    },
	{
        "transcript": "In the m step. It's just a bigger realization. How's that? Okay. But again, you guys need to remember about the serious part. the important part is just how to update the parameters of the GMM model.",
        "week": 8,
        "page": 48
    },
	{
        "transcript": "And this is the Another view of the general information, yeah, in this space. No. Not to now. You guys have more idea about this. The center view probably is sigma and also about pi k here. Right? So, you have your homework.",
        "week": 8,
        "page": 49
    },
	{
        "transcript": "Let's try to discuss about your homework. Yeah. This is the algorithm.",
        "week": 8,
        "page": 50
    },
	{
        "transcript": "That's where you are. I like to use this 1. What is the separate equation here, the EM step calculator, gamma k, mu K, your m step calculator above this mu K, sigma k, pi k, it's just an awesome experience. Alright. Okay.",
        "week": 8,
        "page": 51
    },
	{
        "transcript": "Here is about homework 8, first, you need to implement the GMM method that I mentioned here, this is the GMM method. And then Estimate parameters: pi, mu, sigma of each cluster, then determine the labels of each data and plot the results of three clusters. How can do this. How can you determine the labels? You have any idea. Yes, exactly, you need to use the probability of each class. Give me data set that you guys can calculate the probability. 3 different probabilities. Right? And then return is aftermath. Return is the label has the most probability. So, you can get on the label for each of points. Right? Now, you eventually get results of 3 classes. In the data set, you know, has 3 questions. I have run the function. 3 classes, right? Or if you say you want additional work, you actually can run out of the control of each class of gaussian distribution. Now, before you started, that let me ask you guys a question.",
        "week": 8,
        "page": 52
    },
	{
        "transcript": "So, what is dimension? What are dimensions for them in the data set? Let's say if you have 3 classes. What is the dimension of pi? 3? So, you're right. You have 3 pi, right? pi 1, pi 2, pi 3. but what about the dimension for mu? What? It's what?  6? why you get 6? for each 1 just have 1 dimension.  For each gaussian function, it only has 1 mu, right, eventually, we just have 3 mu. What about the dimension for sigma? 9? how can you get 9? sigma is what, it is covariance. What is the size of the covariance matrix in this case?  3 times 3? For what? Let's say, for sigma 1 or the size of sigma 1. sigma 1 class. What is the sigma this one? So, in this case, I'll give you a hint. It's about size, it should by 2. We have another number. So, let's try to go to the first slide, the very beginning. The Similar stuff is here. But we have 3 different clusters. pi should be 1 by 3 and the mu here should be 2. The sigma here should be what? 2 by 2. So, you eventually have a size of 3 by 2 by 2. Let's try to see those details of your homework.",
        "week": 8,
        "page": 53
    },
	{
        "transcript": "Is that clear? It will be a little bit complex but it's not so that difficult. The most important part is just before. Ok? You have initialization but make sure your realization is correct. Ok? After that, you probably get something. According to the previous slide, you should get it. Clear? Good. So, if you don't have any questions, we are finish today.",
        "week": 8,
        "page": 54
    },
	{
		"transcript": "This slide is talking about this is a machine learning course and today is lecture 9 which talks about k nearest neighbor algorithm, also called KNN. The professor is Youshan Zhang. the date is march 15th, 2023.  So then, let's try to discuss this lecture. So, today, we're going to talk about KNN. So, actually, if you want, talk about the KNN. I don't know whether you guys know about the use of ChatGPT is it just released the version 4 yesterday night.  can any one of you who has that or tries to have a version or do these systems experience? No. Yes or no. That's it. That's important. It's totally the same, but it is an upgrade. So previously, it was ChatGPT version of 3.5 turbo.  This time, they have upgraded to the version 4. You should have a better capacity, you know, is make a prediction, or make other. And also, even force for the image as an input for you. So previously, it can only input text.  But this time, you really complete with the multimodal data sets. So, actually, you can just input the images. In the demo, the issue that a bunch of which are kind of amazing, they can quickly write a website for me to give you my   image like that way.   And also, if you can find some strange document cannot picture the 1 that can find some strange voices during the picture.  To say which part is, not correct, not correct. Alright? I think you probably let's try to play some fun thing here. I'll try to integrate your homework and ChatGPT.",
		"week": 9,
		"page": 1
	},
	{
		"transcript": "This slide is talking about a challenge, which is if student can use ChatGPT to modify their code and don't detect by professor, they will get reward, otherwise they will lose points. Okay. This is about Thanks. It's those 2 students. They should have come. So, here is by the rule that I want you guys time with a little bit of challenge with you with your homework. Let's say, how do you code it is. How have you tried it before. do you try that? No? I tried using to debug. Using it to debug? Yes. It can debug for you. what about others, did you try that? while don't all of you? No. And add it to commands.  The add commands. yeah, it can. So, now, actually, as this time, you probably are having more of more time to try with ChatGPT. You see, once the ability of you and the ChatGPT which one is better.  Now, from now, I guess, we only have 5 typically weeks left. Right? Remember we have another 2 weeks for holiday. I guess you guys will have another 5 different weekly homework, like you would give a few previous weeks.  Right? I want to like to invite randomly 5 students, and you guys can decide yourself, and do not let me know who is that person.  Okay? To try to challenge it. So, second one, we'll want you. You can feel free to modify your code to ChatGPT. To see whether I can catch you or not? Is that a problem? Doesn't it make sense?  If I catch you, you will lose 2 points. If I cannot catch you, you will get an extra 5 points, and the other one student, I guess. You will also get a 5 extra points. Does that make sense? Do you want?  So now it's ready your time to gain extra your points. If you find if you think some of your homework is not that good. Now it's good opportunity to try it. any questions for here? Yes or no. No. You completely understand the rule? Do you wanna try it? You want it? Yes or no. No. not one challenge yourself. So, this time you can get your extra points here. Anyone who do you want to? And you can decide by yourself later, but I want someone I want I need a volunteer. you'll help me to collect 5 students. And you guys can decide who will play the first. Once I graded it, for example, but today's homework, I will grade in the next week.  Right? Once I finish, then you can let me know who is that student with ChatGPT. If I completely did not detect you, you can get an extra 5 points.  Doesn't make sense. Yes, or no? Ruslan. What's your idea about it? That's interesting. Interesting. You want it. So later how many of you guys decide by yourself? And maybe who can collect that name for me.  Correct the name for me. You want to? Yeah. Okay. You can ask the roommates. Oh, well, no roommates, is your classmates. Who wants to participate in this how to say, part of. But you will feel free to modify the code.  In a way that I cannot detect you. Right? That should be good away to do that. And do not let me know the person, unless I have ready to give you grades. You can let me know. Which one is that person use ChatGPT.  Why I want to do this? Because I think, for a majority of you is just in order to check it. Typically, I think this is the very fighting tool, and it is like huge generation of the AI.  And I don't know whether a guy heard about the AICG. You heard about the AICG, what is the AICG here? It's called unofficial intelligence for our content generations of the AICG.  So, this is actually A new generation, once the ChatGPT becomes so popular, right? Once the ChatGPT releases online into the text less than several days, that I think one trillion users, which is a crazy number.  And you guys, maybe you need to play with it, to see whether it can save your time? But the key thing is that you need to use it as a tool. You'll have yourself understand that the questions.  Especially when sometimes has seen the nowadays. It's grammar. You feel very good job when you're writing some challenges of that work. Yeah. But try it. You can get some good result, obviously, I'll hit.  Okay. Is that clear? Well, everybody What is did they use that at your PMT? If you did not use it, you just do normally as your assignments, submit it normally. But so, the wrong students, I guess, you will still get a 5 voice.  Okay. But as you see, definitely, you guys will need someone, 1 student, only 1 student in the per assignment. I do not need all of you participate in. Okay. So, for example, in today's homework, only one of you is submitted with ChatGPT. Okay. This is whether I can detect you or not. Because this is also very important to us.  Because of our faculty because our computer science may be a little bit challenged, but of course, some arts major, like some history major many some students use it to write some CCs and the plus and per visit, they can't really   cannot detect it, which should cause a disaster for them.  Now, I really want to challenge myself to see whether I can detect, if you use that or not. But again, if you use this, like, put away, they're saying you can complete understand code. They're also primary, because now they codes are online everywhere. People are just copy you here. Copy there. It's just more like the collection of code. No matter how, right?  It's just a 1-way question. We will try to Google a problem, it'll give you some solution, and then a solution also. I believe some of you who might be using some code from online, right, just to give us a similar way.  But the policy says that ChatGPT they can output some most likely correct answer. But you need it to your pay attention to that, sometimes it can give you some wrong answer. So, you need to double verify above it. Okay.",
		"week": 9,
		"page": 2
	},
	{
		"transcript": "So, now let's talk about with today's lecture. Remember in the 2 weeks before we talk about k means, which depends on them, k means depends on what? Yes. It is purely depending on the distance between dataset. Right? K-means clustering is a method of vector quantization, originally from signal processing, that aims to partition n observations into k clusters in which each observation belongs to the cluster with the nearest mean (cluster centers or cluster centroid), serving as a prototype of the cluster. This results in a partitioning of the data space into Voronoi cells. K-means clustering minimizes within-cluster variances (squared Euclidean distances), but not regular Euclidean distances, which would be the more difficult Weber problem: the mean optimizes squared errors, whereas only the geometric median minimizes Euclidean distances.",
		"week": 9,
		"page": 3
	},
	{
		"transcript": "And the last week we talk about the EM algorithm for ocean picture model. But you need to use an e step, and m step to ask out dates. So, many the parameters, you mentioned it, you still can get different classes of it. But what is difference between k means and EM algorithm? Yes. Yes. That's correct. Because k-means is just a hard assignment. But for the k means, not k-means, but a GMM model. It is the softer level of algorithms that, and you need to base on probability. You get some posterior and you get some probability of your dataset. So, this is the key thing, the key difference between K means, and there's the EM, GMM model.",
		"week": 9,
		"page": 4
	},
	{
		"transcript": "So, into this lecture, we will be able to tell still talk about a method that is close to the distance based. It's called a KNN model. First, we're gonna try to mention different learning measure. And after that, we just talk about we're going to talk about the KNN model, because KNN model is not that complex. And lastly, I will talk about the advantages and the disadvantages of the KNN. So first of all, let's try to view that given the different learning measurements.",
		"week": 9,
		"page": 5
	},
	{
		"transcript": "The first part is called eager learning. It means explicit description of target function on the whole dataset. What does this mean? This means what? So accurately, this means that you need to define, for example, functional, specific or function f. Right? You need to know exactly about the function of apps so that you can get a training. But for instance, that's the learning. So, actually, the learning means that you try to store all training instances here.  And the classification is what? It's assigned a type of function to a new instance. And these are also referred as a lazy learning. In today's model KNN, based on your learning, is which kind of method. KNN is an eager learning, or is instance-based learning? The second one? Okay. So, Remember my answers. So, that you will know whether the second one is correct or not. for instance-based learning, also called lazy learning. the   learning part is storing all training data, and the classification part is assigning target function to a new instance.",
		"week": 9,
		"page": 6
	},
	{
		"transcript": "That's no to the next one. For the eager learning, so, we try to describe more examples. For example, this human, it can be a bunch of balls here, so, next, you will try to see random movement is like a mouse.  You will try to see as this function. So now you can tell you saw a mouse. Right? Now to try to play it again.  If we were to detect a random movement you will know, this random movement is a function that tries to define this behavior. Right? So, this is about like a mouse. I saw a mouse with this person can learn about it.",
		"week": 9,
		"page": 7
	},
	{
		"transcript": "And for the instance-based learning, for example, you still have, and this is kind of movement. You'll give this a bunch of examples, like a descriptor like phones, and even about a desktop. What you need to do is that you try to calculate the distance between the detected item with existing ones so that you will tell which one it is most like. So, now it's very similar to that stuff. So, in this case, you will classify this man and what? That's what? It's more like a desktop. Why? Because it is close to one for instance. And this is so-called the instance-based learning. As you either need, you compare the data, one data set of always or another instance.  The classification of machine learning algorithms into lazy and eager learning categories stems from their fundamental differences in handling and processing data. The key distinction between lazy and eager learning in machine   learning lies in if and when they generalize from training data.  The latter does that during training, whereas the former avoids deriving general rules or builds local models for each object it's asked to classify.",
		"week": 9,
		"page": 8
	},
	{
		"transcript": "Here. Has what about the instance-based learning? The idea is that in trying to combine the similar examples, have a similar level and classify a new example, like a similar training example, the algorithm is what?  So, give you some new example x. For which we need to predict as class of y, find the most similar training examples that try to classify x.  classify y also more than similar examples. You got it? Well, that is obviously or does it mean? This means in these straight lines; you mean you will do what? Predict class. Yes. So, exactly, it's just a busy, then we'll mention the right because you have given some new example x. Okay, this is new example x. Right? To find the most similar training examples, you need to find the most similar one, that was sort of established. Classify x like those are most similar So you will classify this one as a most similar desktop.  Right? That's it. So now we have another 3 questions. First of the question, yes, how to define a similarity? Any idea how to define similarity?  Yes, distance. Tell me one with the other layer to categorize similarity. Okay. What about others, how do you determine the similarity? We have another similarity. And now if you remember, you guys will talk discussed how we calculate that   similarity.  Yes. there should be another frequently with 1 that we use.  The second question is about how many similar training examples to consider, how many? Do you know, in this case? All you need is to define.  This is actually how I say anything. You probably need to define how many Similar examples you want to consider, right? The last question is about how to resolve that inconsistency among are training examples. So, later, we are seeing more about the answers of these questions. The idea of instance-based learning is that similar examples have similar label and classify new examples like similar training examples.",
		"week": 9,
		"page": 9
	},
	{
		"transcript": "In today's lectures, actually, we will talk about the first one the KNN, that is answer your question previously. Right? The KNN is one of instance-based methods. And also, there are other couple of models like regular regression and has the best reasoning. So, later, we will not talk too much about rest two, majority of today's lecture, we will focus on the first.",
		"week": 9,
		"page": 10
	},
	{
		"transcript": "This slide is talking about Nearest Neighbor Classifiers, the basic idea is If it walks like a duck, quacks like a duck, then it's probably a duck. The best idea is simple as before. Let's say, if it works like a duck, the purpose like a duck, then it is probably a duck.  Let's say this example. This is actually your training report. You have this different animal. Right? And this is the task of the course. So, in this case, what's your answer? Go ahead, your prediction. Let's say you want to predict it. So, you will see this like what. It's like what? It's like this this one, I like this one. You don't know that. firstly, you need to calculate distance.  Right? Once you calculate distance, you try to find the minimum, and then you will find that this is the more likely the duck, it should be the nearest one. But actually, from the real world is   the nature of duck. Is not right. It's just a swimming pool, which is not in those three. But this is the only way, or you want to use KDS number this is the only level you can get, because those are most similar examples, right?  And this is another drawback of the KNN model.",
		"week": 9,
		"page": 11
	},
	{
		"transcript": "The feature of KNN are All instances correspond to points in an n-dimensional Euclidean space, Classification is delayed till a new instance arrives, classification done by comparing feature vectors of the different points, Target function may be discrete or real-valued, k-NN classification rule is to assign to a test sample the majority.  category label of its k nearest training samples, in practice, k is usually chosen to be odd, so as to avoid ties. And then here are some key features. All instance correspond to points is an n dimensional Euclidean space, and the classification is delayed until a new instance arrives.   And then here are some key features. All instance correspond to points is an n dimensional Euclidean space, and the classification is delayed until a new instance arrives.  The classification done by comparing feature vectors of the different points, the target function may be displayed a real value. But KNN classification rule is to assign a test sample in the majority category level of its k nearest Training examples, actually, in practice that, the k, is usually chose to be odd. So, as to avoid ties, right? You need to pick the top k levels. Everything is odd, it should be easy to generate.  if it is an even number sometimes it will be confusing.",
		"week": 9,
		"page": 12
	},
	{
		"transcript": "As the official definition of the K nearest neighbor, 1 nearest neighbor spot. You will get the nearby only one example. And if two nearest neighbors, for examples. You got an active 1, another positive 1. And for 3 nearest neighbors, you will have another 3 examples. So, in this case, will get a 1 negative, and you will get the 2 positives, in this case. Which means that k nearest neighbor of a record x is data point that have the k smallest distance to x. So, in this case, if you use 3 nearest neighbors, what is the prediction? For this x. x is positive. What about one nearest neighbor? negative. what about the second one? it can be negative or positive. Because you care about two nearest neighbors, you don't know which 1 is better.  Yeah. If you choose a smaller distance, that can be one solution, but if you choose it to be positive, it can also be correct. Right. So that's key reason the k should be odd.",
		"week": 9,
		"page": 13
	},
	{
		"transcript": "So, for our giving record to be classified, identify nearby records. Near means records with similar predictor values X1, X2, ... Xp. Classify the record as whatever the predominant class is among the nearby records (the neighbors).",
		"week": 9,
		"page": 14
	},
	{
		"transcript": "And this is answer for our previous question how to measure the nearby or how to measure a similarity. So, actually, for the KNN model, the most popular distance measure is about the Euclidean distance. The best measurement of the distance of the 2 points like that. Right? Get a severe growth of it.",
		"week": 9,
		"page": 15
	},
	{
		"transcript": "And this is about how to choose the k. K is the number of nearby neighbors to be used to classify the new record. K=1 means use the single nearest record. K=5 means use the 5 nearest records. Typically choose that value of k which has lowest error rate in validation data. So, typically, choose the value of k, which has the lowest error rate in the validation data set. This is one way of how to choose optimal k here. What is the lowest of error rate?  How would happen like this error rate or the so called an error rate? Maybe you could try several colleagues and features in condition is the error rate. So how would you find this error rate?  We'll be trying to several It's not exactly. So, actually, for here, the error rate you can think about error. We calculated, so now if you'll give us a specific k, we will get output of that k. Right? So, you need to calculate the distance between each and different levels so that you can get a number, if you choose another k, and you can get a second number. So, in that case, you will determine which one is smaller, so that when this is minimum, we'll choose that the optimal k. Okay.And this is about how to choose the k. K is the number of nearby neighbors to be used to classify the new record. K=1 means use the single nearest record. K=5 means use the 5 nearest records. Typically choose that value of k which has lowest error rate in validation data. So, typically, choose the value of k, which has the lowest error rate in the validation data set. This is one way of how to choose optimal k here. What is the lowest of error rate?  How would happen like this error rate or the so called an error rate? Maybe you could try several colleagues and features in condition is the error rate. So how would you find this error rate?  We'll be trying to several It's not exactly. So, actually, for here, the error rate you can think about error. We calculated, so now if you'll give us a specific k, we will get output of that k. Right? So, you need to calculate the distance between each and different levels so that you can get a number, if you choose another k, and you can get a second number. So, in that case, you will determine which one is smaller, so that when this is minimum, we'll choose that the optimal k. Okay.",
		"week": 9,
		"page": 16
	},
	{
		"transcript": "So, here's comparison between low k and High k. So low values are 1 or 3, it'll capture a local structure in the data. But then you may have some noisy. But if you get a high value of k, it provides more smoothing, less noise, but may miss local structure, the extreme case of k = n (i.e., the entire data set) is the same as the nave rule (classify all records according to majority class).",
		"week": 9,
		"page": 17
	},
	{
		"transcript": "1-Nearest Neighbor is one of the simplest of all machine learning classifiers its Simple idea is labelling a new point the same as the closest known point label its red. So, what is the outcome for this 1?  red.  Because it is close to red.",
		"week": 9,
		"page": 18
	},
	{
		"transcript": "So, if k equals 3. So, you will have 2 reds or and you'll have 1 blue ball. So eventually, you should be just a red. Right? If let's say, if the k is 7, we can calculate all 7 points. So, in this case. How many groups here? No idea. k equals 7, but you have blue. Right? because there are 4 blue balls in there, and red ball only have 3. So, actually, you have found that if you change your k. So, sometimes your results can be different.",
		"week": 9,
		"page": 19
	},
	{
		"transcript": "Right? This is an arbitrary instance is represented by (a1(x), a2(x), a3(x), …, an(x)), a(x) denotes features. Euclidean distance between two instances, which is d(xi, x j)=sqrt (sum for r=1 to n (ar(x i) - ar(x j)) 2) when target function is continuous valued, get the mean value of the k nearest training examples. Here's the training examples. What does this mean?  It is a regression problem, but so let's say, if you give regression problem. the k is 3, what is, what is the label for this 1? What is the label with this 1? If it is a regression problem. Yes, exactly. Just calculate the mean, the average. Right? Remember, for KNN, it can apply both for classification also if it can apply for regression model.",
		"week": 9,
		"page": 20
	},
	{
		"transcript": "So, here is about all other different distance and metrics. For example, you have a Minkowski distance. This 1, you have the Euclidean space that we already discussed. And also, you have Manhattan distance. And others, you have quadratic, and correlation, the chi square, the Kendall’s rank correlation, they have so many different distance function. So, sometimes, if you choose 1 of them, you still might get a little bit different of results. Again, you can use these in KNN.",
		"week": 9,
		"page": 21
	},
	{
		"transcript": "So, next up, I want to make a mention about the Voronoi Diagram. So, this is about a Decision surface formed by the training examples. So, suppose you have so many different examples. You try to plot out. and now you may remember. Okay. That's fine. But the Voronoi Diagram try to find a kind of polygon, for some lines, you know, different examples. So, here is an example. The diagram separate different examples.",
		"week": 9,
		"page": 22
	},
	{
		"transcript": "And here is a more details about that. We have 2 important properties. The first 1 is that all possible points within a sample's Voronoi cell are the nearest neighboring points for that sample. Which means that, given any 2 of them, you see, there will be a line Between them, and those 2 should have been nearest neighbor. This is for example, this are 2. This also should have been nearest neighbor Right? And also, those 2 should have been nearest neighbor. So, every point like a pair can find in this diagram right now. Yes never. And the second property is for any sample, the nearest sample is determined by the closest Voronoi cell edge. You should be you find this page, the nearest should be this 1. Right? It's just determined by this Voronoi background. So, this Voronoi background help your guys find the nearest neighbor.",
		"week": 9,
		"page": 23
	},
	{
		"transcript": "So, now let's try to play an example of KNN for similarity, matrix is a number of matching attributes So in this case, let's say the k is equal to 2, let's say if we have a new example, for example, the first 1 For the food, you have great, you have a chat, you get a no, and for the fast, you get a no. And then for the price, you got a normal, and then for bar, you got a no. So, eventually, can you predict, what is this? You person give you a big tip or not? What is the answer? Yes. Why? it is the most similar. Is that correct? So, now, which is the closest example in this case. Well, which are the 2 closest. in this case. So, I wanna mhmm. Yes. K is equal to 2.  Their numbers, once, and 2, so you will get an answer of you. Yes. Probably this person will give you a big tip. Right? So, you identify the most similar sort of number 2, and another 1 just in this 1. So, you eventually will get a yes.  What about another example here? So, this This person we got is this mediocre, you got a yes, and then you got a no, and then you got a normal, you got a no here. Which one for this? So, this 1 says, no. And what is the closest 1? Yeah. Is That correct? The other closest would be this 1?  So now in this case, what's your answer So, actually, this this 1 is correct, the most similar one. And the second 1 says, yes. So eventually, there can be either yes or no. so you need a good k here.",
		"week": 9,
		"page": 24
	},
	{
		"transcript": "So, here, let's try to talk about selecting the number of neighbors. So, if we try to increase the k, it will Makes KNN less sensitive to noise. But when you decrease the k here, it Allows capturing finer structure of space. We shouldn't have picked a k that is too big. But also, we do not we should not pick a k that is too small. In this case, it depends on our dataset. So typically, when we define k as 3 or 5, like those kinds of numbers. Is there a way to compare the total data points to the number of classes given on them? Okay? I'd say there's only 2 classes, and there's a hundred data. So, I think I think the more classes, the smaller k is, and the more data, the bigger k is. That's a general idea, but I don't know if you're more specific further than that. We'll have an idea regarding his question. And then we just mentioned how we could choose that kind of ultimate k. So, in this case, it depends how on dataset.  We probably need you to calculate the error rates of your nearest 5 or data points. Once you get a k, that's that we can try to calculate that distance between the class to the points. Right? You will choose which k give you minimum number. Okay? Does that make sense? As I said, this is kind of quick conclusion, you shouldn't choose a big or small k.",
		"week": 9,
		"page": 25
	},
	{
		"transcript": "Here, I want to briefly mention about Distance-Weighted Nearest Neighbor Algorithm. So, this means that you will try to Assign weights to the neighbors based on their distance from the query point. And Weight may be inverse square of the distances and all training points may influence a particular instance. And this is the so called the Shepard’s method. So, let's see, I'll have an example about this.",
		"week": 9,
		"page": 26
	},
	{
		"transcript": "So, if you try Using weighted Euclidean or Mahalanobis distance can sometimes help. For example, if you have this mu minus and mu positive, you have these 2 different classes. Let's say, here we add new example here. We probably need to calculate their distance to here, calculate our distance to here, Other than that, you probably want to assign a little bit of weight to mu 1 or mu 2. So, in this case, you want to use a smaller WI, which was a horizontal axis of feature in this example, because this 1 actually is more close to this example.  Right? The lesson previous you think about is, as the green button, eventually, we probably need to update it as the blue here. So, notice that Mahalanobis distance has all the effects of detecting the access which you have. For example, in this case, you can try to rotate it over your previous horizontal.  So now you can move a little bit to this angle. So eventually, you can add a new canal for coordinate.  You're going to find some move.  You'll get a move of the coordinated. So, this time, we actually just have 2 by 2 symmetric or metrics. In this case, chosen by us or learned it is similar like the comprehensive metrics that you guys previous notice.  And then you want to find that by using this weight, you have found that you move most that closing points close to each other. Why? You see it? Now, as a distant curiosity, it is very long run. While you are applying for this waiting, they were trying to model the center but method them close to each other.  And this is key thing that we want to the weighted distance here.",
		"week": 9,
		"page": 27
	},
	{
		"transcript": "There are several remarks. Highly effective inductive inference method for noisy training data and complex target functions. Target function for a whole space may be described as a combination of less complex local approximations. Learning is very simple. Classification is time consuming. Why it says that the classification is time consuming? Yes. Exactly. For KNN, it is an instance base learning. That's the measure. You need to calculate that distance to 1 point, to all others. Right? So, that's the reason why it's a little bit of time consuming.",
		"week": 9,
		"page": 28
	},
	{
		"transcript": "And then here is about the KNN time complexity. So, suppose there are m instances and n features in the dataset Nearest neighbor algorithm requires computing m distances. Each distance computation involves scanning through each feature value. Running time complexity is proportional to m n. Let's say if n is very big, because eventually it will be very big for Time complexity. Right?",
		"week": 9,
		"page": 29
	},
	{
		"transcript": "And then we will have the 7 problems as before about curse of dimensionality, that is a Prediction accuracy can quickly degrade when number of attributes grows, which means that if we have too many irrelevant attributes, we can easily swap information from relevant attributes. So, when many, irrelevant attributes, the similarity or distance measure becomes less reliable, right? Because you have too many noisy points in your dataset. So, the remedy you'll be able to try to remove that your irrelevant features in preprocessed steps. And weight the attributes differently, and also tried to increase k, but it cannot increase too much.  in Your mind, there was another way you try to, like, reduce the curse of dimensionality. Do you have an idea that never before? How do you handle this because of the dimensionality? Say again. SVD. Right? But the SVD is just for the decomposition of metrics. Yes. Actually, yes, because you will need to use PCA to reduce dimensionality. That's correct.",
		"week": 9,
		"page": 30
	},
	{
		"transcript": "Let's try and quickly talk about advantages and the disadvantages of KNN.",
		"week": 9,
		"page": 31
	},
	{
		"transcript": "So, the advantage is that it is very simple to implement an algorithm. And there's no assumption required about the normal distribution blah blah, and it is Effective at capturing complex interactions among variables without having to define a statistical model. And it requires a little tuning and often performs quite well! You can Try it first on a new learning problem.",
		"week": 9,
		"page": 32
	},
	{
		"transcript": "And definitely, there are many other disadvantages. KNN Need distance/similarity measure and attributes that match target function. This can be a large data set. Right? As we've just discussed about its time complexity. It is m by n. Both of them are mine and it can be a disaster for large dataset. So, must make a pass through the entire dataset for each classification. This can be prohibitive for large data sets. And prediction accuracy can quickly degrade when number of attributes grows. Because of curse of dimensionality.",
		"week": 9,
		"page": 33
	},
	{
		"transcript": "And after that, there are several ways that we will be dealing with the curse of dimensionally, first one is PCA that it has been mentioned. And the another one is that Computational shortcuts that settle for almost nearest neighbors (adjustments in XLMiner settings). What about another way, if we use dimensionality? Remember, yeah, you said PCA, what is other ways? If you have so many different attributes or features, what is another way?  And remember? Let's say if I give you 1 side of dimensions, pictures, where is the most critical way to make it smaller. Use the features Selection. Yes, feature selection. You choose some of the features, right, that's it.",
		"week": 9,
		"page": 34
	},
	{
		"transcript": "And here's a quick summary about today. So, we try to Find distance between record-to-be-classified and all other records. And next, we try to Select k-nearest records. Classify it according to majority vote of nearest neighbors or, for prediction, take the as average of the nearest neighbors. For curse of dimensionality, it needs to limit of predictors.",
		"week": 9,
		"page": 35
	},
	{
		"transcript": "So, probably we can take around about 10 minutes break. So, I will talk about pseudocode which is the most important part for KNN. Let's get back. So, did you guys finish the next 1? Okay. Got 5 students. Good. Let's see what's going on. It's gonna happen to 5 weeks. Probably remember, you need to have keep your copy of original ChatGPT code. Right? So, that you will know how many modifications you make, and also, I will know, if I had made some mistake, right? I will know why I made those kinds of mistakes. And maybe you guys have learned enough. Let's see what's going on with it. Right? Well, but homework, you just need to submit your own works. So later, if I ask you, you send me the ChatGPT version. Again. Okay. Is that here? Yeah. Good. This is should be I guess about final slide. But today, we're gonna talk about pseudocode. The first step is that you Load the training and test data, then choose the value of K. For each point in test data, find the Euclidean distance to all training data points, then the Euclidean distances in a list and sort it, then choose the first k points, then assign a class to the test point based on the majority of classes present in the chosen points. Let's say, if you already have the y of the training data set. Right? Like, trend y, so that's by using the majority of the levels, a majority of the level in the this 1 so that you can decide which class it is. Okay. Good. So, this is the pseudocode part of that algorithm. It's not that complex.",
		"week": 9,
		"page": 36
	},
	{
		"transcript": "So, here is the homework, you guys, and you needed to implement the KNN. You only follow the code that I've put online. You only need to follow those up. It should be this 1. Only follow those. So, it basically just has 3 steps. Okay. Let's try if you see about the homework. So, first 1 is about the implemented KNN methods. And next, they just load our give you our train and text mat-file, and then you need to perform the KNN, and then report the accuracy of the test dataset. The last 1, will try to reduce the dimensionality, use PCA to low dimensions. For example, you can try to reduce it to 10 or 3, depends on you. Now then, get the accuracy of test data again, to see if there is a difference. Okay? So now you have some time to play with this homework. I will upload it now. You can open a laptop. Try to do that. This can is 1 of the interview questions. They gave the students around 20 minutes to finish it. Have you ever challenged yourself whether you can finish this 1? I mean, the first that's the first 1 and 2 in 30 minutes. Kindly challenge yourself. Okay? Is that clear?",
		"week": 9,
		"page": 37
	},
	{
		"transcript": "",
		"week": 9,
		"page": 38
	},







	{
		"transcript": "Let's get started with today's lecture about the decision tree. So today, we're gonna talk about the decision tree. It's also one kind of famous tradition model, machine learning algorithm.",
		"week": 10,
		"page": 1
	},
	{
		"transcript": "Let's quickly recap what we learned from last week. So, basically, last week, we just talked about the k nearest neighbor. And also, we talked about some disadvantages, and the disadvantages of KNN model.  So, for the KNN model, is it what kind of method? Do you need to know your weight, also something is your model? Like a weight or bags or something. Do you need to know something form KNN model? For example, in the neural network, you need to know a kind of weight. Otherwise, so that based on them, make prediction. Right? But KNN model, do you need to learn something? No? Why? It's based on the number of nearest neighbors. Yes. That's good. So, actually, in KNN model, you guys just basically calculate the distance of all different samples. Right? You really don't get any new weights or biases.",
		"week": 10,
		"page": 2
	},
	{
		"transcript": "In today's lecture, we are talking about decision tree. Here about the overall overview of decision tree. We will first talk about the inductive learning. And then we will talk about what is a decision tree. And I'll give you guys some examples about decision tree. So next, we will try to explore how to construct a decision tree. And then, we will mention some problems with decision trees. And in the next two, we will talk about decision trees in gaming. And then we'll have another example about decision trees. Eventually, we will have a quick summary about the today's lecture.",
		"week": 10,
		"page": 3
	},
	{
		"transcript": "So, first, let's move to the first part. Let's try to talk about some different paradigms of machine learning. And up to now, we've already covered several of them. But the first one is called rote learning. What does that mean? It means that one-to-one mapping from inputs to stored representation. So, learning by memorization. So, association-based storage and retrieval. So, actually, this is just a very naive method.  So, you need to remember about everything. So, we want to retrieval of lender knowledge. So next is about induction learning. It uses specific examples to reach the general conclusions. And the third one is clustering that we have already mentioned previously. And you guys may notice that it is an unsupervised identification of mayor group in the data. Next one is called analogy. It determines correspondence between two different representations. And we also have the discovery type of machine learning that is also an unsupervised method. But the specific goal is not given. For the genetic algorithms, it is more like evolutionary search techniques based on an analogy to survival of the fittest. Last one is reinforcement learning. So, basically, it relies on the feedback of positive or negative reward, given at the end of sequence of steps. And, I'll reveal you guys more about the reinforcement learning in the next fall. We will have a class about Artificial Intelligence. Right? I didn't forward it. So, you will probably hear more about reinforcement learning. And even you guys will have a chance to learn a little bit of high-level cost cutting, reinforcement learning. Directly, reinforcement learning. You will have more time to apply with deep learning-based reinforcement learning there.",
		"week": 10,
		"page": 4
	},
	{
		"transcript": "So actually, in today's class, we will only focus on one of them that is inductive learning. So, typically the inductive learning here is about overall framework.  Let's go through it. First, we have kind of raw input data from sensors are typically preprocessed to obtain a feature vector X that adequately describes all of the relevant features for classifying examples. So, let's say each of x is a list of attribute and value pairs. For example, if X is equal to this kind of list. So first of all, a person where you already have this person's name. So, here's the name is Sue here, and we have the eye color. That is brown here. And we have of this age. So probably young, any kind of specific age there. And we have sex it's either female or male. Soo, the number of attributes, it's also known as the number of features. It's fixed. Actually, it means positive or finite. Each attribute has a fixed, finite number of possible values or could be continuous. Each example can be interpreted as a point in an n-dimensional feature space, where n is the number of attributes. So, here's about overall framework of inductive learning.",
		"week": 10,
		"page": 5
	},
	{
		"transcript": "And let's talk about some details about the model spaces. So, in the previous work, we talked about nearest neighbor classifiers. It actually partitions the instance space into regions defined by the centroid instances or cluster of k instances. And the decision tree. It partitions the instance space into axis-parallel regions, labeled with class values. Later, we will talk more about this part. So, basically, it ends creating some associative rules. For example, in the try to assign feature values into some kind of classes. So, this is just about the first of all logical rules. So, basically, you will have a lot of boarding comparisons there. In the Bayesian networks, so it is probabilistic dependencies of class on attributes. And similarly in the neural network. It has some other kind of similar representations.",
		"week": 10,
		"page": 6
	},
	{
		"transcript": "So here is the simple comparison about the model space of the decision tree and the k nearest neighbor. Are you guys able to see this? It's difficult to see. Right? You have some. This is positive and negative. And also, you have some negative here. May be difficult to see. But you can compare the difference between them. So, remember, last week, we talked about the nearest neighbor.  So, this is more like really a diagram. Right? So, each close by, it should be the nearest neighbor. Right? So that it has a different kind of lines there, but for the decision tree is just purely based on some attributes. So, in this case, we will only have one line here. That can have a sub point in these different classes here.",
		"week": 10,
		"page": 7
	},
	{
		"transcript": "You guys want to know what is a decision tree? So, during an inductive learning task. It uses the particular facts to make a more generalized conclusion. So, A predictive model based on a branching series of Boolean tests. And these smaller Boolean tests are less complex than a one-stage classifier.",
		"week": 10,
		"page": 8
	},
	{
		"transcript": "And then here's more details about the learning use a decision tree. So, a decision tree induction is a simple but powerful learning paradigm. So, in this method a set of training examples is broken down into smaller and smaller subsets while at the same time an associated decision tree get incrementally developed. So, at the end of the learning process, a decision tree covering the training set is returned. So eventually, the decision tree can be thought of as a set of sentences, in disjunctive normal form, written propositional logic. So, some characteristics of problems that are well suited for the decision tree. For example, we have attribute-value paired elements. We will try to get the discrete target function. And we have the disjunctive descriptions of the target function. And in this case, for the decision tree, it works well with missing or erroneous training data.",
		"week": 10,
		"page": 9
	},
	{
		"transcript": "So here is about the first example of the decision tree. The goal is what? As it's straightforward that we want to build a decision tree to classify examples  as positive or negative as you can see in this case. Instances of a concept using supervised learning from a target set. So, in this case, we have investigated just about binary classification. But eventually, for decision tree, you have to apply for the multi-class classification problem. But for easy to understand in today's class, we will only mention about this binary classification tree. So, a decision tree is a tree where each non-leaf node has associated with it an attribute, co-called feature. And each leaf node has associated with it a classification positive or negative. So, this is called a leaf node. We have different classes, right, positive or negative here. And those are called the leaf node. And definitely in the immediate, those are some known as leaf node. Right? And each arc has associated with it one of the possible values of the attribute at the node from which the arc is directed. So, generally, it is allowed for more than two classes. So, here are just three different classes. And then in your, guys, home work, you may also handle some multi-class classification problem. So, let's quickly reveal about this decision tree. So, you have some, firstly, you have different the color. Right? In the color, you have how many leaf nodes, you have? Leaf nodes, how many? Three? What about the difference between the non-leaf node and the leaf node? So, the leaf node is probably just like, at the end, there is no more extension. So, you will have a leaf node in this case. So how many leaf nodes do you have for this color in this one? How many leaf nodes? Go ahead. I said 3. You have total 3? Sorry. Six. Just in terms of color. Just think about the color, not a considered but others, just go from the root to leaf. From color that has how many leaf nodes and non-leaf nodes? One? One what? You have two non-leaf nodes. And that further with us side of this attribute, we will have another leaf node. It's a bigger or smaller due to the blue. We, in this case, we will consider the shape. And then for the shape, you will have one non-leaf node and one leaf-node. And for the size, you will have two, either big or small. Again, so, eventually, it is a structured problem. We will depend on the features, but in the future, you will see, we will be associated with more features. For example, in this case, the shape, so, actually, it's associated with the size. Again, we will consider the all features.",
		"week": 10,
		"page": 10
	},
	{
		"transcript": "This one.",
		"week": 10,
		"page": 11
	},
	{
		"transcript": "So, here is another example of decision tree. So, we want to predict the commute time each day. But for example, you can leave at 10 AM, 8 AM, or 9 AM. For example, if you leave at 10 AM, if at 10 AM, we will have stall. What is stall here? What does stall mean here? The stall means your car is false, false. Stall here. And the next thing, we will have if your car is stall for long time. And if you leave around 8 AM, you will probably have another long time. Let's say, you try to leave at 9 AM, you probably have accident. So, if you have accident, your time is not medium. So, you want to see why if earlier, you have still long your time. If you leave earlier, you will still have long commute time. Does it make sense? Does it make sense? Why? This is one of the reasons, and other reasons might be like leaving earlier. Does it make sense? Let’s say, if we leave at 10 AM and there are no cars stalled on the road, what will our commute time be? Short. Right? Because, there is no stall here. It's like a simplified case. If other examples, let's say, you have further or other test examples, if at 9 AM, and no accident, your commute time is medium. So, this is a supervised prediction.",
		"week": 10,
		"page": 12
	},
	{
		"transcript": "So, in this decision tree, we made a series of Boolean decisions and followed the corresponding branch. Did we leave at 10 AM? Or did a car stall on the road? Is there an accident on the road? You should answer these questions. Based on the situation, then we will know the commute time.  For our online students, can you hear me? Yes. By answering each of these yes or no questions, we then came to a conclusion on how long our commute might take.",
		"week": 10,
		"page": 13
	},
	{
		"transcript": "So, here are some rules. We did not have represent this tree graphically. We could have represented as a set of rules.  However, this may be much harder to read.",
		"week": 10,
		"page": 14
	},
	{
		"transcript": "This example, if you try to apply this. It's purely based on logic. So, first, we need to try if hour is equal to 8am. So, then the commute time would be long. Else if hour is equal to 9am. So, let's say if accident is equal to yes, then the commute time is long, else medium. Else if hour is equal to 10am, if stall is yes, then the commute tome is long, else short. As we can see from here, all attributes to not have to be used in each path of the decision. And as we see, all attributes may not even appear in the tree. Sometimes, the decision rules are actually not a decision tree. If you we want to use.",
		"week": 10,
		"page": 15
	},
	{
		"transcript": "Let's talk about how to create decision trees. We first make a list of attributes that we can measure. Those attributes for now must be discrete. So, we then choose a target attribute that we want to predict. But we definitely need them all. Then create an experience table that lists what we have seen in the past.",
		"week": 10,
		"page": 16
	},
	{
		"transcript": "Let's see in this case. We have also many different examples, from D1 to D17, and we also have so many different attributes. We have hour, we have weather, we have accident, and we have stall.  But eventually, we have the target feature, that is about the commute time. That is, we very care about. So, you probably can see, we have an extra other column that is weather. However, in the previous decision tree, we didn't pay attention this attribute. But it seems the weather is not important. Maybe next few slides, we will talk about why it is better to explore it.",
		"week": 10,
		"page": 17
	},
	{
		"transcript": "In the previous experience decision table showed 4 attributes, hour, weather, accident and stall. But the decision tree only showed 3 attributes: hour, accident and stall. Why is that?",
		"week": 10,
		"page": 18
	},
	{
		"transcript": "There are some methods for selecting attributes, which will be described later, show that weather is not a discriminating attribute. We use the principle of Occam’s Razor, given a number of competing hypotheses, the simplest one is preferable.",
		"week": 10,
		"page": 19
	},
	{
		"transcript": "The basic structure of creating a decision tree is the same for most decision tree algorithms. The difference lies in how we select the attributes for the tree. So, in this lecture, we will focus on the ID3 algorithm developed by Ross Quinlan in 1975, the ID3 algorithm.",
		"week": 10,
		"page": 20
	},
	{
		"transcript": "So, here is about the basic of the decision tree. So, the basic idea behind any decision tree algorithm is as follows. The first step is to choose the best attributes to split the remaining instances and make that attribute a decision node. And then, we will try to repeat this process for recursively for each child. And then we will stop when all the instances have the same target attribute value or there are no more attributes or there are no more instances. Did you get it? Definitely, you need to choose the attributes.",
		"week": 10,
		"page": 21
	},
	{
		"transcript": "So, let's check the previous one example. So, how did we know to split on leave at and then on stall and accident and not weather? How to do it in this case?",
		"week": 10,
		"page": 22
	},
	{
		"transcript": "We will use the method called ID3 Heuristic. To determine the best attribute, we look at the ID3 heuristic. Professor, you are breaking up. We can't hear you. Okay. What about other's audio? Is it the same for others? Yes, there was some noise with your lecture. There was some noise. It makes us that we can't hear you. Now, it's ok. Maybe I can just stand here, and not you. This method is named the ID3 algorithm here. So, ID3 actually splits attributes based on their entropy. And this is one good thing you guys also need to calculate for your homework. You need to calculate a kind of entropy. This entropy is a measure of disinformation. And for those who actually who have a little bit of background in mechanics, know about what is entropy. What is entropy? You don't know? What about others? Can you remember what is the entropy? No idea about this? Okay. That's fine. So, anyway, what we have to review about is entropy. What does that mean? And how entropy can affect us?",
		"week": 10,
		"page": 23
	},
	{
		"transcript": "So, actually, entropy is minimized when all values of the target attributes are the same. If we know that the commute time will always be short, then entropy is 0. So here, for the entropy, do you want to get a bigger number or a smaller number? Big or small? Small. Right! You want to always get a small number of entropy. Usually, smaller is better. So, while your entropy is maximized, when there is an equal chance that all values will attack the attribute, that is your result. It's random, totally random, cannot try to predict your entropy. Let's say if commute time is equal to 0 in the 3 instances, and the medium in 3 instances, and also long in the 3 instances. So, in this case, your entropy is maximized, because you really cannot know when we get a short time, which means in this case, your entropy is pretty big. And also, during the classification, you guys remember about cross-entropy loss. Right? That cross-entropy losses, also when can my ID3 and based on the entropy. And also, we try to get the smaller cross-entropy loss. Right? And similarly, which means if you get that smaller entropy, you will try to get a better result.",
		"week": 10,
		"page": 24
	},
	{
		"transcript": "And here's about the general review of how to calculate entropy. So, the entropy S is equal to the sum of all the examples. So that is defined by minus of the of the absolute of Si divided by S than times with log of this kind of fraction Si divided by S. Again here, here is the S means a set of all the examples. And the Si is just a subset of S with value vi under the targeted attribute. And this capital I is the size of the range of the target attribute.",
		"week": 10,
		"page": 25
	},
	{
		"transcript": "So, actually, for the ID3, it splits on attributes with the lowest entropy. And we calculate the entropy for all values of an attribute as the weighted sum of subset entropies as follows. So, this is the previous one. Just this entropy. We get the sum of it. So, in this case, but the case, the range of attributes we want to test. And we also measure that information gain. So here is gain information, which is inversely proportional to the entropy as follows. So, this is how to define this one. Entropy minus this kind of so that we can get this gain, information gain here.",
		"week": 10,
		"page": 26
	},
	{
		"transcript": "So, remember about that commute time sample task. We can calculate the entropy of each attribute at the root node. So, follow the previous equation, we can calculate those kinds of entropy. So due to the probably limited time, we won't calculate them by ourselves. But you should notice that this is about the expected entropy. You have about the entropy hour, you have weather, you have accident, you have stall. So, this is about the expected entropy, and this right most column, so this is about information gain. A smaller expected entropy means what? You can do a lot. Yes. That's correct. Exactly, you want to get minimum entropy, or you want to get a bigger information gain. As we said previously, so actually information gain is opposite with the relationship between the entropy, the expected entropy. Right? If this expected entropy is small, so then the information gain will be bigger. So, in your project, you can calculate the expected entropy or you can calculate the information gain. So, basically, they should be similar. You can get a similar staff. And here, you might notice that what is the biggest entropy. Which entropy? Which attribute? Which attribute gives you the best not best, the highest entropy? The weather. Right! So, in this case, you probably notice that so the weather is not that important in the task. You can try to remove it, during your experiment. And similarly, in your today's homework, you might reduce down dimensions as features. You also try to get the most important one. You should pay attention to that. As we have noticed the hour, it has the minimum entropy. Which means that the hour should be the most important thing we care about. Right?",
		"week": 10,
		"page": 27
	},
	{
		"transcript": "And next, we try to talk about the pruning trees. The pruning trees, there is another technique for reducing the number of attributes. It's called tree pruning. Basically, we have 2 different types of pruning. We have the pre-pruning. We have post-pruning. So, the pre-pruning means that we will have forward pruning. And for the post-pruning, we will have backward pruning.",
		"week": 10,
		"page": 28
	},
	{
		"transcript": "So, in the pre-pruning, we decide during the building process when to stop adding attributes. Possibly based on their information gain. However, there may be some problems with it. Why? If we try to get pruning during the building of the decision tree. Can you imagine why? Because we can reduce some useful attributes. Not exactly. What about another guess? So, here are just some reasons. Sometimes attributes individually do not contribute much to a decision, but combined, they can have a significant impact. As you said, some attributes can be important. Or if we just see individual features as not exactly important. But if we try to combine several together, it can be a very powerful attribute. Right?",
		"week": 10,
		"page": 29
	},
	{
		"transcript": "Next for the post-pruning. So, post-pruning waits until the full decision tree has been built and then prunes the attributes. And there are basically 2 different techniques. One is called subtree replacement. Another one is called subtree raising.",
		"week": 10,
		"page": 30
	},
	{
		"transcript": "So here is about the basic idea of the subtree replacement, so the entire subtree is replaced by a single leaf node. What is a leaf node again? Good. There is no branch. And there is no further branch. They are aligned. So, you know, for those nodes 1, 2, 3, 4, 5, those are my leaf node. So, actually, this can be a subtree that can be replaced by a single leaf node. I mean, you will try to remove this part from others. Subtree replacement can only result in a single leaf node.",
		"week": 10,
		"page": 31
	},
	{
		"transcript": "Node 6 replaced the subtree. Generalizes tree a little more, but may increase accuracy. And so, in this case, you see, the differences are, these entire nodes, it's replaced, it is removed part, where you'll get node 6 replaced that. Replace that subtree and generalize the tree and a little more about making increased accuracy. Right?",
		"week": 10,
		"page": 32
	},
	{
		"transcript": "You have this previously had too many of this kind of leaf nodes on your next 1, you'll try to remove that part. You just have 456, right, so in this case, in my effort to improve your accuracy. The slide is titled \"Subtree Raising\". It depicts a concept in which an entire subtree can be raised or moved to another node in a tree structure. In the provided diagram. There is a main node labeled A with three child nodes: B and two nodes without a visible label. Node B is connected to nodes C, 4, and 5. Node C is emphasized with a red oval surrounding it. It has three child nodes labeled 1, 2, and 3.",
		"week": 10,
		"page": 33
	},
	{
		"transcript": "The slide titled \"Subtree Raising\" is discussing a concept related to tree structures. This is about another faculty part in the subtree raising. So, at each other entire subtree is raised onto another node. So, for example, in this part, it requires to be another test. You, see? Dependence here. So, actually, it's just to not have this B again, right, we'll remove all the previous B. Also, this this was not discussed, you need the help button, because it didn't take a long time everything, and also either time-consuming for you if you try to remove the previous node to write. And then he has the best guide for guys who need to notice about the subtree rising. ",
		"week": 10,
		"page": 34
	},
	{
		"transcript": "But we still have some problems with the algorithm, the ID3 algorithm First mind that it is not optimal, right? The use is expected and to be a reduction, not the actual reduction, and it must be used as some district or discretize the attributes. So, what if we left for work at 09:30 AM? A straightforward solution is that we try to break down the attributes into smaller vectors, right?",
		"week": 10,
		"page": 35
	},
	{
		"transcript": "So, let's say this kind of example. While decision trees classify quickly, the time for building a tree may be higher than another type of classifier. Why is the classification of decision trees being very fast? Yes. Exactly. You just use if statements from the root node. If I have just if. statements, you should not be, as you said, not need to calculate some additional regulation of the weights or our staff. But how do you view building a decision tree as time-consuming? Decision trees suffer from a problem of errors propagating throughout a tree. A very serious problem as the number of classes increases. So, this problem becomes very severe to follow.",
		"week": 10,
		"page": 36
	},
	{
		"transcript": "Since decision trees work by a series of local decisions, what happens when one of these local decisions is wrong? Every decision from that point on may be wrong. We may never return to the correct path of the tree. Right?",
		"week": 10,
		"page": 37
	},
	{
		"transcript": "Error propagation example. For example, let's say if you try to put you follow this green grade node from this root note to this leaf node and then the eventual left note. So, in this case, you probably difficult for you to try to go back to the previous 1. And similarly, if you follow this red, this red lies there, we still try to go to a little bit of difficulty to go back.",
		"week": 10,
		"page": 38
	},
	{
		"transcript": "So, remind me of the previous question, you know, we have a loss of different discretize the time. Now if we broke it down, the leave time, to be the minute, we might have something like this. If we try if you're near 8:02 AM, you may have long, you may want to go to 8:03 AM., right, you should be medium. You may if you want to go to like 09:05 AM, it should be open short, a bunch of different possible things if you select break exactly in 2 minutes. Right? So eventually, you will have what Therefore you'll have so many differences. Your decision tree, will be what? Well, well, it will be very big. Right? Because you have so many different If else statements that are required and needed to decide. Since entropy is very low for each branch, we have n branches with n leaves. This would not be helpful for predictive modeling.",
		"week": 10,
		"page": 39
	},
	{
		"transcript": "We can use a technique known as discretization So, in this case, we're trying to choose some cut points. And such as 9 AM for splitting continuous attributes. These cut points generally lie in a subset of boundary points, such that a boundary point is where two adjacent instances in a sorted list have different target value attributes.",
		"week": 10,
		"page": 40
	},
	{
		"transcript": "That's how you can consider the attribute commute with all these different situations. Like, this L is what? Yeah, L is long. So, this is just the first thing you have lots of different commute times. And with a bracket there, you have this as L as long, M as medium, and S as short. You have so many different situations. When we split into these attributes, we increase the entropy so we don't have a decision tree with the same number of cut points as leaves. Right? So, in this case, we are giving you some problems up here.",
		"week": 10,
		"page": 41
	},
	{
		"transcript": "Next, we tried to briefly talk about the ID3 in gaming. I know as a guy, I thought about the problem called the node, about the problem. Black & White, developed by Lionhead Studios, and released in 2001 used ID3. Used to predict a player's reaction to a certain creature's action. In this model, a greater feedback value means the creature should attack.",
		"week": 10,
		"page": 42
	},
	{
		"transcript": "This table is what? What kind of table do you remember? Do you remember? This is a table, man, the table of what? Yeah. It has features. Let's try to go back go back, you can see that. Well, it should be a fun time building. It's called the sample experience table. Bye. So, in this table, you actually have different examples from D1 to D9, and also you have other kinds of attributes. For example, like allegiance, defense, tribe, and you also have a target as a feedback back value. You have given this. Variables, is the negative there positive, or other kind of variables there. Right?",
		"week": 10,
		"page": 43
	},
	{
		"transcript": "And then here's black and white in ID3. So, if you have allegiance, you have friendly, you will have -0.1, if it is enemies, or you will try to defend, you will evade If you like, your defense is weak, you have another kind of points. If it is medium, you have this kind of point. If it is wrong, you have another kind of negative points. I know he said that this decision tree does not even use the tribe attribute. Right? Why? My reason why we did not use this 1? The mind is that this kind of attribute is not that useful. Right? After you calculate this, calculate what? Okay. The entropy or the information there, right? Either way, you can decide that.",
		"week": 10,
		"page": 44
	},
	{
		"transcript": "Now suppose we don't want the entire decision tree, but we just want the 2 highest feedback values. We can create a Boolean expressions, such as ((Allegiance = Enemy) ^ (Defense = Weak)) v ((Allegiance = Enemy) ^ Defense = Medium)). So, we may only care about these 2 cases, right, but those should give us the highest feedback. So, this is about 1 game problem.",
		"week": 10,
		"page": 45
	},
	{
		"transcript": "And in the next, we're going to talk about another example of the decision trees. Let's try to have a 5 to 10-minute break. So, after, let's try to cover the last 2 parts. Okay.",
		"week": 10,
		"page": 46
	},
	{
		"transcript": "So that's going back into our slides here. Let's start with this is a good example of the second example of the decision tree. Again, we have this ID, blah, blah, what is ID here? Just while we go with various names. Right? And then you have them with different columns. Given the column, hair, and height, you have weight. You have a lotion, you have results, so you can eventually. Hello. This is me. This result is what? Yes. On your Whether yi have sunburn or not, right? It just keeps you excited about that. Yeah. And but we need to probably pay attention. So, about this case, on your mind, which attribute is useful? Yeah. You can do the idea of this otherwise. Student: Yes. ID. Professor: No. So, weight? Yeah. The weight, the weight? Yeah. Yeah. And it affects? Not a lot. But the haircut, that you can be a lot affected. Right?",
		"week": 10,
		"page": 47
	},
	{
		"transcript": "However, in this case, we may still want to see a different way. Try to build our decision trees that have used what kind of attributes. They used hair color, and use lotion used, whether you use lotion or not. Right? So, in this case, where you actually have, like, hair color. How many people? It's just 1 people. Right? Very cool. Emily. Right? And then for the blond, we have so many others. And then you have another case, you have several other people. And then, you recognize whether you use a lotion or not.",
		"week": 10,
		"page": 48
	},
	{
		"transcript": "It can be one tree, right, and this is the second tree that is the first of your what's the known root of the attribute is about the height. Height, right, whether it is tall or short, the idea to that, you're gonna have different attributes. So, if you have shorts, you can think about color and care about the weight. If it is like average, you also need to care about the height and then also care about hair, so this is your secondary tree, a possible tree. Right? You're looking for the impossible tree, you can get.",
		"week": 10,
		"page": 49
	},
	{
		"transcript": "So, in this case, which one is better in your case? Which one is preferred? The left 1. Good. The left 1? Or right 1. How many of using a is a better 2, 3. So that as soon as should be think as a second 1 is better. So last thing, the details of it.",
		"week": 10,
		"page": 50
	},
	{
		"transcript": "Remember, we briefly mentioned, that information is good when samples are attributed to various pairs. So, in this case, each of them, they have it, right? And the target function has discrete out the values. So, you need to even check whether it is about the discrete output. And the disjunctions required, and also, in this case, you have, they can have some missing or noisy data.",
		"week": 10,
		"page": 51
	},
	{
		"transcript": "And if we want to get a construction of trees. So, we will from top-down construction. So which attribute should be tested here to form the root of a tree? You need to consider about to create a branch of each attribute value and sort samples into these branches. And in step 3, we'll think about at each branch node, and repeat one. Think more about it.",
		"week": 10,
		"page": 52
	},
	{
		"transcript": "So, we will go back to this problem again, how to choose an attribute. Remember, we prefer smaller trees, right? We try to use the Occam’s razor, right? And there's a mention about that. So, the world is inherently simple. So, therefore, the smallest decision tree that is consistent with the samples is one that is most likely to identify unknown objects correctly.",
		"week": 10,
		"page": 53
	},
	{
		"transcript": "So, we also try to maximize homogeneity in each branch. So, for example, in this case, at least all the different attributes versus edges. A person's name, for example, the hair color or privacy with different situations, so then it's also about another person's name. And if you can consider above the height. It also has 3 attributes, people's weight, 3 attributes a lotion used in this case just to have 2 cases of weather used or not. Yes or no, right?",
		"week": 10,
		"page": 54
	},
	{
		"transcript": "So, I would choose some hair color. You may let's say, if you choose this 1 as the root node, you also need to consider about other situations. For example, whether you have height, whether you have weight and the lotion used.",
		"week": 10,
		"page": 55
	},
	{
		"transcript": "So formally, we try to minimize, maximize homogeneity. Another way is to try to minimize disorder. And disorder is similar, the formula can be taken from the information theory. So, this is about overall of the average disorder is so called the average entropy, that is similar idea as we see before. So, here's just a sum of all of it. So, this one is nb, this one means number of samples in the branch b. And the nt here means the total number of samples in all the branches. And the nbc is the total number of samples in the branch of b of class c. So, this is, eventually, you guys will probably calculate a similar equation that so that we can tell you above the basic entropy of the disorder of your tree here.",
		"week": 10,
		"page": 56
	},
	{
		"transcript": "And again, let's say, this is another form of disorder in each class tree. So, you need to calculate this kind of equation here.",
		"week": 10,
		"page": 57
	},
	{
		"transcript": "So, let's give you an example about the intuition of the entropy. Let's say if an attribute can have two values. Let's say the previous one. The solution used there can be 2 ways, right? So, if equal numbers of both values, then. Let's say this means the number of each number should be established. So nbc, they include you 1, and the nb is just equal to 2. So eventually, you have this number. Sum of them should be equal to 1. What does this mean, if you disorder all the entries equal to 1, guess what? It's similar I previously mentioned that you let's say if your entropy is equal to 1, this one. Entropy has these 2 values and equal numbers of both values. It's the probability of them. Are they equal? So, eventually, this one is one. Is it good enough? Why is it not good? Yes. Exactly. So, eventually, if you get 1. It's a very big entropy, and you try to avoid that. And those 2 cases are just a random event. Right?",
		"week": 10,
		"page": 58
	},
	{
		"transcript": "And this is the second intuition. So, an attribute can have 2 values. And if only 1 value is present. So, this is equation of disorder. So, you try to get in this case. Right? Try to distinguish 1 from the other 1. So, in this case, you have 0 disorder, as entropy. So, you prefer this case.",
		"week": 10,
		"page": 59
	},
	{
		"transcript": "And then here's another realization of entropy. In the left hand, this should be the friction in one class. So, let's say, it is equal to 0.5, and this is the case it's about friction and its different classes. So eventually it's about also other frictions here.",
		"week": 10,
		"page": 60
	},
	{
		"transcript": "So, this is another situation there.  And eventually, if you have a market disorder, you just try to get the average this order of all the previous all benches. Right? You can calculate this equation.",
		"week": 10,
		"page": 61
	},
	{
		"transcript": "So, let's say about this decision tree again.",
		"week": 10,
		"page": 62
	},
	{
		"transcript": "So, the average disorder of this one can be equal to, if less, calculate about the hair, in that previous example. So, in this case, I skipped all the details of this equation. So that's directly about this result seems equal to 0.5. It seems there is not that big a number. Right?",
		"week": 10,
		"page": 63
	},
	{
		"transcript": "But what about other stuff? You can calculate the other features like height, weight and lotion. You will see which one will actually give you a smaller disorder or entropy. Yeah. The hair. Right? So, some of you obviously think about hair is not important at all. Yes, it is. True. Right. If you select the hair, it can be the root node. Right? So, eventually, you want to put it in the root node, instead of out there is no way. Because eventually, if you put it in leaf node, you might not get correct answer. Right? And again, as the mallet disorder seems better. So, in this case, you'll probably want to select the left hand. As it will give you a lower entropy loss. Right?",
		"week": 10,
		"page": 64
	},
	{
		"transcript": "So, remember about the previous 2 studies. And again, there are some issues with decision tree learning that can be overfitting. Why? So, given a learned decision tree t with error e. So, if there is an alternate tree t prime with error e prime that fits the data. And let's say e prime is bigger than e, on the training data set, but the t prime has a smaller error over the entire distribution of samples. So, in this case, it also means that your, your what? Which one is better? Is its case, which my is better? Let's say your e prime is bigger than e which means, in this case, training set, which 1 is better. Your t battery or it's probably better, you only consider about training dataset. T is better, right, t has a smaller error. But you can see the overall samples because t prime has smaller errors. So, you might think about t prime is better, because your decision tree here might overfitting of the data, right?",
		"week": 10,
		"page": 65
	},
	{
		"transcript": "And here is about the plot of overfitting again. So, you have this size of trees which means the number of nodes. It not always means that the greater number of nodes you have, the better accuracy you can get. It's not like that way. Right? Thing about your accuracy. So actually, in the first several number of nodes, with the increasing of your number of nodes you probably have at most high accuracy in your training dataset and your test dataset. However, after, for example, after like 20 nodes, although your training algorithm is increased, by your test accuracy is reduced. Right? So, this is also another phenomenon of overfitting. If you use a too complex decision tree, and even member during homework you should try to avoid this kind of a complex decision tree. But it can be up where you can explore if you have a very complex decision tree, which means that you have depth on your decision tree. It's very big. Right? You can try to explore whether you can get a similar observation or not.",
		"week": 10,
		"page": 66
	},
	{
		"transcript": "And also, there are several factors that we keep mentioning in the previous weeks or maybe in the following weeks. We still try to deal with the problem of overfitting. And also, you guys have some problem of your first project in the computer vision, in the deep learning class, right? And you have probably noticed that you should use the strategy early stopping. Stopping right? Stop growing in the tree. And in the decision tree, you may need to use the post prune the decision tree. And another strategy is how do we determine the correct final tree size. So, you probably need to use a validation dataset and test the accuracy. And also, you try for your report some statistics. For example, like chi-square test, coming whether to grow in a tree. And also, you try to minimize the decision tree to marry the complexity. It means that can be marred by your size of the tree in these classifications. This is some kind of strategy trying to avoid of overfitting the decision tree.",
		"week": 10,
		"page": 67
	},
	{
		"transcript": "And also, you can try to reduce the error pruning, remove the subtree at the node, and replace it with a leaf. Remember we use and now some subtractive removal completed the left part with leaf. Right? And I assign the most common class at the node to the leaf, only select the node for removal if the error is less or equal to the error of the original tree on the validation set.",
		"week": 10,
		"page": 68
	},
	{
		"transcript": "And I have some results that after you remove some error pruning, you will get some results. So, remember these solid lines, the original training data set, and this is the dash means the test dataset, this is original test dataset. And after you reduce some pruning, you may see that accuracy can be improved a little bit, and then it creates the right. You're also more than you need to stop in the middle in this part. Right? In this case, you can do a little more complex than previous.",
		"week": 10,
		"page": 69
	},
	{
		"transcript": "And then here are some rules about post-pruning. So, convert the tree to equivalent to the set of rules and prune each rule independently of others and then try to remove precondition and test and the sort of final rules into the sequence by estimated as the accuracy and then consider them in this sequence.",
		"week": 10,
		"page": 70
	},
	{
		"transcript": "Why don't we need to use some rules and then do some pruning? So, actually, each pass through a node produces a different rule so you have many rules per node that can be from pruned versus removing one node and subtree. So, in rules, tests near the root, but do not mean more than test near leaves. So, rules are often easier to read and understand. So that's the reason you guys need to make a rule first, so then you can see about the problem.",
		"week": 10,
		"page": 71
	},
	{
		"transcript": "Stretching, and also there can be some continuous valued attributes. For example, you have a temperature. There can be some continuous numbers. Right? So here are just some int digits, but you really can get some continuous numbers like 40.24003, right, and it is different from some table play tennis. But in this case, if these are having 2 cases.",
		"week": 10,
		"page": 72
	},
	{
		"transcript": "And also, we need to consider about continuous to discrete. So, we want to get a threshold, basically, a simple set of thresholds. And the whole binary attribute that produces that greatest information again. You try to solve the attribute and identify adjacent examples that differ in classes and the candidate thresholds are midway between attribute value on those examples and check the candidate thresholds for information again and choose the one that maximizes again or equivalently minimize the entropy here.",
		"week": 10,
		"page": 73
	},
	{
		"transcript": "Also, sometimes continuous attributes are very favored. For example, the ID3 prefers many valued attributes. And for example, consider the name for perfect classification. It should be in a classification problem and also include hardware of quality or uniformly an attribute that helps to split data. And the name is not broad at all. For example, the lotion used maybe you use much lotion may be better than if you do not use lotions when you're eventually, we are trying to prevent, you can see, get some sunburn, these are previous examples, right?",
		"week": 10,
		"page": 74
	},
	{
		"transcript": "You can also track your receipt about attributes with cost. So, in this case, to get a decision tree that we are associated with cost, because each a leaf node, a non-leaf note, yeah, there will be some cost of it. Even if we further consider about the costs, you may have probably different, built out different decision trees. And in this case, we also want to build our lowest-cost attributes tested earlier. And the multiply by, just the multiply cost of that.",
		"week": 10,
		"page": 75
	},
	{
		"transcript": "This and then here's a quick summary of this lecture. We've had the decision trees that can be used to help predict the future. Right? And at least I easily understand because you have so many if-else in the statement and demands to take place some that the operations. The decision drees, welcome more efficiently with the discrete attributes. As we discussed previously. And the tree may suffer from the error propagation.",
		"week": 10,
		"page": 76
	},
	{
		"transcript": "And also, we measure several structures to how to memo this error propagation. And then lastly, for your guys, homework, that is simple, just to implement the decision tree. But in this case, we have here. It did be typical for your guys. So, in that case, I also put another kind of what? Happy guy's ability to get decision trees from scratch. So that's quickly a review about the requirements and homework. So here it basically should be very simple.",
		"week": 10,
		"page": 77
	},
	{
		"transcript": "",
		"week": 10,
		"page": 78
	},
	{
        "transcript": "",
        "week": 11,
        "page": 1
    },
    {
        "transcript": "And in this lecture, we're gonna talk about another traditional method for the SVM, support vector machine.  So here is the overall overview. I will quickly mention about history of SVM, and then talk about some properties of SVM eventually will be discussed. about this simple applications use SVM models.",
        "week": 11,
        "page": 2
    },
    {
        "transcript": "So, first, the SVM model is related to statistical linear theory. And the SVM was first introduced in 1992, later as SVM becomes popular because of its success in handwritten digits recognition, So, actually, they got a 1.1 percent test error rate using SVM, and this is the same as the error rate as a careful constructed neural network LeNet 4.  Remember, we talk about the net in the deep learning course. Right? So that The SVM actually had shared a similar kind of performance as the net.  That's my reason why SVM become so popular at that time. So now, SVM is regarded as an important example of a kernel master. and one of the key area in machine learning.  So, usually, as SVM model, we are getting kind of better performance than the models we discussed in the last few weeks like this KNN model, decision tree, and among them, SVM should usually and get a better result. But then we ask you how depends on yours tell us that.",
        "week": 11,
        "page": 3
    },
    {
        "transcript": "We quickly review about this linear classifiers Let's see, if you use this black dot represent the positive one and we use this circle to donate the negative one.     How can you classify this data? Okay. Last one is. Sure. Do you write it in the right time? Yes. You guys thinking about you want to draw a line about it.  Right? For example, this can be one line that can distinguish between positive one and negative one Let's suppose that this line is w x plus b. That is equal to 0. w is what? weight. Yeah. It is the one weight. you can call it the slope of this line.  what about b here? Intercept or the bias of it. Right? And in the left side, this is the bigger than 0, and in the right side it should be less than 0.  So do you notice there is a function that can classify them into 3 different domains that is bigger than 0 or equal to 0 or less than 0. They are such a function. You can do that.  Is there a function f that can convert w x plus b to specified different categories?  sigmoid function. sigmoid function. Simple function. sigmoid function, typically, what is the range of the sigmoid function?   The sigmoid function properly like real numbers. Right? It wouldn't just give you three different classes. Right? So here is something that you guys probably heard.  What about sign function, you remember this function? the sign function once you get it as f, w x plus b, so than you can get a predict of y. what is the plot of sign function? Do you remember?  It should be like this one. Right? If it is a negative 1 or 0 or the positive 1, which is corresponding to these 3 different categories. Right? If it is equal to 0, then it is 0. If it is bigger than zero that should be 0. If it is less than 0, it should be just the 1. Right? It was three different states you can think about why we want to use the sign function of it.",
        "week": 11,
        "page": 4
    },
    {
        "transcript": "This can be one possible classifier line. Right?",
        "week": 11,
        "page": 5
    },
    {
        "transcript": "This can be another one.",
        "week": 11,
        "page": 6
    },
    {
        "transcript": "That can be multiple of those lines. So now here's the question. Any of those would be fine but which one is the best. Which line is best. Can you tell? The line with some condition of these lines. Yeah. That's kind of so.",
        "week": 11,
        "page": 7
    },
    {
        "transcript": "Actually, there's lots of lines between them. Right? Let's see if a point is close to those that can be misclassified to the positive one.  Right? So, actually, it is close to the that one. But in this case, because the because of this line, it is misclassified and positive 1, and you you choose another line. So accuracy should be correct.  Right? They're also done. Let me keep the line. So in this case, you might need it to thing about that, you need to find and have good lives so that you can make sure you can class correctly classify these different classes.",
        "week": 11,
        "page": 8
    },
    {
        "transcript": "But, actually, that can be a stick line between different classes.  Right? So during the SVM problem, we actually define a margin so called have a linear classifier as a white that the boundary could be increased before hitting the point.  Right? So before is left or right before you're shooting the classes, you actually can draw a margin between them.  As you can see in this orange in orange in margin in this case. So, actually, you can hit as a boundary. So that part is the h is a blank, and it's a white one.  It h is a circle. the white circle here. Right? So this is so so called a margin.",
        "week": 11,
        "page": 9
    },
    {
        "transcript": "So, go above. The SVM impeller is actually finding a maximum margin linear classifier that is linear classifier with the maximum margin here.  And this is the simplest kind of SVM, so called the linear SVM, or called an LSVM. And in the Sklearn package that you guys can use this linear SVM to do a classification.  But now let's try to look at the details of those so called max margin. So in here, in this blue line is so called maximum margin. As you can see, it is very thick.  So what about these three points? What are them? They are on the boundary of the module. So what is the specific names of this kind of points? Any idea here. Actually, this is the boundary point is to called the support vectors.   And those support vectors just means that are those data points that a margin portion are up against each other. So in the future, your interview will ask of the similar question, like, what is the support vectors?  What are the support vectors? They are on the margin. Yes. You should answer that. So Support vectors are those data points that are on the margin of it.  Right? This can be some easy question for you guys. You need it, w, you need it to remember. What is support vectors. Okay? And there are 3 different observations. First one, maximizing the margin is good according to intuition because you can directly separate it is 2 different classes. Right? And then then getting in bytes that only as part of vectors are important in the same all those three points may be important than the right.  You you will really care about those margin points. Other training points can be enrolled. Right? because as long as you can find those kind of support vectors, you can determine your best margin.  And in properly, it works very, very well. If we have find as long as we can find those kind of support vectors, your probably can get the very good accuracy.",
        "week": 11,
        "page": 10
    },
    {
        "transcript": "So, now let's talk about details of how we can get the maximum margin. we will starting with how to calculate a distance from a point to a line. And remember, there should be your high school course. Right?  calculate one point to line. For example, that's one line, is that point here, how can you calculate the distance between one point to a line. Yes. And remember? Like projection draw a line perpendicular to the line and calculate the distance.  That is one solution. So can you remember as a specific ingredient of it? Have right of us. Try the best way. So write down your line here. Let other people know what is your line.  Otherwise, what is your line. The highest one is the what is it? Address on the point. and AB is AB is just the. Mhmm. Write down your answer, you're all. So it should be plus b. Right? b y plus c 0 is that your line?  Yeah.  So you think this ABC just this couple of abc right? Right? What is the small part of it? Small abc is what? Smaller, Oh, actually, you change the smaller to the captical?  what about others? can you remember another one?   So what about Pinxue, did you get some results?  You remember what is the line distance?  No? Don't remember?   who can remember this equation of ditance, from point to line?  It seems you guys are all of you guys are forgot about it. Never mind. So we will review a quick review about that. It is not a very big point.  But anyway, in this case, we typically talk about if we have x, We have x1, x2, so now because it is 2 dimensions. So once we plus in with it, we have w1 plus x1 plus w2 times with x2 plus b is equal to 0 because it is like 2 dimensions.  So, eventually, your w is w 1w2x. So the x1, x2, so it costs bound to one point. So eventually, it can be to a 0.",
        "week": 11,
        "page": 11
    },
    {
        "transcript": "So, here is about the distance equation compared from one point x to this line.  Is that correct? It should be this one. Yes. Is it similar to this one? Did it similar to here or not. Similar? You can only change it is to cap to smaller.  Right? that's no significant difference between this one and this one. Okay?. What about others? can you remember this line?  Is this one correct? It should be just a normal. The wi just means the each dimension of the w.  Right? You have bunch of it. You should have been w 1, w 2. Like, previously, you have 2 dimensions. Right? So you should get the sum of it. and questions is here. Okay. So let's continue.",
        "week": 11,
        "page": 12
    },
    {
        "transcript": "So, now we really talk about we have defined the margin. Okay. Let's continue. To talk about maxmium value of the linear SVM about its maximum margin. So let's take an example of it. So remember, this is a line of w x plus b is equal to 0. Right? So if you think the predict class is equal to negative 1, so you get another line. Right? That line is equal to w x plus b that is equal to  negative 1.  And then the other line has a w x plus b that it just equal to 1. So now you have given the 3 lines. So now we already know this is 3 different styles. So what about this case? How we can get this equation.  It is third equation. How can I get this one? Yes. Use the first one to subtract the second one, so you can get another equation here. Right? So next, this is how we try to define the margin.  So actually the margin, it is the width of the margin. Right? Then you find  this equition that is x positive minus x negative. That time with w then divided w. So eventually, we'll get the equation of 2 divided by the norm of w.  How can we get this from this module here?  Just use the first and second equation to replace for the third equation.   So from this event, again, this is like this. Right? So this part is just a right here. Right? So and, also, you can expand this 1, like, with the x positive time with w is equal to what, that minus this is why it's equal to what.  In the next slides, we will try to discuss it, again, how we can know this is just the line, the margin.",
        "week": 11,
        "page": 13
    },
    {
        "transcript": "Right? So this is that we already noticed that we have a we can use this. This is the previous we can move this one to this part.  That is w times x plus minus b is equal to 1, and the w times x minus b is equal to negative 1. And according to this projections or you just use this kind of math.  Right? So, actually, this is the margin that we can calculate. So best of it, this is how we define the margin of it, the y's is equal to x plus minus x minus times with w divided by w norm.  What does this mean? This party means what? W divided by w norm. It's just a a unit vector, right?  Right? because at this point about which direction, right, So, eventually, we once we have the unit vector, he has just this part, and we expand it, we can get one minus b minus negative one minus  b minus divided by norm w  So in the future, if you Some other people ask me another question on how to define the margin of SVM.  You should immediate notice that you can get. 2 divided by norm of the w. w is what?  The slope. Right? That is just 2 divided by the norm of the w. So w here is not just a simple slope.  Right? You should also you think it's a vector. You shouldn't be out of stock. Right? But, anyway, you can think about what w is slope, but eventually, this shouldn't be just the norm of bunch of points there.    So it should be eventually w is a vector. Right?",
        "week": 11,
        "page": 14
    },
    {
        "transcript": "So, next, we wanna talk about how we can correctly classify all the training examples. As we already noticed that what is w, x i plus p is what?  This part is y. It's just y. Right? So you will have to classify whether y i is equal to positive one or this negative one. So these are the 3 different examples.  Once you try to combine together, How can I get this 1? Is this correct? Is this correct?   Okay. I got it. So you had just single line. y i in this part? Why are you using this negative ones you could view?  Changes the direction of this or less or equal. Right? Once it comes with if it let's say, for the first one, it should be easy. Right? But most this bar aggregate definitely should be Big or equal to 1.  But for a second case, let's say even y i is equal to negative 1. So what's problem in here because this is negative you should change this condition be bigger or equal to 1.  Right? So, eventually, it can get for the all i, it it shouldn't satisfy this equation. Right? Right? Good. So, remember, I could just talk about the max margin, you should be having it equal to 2 divided by m.  Right? Do you sorry. Divided by w. or it is similar as that is one over two, w transpose time with w. Is that correct? It should be quite equal to each other.  That's a significant difference between them. And then we will find another problem, so called the quadratic optimization problem. And the in that case that we tried to solve. for the w and the how can we get this kind of numbers.  We always need to remember what this is quadratic optimization problem. We have a minimal loss function that is tried to minimize its 5 w. That is equal to 1 over 2, w transport times w. So this is the overall goal.  We want to make make sure this is as smaller as possible. And this is a subject to y i, then w x i plus b, that is bigger or equal to 0 for the whole i. here, and this is the overall problem that we want to solve yet.  So in your mind, if you have this kind of problem, how can you solve this problem for you. You will have this  optimization problem. How can you solve it? directive, you can use directives.  So what your point is directive. to solve this quadratic optimization problem. You remember, we we can do something with it.",
        "week": 11,
        "page": 15
    },
    {
        "transcript": "Okay. Let's continue to talk about some solution here. Again, here is our problem.  So this is we want to minimize this 5 for all x y to satisfy all equation. And for the quadratic optimization problems, so they actually are very well known plus our mathematical program problems.  And many of these algorithms can solve this problem. But one easy solution is about that you need to apply lagrange multiply, so that is alpha i here.  So now in this case, we also try to apply this alpha i in this equation. That is associated with every constraint is a primary problem.  So in this case, we defined the quadratic optimization problem that q i, let's say, that are some of all i that is minus 1 over 2. This should be a summation, that is y i y j x i transposed with x j, it should be maximized.  And, also, you have another constraints that is the sum of all alpha i and y i is equal to 0, and all the a i it should be bigger than zero for the each a i here.  So eventually, we convert to the previous quadratic optimization problems to this one uses this Lagrange multiplier to help us get some solutions.",
        "week": 11,
        "page": 16
    },
    {
        "transcript": "And due to real time, this time, we we are only quick to talk about solutions. So eventually, we will get w. it will equal to the sum of alpha i, y i x i transposed x i  And the b here is equal to y k minus w transposed x k or any x k such as that alpha k is not equal to 0. And then for the each alpha i not equal to 0, alpha i indicates that is our corresponding x i is our support vector.  This is another indication of it. So, once you try to solve it, You should notice that if your alpha i is nonzero means that we will find the x that is a support vector.  Okay. Then the cosine function, we have the form of FX that is equal to sum of all alpha i, y i x i transposed with x, then plus with b.  So basically, this part just right. This part just This part should be what? How does this one? This part just should be your w. Right? The first part is just your w.  And, also, remember, in your homework, you will also need to implement this as SVM algorithm. You should always remember that even sometimes you find that dimensions are not agree with each other.  Please do a transpose of it. Okay. Feel free to use the transpose to do that.   And noticed that it replies in the product between the test point x and the support vector x i, we are returning to this letter.  And also keeps in mind that solving the optimization problem with all the computing that inner products, x i, x j between all the pairs of training points.",
        "week": 11,
        "page": 17
    },
    {
        "transcript": "So let's quickly saw some examples. First, we'll talk about what is the high margin so far we we find all data point to be passed by practically.  Right? Which means that there's no training error. So what if the training setting is noisy, the solution 1, we will try to get a very powerful kernel. Is this good?  yes, you may get overfitting for your dataset. if you are in the training, you get such a good kind of classifier and then do it on the test, it definitely will not get result very high accuracy.  To resolve this kind of issues so that we define about another margin so called soft margin.  So remember, all you need to remember what is a hard margin. So hard margin that means what.",
        "week": 11,
        "page": 18
    },
    {
        "transcript": "So, for the soft margin, we can allow some misclassification. Right? because Eventually, overfitting is not our goal. Right? We want to get as high accuracy as possible for our test dataset.  So eventually, if some researchers, they propose a slight variable, epsilon i here that can be applied or added to allow this classification of difficulty of noisy examples.  So now we change it. As you can see, they are just several different epsilon here. Right? Well, those points, so that they can allow to maximize our margin.  So eventually, this should be our new objective function. Right? Remember, this part is a previous that a hard margin. And this time, it had introduced soft, a select variable, a sigma epsilon i here.  So eventually, it's from the k or small k to the r.",
        "week": 11,
        "page": 19
    },
    {
        "transcript": "So, this is our new objective function. So remember, this part is our old formula, then we end to use of this kind of the first part.  Now in this case, once we incorporate the slack variables we aim to find the w and b is such as that as phi w that is equal to this part of them plus this epsilon i here.  epsilon is what? Absolutely. Well, Another name is part of what? Very good. Ah, please share with us in this name.  So noise. I thought what is this? Regular. Regularity It's kind of. Errors, it is not just errors.  What has this the epsilon that we just mentioned? Yeah. Just in the previous slide? So now you guys already did not remember. Right? It's just the one slide before.  What is the or here. It's just the Slack variables. Right? Now you with 10 seconds, you you all of you guys forgot about what's that? This is just a slack variable. You can simulate it, like, kind of a regularization term of it. Right?  So in this case, we want to minimize this new objective function, and in this case, you should have constraines to this new conditions, and we have this epsilon i that is bigger or equal to 0 for all i and eventually you change this term from for this, this is minus, epsilon i here.  What is parameter c here? The parameter c can be viewed as a way to control overfitting between two terms. Right? So eventually, in your homework, you also need to define the c the balance is different term here.",
        "week": 11,
        "page": 20
    },
    {
        "transcript": "And then here is the overview about Linear SVM. So the classifier is separating hyperplane, and most important training points are the support vectors.  Right? And the they are defines the hyperlane the the quadratic optimization algorithms that can identify which are training examples xi are support for the vectors.  With nonzero, like along the upper i here. And the both in the dual formation of the problem or in the solution of training points appeared only in the inside dot products.  And remember this is about is that alpha i is what? What is alpha i?  Alpha i is lagrange multiplier, right, to help you solve this problem. And then, eventually, you can donate your equation as w plus b, this part is a part of w.  Right? Once you get this kind of solution, you should approach that. What do you get from it?",
        "week": 11,
        "page": 21
    },
    {
        "transcript": "So, previously, we just talked about linear SVM. What about the nonlinear SVM. So what are other differences between linear or nonlinear?  Linear is what? same line. because the model must like a line. What about nonlinear. In the multi dimension, you know it will just like a curve right? It's not a simple linear relationship.   For x and y. So previously, we talked about datasets that are linear separate with some noise with our grade, for example, in this case, if we can separate this red and blue.  So definitely, once we have our single line, we can identify this two cases.  Right? So what about we are going to do if the data set is just too hard. For example, in this case, you'll have both. red in the left and the right hand of this blue, this you may think about probably just not a simple linear model.   What is the solution if you want to solve this problem? Mhmm. Okay. So this problem. We want to classify this red and the blue dots here.  Increase the dimensions. Right? So exactly the answer is here.  you want to map the data to a higher dimensional space. So in this case, even we try to feed our dataset is at spare.  Right? So in this case, of course, this red dots and more likely another way so then you can try to classify them. Right? So in the next few slides, we will try to discuss well about the nonlinear SVM.",
        "week": 11,
        "page": 22
    },
    {
        "transcript": "we will try to project it to the high dimensional space, I think we probably reviewed it before. Right? Maybe in the early weeks, we talk about the open mobile to high dimensions.  So the general idea is that the original input space can always be mapped to some higher dimension of each space where the training set is separable.  So in the left hand if you just think about in the two dimensions, There's just a lot of, like, blue dots and red dots. How can you classify them?  The red dots and the red dots. Yeah. In this case, more likely you need to find a circle to separate them. Right. So if you let's say, if you project them, you don't hide dimensional space as this is a three dimensions.  Right? in this case, you just you need a what to separate them. Plane, Is this a plane?  So this is more like a surface. this is a surface in 3 dimensions. Right? After that we can take a look at this kernal function. How can you do it by yourself?  Okay. Okay. Probably we can get back. Talk about this kernel. What is the kernal like, let's start start with this example.  Take a piece paper out. Write down whether you can get this kernel, in a format of this one. If you guys have exam, this should be one of you.  Can you format this kernal function. So you need to think about this should be some phi xi, phi xj here. It means that, and we divide it like 3.    So that you can really notice that this phi xi should be bunch of matrix and phi xj should be another bunch of matrix. Right?   Do you get the point? You should that expand this first. Then write our format in this way. phi x i transposed times with phi x j. you may need a new paper.  Oh, do you want to try it? Did anyone gets some answer? You guys are good. Did anyone get a correct information of it?  Remember, you should write first of matrix. it should be another metrix, so you eventually can get a product as it. You got it? No?   Is it difficult?",
        "week": 11,
        "page": 23
    },
    {
        "transcript": "And that is related to another important topic called the kernel trick. What is kernel? What does kernel mean here? Kernal means what?  So the kernel firstly means that you want to point the Data mostly be used, like, the dot product of this data points. So this is in the first line, this The linear classifer rely on dot product between the vectors.  K is so which we define as a kernel that is kernel of xi, xj that is equal to xi transpose with xj here, and this is usually how we defined kernel So in the future, you may also need to remember if someone want you define a kernel, you should remember about this way.  You should always can be written in this format with some x i and maybe a phi x i or phi x j there. and here is more details  So if the added data points is mapped to high dimensional space, we have some transformation plane, so that means you need to map x to the phi x here.  So the dot product becomes the k x i x j, that is equal to phi x i transposed phi x j.  this is the key thing. So In the future, if someone wanted you to define a function, you need to remember that. The kernal function should be written in this way.  Right, use it as transpose with another number. Okay. So now let's say, our kernal function is a function that is corresponding to in the dot product in some expanded region space.  So here is one example in the 2 dimensional vectors. as x is equal to x1, x2, and here is how you defined the kernel function.  This is the k x i  x j that is equal to 1 plus x i transposed x i with a power of 2. So let's see, this is the kernal function, you need to write a a way of phi x i transposed that it comes with pi x j here.  Right. This is the purpose of your you guys need to do. Do you wanna try it by  yourselves? Let's probably take a little bit of the break. Okay. Okay. And it is a limit time. let's quickly look at it. So let's first  try to expand this. This is this part. Right? First part of this part, and then you have to talk about this.  Just Put them together. Is that correct? You can probably forgot about i and j. Right? So, actually, you have the i equal to one. j is equal to 1, then i is equal to 2. The j is equal to 2.  The reason you have see so many non equation because you can expand that x i here. in this case. And once you try to expand and get the first part of that is your core first part. I mean, this way, I mean, transport.  And eventually, you should have got the product of them. So eventually once you get the transport again, read the summation of it. Right? I see once you see a solution, you see it always kinda easy. Right?  And once you do it, well, it's too difficult. Isn't it? Right? So this part of you will be just positive. Right? So keep in mind that In future, I believe in the future interview, they won't let you do this kind of degradation.  But you probably need to know how to get a kernel. Right? If they ask some question about what is kernel, you probably need to answer that the kernel is just you get a dot product with this one. Right? And we need to remember about those.",
        "week": 11,
        "page": 24
    },
    {
        "transcript": "Okay. And let's continue about some typical bunches of kernels. That's a for some functions to K X I, if it is a kernal function, you definitely need to calculate about this way.  This can be some capstone as you did in this way. It'll be difficult to tell. Right? And then here is a easy way that can help you easily get a to see whether it is a kernel function or not. This should be a Mercer's theorem.  So every semi-positive defined symmetric function is a kernel, which means that semi positive define the definite symmetric functions that correspond to our semi positive define the definite symmetric gram metrix that can be express in this way.  So you'll have a k x y, x x1, x1, k, x1, x2, k, x1, x3, a 2, k, x1, 2, x, and Then you have k x, x2, x1. And blah blah, eventually, you should be what is the matrix size of it?  What is the matrix size of k? it should be n by n metrix. Right? So you need to remember. That is corresponding. You have many samples that you have.",
        "week": 11,
        "page": 25
    },
    {
        "transcript": "And then here are frequently used kernal functions.  The linear one should be just equal to simple one. It's just about matrix . The transpose times with x i. And the polynomial of power, so you should be this 1. And the gaussian kernel, you guys maybe heard about many times. Right?  And this is how we define the kernel the gaussian kernel here, and there is another sigmoid kernal as you can define in this way. So among them, the gaussian kernel actually is Why did you use it in many different applications?  And, also, there is kernel version of the SVM, but that is not a key thing about this lecture. So today's lecture, you guys probably notice how to do SVM and then how the kernel can help you to get a kernel.",
        "week": 11,
        "page": 26
    },
    {
        "transcript": "So, let's try to see about dual problem if we try to get it enrolled with kernels that is nonlinear of SVMs mathematically.  So remember this is about your problem solution. If we think it is a nonlinear problem, so this this part What what are the difference between this one and the previous problem? Can youremember, I quickly identify Where is the difference?  Where is the difference in this one? No difference? And what about solution? Do you see some thing differently in a solution part? Yes. Exactly. So the only difference is about kernel part. Right? You have a k here, k x i x j.  So now, also, in the solution, you have k x i x j. So this should be the difference between the non linear and the linear SVM.   And we also, similarly, try to optimize this the alpha i should be similar as before.",
        "week": 11,
        "page": 27
    },
    {
        "transcript": "And this is about the quick overview of the nonlinear SVM. So SVM locates a separating hyperplane in the feature space, and the classified points in that space that does not need to represent the space explicitly.  Simply by defining kernel function, and the a kernel function place, the role of dot product in the feature space.  So in this case, typically, if we apply the kernel of the SVM, then we are doing another kind of little bit better result So later, you guys can test whether if you apply the kernel of your dataset that can give you a better results or not.",
        "week": 11,
        "page": 28
    },
    {
        "transcript": "And here are some properties of SVM model. So, for example, it is flexible to choose some similarity function and the sparseness of a solution.  when dealing with large data sets, and only support vectors are used to specify the separating hyperplane and the the ability to handle the large feature space.  And the complexity does not depends on the dimensionality of the feature space.  The over fitting problem can be controlled by soft margin approach. Right? And that's nice math property, a simple Convex optimization problem, which is guaranteed to converge to a single global solution.  And, also, you can follow the features selection using some SVM try to find the best feature of it right?",
        "week": 11,
        "page": 29
    },
    {
        "transcript": "And next, we want to quickly talk about some real world applications.  So for example, in the text or have a text classification or the image classification in a bioinformatics, the protein classifications and the cancer classification or hand written character recognition, and most you guys already play with the image classification right?    ''' As I said, in the deep learning course, you guys extract some deep features or your general features. and then apply SVM to get a classification. Right? I don't know whether some of you, get a good results using the deep learning features or not?  Use this on different features or not. to the annualize of your available results. If you use SPM, what is the accuracy where around 65. 65? Oh, that's kinda good. What about others? 64. 64 Right? is better than your own developed cnn model. Right? You would be a little bit sad about that. Yeah. Yeah. Yeah. Yeah. It's common because the key reason is that the resnet 50 because it is already trained on very big data set.  Right? They can extract very good features. So that's can be one reason why your own developed model. It's not as good as the pre trained features.   Right? And then the text just a few minutes, finish the data pipe line, you can get some good results. That's one reason why the combination of SVM can also give kind of good results.  But, you know, it highly relied on your extract features. Right?   because these are features are good. So let's say if your feature is not good, your public cannot cannot do that. '''",
        "week": 11,
        "page": 30
    },
    {
        "transcript": "So, here is about first application in the cancer classification. So in this case, you will have lots of patients like p 1 p 2 to p n, then you have different genes.  Right? Now is more like some capture features. You have g 1 g 2 to a g p here, Let's say if you have very high dimensional space, you have p that is bigger than 1000, and n is less than 100.  Which means is that you have lots of what? Yeah. Lots of what? It's 1,000. It's what? 1000 is what? It's 1000 features features. Right? But they just have few number of patients that is not a lot.  And if, let's say, if it is the imbalance data, you may have a left positive examples. So in this case, if you apply for some kernal function, it will be a kind of good results, and the the might have some irrelevant features.  It's noisy. But in this case, Actually, SVM is sensitive to noise data set. So in this case, you may need to perform a feature selection a little bit  as I said before.  Right? because in the linear case, the w i with power of 2 gives the ranking of dimension of i So in this case, we may have able to determine which is the best features.",
        "week": 11,
        "page": 31
    },
    {
        "transcript": "And, here is just some weakness of SVM model.  As I said, it is very sensitive to the noise, our relative small number of mislabeled examples can dramatically decrease the performance. Why? Why it can  dramatically decrease the performance? if you have some noisy examples.  But as noisy examples mean, noisy example means what? In the wrong group. because these noisy examples can far away from your normal dataset. Right? So remember, in the SVM, we define about hot plates.  Right? This should be some lines. The fitting lines can be affected by those noisy points a lot. Right? Let's say one point far away from other points, you may need to consider that the line will fit this point.  So that's the reason why the performance can be dramatically decreased. So in that case, it means that if you have too many features, its better to think about use feature selection and reduce dimensionality.  so currently it only consider about two classes right?  All the previous slides, we just talk about binary classification.  So how can you do a multi class?  mul class classification problem? How can you do that? select one class and thought others are the rest. Yes. Exactly. I mean, this is called. 1 vs all others. This should be a typical method. So, actually, this is the most thing that you need to do.  So first you need output the arity m with the m SVMs. So, actually, you need to learn lots of SVMs. For example, you should learn svm 1 the output is equal to 1, and it can pair with the output is not equal to 1.  Right? And similarly, you have bunch of other SVM models to detect whether it's true or it is not true, which eventually we are repeatable m types so that you can get m classifier so that we can clarify m different classes.  So that is also one kind of weakness of SVM model. So once you guys implemented it, you guys will have noticed that.  What? But you now have to utilize that? The last step? Yeah. Yes. You need to do that. didn't it didn't all love the reports, just this one fact. Can you repeat the question again?  Then you just have a bunch of leftover points that become there on the left. Mhmm. So you will have m classifiers. Right? For each classifier, it will give you 1 correct class. For m classifier, you will eventaully get the m classes.  I'm saying, if there's m minus one steps, it could just take all points include m.   What where is m minus one steps?   The last one step, it is not necessary.  So you need the last step. Yes. because otherwise, it cannot make a very good good estimation. Right? As as I said, this should be 1 vs all others. You have to make totally m classifiers.   And then you predict the output of new input just predict with each SVM and find out which one puts the prediction the furthest into the positive region.  So that's the reason. to predict m times.",
        "week": 11,
        "page": 32
    },
    {
        "transcript": "And then here's about another view of binary classification compared with multiclass SVM.  So this part is about what we learned before. Right? Have you remembered this one over two w k transposed with w k the result will be bigger or equal to 0, and this is the case that we we have multiple classes right?  And this part should be similar as this one because in this case, you need to minimize all the w transposed with w that in each class. Right? This should be k. And eventually, you have k classes should this time, you should be an object function.  objective function that because this is all classes here, and for your conditions here. There's also similar to the previous one, but in this case, it also needed to consider about h class.  So it should be can have this one. so then eventually, and this is so it has a score for the 2 labels is a pie that's a score for any other label in this case.  So here is a quickly review about difference between this is a binary, and then this should be multi class SVM.",
        "week": 11,
        "page": 33
    },
    {
        "transcript": "And for the second application is that it's about a text categorization. So the task is to actually want to classify different tags or hyper text documents into our fixed number of predefined categories based on their content. For example, like, email, web search, some sort documents by topic.  So our document can be assigned to more than one category so this can be viewed as a series of binary classification problem and a 1 for each category.",
        "week": 11,
        "page": 34
    },
    {
        "transcript": "And here is another way that you can think about how to represent the text.  So Actually, it's i information retrievals vector space are also we have the vector of course representation So our document is representing our back to our index by a pre fixed set or dictionary of terms.  And this is the values of any entry can be binary or weights. We can define as a phi function here as I can get a normalization or stop words word terms, so eventually you try to convert any document x into phi x.  So now the phi x is just about your feature vector. eventually can train on this SVM model use this phi x. Okay?   So nowadays, there are many other ways to convert our text to these features. Like, you can use some BERT, any of you have heard about BERT? kind of language model. Or now even nowadays, you can use some TBT model to convert the text to some features.  And then you guys should have a chance to take that natural language process in the other parts. Right? So, like, I knew you guys will learn more about this part, how to represent the text, get some features.",
        "week": 11,
        "page": 35
    },
    {
        "transcript": "And this is as I said, you probably apply some kernal function here is a distance between 2 different document that is a phi x, come with a phi z, and this is how the kernel function, if it is valid kernal the SVM can be used with the k x Z for the discrimination.  So why should we use SVM? They have all some advantages. For example, it can apply some higher dimension in this space.  And in the if if you have, like, a few irrelevant features, you will have some good dense concepts. And for some sparse documents, you will get some sparse instances, and the text categorization problem, there should be some benefits, just by linear separate, you can get good results. However, if you apply some kernel you will get a little bit higher accuracy.",
        "week": 11,
        "page": 36
    },
    {
        "transcript": "And here, just some quickly issues about the kernels. For example, you may have some problem, choose which kind of kernels. Right? As we already discussed, there are several different kernel functions.  For example, whether I should choose gaussian kernel, or should you choose a polynomial kernel, and if ineffective, more elaborate kernels are needed.  Domain experts can give some assistance in formulating appropriate Similarity measures. You needed to choose some kernel parameters like you need to determine the sigma for the gaussian kernel.  and the sigma is the distance between closest points with different classifications.  And then in the absence of reliable criteria, application is relying on the use of validation set or cross-validation set. So that you can determine the parameters.  And for the optimization criterion, you need to pay addition to the hard margin, vs the soft margin, so a lengthy series of experiments in which various parameters are tested.  You should make sure can get that kind of optimal results in just different data set.",
        "week": 11,
        "page": 37
    },
    {
        "transcript": "And here are some additional sources that if you are interested.  You can take a look at it. For example, you are if you are interested in the VC dimensions, take a look at that. Now here's a more about the SVM, and then even SVR model, what is SVR model?  There's no SVR more. You know, SVR here, but the SVR model is the support vector for regression. So now, today, we just talk about the support vector for classification problem.  Are the support vector can also be applied for regression problem. As most you can take a look at that.",
        "week": 11,
        "page": 38
    },
	{
        "transcript": "",
        "week": 11,
        "page": 39
    },
    {
        "transcript": "And for your guys' homework, you need to implement the SVM model.  But, typically, it should be a multi class SVM model because you will, you know, use the same data set and try to classify them into different classes. So let's quickly look at some of their examples. ",
        "week": 11,
        "page": 40
    },
	{
        "transcript": "",
        "week": 11,
        "page": 41
    },
	{
        "transcript": "No. If no, lets get start today's lecture.  So, actually, in my original state of first, I will talk about I should talk about neural network in this week. However, you guys already learned neural network in my another neural network course.  Right? And just for 1 person student that Minghao probably didn't know this course. So later, I will send a lecture to you, you can take a look at neural network content.  So in this case, I would like to introduce and advanced topic. That is part of vision transformer. In tomorrow's class, I mentioned a little bit about vision transformer. Right? Did I mention? So vision transformer. Did I mention it?  No idea? So then that you remember that I mentioned it? No. did anyone remember? No. Not at all? Vision transformer is for vision task and it use a specific method to process the image. Exactly. So, actually, I introduce you a little bit about the vision transformer, in our cl;ass for image classification task.  I did not inform too many details. So fortunately, today, you guys will learn more about this standard of vision transformer model.  And then you will have another chance to implement it.",
        "week": 14,
        "page": 1
    },
    {
        "transcript": "So, let's first look at today's outline. So, give you guys a quick introduction about transformer on the history transformer.  So then we're gonna talk about more details of attension mechanism in NLP, because as I said, in the transformer original proposed for NLP problem. So next, it is adapted to the computer vision.  That is the major style that we need to discuss in today's lecture. So let's quickly go to the introduction part.",
        "week": 14,
        "page": 2
    },
    {
        "transcript": "So, remember the traditional Convolutional neural network?  What are the typical structure you have? Input all the pixel you have. So between input and output, what structure you have? Some convolutional layers. Yes, you typically have some different layers like convolutional layers, pooling layers, and fully connected layers, maxpooling layer.  So this is about typical CNN architecture you will use.",
        "week": 14,
        "page": 3
    },
    {
        "transcript": "However, in transformer model, you're more likely to do something that, firstly, we have splited the original image, a bunch of paches, and then we will treat those patches, as a token that you will get some patch and positional embedding.  Eventually, we'll apply encoder So after getting in multi, MLP part there, so that you can get classification models.",
        "week": 14,
        "page": 4
    },
    {
        "transcript": "Next, we want to talk about some details of vision transformer. As I said, the VIT originally designed for text-based tasks. It can represent an input image as a serious of input patches, like the series of word embeddings used when using transformers to text.  CNN uses pixel arrays, whereas ViT splits the images into visual tokens. The visual transformer divides an image into fixed-size patches, correctly embeds eachof them, and includes positional embedding as an input to the transformer encoder.  ViT models outperform CNNs by almost four times when it comes to computational efficiency and accuracy.  The self-attention layer in ViT makes it possible to embed information globally across the overall image. The model also learns on training data to encode the relative location of the image patches to reconstruct the structure of the image.  So, in the rest slides we will discuss more about this part, but here, this  is just a overview of this VIT model.",
        "week": 14,
        "page": 5
    },
    {
        "transcript": "And next I want you to briefly mention about the history of the VIT",
        "week": 14,
        "page": 6
    },
    {
        "transcript": "So the transformer is a type of deep neural networks that are mainly based on the self  attention mechanism.  The transformer is first widely applied to the field of natural language processing and appears to achieve competitive performance on computer vision tasks. Well, let's look at this timeline.  It's around in the tristan 17, it becomes well popular, the vision transformer. It is solely based on attention mechanism, the Transformer is proposed and shows great performance on NLP tasks.   And another very good model you guys may have heard is BERT. One of famous pre trained model convert your text to tokens. Pre-training transformer models begin to be dominated in thefield of NLP.  At after that,the gpt3 is released in 2020. As that time, it becomes very famous.  And after that you will have several other kind of models, and it based on different version of gpt model like igpt and even nowadays we have gpt3.5 and gpt4, that is released right?  So, here is about overall history of transformer. As you guys observe, that chatgpt nowadays is very popular, and this chatgpt is 1 of these transformer based model.  Now, you will see the powerful of transformer model. Right?",
        "week": 14,
        "page": 7
    },
    {
        "transcript": "So here is a high level look, transformer.  Originally transformer is used to process the sequence of data. For example, you have this kind of input. I've got Apple. Do you see some thing here? Can you see something here? The resolution is worse.  So, yeah, this poly is about input. This is the input, and this part is the output. So, basically, you have that input is about some text. There are some text. I don't know whether in Spanish or another language? Doesn't matter they are just words, right?  And then you have bunch of encoder. So after that, you will have decoder part. What are the difference between encoder and decoder? What is the usage of encoder.  Streaming. Streaming data? What about the goal of encoder here? The encoder will output some arrays of numbers. Basically, the encoder will make some input features become smaller, right?  What about the decoder here? It will get a bigger and bigger features.  For example, if you have bunch of inputs, you output should be another kind of style.  So this one maybe means the text translation, this might be another language, and the output should be the target language's translation result.",
        "week": 14,
        "page": 8
    },
    {
        "transcript": "And here, the details of the transformer components. For example, in each transformer, it has a multi head self attention layer, and the feed forward network it is also called FFN, and if you see FFN, it just mean feed forward network.  And then here is layer normalization. Basically it is just normalization layer. Then you have shortcut connection. And you remember what is shortcut connection?  Maybe another similar Technology is called skip connection do you remember the skip connection? It is like resnet right? And after that, you will have position encoding. It can help you to remember the position of each word.  And there are several advantages of the transformer. For example, you know, has long range relationships and parallelized computing, and  capacity big data and less inductive bias, and then here is some realization of it.  You don't need to understand this part currently. We will talk more at slides later.",
        "week": 14,
        "page": 9
    },
    {
        "transcript": "And the the attention is a promising candidate for university.  So in Theoretical, it's very flexible you can handle many types of data. So nowadays, the transformer can handle like nlp data and computer vision data, and some audios, some like graph data. It almost can be applied to  multiple types of data. And in practical, it is efficient mapping to modern hardware and empirically, it scales well to large models and dataset.",
        "week": 14,
        "page": 10
    },
    {
        "transcript": "So next, I want to talk about the attention mechanism in nlp area.",
        "week": 14,
        "page": 11
    },
    {
        "transcript": "And you guys might want to know why do you need the attention mechanism on here? In the sequence to sequence model it is popular for translation and image captioning or the context vector turned out to be a bottleneck for these type of models.  And it made challenging for the models to deal with some long sentences. So attention was proposed, which highly improved the quality of machine translation system.  So this is the key reason why we want attention. So later we will learn more about what is the attention here.  So, attention allows the model to focus on the relevant parts of input sequences as needed. So in the future, if I ask a question about what is attention in the transformer you should notice that the attention is used to focus on the relevant parts of input dataset right?  Questions? No?",
        "week": 14,
        "page": 12
    },
    {
        "transcript": "So we will use an example of language completion to explain the architecture of the attention mechanism.   For example, let's seek a sentence, machine learning is important because blah, blah, blah.  So, then what is the next, if you want to train a model, they should able to answer several questions like these two. They should be able to complete these sentence.  For example, It is interesting? It can help us solve real world problem? blah, blah, blah.   It might able to generate lots of sentence, right?  So, eventually you may need to select 1 of them has the best answer for it.  Which one is better? You just tell us, the second one, Right?",
        "week": 14,
        "page": 13
    },
    {
        "transcript": "Again, we will use the previous example. The encoder and decoder network.  So, first about abstrcting away from these choices, we need an encoder that we have these inputs xn, x1 to xn. So we input a sequence. So now, you can think about it is just the sentences, input sentences.  So x1 to n and generate across bumpy sequence of contextualized representations that is  Their hidden layers from h1 to n so here is use some h1 to n use some kind of decoder, right?  So once you input some sentence, you can use some hidden layers, you get some representations from h 1 to h n, or you input an x 1 to xn.  Next importantly so called the context vector c here, and so part of here. context vector. This one is called c here, it is a function of h from 1 to n and convert the essential from the encoder to the decoder.  So, actually, it's context. It's like a bridge. That can connect your encoder and the decoder.  As for your encoder, it accept the c as its input.  The c is what? Yes the c is the context vector here as input. And generates an arbitrary length of sequence of hidden states h1 to hm, from which are corresponding sequence of output states y1 to m can be obtained  So why it is the h 1 to hm? h 1 to m is not an h 1 to another h n here. Why? So in this case, why it is just h1 to hm?  Should it be an h1 to hn?   N represent the number of input.  So, currently the number n represent the inputs. It's n here. So x 1 to x n is the inputs. and y1 to ym is the outputs.  So why is the m? Because the length may changed.  So, your input is a sentence, right? Use the previous example about sentence completion.  So this is the input x1 to xn, so this is the output h1 to hm. So, actually the length is not the same, right? It's not necessary to be the same. It can be more than n or less than n. Right? So that's a reason.  Because it is decoder part. You are not required to have exact the same length of input. It should be another kind of sequences. That's the reason why you have m here, is it clear?",
        "week": 14,
        "page": 14
    },
    {
        "transcript": "So next question is what about a flexible context.  That is related to attention here. So, because in this case, what is the attention? What is the attention? What is the purpose of attention? I remember, I just mentioned, did you remember?  Graditive thoughts. Yes. Exactly. You think about this c is what. c is context vector that try to connect your encoder and your decoder here.  So, now if you want to think about the flexible, so if you want to use attention mechanism, so that you won't get more relevant features from your input and your output.  Right? You want to connect some similar parts. So in this case, you might like to use a different hi and then flexibly combined with hj, right, you try to get some thing there.  combine i from here, j from here, right?",
        "week": 14,
        "page": 15
    },
    {
        "transcript": "And then here, is about the best idea. So, we're trying to get some dynamic derived context.  What you did with them? you try to replace that, replace the previous static context vector with dynamic ci. So, previously remember, you will have kind of fixed or static context here.  In the attention mechanisms, actually, you want to develop a dynamic version of ci here. And actually this ci is derived from the encoder hidden states. What is the encoder?  The encoder is this model. Right? And at each point i during the decoder, decoder is this part. So which means that this CI is from both your encoder and decoder, right?  So here is the idea. it should be a linear combination of those different states. Right? You'll have states from your encoder h1 to hn, and then you'll have your decoder h1 to hm.  Right. So, you should able to combine all of them. So, here is the notation here. So, CI is the linear combination. It's just a sum of all alpha Ij, and hje here.  What does this mean? what is e here? So this e is from the encoder part. That's the reason. And the next later, we will talk about the alpha IJ how alpha ij is calculated.  And next if we look at this part, once we have these ci, so now we are able to calculate another state of d, d here is just about the decoder part.  This is the encoder and this is the decoder part.  This is the decoder part, and this is the activation functions, so then we're getting involved with previous encoder and some previous prediction and this CI. So then we'll talk more about this ci.",
        "week": 14,
        "page": 16
    },
    {
        "transcript": "This is the detail of how you can view the CI here. So, basically, it computes of vectors of scores that capture the relevance of each encoder's hidden states to the decoder's states.  So that means that hi minus 1 d this one is about the decoder part. One of the states in this part. So this is the decoder part.  And then we are calculated the score, basically the score hi minus 1 from decoder, and the h with the j that from the encoder.One of them from encoder and another one from decoder. You basically want to calculate the score of them.  So, it is similar you calculate the similarity, the score is like you have a dot product as that, right?  And actually, given the network, the ability to learn, which aspects of similarity between decoder and encoder states are important to the current application. So, give us some neural working.  It able to estimate some points. So that's the reason why have this. W here w is more likely the weight from your neural network. That can tie it together. The previous, the score is calculated like this way, right?  So later, you can try to update in your score by using some weight that estimate from neural network. So that is the reason you can have these score here.",
        "week": 14,
        "page": 17
    },
    {
        "transcript": "So next, you want to compute the score of weights, that means it create vector of weights by normalizing scores.  So how would you do the normalization, use the soft max. Have you remember what is soft max?  Yeah. what is the function soft max? It is a function that can help you to normalize the score. So, you have a score here, and then you want to normalize it.  Yes, exactly. So, yes here is the details. So, this is the softmax, and this is This time you should get the i and j from all in the encoder part, right?  So here is more details, you get expansion weights of this part, and then you calculate all of them so that you can get kind of probability.  Now, you can notice that the alpha ij is more like the probability. Right? So then eventually once you have it. You will able to calculate this ci.  So, our goal is what? our goal is trying to compute a fixed length context vector for the current decoder state by taking a weighted average over all the encoder hidden states. Does it make sense? Which part is the encoder? left part or right part? Which part is the encoder and which part is decoder? Left part is encoder, and right part is decoder.  This part is encoder and this part is decoder, right? Which means that you will take a weight average of all the encoder part. Right? Is it clear?",
        "week": 14,
        "page": 18
    },
    {
        "transcript": "And then here, is the quick summarization of attention mechanism.  Remember once you have these encoder from x1 to xn you will have some decoder blah blah blah, so then you have some hidden layers from h1 to hn here.  But after that you try to calculate you alpha ij, right?  So alpha ij is calculated based on all the state from encoder. then related to one of your decoder part, Right? Based on this equation right? You will calculate all the previous when you have. Then one of you have in the decoder part.  You think about your first part is about your first sentence, like, machine laerning is important because. THis is like an encoder part.  So, next you will think about maybe because it is blah blah, this is more like the decoder part.  So that's the reason you need to compare all of the previous sentences or previous states so that you can make increase of prediction part. Is it clear?",
        "week": 14,
        "page": 19
    },
    {
        "transcript": "And here's another overall overview of the mechanism again.  Let's try to go back to the first step, then try to remember it in details. So we have, for example, we have all the vectors. It would be a hidden state from h one, h two to hn that used basically the concatenation of forward and backward hidden states of encoder.   So, this is the x one to x2 here just about input and just your hidden state. The attention model computes a set of attention weight. Remember, the weight is the most important that is alpha ij but this is the most important part.   As I said, your attention is want to calculate some relevant part that is by in this weight, alpha ij, because It get along with All the encoder part, and each of them decoder part. So that's the reason why we call it. Like you can get some relevant parts of the data, because not, but in this case, you should use the t here, because not all the input would be used in generating some corresponding output.  Here is the example. This is a how to tell you how to take the score of the the attention. For example, you have 399, once you use that softmax eventually will get some probability like this. This way.  the context vector ci for the output, y I has generated using the weighted sum of the annotations. It is, multiply each vector by its soft max that pass them together. This just that summation of everything you can have it, right?  Again, the attention weights are calculated by normalize the output of the feed forward neural network described by by the function that captured the alignment between input j and output of each i.   Any questions so far?   So actually, this attention is the most important part, was a transform.   Any questions?",
        "week": 14,
        "page": 20
    },
    {
        "transcript": "Let's continue. Next, let's go try to do more details of transformer in the encoder part. As I said, it has a very important part, for multi head attention, why is the multi head attention? So previously we discussed about attention, understand. So why it called multi head attention?  can you guess?  why it is multi head?  Yes, exactly. it's similar as your number of filters right? bunch of filters. Right? So now in this case, you have h, have an h head attentions. You so called multi head attention that it It's like a number of filters. You repeat it for several times. Clear?  like lstm the transformer is an architecture for transforming one sequence into another one with the help of two parts, encoder, and encoder. But it differs from the existing sequence to sequence model, because it does not imply any recurrent neural network, like gru, lstm et cetera. And there are three major part, like a position embedding. The multi head attention, feed forward layer. And there are three important metrics here is about a q, k and v so for these three, you will see it on almost all of them. Transformer, more campus. You will see qk and v you need to remember q is what? Q is query matrix. K is what? K is. The keys matrix and v means value matrix.   For the q matrix, it is a vector representation of one word in the sequence. But, k, it is a vector representation of all the words in the sequence and see similar for the v here. It is also another vector that representation of all the words in a sequence, of the encoder v consists the same word sequence then q here,   and the attention weights, So now you can remember, you should be the calculator, something like you need to times q with k transport that divided by it should be the square root of the dk here. Those weights are defined by how each word of the sequence represented by q here, is influenced by all other words, in the sequence represented by k those in weights are then applied to all the words in the sequence that I introduce the embed here.",
        "week": 14,
        "page": 21
    },
    {
        "transcript": "Now let's use a complete example to talk about what is q k v, right? How they did a good job in the self attention. So now the self attention about mechanism in this slide.   So why processing each word it allows to look at other positions in the input sequence for clues to build a better encoding for this word.   Is it important? So once we try to look at one word in a sentence, you're more likely to get information of all the sentences, right? So that you can correct understanding the performance of the rule in one sentence, right?  So that in a step one, you need to create a vectors from the each of the encoder input. And also in the implementation, we see that those are just three metrics that you need to either generated by the neural network, or you provide some initialization of those values. These are the three metrics that query key and value typically smaller dimensions. Those should be in the smaller dimensions.  And then by mark, by the imbalance, by three matrices that we train during the training process. Let's look at this example. This part is about the explanation of what's going on with it.   For example, the input, our input is thinking machines. This is input, this is the input we have. Then we have embeddings. That is x one, x two to represent those two words, right? Represent these two words that we have another matrix for the queries at q one, q two. Then we have another matrics of case that k one and k two, and we have values v one and v two. And then we have wq here, and the wk here and the wv here.",
        "week": 14,
        "page": 22
    },
    {
        "transcript": "In the second step, as I said, you guys, we need to calculate a score remember how you calculate the score. And remember, we need to calculate the best alpha, right? It's softmax, let's see what the details of it. So it is like what we seem previously regular attention.   How much focus to place on other parts of the input sentence as we  encode a word at a certain position? Best way is more likely to a dot product of all the vector with the key vector, which means just one of the query vector. It should be k q one here, right? The problem, your key vector should be k one.   Then you do a multiplication of q one times with k one gets this problem number. And the next you have q one times with k two here, right? This is about dot product of them. Then you can represent the word we are scoring, for example, process processing, the self attension word of thinking. Is that position number one? As the first score with is a dot product of q one and k one. The second score would be the product of q one and k 2.",
        "week": 14,
        "page": 23
    },
    {
        "transcript": "Then the step three, we need to divide scores by the square root of the dimensions of the key vectors. And it is more stable readings. In the step four, it will pass the results of a soft max operation so that all the positive and to be add up to one, right? Because eventually it should be probability, it should be equal to one.      For example, in this case, you get scores remember previously. The scores 112, and 96, because these two scores. And then we divide by h and it should be this number, the squared of dk here. dk is just a dimension of your value k here. Now, when we divide by eight together, 14, is that correct? 100 divide 4 divide 8 is 8, 14, 1, and is 96 divide by 8 to get the 12. So after that you get Soft max. We'll get 0 . 88 at the probability of your first score and the 0 . 12 for your second score.  After now, you are able to do what you calculate the alpha here, right? You finish the alpha. Remember about the soft max? Previous we'll talk about here. This is in this part, we have to calculate the alpha. This is like in, once we go to that example, we finish the soft max. But this part is down, which means the alpha already have a head that is on. This alpha should be the most important part.   And then intuition is that the soft max score determines how much each word will be expressed at this position.   Does that make sense? Soft max score determines how much each word will be expressed at this position.  For example, here. For this word, the thinking is more likely to be here than the machines. Right? Because it has a higher probability. Is this better? Is that? But then and give me a bunch ofalpha you should notice that about its calculation.",
        "week": 14,
        "page": 24
    },
    {
        "transcript": "in the step 6, you need to sum up the weighted value vectors. This is weighted valu.  what's going on with this. This produce the output of self attention at this position. Eventually, remember, we have this soft max. in the soft max We need a sum up. The weighted value vectors for with value vectors should be v one and v two. Eventually, we want to sum them together in this part. And then you can look more details, but we have seen from what is done for all the words using these metrics. And they need to import positions of words and improve that using and mechanism called multi head attention. So it is a kind of multi filters, the cnn but as I said, it's like multi head is like multi filters. So then we will have more examples in our vision transformer part.  Any questions here? Okay.",
        "week": 14,
        "page": 25
    },
    {
        "transcript": "Let's try to visualize it again. This is self attention, you have access as input, and you have this, the www and you have the q k v the w is what.   This is w you have. w is about what, like weighted metrics you can get, right? Is the probably just weighted metrics that you will get from your model, from the network we have produced is www then you can get q k v the output of it. Makes sense? Good. Then we are applied a soft max. That is q q is what? query, right? K what? The keys. And your v is, and this squared root of dk it is dimensionality of the value k. then you will sum them up. You can get z here. And then in the math notation, do I see that? Attention is called just an attention mechanism? They will have that q k v as input that is equal to soft max of this problem.  Now, in the future, once you read some transformer based papers, you should notice about this attention. q k v just represent this process. clear?",
        "week": 14,
        "page": 26
    },
    {
        "transcript": "So here is the realization of multi head attention. So give any input sequence, you have embedded in each word and add a position embedded, add to the x split into number of heads and also create a learnable metrics. This w is learnable matrix, then multiply x with this. Those matrics separately. You have the q k v and the multiple q k v. So those called multi head. and then you calculate output of each of them. In each ahead, you can get a soft max, eventually, combine with this z and eventually combine all the result matrix. To produce the outputs.  We can get the eventually z here.  multi head attention allows to the model to join the attend, attended to the information from the different representation. Subspaces and hands expanded the model ability to focus on different conditions.",
        "week": 14,
        "page": 27
    },
    {
        "transcript": "Here's another realization and about the donation of the equations. So also in the family guys will remember this multi head. That just means this. Remember, we previously we mentioned each hand to be like this. This is one hand, one attention. You got q k v. This is one attention. This is multiple attention. So it should be a concatenation from the head one to head h.   Then you have the w is the weighted matrix. Again, for the each head, you should be just attention q k v that you have previous q k v here, right? But between them, you should be some weighted matrix.   Again, it's just about some explanations, perhaps this is our input, thinking machines that we have embedded each words, that split to the eight heads, and we multiply with s with x here and with some you weighted metrics, just ww here, and the calculate attention using the result q k v.  This is q k v and the concatenate, all the results, the metrics.  Eventually, once you combine them together, you will try to calculate and concatenate z here, then multiply with weighted metric w produced output of the layer. now is capital z is the output of your multi head attention.   It's clear for this to this one is clear? Good.",
        "week": 14,
        "page": 28
    },
    {
        "transcript": "Here is another realization of the high level architecture that we talk about. Previously. We have this encoder, we have the decoder parts encoder part are all identical in structure yet they did not share the weight, but each one is broken down into two, some layers. So you have still attention that will be already discussed so far.",
        "week": 14,
        "page": 29
    },
    {
        "transcript": "It's called up self attention. So that is feed forward Neural network is just several neural network layers. We have feed forward like mlp layers, right? That should be easy layers. And then the output on this part output, how about the self attention that we need to feed a feed forward neural network.  The example someone is independently applied to each position, so that's the reason you have a bunch of encoders, right? You have bunch of. 123456. You have three decoders here. It helps the encoder look at. Other words, in the input sentence as it encodes a specific word.",
        "week": 14,
        "page": 30
    },
    {
        "transcript": "The key property of the transformer is that word in each position flows through its own path? The encoder and they are dependencies between these paths in the self attention layers. And the feed forward layer. There does not have those dependencies.  And then they get the various task can be executed in parallel. You have this x1 x2 and x three. So once applied self attention. You can do a parallel computing with z1 z2 z three, then you will get feed them to feed dorward network. Right?    that is the overall process of that part.",
        "week": 14,
        "page": 31
    },
    {
        "transcript": "And then it is just a realization of two words may be much easier and dependency in the self attention layer. And there is no dependency in the feed forward layer, right? For example, one to a get a so each of them just have their own feed dorward network.  This is a reason why the self attention you can get some dependency because really want to Get some relevant features from all other word's information. But after that, I will get out from the self attention layer. So you will get some beautiful neural network.",
        "week": 14,
        "page": 32
    },
    {
        "transcript": "next i want to quickly mention about ffn what is ffn here.  yes it is feed forward network right? And then you have layer norm and you have a shortcut. Here's more information about ffn. It is just about w xi this is the more like what this is, what? ffn is what kind of layer?   As I said, it's just large because neural network, right? nlp so you have w one has a weighted matrix of a linear layer, then you have sigma as the sigmoid function or activation function. That's the reason why it's just w here.  So this is more like neural network.   Next, you will have this layer norm, and this part is what? x plus attention x is what?  Yes.  that is like, it is a shortcut. It's just like with x plus attention x again. Even your attention get no information, we can at least get some little information, right? So this part refer to this shortcut on. Good. Any questions about the three different, important part? No. Awesome.",
        "week": 14,
        "page": 33
    },
    {
        "transcript": "So then this is about the decoder part. decoder is like opposite of the encoder. decoder for generating sequence data. Like, for example, this decoding time step from 123226. They will output something. So give this kind of input to have a decoder. And then you have this kind of k v, blah, blah, stop.   And once you translate it to some decoder eventually will get some output as like I blah, blah, blah, blah like that. Sentence to them. It able to generate some tasks there.",
        "week": 14,
        "page": 34
    },
    {
        "transcript": "Up to now, I would like to say, we already cover the most important part of attention mechanism in nlp part.  In the next few slides, we were trying to discuss about the vision transformer that is manual content of state. I think we could have like by the 10 minutes break out that we will talk more about the vit model. Okay?",
        "week": 14,
        "page": 35
    },
    {
        "transcript": "Here is a realization of the vit model again. left part is about over all scheme and the right part is about details of transformer encoder part.   You have this patch the embedded patches. This is so called embedded patches. That best means that you will reshape your images to several patches.  For example, 16 by 16 is loss of 16 by 16. We have 9 16 by 16. This is number of embedded patches. Then you have some normalization layer so that you have after that you will have this multi head attention that we just discussed, right?   Because this is not because you have several different patches layer so that you will have this all different kind of occasion. You can go to this multi head attention. So after that, you will apply some kind of shortcut, remember? And each multi head will apply them shortcut here so that you will not lose some information.  So after that, you will have some layer norm and have the mlp layer. And also you have another second shortcut. So you think about overall of the transformer blocks that can get some classifications of these encoder part.",
        "week": 14,
        "page": 36
    },
    {
        "transcript": "Here are three most important layers in the vision transformer.   So first of all is multi head attention layer. Also named msp this layer concatenates all the attention outputs linearly to the right dimensions. And many attention heads help train local and global dependence in an image,   And you have much layer perceptrons, also called mlp layer this layer contains a two layer with gaussian error linear unit gelu this unit is there, and you have layer norm. And this is added prior to each block as it does not include any new dependency between the training images.   And this thereby helps improve the training time and the overall performance.",
        "week": 14,
        "page": 37
    },
    {
        "transcript": "I remember we talk about the residual connections are included after each block as they allow the components to flow the through the network directly without passing through a nonlinear activations.  In the case of image classification, the mlp layer implement the classification head. It does it with one hidden layer at the pre training time and a single linear layer for fine tuning here.",
        "week": 14,
        "page": 38
    },
    {
        "transcript": "Vision transformer of vit architecture. Now in the right part is more details of it. First, I understand explain the image patches and whether the image of patches and create a lower dimensional linear embeddings from these flattened image patches, and then including some positional embedding so that it will not are never mixed up that created a sequence as an input as that of other transformer encoder.   And then you will have pre trained vit model with the image levels, which is the body supervisor, because that maybe you can fine tuning because the down stream dataset does that for your own data set, especially you can use it for our that cow teat classification.",
        "week": 14,
        "page": 39
    },
    {
        "transcript": "And the next is try to look at our complete example of the standard transformer on patches. So given you an image see that guys, you want to implement the vision transformer model.",
        "week": 14,
        "page": 40
    },
    {
        "transcript": "As I said, the first step you need to, we split it to several patches here. It is an input patches now is a shape with into three by 16 by 16. So why it is 3, 3 means what? Three channels.",
        "week": 14,
        "page": 41
    },
    {
        "transcript": "How do you reshape it into those different patches? and You will get a linear projection to d dimensional vector, or h. patch you will produce to d dimension. For example, this is like a 3 by. originally, it is that 3 by 16 by 16 next, we are converted to d dimension just for the d d d of this like. How many do you have? Like? 9 times with the d here, right?",
        "week": 14,
        "page": 42
    },
    {
        "transcript": "After that, you will try plus with the position embedding, with the d dimension vector per position. In the each d you're more likely to place another position to be d plus one, in that case, right? You can see each one of it has another one.",
        "week": 14,
        "page": 43
    },
    {
        "transcript": "Out of that, you should be similar as nlp transformer stuff. So then you can get some output  of this self attention, you can get some output of the vectors right? Similar. In this case, then you will also try to look at the immediate classification you should be soon. Must be specific. Some extract input, for example, in the past, transportation tokens, the d dimension, and then there.",
        "week": 14,
        "page": 44
    },
	{
        "transcript": "",
        "week": 14,
        "page": 45
    },
    {
        "transcript": "So after that, you can get a linear projection to c dimensional vector to try to predict the classes. So you have c different classes? Right?",
        "week": 14,
        "page": 46
    },
    {
        "transcript": "And then you will get a computer vision model with no convolutional. Is that right? Yes, no. Yes, or no answers? Yes or no? Is that correct computer vision model with no convolutions? Yes. So as assume you guys don't know why not?",
        "week": 14,
        "page": 47
    },
    {
        "transcript": "So actually, we will have some convolutional layers not quite, for example, with a patch size p first layer is conv2D. We use conv2D to get some more features, right? And convert p to p and the three to d than with stride size of p here. So actually, we have some layers there",
        "week": 14,
        "page": 48
    },
    {
        "transcript": "And especially about in mlp transformer, it stakes are one by one convolution and do you remember one by one convolution. Inception, what is the purpose for 1 by 1.  reduce dimension  reduce what dimension? Yeah. Channel, you should be reduce the channel dimensions, right? That's good.",
        "week": 14,
        "page": 49
    },
    {
        "transcript": "In practice, we will take 24 by 24 as input images then divided By 14 by 14 grid of 16 by 16 pixel patches or 16 by 16 grade of 14 by 14 patches. That matter you can choose. Each attention matrix had like, according with the power of all here, you can get so many actors like to tell about find the 150 kb to get it. If it is more, it should be, you will get that you have a little bit more heavy.",
        "week": 14,
        "page": 50
    },
    {
        "transcript": "So if you use 48 layers, as encoder and the 16 header per layer, and all attention metrics should be around this, like a 112 megabyte, or 192 megabytes.  So after now, it's still not that big, right? Should be reasonable. However, you be in increased number of layers or number of heads, you will get more and more number of megabyte or even gigabyte of the model.",
        "week": 14,
        "page": 51
    },
    {
        "transcript": "And the next part we want to briefly mention about the vision transformer results compared with the resnet, right? Let's say, what's the performance of imagenet.can you see it. Here are different colors. This party means this vitl first of all, what are those central? , sixteen, forty. What are those numbers.  patch.  Yes, it is patch size. 32 is 32 by 32 and 16 is just 16 by 16? So those are patch size.   Let's look at the details, but first of all, in the bottom is a lighter, blue, like the blue, the color. Maybe this should be, it's vit l larger with 32. And then this should be vit model. This should be in this vit l 16. And this one should be vit b with 16. And this one is the resnet part.  Now, you can see it is image net model. It seems which one is better, which one is better?  which one is better here?  see that performance here, which one is better, which model is better here?  resnet right? It seems those different types of vit model is not as good as the resnet model, right? However, later we have remembered in the imagenet, we have around 1 million images and 1,000 categories. And later has another big dataset imagine 21 k which means that you have 21 thousand categories. It should be a much bigger data set. And then you have jft 300 million. There should be a kind of internal data set from google that you have like 300 million labeled images.   Now, you can see that in this case, it seems this model is better, is vit large with 16 patches. It is better, right? And then if you even train a very big model, it seems this might get much better. What does this mean? This means that this phenomenon represent that your vit model more like to be trained on more images like if you train with more images, it more likely to get higher accuracy.  They said if you train your model use, imagine 21 k then fine tune on the imagenet. You're more like, you will get a high performance than resnet model.  And similarly, you will, if you train your vit use this jft model, jft and 300 million data set, you will also get a higher performance on image net model. However, for those parts, they actually trained on some gpu but for the vit model is actually around months train on those different data sets, which means that those vit model are really expensive, right? You really need gpu to train them.  And so here's just a quick realization of the results, but you guys may want to know whether can we design some vit models that have better performance? Then resnet model. Can we do that? Can you do that? Yes or no? No. The answer is yes.",
        "week": 14,
        "page": 52
    },
    {
        "transcript": "someone already develop some models that is better than resnet model. For example, this t two t vit model and this very big vit model, it should be a little bit performance than restnet model. It's just different ttricks with them, which means that this is more like researching will be the upon the eventually get a little bit higher performance.  any questions about this one.",
        "week": 14,
        "page": 53
    },
    {
        "transcript": "So what are the attention maps of vit this attention is what.  You will get what. You are more like get the most important part of image or the classification, right? As you can see in the left part is original object. This is party will show some area that is very important for mega practical prediction. Right? Those slides should be first for Minghao. But for your other classmates, they all of them should have saw it before right? And remember, no.  have you seen similar picture before.",
        "week": 14,
        "page": 54
    },
    {
        "transcript": "Here is more details of the attention map, like, for example, in this case, we incorporate the probability in each of the prediction so that you will notice about which part you will get the a higher accuracy. I'm not right, for example, just establish this part and remember what I can get a higher accuracy. This is some part of that are very important for many predictions.  Any questions about this attention map? No.",
        "week": 14,
        "page": 55
    },
    {
        "transcript": "And then it should be you guys homework 12.  Now you guys need to build vit model. I know it will be a little challenge because we are need a lots. I wonder so that reason. I put some kind of tutorial guys and look at that. This is that you will train your cow teat data set. Does that's build for many times, right? Then you try to build, you may have volumes develop software that in the how I think Minghao have some questions about data set. And the software. So for you, you can ask the help for your roommates. Pinxue please tell everything for him about this What is the dataset how do you use it? tell them about that?    But now let's take a look at one of the implementation of this model. So you guys will have more idea how you develop this vit",
        "week": 14,
        "page": 56
    },
    {
        "transcript": "So now you have another chance. So to look at my summer project in this summer. So I got see that those some three projects in the summer you guys can work on, but I cannot take to my students. I can take around five students. That's the first one is already taken by your classmates. The first one is gone. Now you still have a chance for your second one across video understanding and few shot cow teat video labeling and segmentation of it, in the each of the project I need to.   So you have two in the first class video understanding and you have another two is that cow teat labeling stuff. This one should be a pay. It is a pay to come out internship. But it is not a lot. It should be 10 hours, a week.  So next month for 10 weeks in the whole summer, if you're interested, please send me an EMAIL and include your CV so that I can take a look. I will select kind of four of your guys as briefly mention about the second one. So the second one is about the course video understanding. So basically, it will from the course, from our machine laerning course, our machine learning course. And in this case, it should be develop not developer. It should be good for those people who want to some online learning. Right? So nowadays, for most online learning, there are just some videos upload all the record videos, right? In this project. We try to provide some interact.",
        "week": 14,
        "page": 57
    },
	{
		"transcript": "",
		"week": 14,
		"page": 58
	},
	{
		"transcript": "As you can see here today, we will talk about ensemble learning here.",
		"week": 15,
		"page": 1
	},
	{
		"transcript": "So here is an outline, first I give you guys a brief introduction of what is and ensemble methods here, and then we'll talk about the 3 popular ensemble methods bagging and boosting, and stacking.",
		"week": 15,
		"page": 2
	},
	{
		"transcript": "First of all, ask yourself a question about what is the goal of supervised learning. You guys have learned so far. Right? So where is it goal of supervised learning? Do you mean that you want to predict some classes?  Yes. That's 1 goal of supervised learning. About others, what is the goal of supervised learning, you want to do what? Try to save the model to predict your label. Can predict your model? Big the label. Your target. Yeah. For a little type of target of probably new data. Right? But our key goal is that we want to minimize the probability of models’ prediction errors in the future data-wise, so basically, once you get some predictions you need to make sure that you have a minimum error. Right? Otherwise, feel free to make predictions, right, and our goal is to have the highest accuracy. And as there are probably two competing methodologies, first one, we need that, you can try to build one really good model. So, this is an additional approach. Another one we build the many models that inherit your results, and this is the related data. But we want to discuss that about the ensemble learning here.",
		"week": 15,
		"page": 3
	},
	{
		"transcript": "Here is the rationale. Remember about the theorem, there's no free lunch theorem there is no algorithm that is always the most accurate. And to generate a group of base learners that combined higher accuracy. And then each algorithm makes some assumptions that might be or not be valid for the problem at hand or not. And the guys noticed that for different learners, they probably use different parameters. But how different other properties that you have different algorithms, you may try and try different hyperparameters, and different representations. This is really related to the different modalities. Such as maybe real images or some text here, and then you may have different trends in datasets. Right? And then you probably have some different sub problems for you.",
		"week": 15,
		"page": 4
	},
	{
		"transcript": "So here is the about ensemble philosophy. Investigating it should be simple. We're first of all to be the many models and then combine them. And that's the only through averaging we get at the truth, which means that we already tried it. First, average it and average it also results from different models to them who were seeing whether we can get a fuller result now.",
		"week": 15,
		"page": 5
	},
	{
		"transcript": "Has another general idea of the ensemble models. So first up, we have the original training data set. Right? And then, the first step we're gonna try to create some multiple data sets. Should it be like a subset of the original data set or it's like a random split? Another random split is about random reordering your original dataset. So, yeah, in this case, you will get A D1 D2 to DT here. And then in step 2, you try to view the multiple classifier, and then each a classifier has trend to buy, which is the origin. There won`t corresponding dataset here. So, after that, we will have a bunch of classifiers from C1C2 to CT here, and in the last step, you guys need to combine all these classifiers together so that you can form a more powerful classifier. In order to improve your accuracy of the model. Student 1: Why? Why can we create another typical data? Professor: It is not that typical of the data, but it should be like a subset of your dataset. Student 1: Why can you train on the whole data? The idea classifies with different classifiers, a little bit of different data sets. So that you can find a different variance of each model. Yep. That's a good question.",
		"week": 15,
		"page": 6
	},
	{
		"transcript": "Otherwise, you guys see that you whatever in life, the kind of challenge or other kind of challenging, but notice that here is an example message. Yeah. It's an ensemble method typically, we are achieving a higher accuracy than another single model. And this is also one reason why ensemble is so popular and important too nowadays.",
		"week": 15,
		"page": 7
	},
	{
		"transcript": "So, now let's start with our concrete example. Suppose that you move to a new place, and then now you want to find someplace you need. So how do you find a good place? And there are several options or solutions. First of all, you may want to find out about food, particularly who is really good at his or her work, and then see if he or she has any recommendations for the restaurants in your area. Right? The second solution is to add a can, try to use Google, and randomly look at one user's review for a couple of restaurants. And your service solution is to try to use also use Google, and then look at how multiple users will use it. Or a couple of white runs, and then try to average their rates. So, in this case, so you won't get this out of you. View of all different reviews. So now you'll mind which 1 will probably give you a better option here. What's your solution? You'll prefer. 3. So we're going to see if I have some on top of all of those search engines 3.",
		"week": 15,
		"page": 8
	},
	{
		"transcript": "So, let's try to briefly and analyze it. So, in the first solution, we both notice that the food critics are in general much more accurate, but if it's difficult to find a good foot critic. And maybe the food critic you found was a strict vegetarian, and you are not. In that case, the recommendations from the food critic will be biased. And then in solution 2, on the other hand, if you try to just randomly pick up person's a star rating for a restaurant on the internet is much less accurate. They're but it's also easier, easier to find. Right? For the last solution, you have found that either collectively can be just the right amount of your accuracy, probably your need, and it is easier to find them overall over the Internet. And, essentially, it is a mess biased, since the users who have the rate data, and restaurants have come from various banks Right. So, in this case, you probably noticed that maybe the subscription fee can be a good option for you. So now solution three probably uses an idea about, the so-called ensemble of a method because you can consider how we all, review from different backgrounds. Right?",
		"week": 15,
		"page": 9
	},
	{
		"transcript": "So here is another example of weather prediction. Oh, is this the way of prediction? Let's say now with that, hey, as I just can now I probably maybe sunny, cloudy, sunny, cloudy, cloudy I think those are the real. Less, let's say, 5 different models try to predict your weather. Having in the first 1, this is, this is prediction. I would tell you, like, how many wrong predictions are here. Three, right? It should be easy to observe by experience. Wrong predictions. And the similar idea is the prediction from model 2, so how many wrong predictions are here? You probably get another 3 here. Right? What about this one? How many? 3? 3? What about in this case? You have to just get two wrong predictions. How many? Here. Here. So now the difference here is that we -- if we can see those combinations of all those predictions, it is more like what.? But like a majority votes. So, in this case, let's say, this prediction, what is the majority of prediction as well?  It's sunny or cloudy. Right? It should be this way, but what about this one? Sunny. What about this 1? Sunny. How about this 1? Should be cloudy here. Right? What about this 1? Cloudy. Cloudy again, what about this one? Sunny, and this sunny. So now, you can compare the similarity and the majority vote of all 5 different models. So now you can tell that is exactly the sample. So now you can see the power of the ensemble methods. As you really want to compare with all the existing different models so that you can combine offhand. Select the majority of those roles, all the averages of all the existing models, so that it can tell you the highest, accuracy amount of just different models. This is a general idea with okay. That's good.",
		"week": 15,
		"page": 10
	},
	{
		"transcript": "So, here are some intuitions. So, this is just about a majority vote. So, let's suppose that we have 5 completely independent classifiers. And if accuracy is 70% high for each. And eventually here Accuracy of all the probabilities of 5 different models. So, eventually, we'll get an accuracy on industry 83.7%, majority vote accuracy. Let's say, we have 101 such classifiers, but eventually achieve the accuracy of 99 percent majority vote accuracy. Notice: that there is like a binominal distribution here. The probability of observing × heads in a sample of an independent coin toss, wherein each toss the probability of heads is p. So, from this experiment, you can notice that we could include all different kinds of models. And you met more likely to get a better high accuracy. Right?",
		"week": 15,
		"page": 11
	},
	{
		"transcript": "So next, we try to quickly review about whether we have not done previous, that is about the bias and the variance. So, it's a left behind. So, you see this party is more like this way is underfitting or overfitting. It's on the underfitting, right? And this part is more about the overfitting area. Typically, if the left hand you just have a kind of underfitting, you're more likely to have high variance, and you have on the other hand, if it is around like overfitting, you're more likely to have a lower bias and a high variance. In this part.",
		"week": 15,
		"page": 12
	},
	{
		"transcript": "So, here, it's a better realization of it. Here, it's even different colors for these lines. So, this red 1 is the for bias. And this green one means error from variance.  This blue one means the error observed. As similarly, the level part is underfitting. The right hand, it is overfitting. Now let's say, what the details of the so-called bias or variance, so in the left hand, it is larger by a bias, and it is a small variance, the small variance is that your data sets are probably close to each other. As you can see here you go. But the answer is more like close to each other. However, since this test setting it's only concentrated either on this small problem. So, it has a larger bias, because it is only focused on this area, but it can grow our other apart. However, in the right hand, they should have, it has a smaller bias because it can consider also around this area. Other years it has a larger variance. Let's see. So, in this case, you'll have a larger variance here.",
		"week": 15,
		"page": 13
	},
	{
		"transcript": "And then here's another all the patients here that, for example, we probably have different universes like the universe of one, universe two, universe three, and correspondingly, they are widespread around this kind of a circle, which means that in a complex model, we have a large variance but it can't separate all of them, reliably. And now we can have everything that can complex the models to reduce the bias, and let's say we can average it. Also, have a start here, they should be close to you and have had it here. Yeah, have had it is so common. Ideal case. And this is the average size of all our observations, also called all different the universe there. Let's say, if we try to evaluate altitude, all these different predictions, it's more likely to concentrate on the center-right. And the center is the ideal case that we want to achieve.",
		"week": 15,
		"page": 14
	},
	{
		"transcript": "So, for next up, we want to talk about the first type of ensemble method, which is about bagging.",
		"week": 15,
		"page": 15
	},
	{
		"transcript": "The full name for bagging is about it's got bootstrap aggregating. So, in the future, if someone asks the full name for begging, you should answer that it is just a bootstrap aggregating. Got it?",
		"week": 15,
		"page": 16
	},
	{
		"transcript": "And then there is the main assumption. So, combining many unstable predictors to produce an ensemble, stable predictor. Unstable Predictor: small changes in training data produce large changes in the model. Some more stable methods like SVM, maybe Nearest Neighbor. never, and again, it's a bug. We have some variable sizes. It is probably like molecular nonparametric models. So, camo and function if you use appropriate predictors. For example, if that is about a decision tree, you probably will do that.",
		"week": 15,
		"page": 17
	},
	{
		"transcript": "And here, the problem is a bagging algorithm. We get the data set of d, which is equal to X1Y1X2Y2, until we have the n examples from xn to yn. Then, in the bagging, it exposes that it would have, totally have, and n here, then here's the photo from 1 to m, and each m, we will Obtain bootstrap sample D. From the training data D, here is more likely your random shop, your data set, so that you can get a DM here, and then build a model Gm(X) from bootstrap data Dm. So, for any given DM, you will bootstrap by GM here.",
		"week": 15,
		"page": 18
	},
	{
		"transcript": "So, let's say if your problem is a regression problem, so you're more likely to GET the average of all the predictions here. Right? So, let's say if there is a classification problem, you might get it to final, levels by using a majority vote of class y outputs. There should be the origin of all those G1(X) to GM(X). Right. Okay.",
		"week": 15,
		"page": 19
	},
	{
		"transcript": "And then there are more details of bagging. A bootstrap sample of N instances is obtained by drawing N examples at random, with replacement. On average each bootstrap sample has 63% of instances. Encourages predictors to have uncorrelated errors. This is the reason why it works So; you want to just push together around the original data set, and then a bunch of weak classifiers.",
		"week": 15,
		"page": 20
	},
	{
		"transcript": "So, then you will get some bagging details here. So here we will have m around like 30 so we will have like 30 different classifiers here. And then use the validation that I can pick up and there’s a model Gm(x) needed to be an unstable, and usually full-length (or slightly pruned) decision trees. We can try it. We try out the decision tree for the begging method. A variance, the average of variance is equal to the variance of each model then divided by n, which means that we use back introduce that, we're more likely to reduce the variance of the data set, right? Because we have these kinds of n different models, I can add the details here. So, in a bagging method, we decreased error by decreasing the variance in the results due to unstable learners, and algorithms (like decision trees and neural networks) whose output can change dramatically when the training data is slightly changed. That's true? If we change a little bit about your training data set. Your final output can be very different. I can increase classifier stability/reduce variance.",
		"week": 15,
		"page": 21
	},
	{
		"transcript": "This is the power of bagging, and here is the more about explanation of the process. For example, in this case, you have n training examples, you example with replacement, Set1, Set2, Set3, Set4. I mean, in each subset you will view train, new models. So here is a function of function 2, function 3, function 4.",
		"week": 15,
		"page": 22
	},
	{
		"transcript": "You're more likely to use a trend of functions so that you can make a prediction as Y1, Y2, Y3, Y4, for that you can get an average or you get a majority voting as the weakest cost, instead of a wealthier prediction, right? So, this approach will be useful, especially, while your model is very complex, they can evolve, which means that it is easy to overfit, and then in this case if they can propose an appropriate address. And similarly, you can test out the decision tree, whether this function is useful or not.",
		"week": 15,
		"page": 23
	},
	{
		"transcript": "And again, he has the overall picture of the bagging. You should have remembered about how begging works. So, let's go through it again. In the first step, you need to create N subsets from the original dataset, one for each weak model. And then you create n subsets. Let's say, now you create 4 different subsets of original data. And 1, for each weak model, this is parallel. For each subset, if you need to train our weak model, and then you see, that's going through step 2, try each weak model of this with an independent subset in parallel, in parallel, transition. So now, I can get 4 different weak models here. From weak model 1 to weak model 4 here. So, eventually, in stage 3 either then you go to test the stage. So, predict from each and you have a prediction from each weak model here, then perform the majority, but so that you can get as a ton of predictions. Right. So actually, for this package, you should be suitable. What's the best thing about this is that a way of predicting and exactly applying this kind of strategy. Right? Any questions about this bagging method? No. Okay.",
		"week": 15,
		"page": 24
	},
	{
		"transcript": "So now we have a problem of we also want to reduce the bias also we want to decrease the variance. Remember in the bagging, we already discussed that and it can reduce the variance on the model, right? So, the back end reduces the variance by an average, but the back end has a little bit effect on bias. So now can we average everything and reduce the bias? The answer is yes. Now we are trying to talk about the second type of ensemble method is boosting.",
		"week": 15,
		"page": 25
	},
	{
		"transcript": "So, let's talk about most boosting here.",
		"week": 15,
		"page": 26
	},
	{
		"transcript": "So, here's the main assumption of boosting. Let me see. The are trying to combine many weak predictors (e.g., tree stumps or 1-R predictors) to produce an ensemble predictor. The weak predictors or classifiers need to be stable.",
		"week": 15,
		"page": 27
	},
	{
		"transcript": "And here's about another overall flow of the boosting here. So now you'll have some training samples. You are done. You have a laptop. We could classify from tier G1, G2, and G3, but in this case, it will be more likely to employ for each classifier, you needed to define a wave of it. And this is the sequential trend. Remember in the beginning, we talked about it is parallel for different models. Right? But for boosting is more like sequential training. Once you finish the first one, you can put in the second one. So, here's so policy, then you can arrive. Eventually, you're more likely to have a combination of all those different classified GM here, alpha here, just means you have about is more like how weight is here, and this is the sign function. So, what is the sign function here? Well, we will review it anyway. But now let's continue. So, each classifier Gm(X) is trained from a weighted Sample of the training Data.",
		"week": 15,
		"page": 28
	},
	{
		"transcript": "So, let's view it again, also the boosting is also them. And the boosting is just kind of a different name. And for each small classifier, we have H1(X). So here, typically, I will write it as prime S' = ((x, y, u1,), just as I said, and the u weight of linear combination, a - weight of linear combination. So, weight output.  ow, similarly, you have another classifier as H2(x). So, yeah, you have another new weight. And then, you probably have a bunch of other kind of classifiers, let's say, you have to catch Hn(X) here so that you can have another classifier there. Stop when validation performance plateaus (will discuss later).",
		"week": 15,
		"page": 29
	},
	{
		"transcript": "And again, for the boosting, for each predictor is created by using a biased sample of the training data. For example, and you have lots of those with high errors are weighted higher than those with lower errors. So, you all this means that you all you want to give us some kind of more weight to choose one of the predictions. Also, is that the difficult instances can get more attention this is the motivation behind the post. Right? As much as we have focused on some difficult instances in the next few run of other classifiers, we can get some good or bad predictions for those different, difficult instances there.",
		"week": 15,
		"page": 30
	},
	{
		"transcript": "Here, it's about the background location. You should notice that about I(s) function is defined as I s is equal to 1. If x is true, then I(s) is equal to 0 otherwise, which means that was a prediction spread not right. And there's a log function just there's a logarithm.",
		"week": 15,
		"page": 31
	},
	{
		"transcript": "And the here is about, it's a about adaboost algorithm. So, let's try to go through it slowly. So given data D={(X1,Y1),...,(XN,YN)}. Our first step is probably like you need to initialize your weight. That's w =1/N, I=1,...,N. Which means that it should be equally important when you have 8 examples, there's 1, divided by n. Then from different classifiers from small m, that is equal to 1:M. When to your capital m here, you will try to fit the classifier Gm(X) that is either in negative 1 or 1, if you can't the data use a weighted WI, which means that your Gm(X) should be a binary classification. Right? It should be is negative 1 or positive 1. And then you needed to calculate the error. And notice that you needed to remember a little bit about this, like that was, it's an error. It's calculated by the nominator. The first of the weight, then comes with the I(S). You needed to check whether your prediction is correct or not, right? Because then you get the sum of all the weights times ways, whether that is correct, prediction or not. As I divide by the whole of weights here, so you can get heavier than this error, so called epsilon here. So next that you're more likely to compute as an alpha, So the alpha is defined by a log, 1 minus error and it's just this 1, let you divided the error. Typically, we all have 1 over 2 as it is constant. But since it is logarithm, you can try to go 1 over 2. The next few slides, when we talk about some calculation you guys need to remember how to use it, 1 over 2 here. And then in the last step key, you're more likely to update in your weight. Right? So, w t again, you can use double t times with EXP, what is EXP here? It is, like, exponential map, but there are, essential here. So that is alpha, we get this alpha here, and I is just over there whether it is a correct prediction or not. Right? And in this case, you can try to update whether you can get good results now big. So that's what I put in the next slide.",
		"week": 15,
		"page": 32
	},
	{
		"transcript": "So, once you have the previous algorithm you eventually try to the other boosting models. You try to aggregate in all the previous sigma m and its alpha. This is a side function, so remember a side function is more like in this way, right, there is an empty one or what, or it is for your 0 here. So, it's more like combining all the different classify together. So then, you can notice that the hell of those things is not usable regression. Right? It's not your regression. It is really about a classification problem.",
		"week": 15,
		"page": 33
	},
	{
		"transcript": "So next, let's try to realize concrete of all toy example, which is very important to hear. Let's say you will have 3 different weaker classifiers the means that you try to use decision tree, classifies another example. Here is the example of positive 1 or negative 1. You'll have how many positive 1 here. You'll have 5 positive 1 and how many let's take 1. You'll have another file. Right? So, in the beginning, lesson, we have Level them all as 1, 1, just 1 here. So next, let's say, remember about in the beginning what is our first step? We needed to initialize our ways, which means that WRI is equal to 1 overhead. Right. Which means that you just get a done. 1, divided by the whole number of examples. Same example, what is the initial weight for each part? Well, over what? 5 over 10, right? So then, you just get a 0. 1 for all of these 5 different examples to write. So, let's say we have a first classifier, I have f1(x) here, which means that if we are in left, f1(x) which really is as a positive, everything is right hand of the f1(x) we're seeing about is negative. Which means that we have got some predictions of using the f1(x) here. So then, upon that, this two predictions as positive and others are not positive on the predictions. Right? In the next column, next column in 1 I could calculate is the error. Does it have a means what? Wrong predictions. There are wrong predictions here, right? So, for the first 1 level you combine, you try to compare the ground truth, so why here is the ground truth and the predictions is here. So, upon that, they are the same. So, the error is 0. And similarly, here, the prediction is probably 0. But I found that there are some predictions that they are not agree with each other. Right? Which means that there are some wrong. So that will be given. There's 1 here, 1 here, 1 here. So, you get a three 1 is missing value. E = (0.1*1+ 0.1*1+ 0.1*1)/1 = 0.3; a = ½ log(1-0.3)/0.3) = 0.42; If correctly classified: W=w* e-d = 0.1* 0.65 = 0.065; If wrongly classified: W = W * ° = 0.1 * 1.53 = 0.153.",
		"week": 15,
		"page": 34
	},
	{
		"transcript": "Then let's say you have another classifier; it should be your classifier f2(x). Let's say, if we use is our left hand, it is more likely to have all as positive, and then even it is in the right hand, all our predictions are negative. So, in this case, you know how many wrong predictions are getting here. You have 3 wrong predictions again. Right? Next, you will notice how you calculate some. This is the epsilon and alpha again about that. Remember previously in this case, we already calculated about this new weight, right? This is a new weight 0 point 0155 and a 0 point 153. So here it's becoming as new weight. This is new weight. Can sum up what is the sum of it, what is the sum, the weight? Now, please verify, but it is equal to 1 now, accurate as this one. This is the new way to develop, from previous example. Right? What is it somehow with this column? It's less than 1. What is a rough number? 0194. Like this is a rough number right. So that in the case, you will notice that why it is important to write. So, another way, you may able to normalize the data, how to normalize this weight, how to normalize it. Any idea how normalizes it? Yes, you need to divide by the sum of all this power so that you can calculate then, so if this is normalized, you try to sum them together, you should get a 1 here in this case. So now, the next step is also, similar as before, you try to calculate as a weight of the original, another object that could be new, normalized the weight. So now tell me how you calculated this. It's the e here. What is the result of what you see based on this new weight. Remember, previous, we calculate devices to popularize this function right. As a function, should be So in your weight, time always error. So now in this case, what is your new epsilon here?  Now remember, we have some wrong predictions. Should it be some 3 negative. Right? So, in that tube, 3, 3 neck tubes should be corresponding in this error. Right. So, other 3 negatives. What is the e here? 0. 2S3. How can you get number? But what about others? Did you know how long it does this epsilon here? Oh, you got on epsilon this prediction. So, calculate error. Yes. We already calculated it.  Here are 3 wrong predictions for the business 3 are wrong. What is the final answer for d here? Now you can lose it. Right? But about others, you know how is the e here. So, on the what? 0.195. Okay. Is it difficult? I'll say is that you did not follow-up by the key thing is that, let's say, with one focus under the 3 predictions, worried about the normalized weight. It should be just 0 point 071. But, so now we have 3 times. It should be 0 point 071 times with 3. That's what you'd rather get an answer. Right? You know how did you get it here? Do you get an answer? How we get it up? Wait too here. No? No. We just have there's a 3 wrong predictions. Right? So, it's a 3 out of 1. So, these are the new, these are the 3. So, we need to focus on this, this is the weights. WIs each weights should be 0. 71. And here is how we calculate it. It should be in the first of mine, 0.71 times with y, because the guy is buying 1 prediction. That price another 0 point 071 times what, that price 0 point 071 times 1. So, you went to divide by 1 because you already know So you can get a 0. 21 as you have someone here. Right? You got it That's right. What about our online students? Do you get it? Yeah. Yeah. Okay. So, then you have park in this episode to this alpha so that you can get this number So you actually get a 0.1515 as your alpha here. And then, eventually, we'll gather this phenomena. You update the graph so that in this case, you have epsilon 2, is equal to 0. And the other 2 is equal to 0. 22 that are already calculated. So, you eventually can try to update the original picture here to remember, previously, we had this as very big problem because these 3 are the wrong predictions. Right? And, in this case, we have another typical big numbers because it has events are wrong predictions. Right? So that in the next stage, we are also focused on those 3 different wrong predictions here. Remember, when we talk about the we calculate is that if so and how far the next step is, do what. You need to update what. The weight. Right? Remember goes through this screen. Again, again, it's just how we're updating this weight.",
		"week": 15,
		"page": 35
	},
	{
		"transcript": "The next slides will really talk about how we calculate this weights. And this time, is your guys' term. So, let's take about 5 to 10 minutes break. Once you've got to come back, let's calculate. By you guys, tell me what is new weight and normalized weight. Let's see the answers you should focus on this part away. Then we're going to let's just integrate calculate wrong predictions, you should notice that those 3 are the wrong predictions. The middle 3 wrong, the first 3 should be right. That's great. And we're gonna talk about it. You know, what's going on? So, we have more stuff to do, I think we can get study. Well, now that's your highest time. Try let's try to calculate. Remember by the weight. It should be if it is correctly classified 0.52, it should be w equal to w times e^-a. So that here, I already calculated for you guys. You can just use 0. 5 for this time. And then for the running past so then for wrongs classified t should be w equal to w times e^a, and those are 3 here. I pointed to this 1 just plus the 3 right. Just Those 3 out of 1 predictions. You can think of those 3 out of 1 predictions.",
		"week": 15,
		"page": 36
	},
	{
		"transcript": "So, remember, we have 3 different the classifiers. So now let's discuss about the your final classifier, that is f3(x) here. Let's say, if it is above the f3(x), which relates above positive, everybody then below the f3(x), who actually is negative. Now you can see some of how many wrong predictions we have with f3(x), how many do you have? We have another 3, wrong predictions, right? And those are 3 predictions not corresponding to previously that we never touched, let's say, and those members, this is about 1 is here, and the 2 is here for those 2 parts of ours. It's 1 metric on the wrong right. That's why we are realizing again. So here, we have those 2 are wrong, That's why this negative running. We needed to calculate the E again. Right? So, in this example, what is your new E here? Your next 1 here. What is your e and what is your alpha? e = (0.044*1+ 0.044*1+ 0.044*1)/1 = 0.13; a = ½ log((1-0.31)/0.13) = 0.95",
		"week": 15,
		"page": 37
	},
	{
		"transcript": "And in the boosting our final classifier is calculated in this way. You have a sign function; then should it be combined. It is a combination of all that existing alpha and the e you here. So now remember you have alpha1 0.42; Alpha2 0.66, and the alpha3 is equal to 0. 95, then you try to plug in all the existing classifier. 3 different classifiers that formulate it has this way. So now that's is that all your examples are correctly classified. Right? You get it. So, in the future, you'll notice what is going on with this other boosting. Now from this point example, you guys can really understand, you get as a type of answer by this thing given the classifiers. Right? Any questions about it? No? Okay.",
		"week": 15,
		"page": 38
	},
	{
		"transcript": "So that, let's continue. Oh, I see something here. See it. And so, on the left hand, the best here, like this way should be like this. Right for this. The right hand, you know, the best efficiency. On left it means like the difference between error and alpha m. So, typically, you're gonna have, like, the error rate becomes bigger, and, alpha rate becomes smaller, right, as you want to evaluate, and we have high rates on the substandard ties and correct. And in the right hand, we use more out of the error rate with w, the weight patterns, where it's exponential, this property should be just I wish you needed to make sure that it becomes smaller and smaller. Then, you can see that. As I good job boosting of it. And also eventually, you can try to verify whether you have a hoodie and verify whether this term is converted. Here is convergence, this way it means that your algorithm is correct. ",
		"week": 15,
		"page": 39
	},
	{
		"transcript": "And here is about some characteristics of a boosting method. So, as you can see here, simulated data: test error rate for boosting with stumps, as a function of the number of iterations. Also shown are the test error rate for a single stump, and a 400-node tree. It's a more error rate than this just a number of examples on that whole, boosting trees there.",
		"week": 15,
		"page": 40
	},
	{
		"transcript": "And then here is about different loss function that you can try to use for this at an adaboosting, for example this is the one that we define like this classification, it's just the I sign function. And then if it is boosting it should be this kind of effort. Exponential map like this blah, blah, blah, and if it is, like binominal deviance it should be similar to cross entropy loss, if we use square error whole vector it should be another way, and then can try compare between differences all of all those different functions. So basically, if you want to achieve some kind of minimum here in this case, it seems that in this binominal distribution hangs for this cannot minimum number, and also similarly for this whole vector, you can achieve some minimum error rates, pairing up classification.",
		"week": 15,
		"page": 41
	},
	{
		"transcript": "And there's also other types of variation of boosting for example, here we have heard about some gradient boosting they can use any kind cost function, and then you can have a stochastic gradient boosting. That means that the bootstrap sample, you will uniform a random sampling which is some investment. And it outperforms the non-random version.",
		"week": 15,
		"page": 42
	},
	{
		"transcript": "And that he has to quick summary about the boosting method, just above all the points. For example, he doesn't that has a faster learning rate, and then it is capable of learning any functions, given appropriate weak learner, that's fine. And you will need that price of feature weighting, and it is very little parameter tuning, and there are several bad points, for example, they can probably overfitting your data set. As you are fitting your data set is too good to see here. And only for binary classification problem, also, let's say, we can have learning parameters and then you can try to get optimal parameters. If you see cross validation, for example, the size of tree, and why did you stop, and this is kind of software where you can let it investigate it.",
		"week": 15,
		"page": 43
	},
	{
		"transcript": "You can take a look at it. Yeah. It's also another realization of the input, of adaboosting. So, this part is original input data. You know, you put a data. This need to be a non-perfect long choppy. It is the first step, then you go to step 2. Like, I just need a few of the weight then you go to the second. But weak class model 2 here, so opposite if you work a little bit, another alpha two, and then you try to adjust the weight of it, weight classifier by number 3, you can get another number of 3 here, and after that you can get another 1, the fourth, that’s fine. So that's the sure product. It is a sequential model. Right? You'll finish the first 1, then you'll set the second 1 with the third 1 with the fourth 1. So given the problem, the first method is that it's called bagging. So bagging is you can do it or you have it there by other than the fourth. At an adaboosting, you need to do it and do it this sequentially. Eventually, you can't buy another a majority of weighted to see it, so that they can get the correct prediction and then here, the bomb is ad boosting. It's a little bit difficult ensemble method, along with the 3 1.",
		"week": 15,
		"page": 44
	},
	{
		"transcript": "That's what was going on in the stacking. So, in the on that method, we use a stacking to improved prediction accuracy of strong learners. and also, can have some weaker learners. Stacking aims to create a single robust model, a single group box to model, from multiple heterogeneous strong learners. Remember about that, eventually, you want to create a singles. Through possible from previous strong learners. And stacking differs from bagging and boosting in that and it combines that very strong learners and they it combines heterogeneous models. What does this heterogeneous model mean here? What does this mean? What is What are heterogeneous models? Different models. The different models mean what? Yes. So, the heterogeneous model means that you use can use different algorithms. For example, you may try SVM.  You may need to train on KNN. You may need to train on   decision trees. But previously in the bagging and boosting we're more likely to talk about same types of methos, for example, decision trees. You may train lots of different decision trees. Right? But in this case, you are able to train different models. And in the second, it consists of creating a Metamodel. A metamodel is a model that created the using of a new data set. So now, well, I'll try to discuss some more useful about a new data set. Right, individual heterogeneous model, a are trained using an initial data set, those models, make predictions, and form a single new dataset, using those predictions. This new dataset is used to train new metamodel, which makes the final prediction. The prediction is combined using the weighted averaging. Now, you should notice that what is this new data set. The new data is what? So, these models make some predictions, right, give us some input. There are some those given models can make some predictions and then from a single new dataset and reduce these new predictions. By each model, you have some predictions or another model, you have another predictions. So then, you will try to aggregate all those data set together. So then, there is input for another supermassive model which it can make a final prediction.",
		"week": 15,
		"page": 45
	},
	{
		"transcript": "That's what was going on in the stacking. So, in the on that method, we use a stacking to improved prediction accuracy of strong learners. and also, can have some weaker learners. Stacking aims to create a single robust model, a single group box to model, from multiple heterogeneous strong learners. Remember about that, eventually, you want to create a singles. Through possible from previous strong learners. And stacking differs from bagging and boosting in that and it combines that very strong learners and they it combines heterogeneous models. What does this heterogeneous model mean here? What does this mean? What is What are heterogeneous models? Different models. The different models mean what? Yes. So, the heterogeneous model means that you use can use different algorithms. For example, you may try SVM.  You may need to train on KNN. You may need to train on   decision trees. But previously in the bagging and boosting we're more likely to talk about same types of methos, for example, decision trees. You may train lots of different decision trees. Right? But in this case, you are able to train different models. And in the second, it consists of creating a Metamodel. A metamodel is a model that created the using of a new data set. So now, well, I'll try to discuss some more useful about a new data set. Right, individual heterogeneous model, a are trained using an initial data set, those models, make predictions, and form a single new dataset, using those predictions. This new dataset is used to train new metamodel, which makes the final prediction. The prediction is combined using the weighted averaging. Now, you should notice that what is this new data set. The new data is what? So, these models make some predictions, right, give us some input. There are some those given models can make some predictions and then from a single new dataset and reduce these new predictions. By each model, you have some predictions or another model, you have another predictions. So then, you will try to aggregate all those data set together. So then, there is input for another supermassive model which it can make a final prediction.",
		"week": 15,
		"page": 46
	},
	{
		"transcript": "So, let's go of details of this model. So, again, this part about the first step is the input dataset. The first of all, we try to create a two subsets from the original dataset. One is for training weak classifier and another one for training metamodel. Let’s say, your first subset one you can train either some weak learners, so in that, you go to the step 2. In the step 2, what you need is that you try to train each week of model with the weak learner dataset. than those does have to use this 1 by 4 different learners. And then in a test station. So, yeah, you have a bunch of new datasets. So, you use this thing. In step 3, you need to train a metamodel for which the input is the output of the weak models for the meta learner dataset. Which means that you will take outputs or output labels from all those to 4 different models. Then it should be used for this substandard 2 here. So eventually, we'll try to announce that ensemble of all those predictions together, that you can get some majority goes up, blah, blah, so that you can get a final prediction. As this is a still conflict. Stacking, are you getting this part? So how this different from previous bagging and the boosting? So, in the future, during an interview, other people might ask you, what are the differences between bagging between the boosting and the between the stacking. You should be able answers those specials.",
		"week": 15,
		"page": 47
	},
	{
		"transcript": "So, let's try to first of all, again, again, in this case. So, and then this is 3 different now, ensemble methods right. The bagging, trains N different weak models, usually of the same type it's so called homogeneous. Right? With N non-overlapping subset of the input dataset in parallel. Remember it is in parallel. And in the test phase each model is evaluated. The label with greatest number of predictions is as selected as the prediction. So, the methods reduce variance of the prediction. And they boosting. Trains N different weak models (usually of same types - homogenous with the complete dataset in a sequential order. The datapoints wrongly classified with previous weak model is provided more weights to that they can be classified by the next weak leaner properly. In the test phase, each model is evaluated and based on the test error of each weak model, the prediction is weighted for voting. Boosting methods decreases the bias of the prediction. And the last one is stacking trains N different weak models (usually of different types - heterogenous) with one of the two subsets of the dataset in parallel. Once the weak learners are trained, they are used to train a meta learner to combine their predictions and carry out final prediction using the other subset. In test phase, each model predicts its label, these set of labels are fed to the meta learner which generates the final prediction. Now you guys need to remember about all those 3 different types of ensemble methods and what are their own differences.",
		"week": 15,
		"page": 48
	},
	{
		"transcript": "So, let's do it again from this chart again. So, this is the about bagging. Remember, you have a bunch of subsets during the parallel, each one, you have trained on weak learner. So eventually, you are aggregating all these predictions using major development.",
		"week": 15,
		"page": 49
	},
	{
		"transcript": "And this about boosting is more likely you have train dataset. And your subset 2 or1, it should be 1, then you'll train, you'll use this test and test it. You'll have some false predictions to do then, you can you can go to the 2 subset, eventually, you have not kind of loss of predictions, so then you would use a subset m. So eventually, you can try to gather them together. So that you can then go around repetitions of everything. So, this is a color scheme is sequential.",
		"week": 15,
		"page": 50
	},
	{
		"transcript": "But the for the stacking similar here, whether you have the model1, model2, model n. And then, you try to get some outputs of all these different models so that they can get a training dataset. In a new training dataset have 1 active a metamodel, so that we can find a prediction. Right?",
		"week": 15,
		"page": 51
	},
	{
		"transcript": "Okay. Awesome. And again, it's comparisons again. So, this is about bagging: to reduce the variance, think of homogeneous, then boasting reduce bias, homogeneous, went in the body and was stacking, improved the accuracy, that heterogeneous, then the body So this is at a major difference, which is happening. Probably from this table, you can remember, everything about all those different of ensemble methods. So up to now, I would I would like to say you guys everything about ensemble methods.",
		"week": 15,
		"page": 52
	},
	{
		"transcript": "And this is some kind of reference. If you want to not understand that at the boosting, you can take a look at this reference by looking at the post again.",
		"week": 15,
		"page": 53
	},
	{
		"transcript": "And this is your, guys, last homework. Then they try to build a boosting model using Python then you should be using decision trees, not other models. Because remember, mostly, you can have a bunch of small models, and those 3 models just decision trees. As that, you need to compare your results with the single decision tree, SVM, KNN, blah blah, a sample algorithm that you can check a look at there.",
		"week": 15,
		"page": 54
	},
	{
		"transcript": "Oh, well, yeah, it's the other adaboost algorithm. Keep your mind if you probably needed to use that. You're we are back on work here. Maybe we can take a look at homework.",
		"week": 15,
		"page": 55
	},
	{
		"transcript": "",
		"week": 15,
		"page": 56
	},






	{
		"transcript": "So, this week should be the last class, by next week you guys need to prepare a short presentation about the final project and by the next Friday you need to submit everything.",
		"week": 16,
		"page": 1
	},
	{
		"transcript": "Well, we have briefly mentioned about so far what we have learned in this machine learning class. So first, he has about it. We will talk about the course review and conclude it then we will talk about the final project and then we will talk about the final grade and the future machine learning jobs that you can apply.",
		"week": 16,
		"page": 2
	},
	{
		"transcript": "So first here about the syllabus that I sent you guys in the beginning as goes the requirements in week 1 we talked about the introduction of machine learning then in the week 2 we review some basic math background about machine learning then after that in week 3 we talked about classification and regression. And in week 4 we talked about logistic regression model and least squares method after then for week 5 we talked about principal component analysis and factor analysis and then in week 6 we talked about matrix factorization which was very useful especially useful in recommendation systems. And then in week 7 we talked about gaussian mixture model and in week 8 we talked about clustering and then in the following week 9 we talked about nearest neighbor then we went ahead and talked about trees where we talked about decision trees in week 10 and then in week 11, we talked about support vector machines and then we had 2 weeks as a holiday. Then in week 14 we talked about vision transformers and then in week 15 we talked about ensemble learning and finally in today’s week that is 16 we will talk about the next steps and your presentations; this is a brief summary of what we have studied in the machine learning class. Now you should be able to answers the questions in your interview especially about the machine learning like what is regression? What is classification? What is support vector machines and what is decision trees and etc.",
		"week": 16,
		"page": 3
	},
	{
		"transcript": "So, let's talk about your final project. Yeah. You guys need to have a 10-minute presentation next week. First thing, I want to know how many groups are there here and how many of you are doing by yourself. I see that there is total 9 groups which includes individuals and groups that's good. That should be good. So eventually, if there are 10 minutes of presentation, you should be 9 minutes of talking as what I mean for participants, questions. Submit 8 pages of report. And as soon as you have your previous projects and needs, you can put it in a file and zip it, which includes code files, models and especially model weights.",
		"week": 16,
		"page": 4
	},
	{
		"transcript": "And here is about the grading rubric and how does it look like. For example, your presentation will be 10 points and then your code and the weights file will be of 30 points. Eventually, the final report will be of 60 points. The points in the report are as follows, 10 points for grammar and logical reasoning which means the grammar and the flow of the content should be correct and then the methods have 25 points and you need to evaluate at least 3 methods. The final part for the report is the results so make sure you add your results as it is of 25 points.",
		"week": 16,
		"page": 5
	},
	{
		"transcript": "And let us briefly talk about your final grade, as I talked about earlier the course participation is about 10 percentage. So, it means that if you miss one class then you will lose one point so base don't that you can decide. And then the homework, as I said, we have highest ten of thirteen and your final project is about 30 percentage and it is very important and it will determine the grade you will get.",
		"week": 16,
		"page": 6
	},
	{
		"transcript": "The grade is calculated like the below formula.",
		"week": 16,
		"page": 7
	},
	{
		"transcript": "So, we can apply for two kinds of jobs after successfully completing this course, that is machine learning engineer jobs and data scientist.",
		"week": 16,
		"page": 8
	},
	{
		"transcript": "For example, related to some machine learning engineer, those are some kinds of companies that those AI, like rose ai, meetup, adobe and capital one and for data scientist when I searched, I found these companies like Walmart, CVS health, meta and John Hopkins and all of these are in New York.For example, related to some machine learning engineer, those are some kinds of companies that those AI, like Rose AI, Meetup, Adobe and Capital One and for data scientist when I searched, I found these companies like Walmart, CVS Health, Meta and John Hopkins and all of these are in New York.",
		"week": 16,
		"page": 9
	},
	{
		"transcript": "So, let's say, some example job descriptions. So, this is something I am, search about from Amazon, about data scientists.",
		"week": 16,
		"page": 10
	},
	{
		"transcript": "Next about your final project. We want to quickly talk about your final project. I want to know about the status of each of you, about what is final project and what kind of questions you have. This should be for the rest of the lecture. And you guys will present, maybe show me a little bit about a kind of the stage. Right? And also keep in mind that nothing will be accepted after this time. This should be the last minute. Nothing will be accepted after that. And I will not grade after this time. Okay? This is fixed time. Got it?",
		"week": 16,
		"page": 11
	},
	{
		"transcript": "",
		"week": 16,
		"page": 12
	}



]

// Function to display a lecture image
function showLectureImage(imageSrc) {
    document.getElementById('defaultText').style.display = 'none';
    var lectureImage = document.getElementById('lectureImage');
    lectureImage.src = imageSrc;
    lectureImage.style.display = 'block';
    isInLectureMode = true; // Now in lecture mode
}

// Function to fetch all images for a week
function fetchImagesForWeek(weekName) {
    fetch(`/get-images/${weekName}`)
        .then(response => response.json())
        .then(data => {
            currentWeekImages = data;
            currentIndex = 0;
            if (currentWeekImages.length > 0) {
                showLectureImage(currentWeekImages[currentIndex]);
            }
        })
        .catch(error => console.error('Error fetching images for week:', error));
}

// Populate the menu with the first image of each week
function populateMenu() {
    const menu = document.getElementById('menu');
    menu.innerHTML = ''; // Clear the menu first
    lectures.forEach(lecture => {
        const lectureItem = document.createElement('div');
        lectureItem.classList.add('menu-item-container');

        const img = document.createElement('img');
        img.src = lecture.img;
        img.alt = lecture.name;
        img.classList.add('menu-item');
        lectureItem.appendChild(img);

        const title = document.createElement('div');
        title.textContent = lecture.name;
        title.classList.add('menu-item-title');
        lectureItem.appendChild(title);

        // Stop the audio and load the new images when a menu item is clicked
        img.addEventListener('click', () => {
            const audioPlayer = document.getElementById('audioPlayer');
            if (!audioPlayer.paused) {
                audioPlayer.pause();
                audioPlayer.currentTime = 0;  // Reset the audio to the start
            }
            fetchImagesForWeek(lecture.name.replace(' ', '_')); // Fetch images for the selected week
            document.getElementById('menu').classList.remove('open'); // Close the menu
        });

        menu.appendChild(lectureItem);
    });
}

// Toggle the menu visibility
document.getElementById('lessonsButton').addEventListener('click', () => {
    document.getElementById('menu').classList.toggle('open');
});

// Fetch lecture data when the page loads
window.onload = function() {
    fetch('/api/lectures')
        .then(response => response.json())
        .then(data => {
            lectures = data;
            populateMenu();
        })
        .catch(error => console.error('Error loading lecture data:', error));
};

// Function to stop and reset the audio
function stopAndResetAudio() {
    const audioPlayer = document.getElementById('audioPlayer');
    if (!audioPlayer.paused) {
        audioPlayer.pause();
        audioPlayer.currentTime = 0; // Reset the audio to the start
        console.log('Audio playback stopped and reset.');
    }
}

// Function to handle common actions for navigation button clicks
function handleNavigationButtonClick() {
    stopAndResetAudio();
    document.getElementById('menu').classList.remove('open');
}

// Event listener for the "Lessons" button
document.getElementById('homeButton').addEventListener('click', function() {
    stopAndResetAudio(); // Stop the audio when going back to the home screen
    document.getElementById('lectureImage').style.display = 'none';
    document.getElementById('defaultText').style.display = 'flex';
    document.getElementById('menu').classList.remove('open');
    isInLectureMode = false;
});

document.getElementById('fullscreenButton').addEventListener('click', () => {
    if (!document.fullscreenElement) {
        // Enter fullscreen
        document.documentElement.requestFullscreen().then(() => {
            // Change icon to indicate exit fullscreen mode
            document.getElementById('fullscreenButton').innerHTML = '<i class="fas fa-compress"></i>';
        }).catch(err => {
            console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
    } else {
        // Exit fullscreen
        document.exitFullscreen().then(() => {
            // Change icon to indicate enter fullscreen mode
            document.getElementById('fullscreenButton').innerHTML = '<i class="fas fa-expand"></i>';
        }).catch(err => {
            console.error(`Error attempting to disable full-screen mode: ${err.message} (${err.name})`);
        });
    }
});

// Event listeners for navigation buttons
document.getElementById('prevButton').addEventListener('click', () => {
    if (isInLectureMode && currentIndex > 0) {
        handleNavigationButtonClick();
        currentIndex--;
        showLectureImage(currentWeekImages[currentIndex]);
    }
});


document.getElementById('nextButton').addEventListener('click', () => {
    if (isInLectureMode && currentIndex < currentWeekImages.length - 1) {
        handleNavigationButtonClick();
        currentIndex++;
        showLectureImage(currentWeekImages[currentIndex]);
    }
});

document.getElementById('firstButton').addEventListener('click', () => {
    if (isInLectureMode && currentWeekImages.length > 0) {
        handleNavigationButtonClick();
        currentIndex = 0;
        showLectureImage(currentWeekImages[currentIndex]);
    }
});

document.getElementById('lastButton').addEventListener('click', () => {
    if (isInLectureMode && currentWeekImages.length > 0) {
        handleNavigationButtonClick();
        currentIndex = currentWeekImages.length - 1;
        showLectureImage(currentWeekImages[currentIndex]);
    }
});

let currentAudioSrc = ''; // Variable to keep track of the current audio source

// Play button event listener
document.getElementById('playButton').addEventListener('click', () => {
    if (isInLectureMode && currentWeekImages.length > 0 && currentIndex >= 0) {
        const audioPlayer = document.getElementById('audioPlayer');

        const apiUrl='http://127.0.0.1:5000/api/text2speech'
        const imagePath = currentWeekImages[currentIndex];

        const match = imagePath.match(/week_(\d+)\/week_(\d+)_page_(\d+)/);
        const weekNumber =  parseInt(match[1]);
        const pageNumber = parseInt(match[3]);
        console.log(weekNumber, pageNumber);

  


        function searchByWeekAndPage(data, week, page) {
            return data.filter(item => item.week === week && item.page === page);
          }

        //const newAudioSrc = `./static/audio/lectures/week_${weekNumber}/week_${weekNumber}_page_${pageNumber}.mp3`;
        const textToSend = searchByWeekAndPage(data, weekNumber, pageNumber)[0]['transcript'];
        console.log(textToSend);
          

        // Make the POST request
        fetch(apiUrl, {
    method: 'POST', // Method itselfs
    headers: {
        'Content-Type': 'application/json', // Indicates the content 
    },
    body: JSON.stringify({ 'text': textToSend }) // We send data in JSON format
})
.then(response => response.json()) // Convert response to JSON
.then(data => {
    console.log(data); // Handle the response data
})
.catch((error) => {
    console.error('Error:', error); // Handle any errors
});
        /*
        // Set the source only if it's different or if there's no source yet
        if (currentAudioSrc !== newAudioSrc) {
            audioPlayer.src = newAudioSrc;
            currentAudioSrc = newAudioSrc; // Update the current audio source tracker
        }
        */

        // Play or resume the audio
        if (audioPlayer.paused || audioPlayer.ended) {
            audioPlayer.play()
                .then(() => console.log('Audio playback started or resumed.'))
                .catch(error => console.error('Error playing audio:', error));
        }
    } 
    
    else {
        console.log('No audio file associated with the current image or not in lecture mode.');
    }
    
});

// Pause button event listener
document.getElementById('pauseButton').addEventListener('click', () => {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.pause();
    console.log('Audio playback paused.');
});

// Stop button event listener
document.getElementById('stopButton').addEventListener('click', () => {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.pause();
    audioPlayer.currentTime = 0; // Reset the audio to the start
    console.log('Audio playback stopped and reset.');
});