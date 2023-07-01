from django.contrib.auth.base_user import BaseUserManager
from django.utils.translation import gettext_lazy as translate
from accounts.models import Account
# TYPES
from datetime import datetime



class CustomUserManager(BaseUserManager):
  """
    Custom user model manager where we use email as unique key instead of name
    To create a user it user name, email, password and birth date
  """
  
  def create_user(self, email:str, password:str, name:str, birth_date:datetime, **extra_fields):
    if not email or not password or not name or not birth_date:
      raise ValueError(translate("Email, name, password and birth date are all required fields. One of these were not provided, check if you fullfill all fields correctly"))
    
    email = self.normalize_email(email)
    user = self.model(email=email, birth_date=birth_date, name=name, **extra_fields)
    user.set_password(password)
    user.save()
    Account.objects.create(owner=user, balance=0)
    return user
  
  def create_superuser(self, email:str, password:str, name:str, birth_date:datetime, **extra_fields):
    extra_fields.setdefault('is_staff', True)
    extra_fields.setdefault('is_superuser', True)
    extra_fields.setdefault('is_active', True)
    
    return self.create_user(email, password, name, birth_date, **extra_fields)
  