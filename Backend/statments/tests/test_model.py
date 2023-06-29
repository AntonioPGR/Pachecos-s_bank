from statments.models import Statment
from models.test_setup import TestSetUp


class StatmentModelTests(TestSetUp):
  description = 'a default descripion for a test case'
  value = 1000.0
  
  def testCreateStatment(self):
    owner = self.createTestUser()
    newStatment = Statment.objects.create(owner=owner, description=self.description, value=self.value)

    self.assertEqual(newStatment.description, self.description)
    self.assertEqual(newStatment.value, self.value)
    self.assertEqual(newStatment.owner, owner)