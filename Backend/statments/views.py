from statments.serializer import StatmentSerializer
from statments.models import Statment
from rest_framework.views import Request
from models.baseAPIView import BaseAPIView
      

class StatmentsView(BaseAPIView):
  def removeOwnerFromStatments(self, statments):
    for element in statments:
      element.pop('owner', None)
    return statments
  
  def get(self, request:Request):
    try:
      statments = Statment.objects.filter(owner=request.user) or []
      serializer_data = StatmentSerializer(statments, many=True).data
      return_data = self.removeOwnerFromStatments(serializer_data)
    except:
      return self.http_responses.internal500("Algum erro inesperado ocorreu ao tentar retornar seu saldo!")
    else:
      return self.http_responses.ok200(return_data)
  
  def post(self, request:Request):
    try:
      serializer = StatmentSerializer(data={
        "value": request.data["value"],
        "owner": request.user,
        "description": request.data["description"]  
      })
      if not serializer.is_valid():
        raise ValueError
      serializer.save()
    except:
      return self.http_responses.badrequest400("algo estava errado na requisição")
    else:
      return self.http_responses.created201(serializer.data)