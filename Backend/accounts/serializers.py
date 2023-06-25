from rest_framework import serializers
from accounts.models import AccountModel


class AccountSerializer(serializers.ModelSerializer):
  class Meta:
    model=AccountModel
    fields = ['id', 'owner', 'balance']