from django.contrib import admin
from statments.models import StatmentModel


class StatmentAdmin(admin.ModelAdmin):
  model=StatmentModel
  list_display=('owner', 'value')
  search_fields=('owener__email',)
  
admin.site.register(StatmentModel,StatmentAdmin)