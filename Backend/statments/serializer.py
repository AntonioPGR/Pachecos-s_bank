from rest_framework.serializers import ModelSerializer
from statments.models import StatmentModel


class AccountSerializer(ModelSerializer):
  class Meta:
    model = StatmentModel
    fields = '__all__'