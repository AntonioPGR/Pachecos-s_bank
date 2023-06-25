from django.test import TestCase
from django.contrib.auth import get_user_model
from datetime import datetime
from accounts.models import AccountModel

def createUser():
  UserModel = get_user_model()
  return UserModel.objects.create_user(email='test@gmail.com', password="123", name="Antonio", birth_date=datetime(2001, 4, 5))


class AccountTests(TestCase):
  balance = 1000
  
  def testCreateAccount(self):
    owner = createUser()
    conta = AccountModel.objects.create(owner=owner, balance=self.balance)
    
    self.assertEqual(conta.owner, owner)
    self.assertEqual(conta.balance, self.balance)