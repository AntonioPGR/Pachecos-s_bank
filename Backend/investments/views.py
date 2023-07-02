from investments.models import Investment
from investments.serializer import InvestmentSerializer
from rest_framework.views import Request
from models.base_api_view import BaseAPIView
from accounts.actions import AccountActions
from models.errors import InsufficientBalance, InvalidWithraw


class InvestmentsView(BaseAPIView):
  
  def getTotalInvestmentsValue(self, serializer_data):
    invested_value = 0
    for element in serializer_data:
      invested_value += element["value"]
    current_value = invested_value * 1.1
    return {
      "current_value": current_value,
      "invested_value": invested_value
    }
  
  def get(self, request:Request):
    try:
      investments = Investment.objects.filter(owner=request.user) or []
      serializer_data = InvestmentSerializer(investments, many=True).data
      values = self.getTotalInvestmentsValue(serializer_data)
    except:
      return self.http_responses.internal500("Algum erro inesperado ocorreu ao tentar retornar seu saldo de investimento!")
    else:
      return self.http_responses.ok200(values)
  
  def post(self, request:Request):
    try:
      serializer = InvestmentSerializer(data={
        "value": request.data["value"],
        "owner": request.user
      })
      if not serializer.is_valid():
        raise ValueError(["Certifique-se que os valores passados estão corretos", serializer.error_messages])
      account_actions = AccountActions(serializer.validated_data['owner'])
      account_actions.addToAccountValue(-float(serializer.validated_data['value']))
      serializer.save()
    except ValueError as e:
      return self.http_responses.badRequest400(e.args)
    except InvalidWithraw as e:
      return self.http_responses.paymentRequired402("O valor do investimento não pode ser 0 ou negativo!")
    except InsufficientBalance as e:
      return self.http_responses.paymentRequired402("O saldo é insuficiente para o valor de investimento desejado!")
    else:
      return self.http_responses.created201(serializer.data)