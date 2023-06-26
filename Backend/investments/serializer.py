from rest_framework.serializers import ModelSerializer
from investments.models import Investment


class InvestmentSerializer(ModelSerializer):
  class Meta:
    model = Investment
    fields = '__all__'
    