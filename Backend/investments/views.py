from investments.models import Investment
from investments.serializer import InvestmentSerializer
from rest_framework.views import Request
from models.baseAPIView import BaseAPIView

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
      return self.http_responses.internal500("Algum erro inesperado ocorreu ao tentar retornar seu saldo!")
    else:
      return self.http_responses.ok200(values)
  
  def post(self, request:Request):
    try:
      serializer = InvestmentSerializer(data={
        "value": request.data["value"],
        "owner": request.user
      })
      if not serializer.is_valid():
        raise ValueError
      serializer.save()
    except:
      return self.http_responses.badrequest400("Algo estava errado na requisição")
    else:
      return self.http_responses.created201(serializer.data)