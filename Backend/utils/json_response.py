from typing import Any
from django.http import JsonResponse

def json_response(data:Any):
  return JsonResponse(data, safe=False)