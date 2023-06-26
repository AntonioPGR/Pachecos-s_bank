from django.test import TestCase
from accounts.models import AccountModel
from utils.create_test_user import createTestUser


class AccountTests(TestCase):
  balance = 1000
  
  def testCreateAccount(self):
    owner = createTestUser()
    conta = AccountModel.objects.create(owner=owner, balance=self.balance)
    
    self.assertEqual(conta.owner, owner)
    self.assertEqual(conta.balance, self.balance)