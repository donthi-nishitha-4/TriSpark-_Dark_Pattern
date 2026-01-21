import joblib
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np

model = joblib.load("model/dark_pattern_model.pkl")
vectorizer = joblib.load("model/vectorizer.pkl")
X_train_vec = joblib.load("model/x_train_vec.pkl")
y_train = joblib.load("model/y_train.pkl")
texts_train = joblib.load("model/texts_train.pkl")

LABEL_MAP = {
    "clean": "None",
    "forced_consent": "Forced Consent",
    "confirm_shaming": "Confirm Shaming",
    "hidden_costs": "Hidden Costs"
}

def detect_dark_pattern(text):
    vector = vectorizer.transform([text])
    probs = model.predict_proba(vector)[0]
    confidence = float(np.max(probs))
    pred_label = model.predict(vector)[0]

    # Internal similarity (RAG-style, not exposed)
    sim = cosine_similarity(vector, X_train_vec)[0]
    _ = np.argmax(sim)

    if pred_label == "clean":
        return {
            "decision": "CLEAN",
            "pattern": "None",
            "severity": "LOW",
            "confidence": round(confidence, 2)
        }

    return {
        "decision": "DARK_PATTERN",
        "pattern": LABEL_MAP.get(pred_label, pred_label),
        "severity": "HIGH" if confidence >= 0.8 else "MEDIUM",
        "confidence": round(confidence, 2)
    }
