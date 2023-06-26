from django.urls import path
from investments import views


urlpatterns = [
  path('', views.investments_list)
]
