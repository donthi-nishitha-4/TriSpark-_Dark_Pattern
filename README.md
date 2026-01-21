# Dark Pattern Guard

Dark Pattern Guard is a **Chrome extension** that detects **dark patterns** on web pages using a **machine learning backend**. It helps users identify manipulative design practices that may influence decisions without their knowledge.

---

## Features

- Scan any web page for dark patterns  
- ML-based classification of text content  
- Provides **risk level**, **category**, **confidence**, and an **explanation**  
- Easy-to-use Chrome extension UI  

---

## Project Structure

TriSpark/
├── backend/ # Flask backend for ML detection
│ ├── app.py
│ ├── train_model_csv.py
│ ├── dataset/
│ ├── model/
│ └── utils/
├── extension/ # Chrome extension files
│ ├── popup.html
│ ├── popup.js
│ ├── content.js
│ ├── background.js (optional)
│ └── manifest.json
├── frontend/ # Frontend design files (CSS, overlay, tooltip)
└── README.md

yaml
Copy code

---

## Tech Stack

- **Backend:** Python, Flask, Scikit-learn  
- **Frontend:** Chrome Extension (Manifest V3), HTML, CSS, JS  
- **ML Models:** Pre-trained pickle files for detection  

---

## Installation & Usage

### Backend
1. Go to `backend/` folder  
2. Install dependencies:
```bash
pip install -r requirements.txt
Run the backend:

bash
Copy code
python app.py
Confirm backend is running on:

cpp
Copy code
http://127.0.0.1:5000
Chrome Extension
Open Chrome → chrome://extensions

Enable Developer Mode (top-right)

Click Load unpacked

Select the extension/ folder

Open any webpage (https://google.com, wikipedia.org, etc.)

Click the Dark Pattern Guard icon → Scan Page

View results in popup

How It Works
The Chrome extension extracts visible text from the page

Sends the text to the Flask backend (/detect)

Backend runs ML model to detect dark patterns

Returns:

Risk level: Low / Medium / High

Category: Type of dark pattern

Confidence: Probability

Explanation: Why the text is flagged

Notes
Do not test on Chrome internal pages (chrome://extensions)

Backend must be running for the extension to work

ML model files (*.pkl) may be large; avoid committing them if needed

Contributing
Fork the repository

Create a feature branch (git checkout -b feature-name)

Commit your changes (git commit -m "Add feature")

Push to the branch (git push origin feature-name)

Create a Pull Request

License
This project is licensed under the MIT License.
