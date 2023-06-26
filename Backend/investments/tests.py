from django.test import TestCase
from utils.create_test_user import createTestUser
from investments.models import Investment


class InvestmentTest(TestCase):
  value = 30
  
  def testCreateInvestment(self):
    owner = createTestUser()
    investment = Investment.objects.create(owner=owner, value=self.value)
    
    self.assertEqual(investment.owner, owner)
    self.assertEqual(investment.value, self.value)