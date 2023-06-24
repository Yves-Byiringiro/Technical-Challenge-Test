from django.urls import path
from .views import *

urlpatterns = [
    path('company-info/', GetCompanyInfo.as_view()),
]