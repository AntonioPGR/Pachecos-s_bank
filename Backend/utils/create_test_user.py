from django.contrib.auth import get_user_model
from datetime import datetime


def createTestUser():
  UserModel = get_user_model()
  return UserModel.objects.create_user(email='test@gmail.com', password="123", name="Antonio", birth_date=datetime(2001, 4, 5))
