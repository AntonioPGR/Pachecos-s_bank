from django.test import TestCase
from django.contrib.auth import get_user_model
from datetime import datetime

class UsersTests(TestCase):
  email='test@gmail.com'
  password='123'
  name='Antonio'
  birth_date=datetime(2005, 4, 5)
  
  def testCreateUser(self):
    UserModel = get_user_model()
    user = UserModel.objects.create_user(email=self.email, password=self.password, name=self.name, birth_date=self.birth_date)
    
    self.assertEqual(user.email, self.email)
    self.assertEqual(user.name, self.name)
    self.assertEqual(user.birth_date, self.birth_date)
    
    self.assertTrue(user.is_active)
    
    self.assertFalse(user.is_staff)
    self.assertFalse(user.is_superuser)
    
  def testCreateSuperuser(self):
    UserModel = get_user_model()
    admin_user = UserModel.objects.create_superuser(email=self.email, password=self.password, name=self.name, birth_date=self.birth_date)
    
    self.assertEqual(admin_user.email, self.email)
    self.assertEqual(admin_user.name, self.name)
    self.assertEqual(admin_user.birth_date, self.birth_date)
    
    self.assertTrue(admin_user.is_active)
    self.assertTrue(admin_user.is_staff)
    self.assertTrue(admin_user.is_superuser)