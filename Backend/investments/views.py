from django.http import JsonResponse
from investments.models import Investment
from investments.serializer import InvestmentSerializer


def investments_list(request):
  if request.method == 'GET':
    investments = Investment.objects.all()
    serializer = InvestmentSerializer(investments, many=True)
    return JsonResponse(serializer.data, safe=False)
