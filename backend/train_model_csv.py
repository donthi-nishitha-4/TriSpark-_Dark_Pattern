import pandas as pd
import joblib
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression

# Load CSV dataset
df = pd.read_csv("dataset/dark_patterns.csv")
texts_train = df['text'].tolist()
labels_train = df['label'].tolist()

# Vectorize the text
vectorizer = TfidfVectorizer()
X_train_vec = vectorizer.fit_transform(texts_train)

# Train classifier
model = LogisticRegression(max_iter=1000)
model.fit(X_train_vec, labels_train)

# Save model artifacts
joblib.dump(model, "model/dark_pattern_model.pkl")
joblib.dump(vectorizer, "model/vectorizer.pkl")
joblib.dump(X_train_vec, "model/X_train_vec.pkl")
joblib.dump(labels_train, "model/y_train.pkl")
joblib.dump(texts_train, "model/texts_train.pkl")

print("Model trained and saved in /model/ folder!")
