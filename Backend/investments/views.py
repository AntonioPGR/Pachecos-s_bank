from investments.models import Investment
from investments.serializer import InvestmentSerializer
from utils.json_response import json_response
from rest_framework.views import APIView, Request


class InvestmentsView(APIView):
  def get(self, request:Request):
    # try:
      if request.user.is_anonymous:
        return json_response("Não é possivel acessar o saldo sem estar logado")
      investments = Investment.objects.filter(owner=request.user) or []
      serializer_data = InvestmentSerializer(investments, many=True).data
      value = 0
      # for element in serializer_data:
      #   value += element.value
    # except:
    #   return json_response("Algum erro inesperado ocorreu ao tentar retornar seu saldo! [requests_handler/views -> AccountView.get]")
    # else:
      return json_response(serializer_data)
