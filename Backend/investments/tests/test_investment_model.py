from investments.models import Investment
from models.test_setup import TestSetUp


class TestInvestmentModel(TestSetUp):
  description = 'a default descripion for a test case'
  value = 1000.0
  
  def testCreateStatment(self):
    owner=self.default_user.user
    newStatment = Investment.objects.create(owner=owner, value=self.value)

    self.assertEqual(newStatment.value, self.value)
    self.assertEqual(newStatment.owner, owner)