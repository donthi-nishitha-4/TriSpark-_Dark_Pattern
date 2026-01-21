from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/", methods=["GET"])
def home():
    return "Dark Pattern Guard API running"

@app.route("/detect", methods=["POST"])
def detect():
    data = request.get_json()
    text = data.get("text", "")

    if not text:
        return jsonify({
            "risk": "Low",
            "category": "None",
            "confidence": "0%",
            "explanation": "No text received"
        })

    # Temporary response to verify connection
    return jsonify({
        "risk": "Low",
        "category": "None",
        "confidence": "95%",
        "explanation": "Backend is working correctly"
    })

if __name__ == "__main__":
    app.run(port=5000, debug=True)
