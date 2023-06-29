from rest_framework.test import APITestCase
from django.urls import reverse
from django.contrib.auth import get_user_model
from datetime import datetime
from django.test import TestCase


class TestSetUp(TestCase):
  def getTestUserCredentials(self):
    return {
      "email": 'usuario_de_teste@gmail.com',
      "password": '123',
      "name": "Antonio",
      "birth_date": datetime(2001, 4, 5)
    }
  
  def createTestUser(self):
    UserModel = get_user_model()
    user_credentials = self.getTestUserCredentials()
    return UserModel.objects.create_user(email=user_credentials['email'], password=user_credentials['password'], name=user_credentials['name'], birth_date=user_credentials['birth_date'])

class TestAPISetUp(APITestCase, TestSetUp):
  
  def setUp(self):
    self.urls = {
      'accounts': reverse('accounts'),
      'login': reverse('login'),
      'register': reverse('register'),
      'statments': reverse('statments'),
      'investments': reverse('investments'),
    }
    return super().setUp()
