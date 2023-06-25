from django.db import models
from django.core.validators import MinValueValidator
from django.conf import settings

class AccountModel(models.Model):
  owner = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
  balance = models.FloatField(
    validators=[MinValueValidator(0.0)]
  )
