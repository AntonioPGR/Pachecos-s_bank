from django.contrib import admin
from django.urls import path, include
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi


schema_view = get_schema_view(
  openapi.Info(
    title="Pacheco's Bank",
    default_version='v1',
    description="A simple bank aplicattion created to learn a bit more about tests",
    terms_of_service="https://www.google.com/policies/terms/",
    contact=openapi.Contact(email="antoninhopgr@gmail.com"),
    license=openapi.License(name="MIT license"),
  ),
  public=True,
  permission_classes=(permissions.AllowAny,),
)


urlpatterns = [
  path('admin/', admin.site.urls),
  path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
  path('accounts/', include('accounts.urls'), name='accounts'),
  path('statements/', include('statments.urls'), name='statments'),
  path('investments/', include('investments.urls'), name='investments'),
  path('users/', include('users.urls'), name='users'),
]
