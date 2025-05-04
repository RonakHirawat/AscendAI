from flask import Flask, request, jsonify
import pandas as pd
import pickle
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend access

# Load the trained model
def skill_tokenizer(text):
    return text.split(",")

with open("job_title_predictor.pkl", "rb") as f:
    model = pickle.load(f)

# Predefined list of skills
unique_skills = [
    "Python", "Java", "C++", "SQL", "Excel", "Risk Analysis", "Financial Modeling",
    "SEO", "Content Writing", "Google Ads", "Social Media", "Machine Learning",
    "Customer Service", "Sales", "Merchandising", "Production Planning",
    "Quality Control", "Supply Chain", "Teaching", "Curriculum Design", "Research",
    "Medical Research", "Nursing", "Patient Care", "Pharmaceuticals", "React", "EdTech",
    "Market Research", "AWS"
]

# Normalize frontend experience values to model format
experience_map = {
    "Entry": "Entry Level",
    "Mid": "Mid Level",
    "Senior": "Senior Level"
}

@app.route("/jobpredictor", methods=["POST"])
def predict_job():
    data = request.get_json()

    experience = data.get("experience", "").strip()
    skills = data.get("skills")

    # Validate inputs
    if not experience or not skills:
        return jsonify({"error": "Missing experience or skills"}), 400

    # Normalize experience for model compatibility
    experience = experience_map.get(experience, experience)

    # Combine selected skills into a single string
    skills_combined = ", ".join(skills)

    # Create input dataframe
    input_df = pd.DataFrame([{
        "Experience Level": experience,
        "Required Skills": skills_combined
    }])

    # Make prediction
    try:
        prediction = model.predict(input_df)[0]
        return jsonify({"predicted_job": prediction})
    except Exception as e:
        return jsonify({"error": f"Prediction failed: {str(e)}"}), 500

# Optional: Provide skills list to frontend
@app.route("/skills", methods=["GET"])
def get_skills():
    return jsonify({"skills": unique_skills})

if __name__ == "__main__":
    app.run(debug=True)
