from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from users.managers import CustomUserManager
from django.utils.translation import gettext_lazy as translate
from django.utils import timezone


class CustomUser(AbstractBaseUser, PermissionsMixin):
  email = models.EmailField(translate('Email adress'), unique=True, primary_key=True, blank=False, null=False)
  name = models.CharField(translate('name'), max_length=20, blank=False, null=False)
  birth_date = models.DateField(translate('Birth Date'), blank=False, null=False)
  is_staff = models.BooleanField(default=False)
  is_active = models.BooleanField(default=True)
  date_joined = models.DateTimeField(default=timezone.now)
  
  USERNAME_FIELD = 'email'
  REQUIRED_FIELDS = ['name', 'birth_date']
  
  objects = CustomUserManager()
  
  def __str__(self) -> str:
    return self.email
  