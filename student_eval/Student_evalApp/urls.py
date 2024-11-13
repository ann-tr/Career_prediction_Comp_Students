# your_app/urls.py
from django.urls import path
from . import views  # Import views from your app

urlpatterns = [
    path('submit-form/', views.submit_form, name='submit-form'),  # Define route for form submission
]
