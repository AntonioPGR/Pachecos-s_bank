from models.test_setup import TestSetUp
from accounts.actions import AccountActions


class TestStatmentViewWithoutAuth(TestSetUp):
  
  def test_get_statments(self):
    response = self.client.get(self.urls['statments'])
    self.assertEqual(response.status_code, 401)
    
    
  def test_create_statment(self):
    response = self.client.post(self.urls['statments'], {})
    self.assertEqual(response.status_code, 401)


class TestStatmentViewWithAuth(TestSetUp):
  value = 30
  
  def test_get_statments(self):
    login_token = self.getLoginToken(email=self.default_user.email, password=self.default_user.password)
    res = self.client.get(self.urls['statments'], HTTP_AUTHORIZATION=self.default_user.getHttpAuthorization(login_token))
    self.assertEqual(res.status_code, 200)
    data = res.json()
    self.assertEqual(data, [])
    
    
  def test_create_positive_statment(self):
    login_token = self.getLoginToken(email=self.default_user.email, password=self.default_user.password)
    res = self.client.post(self.urls['statments'], 
      {
        "value": 30,
        "description": ""
      },
      HTTP_AUTHORIZATION=self.default_user.getHttpAuthorization(login_token)
    )
    self.assertEqual(res.status_code, 201)
    
    
  def test_create_negative_statment(self):
    self.default_user.account.addToAccountValue(30)
    login_token = self.getLoginToken(email=self.default_user.email, password=self.default_user.password)
    res = self.client.post(self.urls.statments, 
      {
        "value": -30,
        "description": ""
      },
      HTTP_AUTHORIZATION=self.default_user.getHttpAuthorization(login_token)
    )
    self.assertEqual(res.status_code, self.http_status.created)
    
  def test_create_no_value_statment(self):
    login_token = self.getLoginToken(email=self.default_user.email, password=self.default_user.password)
    res = self.client.post(self.urls.statments, 
      {
        "value": 0,
        "description": ""
      },
      HTTP_AUTHORIZATION=self.default_user.getHttpAuthorization(login_token)
    )
    self.assertEqual(res.status_code, 402)
    
  def test_account_update_after_statment(self):
    login_token = self.getLoginToken(email=self.default_user.email, password=self.default_user.password)
    value=30
    res = self.client.post(self.urls['statments'], 
      {
        "value": value,
        "description": ""
      },
      HTTP_AUTHORIZATION=self.default_user.getHttpAuthorization(login_token)
    )
    self.assertEqual(res.status_code, 201)
    
    res_account = self.client.get(self.urls['accounts'], HTTP_AUTHORIZATION=self.default_user.getHttpAuthorization(login_token))
    balance = int(res_account.json()['value'])
    self.assertEqual(value, balance)
    
    
  def test_create_insufficient_statment(self):
    login_token = self.getLoginToken(email=self.default_user.email, password=self.default_user.password)
    res = self.client.post(self.urls['statments'], 
      {
        "value": -self.value,
        "description": ""
      },
      HTTP_AUTHORIZATION=self.default_user.getHttpAuthorization(login_token)
    )
    self.assertEqual(res.status_code, self.http_status.payment_required)