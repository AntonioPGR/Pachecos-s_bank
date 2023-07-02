from rest_framework.test import APITestCase
from django.urls import reverse
from models.dotdict import Dotdict
from models.test_user import TestUser


class TestSetUp(APITestCase):
  
  def getLoginToken(self, email, password):
    res = self.client.post(self.urls['login'], {
      "email": email,
      "password": password
    })
    try:
      return res.json()['token']
    except:
      raise ValueError("Não foi possivel fazer login! verifique as credenciais de acesso")
  
  def setUp(self):
    urls = {
      'accounts': reverse('accounts'),
      'login': reverse('login'),
      'register': reverse('register'),
      'statments': reverse('statments'),
      'investments': reverse('investments'),
    }
    self.urls = Dotdict(urls)
    http_status = {
      'created': 201,
      'ok': 200,
      'no_content': 204,
      'bad_request': 400,
      'payment_required': 402,
      'unauthorized': 401,
      'forbidden': 403,
      'not_found': 404,
      'conflict': 409,
      'internal_server_error': 500,
    }
    self.http_status = Dotdict(http_status)
    self.default_user = TestUser(
      name='Usuário de teste',
      email='email_do_usuario_de_teste@gmail.com',
      password='050406Ant+',
      birth_date='2005-04-05'
    )
    return super().setUp()
