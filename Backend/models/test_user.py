from datetime import datetime
from django.contrib.auth import get_user_model
from rest_framework.test import APITestCase
from accounts.actions import AccountActions


class TestUser(APITestCase):
  
  def __init__(self, name:str, email:str, password:str, birth_date:str):
    self.name = name
    self.email = email
    self.birth_date = datetime.strptime(str(birth_date), '%Y-%M-%d')
    self.password = password
    
    UserModel = get_user_model()
    self.user = UserModel.objects.create_user(email=self.email, password=self.password, name=self.name, birth_date=self.birth_date)
    self.account = AccountActions(self.user)
    
    
  def getHttpAuthorization(self, token:str):
    return 'Token {}'.format(token)
  
  def getCredentials(self):
    return {
      "email": self.email,
      "password": self.password,
      "name": self.name,
      "birth_date": self.birth_date
    }