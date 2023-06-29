from accounts.models import Account
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.views import Request
from models.base_api_view import BaseAPIView


class AccountView(BaseAPIView):
  def get(self, request:Request):
    try:
      balance = Account.objects.get(owner=request.user).balance
    except ObjectDoesNotExist:
      Account.objects.create(owner=request.user, balance=0)
      balance = Account.objects.get(owner=request.user).balance
    except:
      return self.http_responses.internal500("Algum erro inesperado ocorreu ao tentar retornar seu saldo! [requests_handler/views -> AccountView.get]")
    else:
      return self.http_responses.ok200({ "value": balance})
  