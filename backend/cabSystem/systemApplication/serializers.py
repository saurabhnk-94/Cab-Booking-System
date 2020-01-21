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
    user = serializers.ReadOnlyField(source='user.username')
    driver = serializers.ReadOnlyField(source="driver.drivername")
    # user = UserModel()
    # driver = DriverModel()
    class Meta:
        model = RideDetails
        fields = ("id", "user", "driver", "ride_created", "status")

class RideCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = RideDetails
        fields = ("user","status",)

class RideUpdateSerializer(serializers.ModelSerializer):
    driver = DriverModel()
    class Meta:
        model = RideDetails
        fields = ("driver","status",)