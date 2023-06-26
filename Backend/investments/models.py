from django.db import models
from django.conf import settings

class Investment(models.Model):
  owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
  value = models.FloatField(blank=False, null=False)
  
  def __str__(self) -> str:
    return self.owner.email
  
