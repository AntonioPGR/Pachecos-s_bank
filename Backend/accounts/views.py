from accounts.models import Account
from utils.json_response import json_response
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.views import APIView, Request


class AccountView(APIView):
  def get(self, request:Request):
    try:
      if request.user.is_anonymous:
        return json_response("Não é possivel acessar o saldo sem estar logado")
      balance = Account.objects.get(owner=request.user).balance
    except ObjectDoesNotExist:
      Account.objects.create(owner=request.user, balance=0)
      balance = Account.objects.get(owner=request.user).balance
    except:
      return json_response("Algum erro inesperado ocorreu ao tentar retornar seu saldo! [requests_handler/views -> AccountView.get]")
    else:
      return json_response({ "value": balance})
