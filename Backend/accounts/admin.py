from django.contrib import admin
from accounts.models import Account

class AccountAdmin(admin.ModelAdmin):
  model = Account
  list_display = ('owner', 'balance', )
  search_fields = ('owner__email', )


admin.site.register(Account, AccountAdmin)