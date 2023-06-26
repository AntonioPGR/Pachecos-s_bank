from django.db import models
from django.conf import settings

class InvestmentModel(models.Model):
  owner = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=False)
  value = models.FloatField(blank=False, null=False)
  
  def __str__(self) -> str:
    return self.owner.email
  
