from accounts import views
from django.urls import path

urlpatterns = [
  path('', views.AccountsView.as_view())
]
