from django.contrib import admin
from django.urls import path, include

urlpatterns = [
  path('admin/', admin.site.urls),
  path('accounts/', include('accounts.urls'), name='accounts'),
  path('statments/', include('statments.urls'), name='statments'),
  path('investments/', include('investments.urls'), name='investments'),
  path('users/', include('users.urls'), name='users'),
]
