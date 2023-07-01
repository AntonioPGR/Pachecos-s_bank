from statments.serializer import StatmentSerializer
from statments.models import Statment
from rest_framework.serializers import ValidationError
from rest_framework.views import Request
from models.base_api_view import BaseAPIView
from django.core.exceptions import ObjectDoesNotExist
from accounts.actions import AccountActions


class StatmentsView(BaseAPIView):
  
  def get(self, request:Request):
    try:
      statments = Statment.objects.filter(owner=request.user)
      serializer_data = StatmentSerializer(statments, many=True).data
      return_data = self.removeOwnerFromStatments(serializer_data)
    except ObjectDoesNotExist:
      return_data = []
    except Exception as e:
      return self.http_responses.internal500(e.args)
    else:
      return self.http_responses.ok200(return_data)
    
    
  def removeOwnerFromStatments(self, statments):
    for element in statments:
      element.pop('owner', None)
    return statments
  
  
  def post(self, request:Request):
    try:
      serializer = StatmentSerializer(data={
        "value": request.data["value"],
        "owner": request.user,
        "description": request.data["description"]  
      })
      if not serializer.is_valid():
        raise ValueError
      accountHandler = AccountActions(serializer.validated_data['owner'])
      accountHandler.addToAccountValue(serializer.validated_data['value'])
      serializer.save()
    except ValueError as error:
      return self.http_responses.badrequest400({
        'error': error.args
      })
    except ValidationError as error:
      return self.http_responses.internal500({
        'error': error.args
      })
    else:
      return self.http_responses.created201(serializer.data)
  