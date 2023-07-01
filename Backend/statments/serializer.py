from rest_framework.serializers import ModelSerializer
from statments.models import Statment


class StatmentSerializer(ModelSerializer):
  class Meta:
    model = Statment
    fields = '__all__'
  
  def validate(self, attrs):
    value = attrs['value']
    self.validateValue(value)
    return attrs
  
  def validateValue(self, value:int):
    if value == 0:
      raise ValueError("Extrado indevido! O valor do deposito ou resgaste não pode ser 0")
