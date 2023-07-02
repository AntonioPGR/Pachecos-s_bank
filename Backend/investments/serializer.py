from rest_framework.serializers import ModelSerializer
from investments.models import Investment
from models.errors import InvalidWithraw

class InvestmentSerializer(ModelSerializer):
  class Meta:
    model = Investment
    fields = '__all__'
    
  def validate(self, attrs):
    self.validadeValue(attrs['value'])
    return attrs
    
  def validadeValue(self, value):
    if value == 0:
      raise InvalidWithraw("O valor investido não pode ser 0")
    if value < 0:
      raise InvalidWithraw('O valor investido não pode ser menor que 0')
    return value
    