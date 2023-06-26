from django.urls import path
from statments import views


urlpatterns = [
  path('', views.statments_list)
]
