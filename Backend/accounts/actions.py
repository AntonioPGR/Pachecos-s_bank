from rest_framework.serializers import ValidationError
from accounts.models import Account
from accounts.serializers import AccountSerializer


class AccountActions:
  
  def __init__(self, owner) -> None:
    self.owner = owner
    try:
      self.account = Account.objects.get(owner=owner)
    except:
      raise ValueError("Não foi possivel achar uma conta pertencente a este usuário!")
      
  def addToAccountValue(self, value:int):
    if not self.haveEnoughBalance(value):
      raise ValueError("Saldo insuficiente! O valor do resgate é maior que o saldo em conta")
    self.saveBalanceUpdate(value)
    
  def haveEnoughBalance(self, value):
    if value < 0 and self.account.balance + value < 0:
      return False
    return True 
    
  def saveBalanceUpdate(self, value):
    serializer = AccountSerializer(self.account, data={
      'balance': (self.account.balance + value),
      'owner': self.owner
    })
    if not serializer.is_valid():
      raise ValidationError("Erro ao mudar o valor da conta! O Serializador de mudança não é valido")
    serializer.save()
    
  def balance(self):
    return self.account.balance