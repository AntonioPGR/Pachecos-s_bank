from accounts.models import Account
from accounts.serializers import AccountSerializer
from django.http import JsonResponse
from rest_framework.views import APIView


# @csrf_exempt
class AccountsView(APIView):
  
  def get(self, request):
    accounts = Account.objects.all()
    serializer = AccountSerializer(accounts, many=True)
    return JsonResponse(serializer.data, safe=False)
