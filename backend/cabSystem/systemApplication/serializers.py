from rest_framework import serializers
from .models import UserModel, DriverModel, RideDetails


class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = ('id', "username",)


class DriverSerializers(serializers.ModelSerializer):
    class Meta:
        model = DriverModel
        fields = ("id", "drivername",)


class RideSerializer(serializers.ModelSerializer):
    user = UserModel()
    driver = DriverModel()
    class Meta:
        model = RideDetails
        fields = ("id", "user", "driver", "ride_created", "status")