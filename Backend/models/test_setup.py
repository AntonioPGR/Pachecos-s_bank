from rest_framework.test import APITestCase
from django.urls import reverse
from django.contrib.auth import get_user_model
from datetime import datetime
from django.test import TestCase


class TestSetUp(TestCase):
  def createTestUser(self):
    UserModel = get_user_model()
    return UserModel.objects.create_user(email='usuario_de_teste@gmail.com', password="123", name="Antonio", birth_date=datetime(2001, 4, 5))

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
