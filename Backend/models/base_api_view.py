from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from models.http_responses import HttpResponses

class BaseAPIView(APIView):
  http_responses = HttpResponses
  permission_classes = [IsAuthenticated, ]
  authentication_classes = [TokenAuthentication]
