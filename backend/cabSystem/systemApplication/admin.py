from django.contrib import admin
from .models import UserModel, DriverModel, RideDetails


@admin.register(UserModel)
class UserModelAdmin(admin.ModelAdmin):
    list_display = ('username', 'date_created', 'date_modified',)


@admin.register(DriverModel)
class DriverModelAdmin(admin.ModelAdmin):
    list_display = ('drivername',  'date_created',)


@admin.register(RideDetails)
class RideDetailsAdmin(admin.ModelAdmin):
    list_display = ('user', 'driver', 'ride_created', 'status')