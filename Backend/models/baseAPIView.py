from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from models.http_responses import HttpResponses

class BaseAPIView(APIView):
  permission_classes=[IsAuthenticated]
  http_responses = HttpResponses
