## 📸 Image Captioning AI

### 🔍 Description

This project is part of the **CODSOFT Internship - June 2025 Batch (B31)** and focuses on developing an **Image Captioning AI** using a **pre-trained CNN (VGG16)** for feature extraction and a **recurrent neural network (RNN)** for generating captions. The AI takes an input image and generates a human-like descriptive sentence.

🔗 **LinkedIn Post**: [View Project Showcase](https://www.linkedin.com/posts/sumansekhar-sahoo_codesoft-machinelearning-deeplearning-activity-7335682994508124161-QnqY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFbWbFkBBD_ckmIB0-Z1ZAk25yadMwBisI0)

---

### 📁 Project Structure

```
Image_Captioning/
├── image_captioning.py        # Main script
├── your_image.jpg             # Input image
└── README.md                  # Project README
```

---

### 🧠 Technologies Used

* Python 🐍
* TensorFlow & Keras
* Pre-trained VGG16 model
* LSTM (Long Short-Term Memory)
* NumPy & Pillow (PIL)

---

### 🚀 How It Works

1. **Feature Extraction**
   VGG16 (pre-trained on ImageNet) is used to extract high-level features from the input image.

2. **Caption Generator**
   A simple RNN using Embedding + LSTM layers generates a caption based on extracted features.

3. **Mock Captioning**
   For demo purposes, a hardcoded caption is shown based on image content.

---

### 🧪 Output Example

**Input Image**
![your_image](https://github.com/user-attachments/assets/84800353-7174-468f-96a8-72f35c8896fd)


**Generated Caption**

```
A group of baby elephants being bottle-fed by caretakers.
```

---

### 🛠 How to Run

1. 📦 Install dependencies:

```bash
pip install tensorflow keras numpy pillow
```

2. 🖼 Add your image:

* Place an image named `your_image.jpg` in the project folder.

3. ▶ Run the script:

```bash
python image_captioning.py
```

---

### 📌 Notes

* The captioning is currently rule-based (mock).
* Training on real datasets like **Flickr8k/MS COCO** is required for actual AI-generated captions.

---

### 📚 Future Enhancements

* Load a tokenizer and trained model for true AI-generated captions.
* Use a Transformer instead of LSTM for more accuracy.
* Create a web interface using Flask/Streamlit.

---

### 👨‍💻 Author

**Suman Sekhar Sahoo**
Codesoft June 2025 Batch - B31
🔗 [LinkedIn](https://www.linkedin.com/in/sumansekhar-sahoo)

---
