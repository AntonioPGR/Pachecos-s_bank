from models.test_setup import TestSetUp
from users.models import CustomUser
from rest_framework.authtoken.models import Token
from datetime import datetime


class TestLoginView(TestSetUp):
  
  def test_user_can_login(self):
    test_user = self.default_user.user
    res = self.client.post(self.urls['login'], {
      "email": self.default_user.email,
      "password": self.default_user.password
    })
    self.assertEqual(res.status_code, 200)
    
    token = res.json()['token']
    self.assertIsNotNone(token)
    self.assertEqual(token, Token.objects.get_or_create(user=test_user)[0].key)

  def test_user_can_login_without_data(self):
    res = self.client.post(self.urls['login'])
    self.assertEqual(res.status_code, 400)
    
    
class TestRegisterView(TestSetUp):
  test_email = "teste@gmail.com"
  test_name = "nome de teste"
  test_password = "123"
  test_birth_date = datetime(2006, 4, 5).date()
  
  def test_user_can_register(self):
    print(self.test_birth_date)
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
    
  def test_user_can_register_with_wrong_email(self):
    print(self.test_birth_date)
    res = self.client.post(self.urls['register'], {
      "email": 'a',
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
  
    