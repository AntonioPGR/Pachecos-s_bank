from accounts.models import Account
from models.test_setup import TestSetUp


class AccountTests(TestSetUp):
  balance = 1000
  
  def test_expect_account_to_be_created_with_user(self):
    owner = self.createTestUser()
    account = Account.objects.get(owner=owner)
    self.assertEqual(account.owner, owner)