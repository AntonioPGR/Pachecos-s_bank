from accounts.models import AccountModel
from accounts.serializers import AccountSerializer
from django.http import JsonResponse


# @csrf_exempt
def accounts_list(request):
  if request.method == "GET":
    accounts = AccountModel.objects.all()
    serializer = AccountSerializer(accounts, many=True)
    return JsonResponse(serializer.data, safe=False)