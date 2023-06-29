from investments.models import Investment
from models.test_setup import TestSetUp


class InvestmentTest(TestSetUp):
  value = 30
  
  def testCreateInvestment(self):
    owner = self.createTestUser()
    investment = Investment.objects.create(owner=owner, value=self.value)
    
    self.assertEqual(investment.owner, owner)
    self.assertEqual(investment.value, self.value)