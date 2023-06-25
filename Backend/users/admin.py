from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from users.forms import CustomCreationUserForm, CustomChangeUserForm
from users.models import CustomUser

class CustomUserAdmin(UserAdmin):
  add_form = CustomCreationUserForm
  form = CustomChangeUserForm
  model = CustomUser
  list_display = ('email', 'name', 'is_staff', 'is_active')
  list_filter = ('is_staff', 'is_active')
  search_fields = ('email', 'name')
  ordering = ('is_staff', 'email')
  fieldsets = (
    (None, {"fields": ("email", "name", "birth_date", "password")}),
    ("Permissions", {"fields": ("is_staff", "is_active")})
  )
  add_fieldsets = (
    (None, {
      "classes": ("wide",),
      "fields": ("email", "name", "birth_date", "password1", "password2", "is_active","is_staff")
    }),
  )
  
admin.site.register(CustomUser, CustomUserAdmin)