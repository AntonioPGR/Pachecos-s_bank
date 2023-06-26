from django.contrib import admin
from investments.models import Investment


class InvestmentAdmin(admin.ModelAdmin):
  model = Investment
  list_display = ('owner', 'value',)
  search_fields = ('owner__email',)
  
admin.site.register(Investment, InvestmentAdmin)
