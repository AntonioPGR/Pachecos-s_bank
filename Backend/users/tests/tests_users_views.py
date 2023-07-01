from models.test_setup import TestAPISetUp
from users.models import CustomUser
from rest_framework.authtoken.models import Token
from datetime import datetime


class TestLoginView(TestAPISetUp):
  
  def test_user_can_login(self):
    test_user = self.createTestUser()
    user_credentials = self.getTestUserCredentials()
    res = self.client.post(self.urls['login'], {
      "email": user_credentials['email'],
      "password": user_credentials['password']
    })
    self.assertEqual(res.status_code, 200)
    
    token = res.json()['token']
    self.assertIsNotNone(token)
    self.assertEqual(token, Token.objects.get_or_create(user=test_user)[0].key)

  def test_user_can_login_without_data(self):
    res = self.client.post(self.urls['login'])
    self.assertEqual(res.status_code, 400)
    
    
class TestRegisterView(TestAPISetUp):
  test_email = "teste@gmail.com"
  test_name = "nome de teste"
  test_password = "123"
  test_birth_date = datetime(2006, 5, 4).date()
  
  def test_user_can_register(self):
    res = self.client.post(self.urls['register'], {
      "email": self.test_email,
      "password": self.test_password,
      'name': self.test_name,
      "birth_date": self.test_birth_date
    })
    self.assertEqual(res.status_code, 201)
    
    user = CustomUser.objects.filter(email=self.test_email)
    user_exists = user.exists()
    self.assertTrue(user_exists)
  
  def test_user_can_register_without_data(self):
    res = self.client.post(self.urls['register'], {})
    self.assertEqual(res.status_code, 400)
    
    