from django.urls import path
from investments import views


urlpatterns = [
  path('', views.InvestmentsView.as_view(), name='investments')
]
