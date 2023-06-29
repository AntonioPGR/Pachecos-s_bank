from rest_framework.serializers import ModelSerializer
from users.models import CustomUser


class UserSerializer(ModelSerializer):
  class Meta:
    model = CustomUser
    fields = ['name', 'email', 'password', 'birth_date']