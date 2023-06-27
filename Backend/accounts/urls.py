from accounts import views
from django.urls import path

urlpatterns = [
  path('', views.AccountView.as_view(), name='accounts')
]
