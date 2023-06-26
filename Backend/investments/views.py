from django.http import JsonResponse
from investments.models import InvestmentModel
from investments.serializer import InvestmentSerializer


def investments_list(request):
  if request.method == 'GET':
    investments = InvestmentModel.objects.all()
    serializer = InvestmentSerializer(investments, many=True)
    return JsonResponse(serializer.data, safe=False)
