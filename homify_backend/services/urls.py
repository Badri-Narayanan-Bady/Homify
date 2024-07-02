# services/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ServiceProviderViewSet
from . import views

router = DefaultRouter()
router.register(r'service-providers', ServiceProviderViewSet)

urlpatterns = [
    path('register/', views.register, name='register'),
    path('auth/login/', views.login, name='login'),
    path('auth/logout/', views.user_logout, name='user_logout'),
    path('api/', include(router.urls)),
    path('service-providers/register/', views.register_service_provider, name='register_service_provider'),
    path('service-requests/create/', views.create_service_request, name='create_service_request'),
]
