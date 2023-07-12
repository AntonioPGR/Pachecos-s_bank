from rest_framework.views import Request
from rest_framework.permissions import AllowAny
from models.base_api_view import BaseAPIView
from django.contrib.auth import get_user_model
from rest_framework.authtoken.models import Token
from users.serializers import UserSerializer
from models.errors import InvalidData, WrongPassword, WrongEmail
from django.core.exceptions import ValidationError


class UserLoginView(BaseAPIView):
  permission_classes = [AllowAny, ]
  
  def post(self, request:Request):
    try:
      email = request.data['email']
      password = request.data['password']
      if not email or not password:
        raise InvalidData
      user = get_user_model().objects.get(email=email)
      if not user:
        raise WrongEmail("Dados incorretos! verifique o email e senha digitada e tente novamente!")
      if not user.check_password(password):
        raise WrongPassword("Dados incorretos! verifique o email e senha digitada e tente novamente!")
      token = Token.objects.get_or_create(user=user)[0].key
      
    except InvalidData:
      return self.http_responses.unprocessableEntity422({"msg": "Os parametros passados são invalidos! certifique-se que os dados são validos e seguem os formatos documentados na API"})
    
    except WrongPassword:
      return self.http_responses.unprocessableEntity422({"msg": "O email parece valido, mas a senha não está correta. Verifique a digitação e tente novamente!"})
    
    except WrongEmail:
      return self.http_responses.unprocessableEntity422({"msg": "O email é invalido. Verifique a digitação e tente novamente!"})
    
    except Exception as e:
      return self.http_responses.badRequest400({"msg": e.args})
    
    else:
      return self.http_responses.ok200({"token":token})

class UserRegisterView(BaseAPIView):
  permission_classes = [AllowAny, ]
  
  def post(self, request:Request):
    try:
      email = request.data['email']
      password = request.data['password']
      name = request.data['name']
      birth_date = request.data['birth_date']
      if not email or not password or not name or not birth_date:
        raise InvalidData
      serializer = UserSerializer(data=request.data)
      is_serializer_valid = serializer.is_valid()
      if not is_serializer_valid:
        raise ValidationError(serializer.errors)
      UserModel = get_user_model()
      UserModel.objects.create_user(email, password, name, birth_date)
      
    except InvalidData:
      return self.http_responses.unprocessableEntity422({"msg": "Os parametros passados são invalidos! certifique-se que os dados são validos e seguem os formatos documentados na API"})
    
    except ValidationError as e:
      error_message = e.args[0]
      if isinstance(error_message, dict):
        keys = list(error_message)
        error_message = error_message[keys[0]]
      if isinstance(error_message, list):
        error_message = error_message[0]
      return self.http_responses.badRequest400({"msg": error_message})
    
    except Exception as e:
      return self.http_responses.badRequest400({"msg": e.args[0]})
    
    else:
      return self.http_responses.created201("")