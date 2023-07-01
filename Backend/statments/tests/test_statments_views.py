from models.test_setup import TestAPISetUp
from accounts.actions import AccountActions


class TestStatmentViewWithoutAuth(TestAPISetUp):
  
  def test_get_statments(self):
    response = self.client.get(self.urls['statments'])
    self.assertEqual(response.status_code, 401)
    
    
  def test_create_statment(self):
    response = self.client.post(self.urls['statments'], {})
    self.assertEqual(response.status_code, 401)


class TestStatmentViewWithAuth(TestAPISetUp):
  
  def test_get_statments(self):
    self.createTestUser()
    login_token = self.getTestUserLoginToken()
    
    res = self.client.get(self.urls['statments'], HTTP_AUTHORIZATION='Token {}'.format(login_token))
    self.assertEqual(res.status_code, 200)
    data = res.json()
    self.assertEqual(data, [])
    
    
  def test_create_correct_statment(self):
    self.createTestUser()
    login_token = self.getTestUserLoginToken()
    
    res = self.client.post(self.urls['statments'], 
      {
        "value": 30,
        "description": ""
      },
      HTTP_AUTHORIZATION='Token {}'.format(login_token)
    )
    self.assertEqual(res.status_code, 201)
    
  def test_create_incorrect_statment(self):
    self.createTestUser()
    login_token = self.getTestUserLoginToken()
    
    res = self.client.post(self.urls['statments'], 
      {
        "value": -30,
        "description": ""
      },
      HTTP_AUTHORIZATION='Token {}'.format(login_token)
    )
    self.assertEqual(res.status_code, 400)
    
  def test_account_update_after_statment(self):
    self.createTestUser()
    login_token = self.getTestUserLoginToken()
    res = self.client.post(self.urls['statments'], 
      {
        "value": 30,
        "description": ""
      },
      HTTP_AUTHORIZATION='Token {}'.format(login_token)
    )
    self.assertEqual(res.status_code, 201)
    
    res_account = self.client.get(self.urls['accounts'], HTTP_AUTHORIZATION='Token {}'.format(login_token))
    balance = int(res_account.json()['value'])
    self.assertEqual(30, balance)