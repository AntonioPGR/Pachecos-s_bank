from rest_framework.views import Request
from rest_framework.permissions import AllowAny
from models.base_api_view import BaseAPIView
from users.serializers import UsersSerializer


class UserLoginView(BaseAPIView):
  permission_classes = [AllowAny, ]
  
  def post(self, request:Request):
    return self.http_responses.ok200({
      'token': ""
    })
  

class UserRegisterView(BaseAPIView):
  permission_classes = [AllowAny, ]
  
  def post(self, request:Request):
    return self.http_responses.created201({})