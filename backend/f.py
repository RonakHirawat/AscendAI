from flask import Flask, request, jsonify
import pandas as pd
import joblib
from flask_cors import CORS
from sklearn.base import BaseEstimator, TransformerMixin

# --- Define custom transformer used in model ---
class ColumnSelector(BaseEstimator, TransformerMixin):
    def __init__(self, columns):
        self.columns = columns

    def fit(self, X, y=None):
        return self

    def transform(self, X):
        return X[self.columns]

# --- Define model wrapper ---
class JobTitlePredictor:
    def __init__(self, model, label_encoder):
        self.model = model
        self.label_encoder = label_encoder

    def predict(self, industry, skills):
        df = pd.DataFrame([{
            'Industry': industry,
            'Required_Skills': skills
        }])
        encoded = self.model.predict(df)
        return self.label_encoder.inverse_transform(encoded)[0]

# --- Initialize app ---
app = Flask(__name__)
CORS(app)  # Enable CORS for React frontend

# --- Load model (should include ColumnSelector and JobTitlePredictor when saved) ---
predictor = joblib.load('finall.pkl')

# --- React-compatible prediction API ---
@app.route('/', methods=['POST'])
def predict_job():
    try:
        industry = request.form.get('industry')
        skills = request.form.get('skills')
        prediction = predictor.predict(industry, skills)
        return jsonify({'prediction': prediction})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# --- Optional health check ---
@app.route('/', methods=['GET'])
def home():
    return "Job Prediction API is running."

# --- Run app ---
if __name__ == '__main__':
    app.run(debug=True)
