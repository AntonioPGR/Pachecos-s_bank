from rest_framework.serializers import ModelSerializer
from statments.models import Statment
from accounts.actions import AccountActions


class StatmentSerializer(ModelSerializer):
  class Meta:
    model = Statment
    fields = '__all__'
  
  def validate(self, attrs):
    value = attrs['value']
    owner = attrs['owner']
    self.validateValue(value, owner)
    AccountActions.changeAccountValue(value, owner)
    return attrs
  
  def validateValue(self, value:int, owner):
    if value == 0:
      raise ValueError("Extrado indevido! O valor do deposito ou resgaste não pode ser 0")
    account = AccountActions.getAccountByOwner(owner)    
    if value < 0:
      absolute_value = abs(value)
      if account.balance - absolute_value < 0:
        raise ValueError("Saldo insuficiente! O valor do resgate é maior que o saldo em conta")
