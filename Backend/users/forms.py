from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from users.models import CustomUser

class CustomCreationUserForm(UserCreationForm):
  class Meta:
    model = CustomUser
    fields = ('email', 'name', 'birth_date')
    
class CustomChangeUserForm(UserChangeForm):
  class Meta:
    model = CustomUser
    fields = ('email', 'name', 'birth_date')