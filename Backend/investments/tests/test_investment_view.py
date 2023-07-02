from investments.models import Investment
from models.test_setup import TestSetUp
from django.core.exceptions import ObjectDoesNotExist


class TestInvestmentViewWithoutAuth(TestSetUp):
  value = 1000.0
  
  def test_get_to_investment(self):
    res = self.client.get(self.urls.investments)
    self.assertEqual(res.status_code, self.http_status.unauthorized)
  
  
  def test_post_to_create_investiment(self):
    res = self.client.post(self.urls.investments, {
      "value": self.value,
    })
    self.assertEqual(res.status_code, self.http_status.unauthorized)
    

class TestInvestmentViewWithAuth(TestSetUp):
  value = 30
  
  def test_get_to_list_investment(self):
    login_token = self.getLoginToken(email=self.default_user.email, password=self.default_user.password)
    res = self.client.get(self.urls.investments, HTTP_AUTHORIZATION=self.default_user.getHttpAuthorization(login_token))
    self.assertEqual(res.status_code, self.http_status.ok)
  
  
  def test_post_to_create_investment(self):
    self.default_user.account.addToAccountValue(self.value)
    login_token = self.getLoginToken(email=self.default_user.email, password=self.default_user.password)
    res = self.client.post(self.urls.investments, {
        "value": self.value,
      }, 
      HTTP_AUTHORIZATION=self.default_user.getHttpAuthorization(login_token)
    )
    self.assertEqual(res.status_code, self.http_status.created)
    investment = Investment.objects.get(owner=self.default_user.user)
    self.assertEqual(investment.value, self.value)
    
    
  def test_post_to_create_investment_without_balance(self):
    login_token = self.getLoginToken(email=self.default_user.email, password=self.default_user.password)
    res = self.client.post(self.urls.investments, {
        "value": self.value,
      }, 
      HTTP_AUTHORIZATION=self.default_user.getHttpAuthorization(login_token)
    )
    self.assertEqual(res.status_code, self.http_status.payment_required)
    with self.assertRaises(ObjectDoesNotExist):
      Investment.objects.get(value=self.value) 
  
  
  def test_post_to_create_investment_with_no_value(self):
    login_token = self.getLoginToken(email=self.default_user.email, password=self.default_user.password)
    res = self.client.post(self.urls.investments, {
        "value": 0,
      }, 
      HTTP_AUTHORIZATION=self.default_user.getHttpAuthorization(login_token)
    )
    self.assertEqual(res.status_code, self.http_status.payment_required)
    with self.assertRaises(ObjectDoesNotExist):
      Investment.objects.get(value=0)
    
  
  def test_post_to_create_investment_with_negative_value(self):
    login_token = self.getLoginToken(email=self.default_user.email, password=self.default_user.password)
    res = self.client.post(self.urls.investments, {
        "value": -self.value,
      }, 
      HTTP_AUTHORIZATION=self.default_user.getHttpAuthorization(login_token)
    )
    self.assertEqual(res.status_code, self.http_status.payment_required)
    with self.assertRaises(ObjectDoesNotExist):
      Investment.objects.get(value=-self.value)
  
  
  def test_post_check_account_balance_change_after_invest(self):
    self.default_user.account.addToAccountValue(self.value)
    login_token = self.getLoginToken(email=self.default_user.email, password=self.default_user.password)
    res = self.client.post(self.urls.investments, {
        "value": self.value,
      }, 
      HTTP_AUTHORIZATION=self.default_user.getHttpAuthorization(login_token)
    )
    self.assertEqual(res.status_code, self.http_status.created)
    self.assertEqual(self.value, self.default_user.account.getBalance())