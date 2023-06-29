from rest_framework.serializers import ModelSerializer
from investments.models import Investment
from rest_framework.serializers import ValidationError


class InvestmentSerializer(ModelSerializer):
  class Meta:
    model = Investment
    fields = '__all__'
    
  def clean_value(self):
    value = self.cleaned_data.get('value')
    if value == 0:
      raise ValidationError("The investment's amount cannot be zero.")
    return value
    