from statments.models import StatmentModel
from statments.serializer import AccountSerializer
from django.http import JsonResponse


def statments_list(request):
  if request.method == 'GET':
    statments = StatmentModel.objects.all()
    serializer = AccountSerializer(statments, many=True)
    return JsonResponse(serializer.data, safe=False)
    