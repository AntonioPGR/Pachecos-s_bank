from django.contrib import admin
from statments.models import Statment


class StatmentAdmin(admin.ModelAdmin):
  model=Statment
  list_display=('owner', 'value')
  search_fields=('owener__email',)
  
admin.site.register(Statment,StatmentAdmin)