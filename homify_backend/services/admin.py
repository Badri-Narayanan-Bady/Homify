from django.contrib import admin
from .models import ServiceProvider, CustomUser, Service, ServiceRequest

# Register your models here.
admin.site.register(ServiceProvider)
admin.site.register(CustomUser)
admin.site.register(Service)
admin.site.register(ServiceRequest)
