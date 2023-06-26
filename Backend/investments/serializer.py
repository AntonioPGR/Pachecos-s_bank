from rest_framework.serializers import ModelSerializer
from investments.models import InvestmentModel


class InvestmentSerializer(ModelSerializer):
  class Meta:
    model = InvestmentModel
    fields = '__all__'
    