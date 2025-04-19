# from flask import Flask, request, jsonify, render_template
# import numpy as np
# import pickle
# from flask_cors import CORS  # To allow requests from React frontend

# app = Flask(__name__)
# CORS(app)  # Enable CORS to allow frontend-backend communication

# # Load the trained model
# with open("random_forest_salary_model.pkl", "rb") as file:
#     random_forest_salary_model = pickle.load(file)

# # Mappings
# education_mapping = {"High School": 0, "Associate's Degree": 1, "Bachelor's Degree": 2, "Master's Degree": 3, "PhD": 4}
# job_title_mapping = {"Software Engineer": 0, "Data Scientist": 1, "Product Manager": 2, "Marketing Analyst": 3, "HR Manager": 4}
# gender_mapping = {"Female": 0, "Male": 1}

# # Prediction Endpoint
# @app.route("/predictor", methods=["POST"])
# def predictor():
#     data = request.get_json()  # Get JSON data from React
#     input_features = np.array([[ 
#         education_mapping[data["education"]],
#         job_title_mapping[data["job_title"]],
#         gender_mapping[data["gender"]],
#         int(data["years_experience"]),
#         int(data["age"])
#     ]])
#     predicted_salary = random_forest_salary_model.predict(input_features)[0]
    
#     return jsonify({"predicted_salary": round(predicted_salary, 2)})  # Return JSON response

# if __name__ == "__main__":
#     app.run(debug=True)


# With AGE CHECKING 
from flask import Flask, request, jsonify, render_template
import numpy as np
import pickle
from flask_cors import CORS  # To allow requests from React frontend

app = Flask(__name__)
CORS(app)  # Enable CORS to allow frontend-backend communication

# Load the trained model
with open("random_forest_salary_model.pkl", "rb") as file:
    random_forest_salary_model = pickle.load(file)

# Mappings
education_mapping = {
    "High School": 0, "Associate's Degree": 1,
    "Bachelor's Degree": 2, "Master's Degree": 3, "PhD": 4
}
job_title_mapping = {
    "Software Engineer": 0, "Data Scientist": 1,
    "Product Manager": 2, "Marketing Analyst": 3, "HR Manager": 4
}
gender_mapping = {"Female": 0, "Male": 1}

# Prediction Endpoint
@app.route("/predictor", methods=["POST"])
def predictor():
    try:
        data = request.get_json()  # Get JSON data from React

        # Extract and validate age and experience
        age = int(data["age"])
        years_experience = int(data["years_experience"])

        if age < 18:
            return jsonify({"error": "Age must be at least 18"}), 400
            # alert(data.error);       
        # Build input feature array
        input_features = np.array([[ 
            education_mapping[data["education"]],
            job_title_mapping[data["job_title"]],
            gender_mapping[data["gender"]],
            years_experience,
            age
        ]])

        # Predict salary
        predicted_salary = random_forest_salary_model.predict(input_features)[0]
        return jsonify({"predicted_salary": round(predicted_salary, 2)})

    except KeyError as e:
        return jsonify({"error": f"Missing field: {str(e)}"}), 400
    except ValueError:
        return jsonify({"error": "Invalid input type. Age and years of experience must be numbers."}), 400
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
