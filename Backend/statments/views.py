from statments.serializer import StatmentSerializer
from statments.models import Statment
from utils.json_response import json_response
from rest_framework.views import APIView
      

class StatmentsView(APIView):
  def get(self, request):
    try:
      if request.user.is_anonymous:
        return json_response("Não é possivel acessar o saldo sem estar logado")
      statments = Statment.objects.filter(owner=request.user) or []
      serializer_data = StatmentSerializer(statments, many=True).data
      for element in serializer_data:
        element.pop('owner', None)
    except:
      return json_response("Algum erro inesperado ocorreu ao tentar retornar seu saldo! [requests_handler/views -> AccountView.get]")
    else:
      return json_response(serializer_data)
    