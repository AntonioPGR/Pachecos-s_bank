from rest_framework.serializers import ModelSerializer
from statments.models import Statment
from models.errors import InvalidWithraw


class StatmentSerializer(ModelSerializer):
  class Meta:
    model = Statment
    fields = '__all__'
  
  def validate(self, attrs):
    self.validateValue(attrs['value'])
    return attrs
  
  def validateValue(self, value:int):
    if value == 0:
      raise InvalidWithraw("Extrado indevido! O valor do deposito ou resgaste não pode ser 0")
