from statments.serializer import StatmentSerializer
from statments.models import Statment
from rest_framework.serializers import ValidationError
from rest_framework.views import Request
from models.base_api_view import BaseAPIView

class StatmentsView(BaseAPIView):
  
  def get(self, request:Request):
    try:
      statments = Statment.objects.filter(owner=request.user)
      serializer_data = StatmentSerializer(statments, many=True).data
      return_data = self.removeOwnerFromStatments(serializer_data)
    except:
      return self.http_responses.internal500("Algum erro inesperado ocorreu ao tentar retornar seu saldo!")
    else:
      return self.http_responses.ok200(return_data)
  
  def post(self, request:Request):
    try:
      serializer = self.createSerializerFromRequest(request)
      if not serializer.is_valid():
        raise ValueError
      serializer.save()
    except ValueError as error:
      return self.http_responses.badrequest400({
        'error': error.args[0]
      })
    except ValidationError as error:
      return self.http_responses.internal500({
        'error': error.args[0]
      })
    else:
      return self.http_responses.created201(serializer.data)
  
  def createSerializerFromRequest(self, request:Request):
    return StatmentSerializer(data={
      "value": request.data["value"],
      "owner": request.user,
      "description": request.data["description"]  
    })
  
  def removeOwnerFromStatments(self, statments):
    for element in statments:
      element.pop('owner', None)
    return statments