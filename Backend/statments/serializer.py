from rest_framework.serializers import ModelSerializer
from statments.models import Statment


class AccountSerializer(ModelSerializer):
  class Meta:
    model = Statment
    fields = '__all__'