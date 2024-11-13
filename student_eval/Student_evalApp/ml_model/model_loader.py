# Student_evalApp/ml_model/model_loader.py
import pickle
import os
from django.conf import settings


folder_path =  os.path.join(str(settings.MEDIA_ROOT) , "ml_model","weights.pkl")
# Load the model once and reuse it
with open(folder_path, "rb") as f:
    model = pickle.load(f)
