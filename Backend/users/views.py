from rest_framework.views import Request
from rest_framework.permissions import AllowAny
from models.base_api_view import BaseAPIView
from django.contrib.auth import get_user_model
from rest_framework.authtoken.models import Token
from users.models import CustomUser
from users.serializers import UserSerializer


class UserLoginView(BaseAPIView):
  permission_classes = [AllowAny, ]
  
  def post(self, request:Request):
    try:
      email = request.data['email']
      password = request.data['password']
      user = get_user_model().objects.get(email=email)
      if not user.check_password(password):
        raise ValueError("Dados incorretos! verifique o email e senha digitada e tente novamente!")
      token = Token.objects.get_or_create(user=user)[0].key
    except Exception as e:
      return self.http_responses.badrequest400({"msg": e.args})
    else:
      return self.http_responses.ok200({"token":token})

class UserRegisterView(BaseAPIView):
  permission_classes = [AllowAny, ]
  
  def post(self, request:Request):
    try:
      CustomUser.objects.create(name=request.data["name"], email=request.data["email"], password=request.data["password"], birth_date=request.data["birth_date"])
    except Exception as e:
      return self.http_responses.badrequest400({"msg": e.args})
    else:
      return self.http_responses.created201("")