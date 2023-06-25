from django.contrib import admin
from accounts.models import AccountModel

class AccountAdmin(admin.ModelAdmin):
  model = AccountModel
  list_display = ('owner', 'balance', )
  search_fields = ('owner__email', )


admin.site.register(AccountModel, AccountAdmin)