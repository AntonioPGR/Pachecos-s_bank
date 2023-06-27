from django.urls import path
from statments import views


urlpatterns = [
  path('', views.StatmentsView.as_view(), name='statments')
]
