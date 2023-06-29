from models.test_setup import TestAPISetUp
from users.models import CustomUser
from rest_framework.authtoken.models import Token


class TestLoginView(TestAPISetUp):
  
  
  def test_user_can_login(self):
    test_user = self.createTestUser()
    
    res = self.client.post(self.urls['login'], {
      "email": test_user.email,
      "password": test_user.password
    })
    self.assertEqual(res.status_code, 200)
    
    res_data = res.json()
    token = res_data['token']
    self.assertIsNotNone(token)
    self.assertEqual(token, Token.objects.get_or_create(user=test_user))


class TestRegisterView(TestAPISetUp):
  test_email = "teste@gmail.com"
  test_name = "nome de teste"
  test_password = "123"
  test_birth_date = "05-04-2005"
  
  def test_user_can_register(self):
    res = self.client.post(self.urls['register'], {
      "email": self.test_email,
      "password": self.test_password,
      'name': self.test_name,
      "birth_date": self.test_birth_date
    })
    self.assertEqual(res.status_code, 201)
    
    user_exists = CustomUser.objects.filter(email=self.test_email).exists()
    self.assertTrue(user_exists)
    