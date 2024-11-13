from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt 
import pickle
import os
import json
from django.conf import settings

folder_path = os.path.join(str(settings.MEDIA_ROOT), "ml_model", "weights.pkl")
# Load the model once and reuse it
with open(folder_path, "rb") as f:
    model = pickle.load(f)

@csrf_exempt
def submit_form(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            answers = [data.get(f"question_{i}") for i in range(1, 22)]
        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON"}, status=400)

        # Encoding mappings
        ecodding_question_5 = {"Yes": 1, "No": 0}
        ecodding_question_6 = {"Yes": 1, "No": 0}
        ecodding_question_7 = {"Yes": 1, "No": 0}
        ecodding_question_8 = {"Yes": 1, "No": 0}
        ecodding_question_9 = {"Yes": 1, "No": 0}
        ecodding_question_10 = {"Poor": 0, "Medium": 1, "Excellent": 2}
        ecodding_question_11 = {"Poor": 0, "Medium": 1, "Excellent": 2}
        ecodding_question_12 = {"Yes": 1, "No": 0}
        ecodding_question_13 = {"Yes": 1, "No": 0}
        ecodding_question_14 = {"Yes": 1, "No": 0}
        ecodding_question_15 = {"Yes": 1, "No": 0}
        ecodding_question_16 = {
            "Software Engineering": 0, "IOT": 1, "cloud computing": 2,
            "programming": 3, "networks": 4, "Computer Architecture": 5,
            "data engineering": 6, "hacking": 7, "Management": 8, "parallel computing": 9
        }
        ecodding_question_17 = {
            "Guide": 0, "Health": 1, "Self help": 2, "Horror": 3,
            "Biographies": 4, "Science fiction": 5, "Satire": 6, "Childrens": 7,
            "Autobiographies": 8, "Prayer books": 9, "Fantasy": 10, "Comics": 11
        }
        ecodding_question_18 = {
            "R Programming": 0, "Information Security": 1, "Shell Programming": 2,
            "Machine Learning": 3, "full stack": 4, "Hadoop": 5, "Python": 6,
            "Distro Making": 7, "Application development": 8
        }
        ecodding_question_19 = {
            "Database Security": 0, "System designing": 1, "Web Technologies": 2,
            "Hacking": 3, "Testing": 4, "Data Science": 5, "Game Development": 6,
            "Cloud Computing": 7
        }
        ecodding_question_20 = {
            "Service Based": 0, "Web Services": 1, "BPA": 2, "Testing and Maintenance Services": 3,
            "Product based": 4, "Finance": 5, "Cloud Services": 6, "product development": 7,
            "Sales and Marketing": 8, "SAaS services": 9
        }
        ecodding_question_21 = {
            "System developer": 0, "Security": 1, "Business process analyst": 2,
            "Developer": 3, "Testing": 4, "Cloud Computing": 5
        }

        # Checking if all answers are present
        if None in answers:
            return JsonResponse({'error': 'Please answer all questions'}, status=400)

        # Handling encoding with default values if an answer is missing
        try:
            encoded_data = [
                int(answers[0]),  
                int(answers[1]), 
                int(answers[2]),  
                int(answers[3]),  
                ecodding_question_5.get(answers[4], 0),  
                ecodding_question_6.get(answers[5], 0),
                ecodding_question_7.get(answers[6], 0),
                ecodding_question_8.get(answers[7], 0),
                ecodding_question_9.get(answers[8], 0),
                ecodding_question_10.get(answers[9], 1),
                ecodding_question_11.get(answers[10], 1),
                ecodding_question_12.get(answers[11], 0),
                ecodding_question_13.get(answers[12], 0),
                ecodding_question_14.get(answers[13], 0),
                ecodding_question_15.get(answers[14], 0),
                ecodding_question_16.get(answers[15], 0),
                ecodding_question_17.get(answers[16], 0),
                ecodding_question_18.get(answers[17], 0),
                ecodding_question_19.get(answers[18], 0),
                ecodding_question_20.get(answers[19], 0),
                ecodding_question_21.get(answers[20], 0),
            ]
        except ValueError:
            return JsonResponse({"error": "Invalid answer format; answers should be numbers where applicable."}, status=400)

        # Make prediction
        prediction = model.predict([encoded_data])
        prediction_list = prediction.tolist()

        return JsonResponse({'prediction': prediction_list}, status=200)
    else:
        return JsonResponse({"error": "Invalid request method"}, status=400)
