from django.urls import path
from users import views

urlpatterns = [
  path('login/', views.UserLoginView.as_view(), name='login'),
  path('register/', views.UserRegisterView.as_view(), name='register'),
]
