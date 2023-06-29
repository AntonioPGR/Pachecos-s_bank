from django.test import TestCase
from accounts.models import Account
from models.test_setup import TestSetUp


class AccountTests(TestSetUp):
  balance = 1000
  
  def testCreateAccount(self):
    owner = self.createTestUser()
    conta = Account.objects.create(owner=owner, balance=self.balance)
    
    self.assertEqual(conta.owner, owner)
    self.assertEqual(conta.balance, self.balance)