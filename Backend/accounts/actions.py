from rest_framework.serializers import ValidationError
from accounts.models import Account
from accounts.serializers import AccountSerializer


class AccountActions:
  
  @staticmethod
  def changeAccountValue(value:int, owner):
    account = Account.objects.get(owner=owner)    
    serializer = AccountSerializer(account, data={
      'balance': (account.balance + value),
      'owner': owner
    })
    if not serializer.is_valid():
      raise ValidationError("Erro ao mudar o valor da conta! O Serializador de mudança não é valido")
    serializer.save()
    
  @staticmethod
  def getAccountByOwner(owner):
    return Account.objects.get(owner=owner)    
    