from django.test import TestCase
from statments.models import Statment
from utils.create_test_user import createTestUser


class StatmentTests(TestCase):
  description = 'a default descripion for a test case'
  value = 1000.0
  
  def testCreateStatment(self):
    owner = createTestUser()
    newStatment = Statment.objects.create(owner=owner,description=self.description, value=self.value)

    self.assertEqual(newStatment.description, self.description)
    self.assertEqual(newStatment.value, self.value)
    self.assertEqual(newStatment.owner, owner)