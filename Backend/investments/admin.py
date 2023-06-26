from django.contrib import admin
from investments.models import InvestmentModel


class InvestmentAdmin(admin.ModelAdmin):
  model = InvestmentModel
  list_display = ('owner', 'value',)
  search_fields = ('owner__email',)
  
admin.site.register(InvestmentModel, InvestmentAdmin)
