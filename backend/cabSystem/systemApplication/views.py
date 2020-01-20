from django.shortcuts import render
from django.shortcuts import get_object_or_404

from .serializers import UserSerializers, DriverSerializers, RideSerializer, RideCreateSerializer, RideUpdateSerializer
from .models import UserModel, DriverModel, RideDetails

from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status


class UserViewSet(viewsets.ViewSet):
    """
    Listing all the users
    """
    def list(self, request):
        queryset = UserModel.objects.all()
        serializer = UserSerializers(queryset, many=True)
        return Response(serializer.data)

    """
    To retrieve a particular user
    """

    def retrieve(self, request, pk=None):
        queryset = UserModel.objects.all()
        user = get_object_or_404(queryset, pk=pk)
        serializer = UserSerializers(user)
        return Response(serializer.data)

    """
    To create a new user
    """
    def create(self, request):
        serializer = UserSerializers(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED )


class DriverViewSet(viewsets.ViewSet):
    """
    Listing all the drivers
    """
    def list(self, request):
        queryset = DriverModel.objects.all()
        serializer = DriverSerializers(queryset, many=True)
        return Response(serializer.data)

    """
    To retrieve a particular driver
    """

    def retrieve(self, request, pk=None):
        queryset = DriverModel.objects.all()
        driver = get_object_or_404(queryset, pk=pk)
        serializer = DriverSerializers(driver)
        return Response(serializer.data)

    """
    To create a new driver
    """
    def create(self, request):
        serializer = DriverSerializers(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class RideViewSet(viewsets.ViewSet):
    """
    Listing all the ride lists
    """
    def list(self, request):
        queryset = RideDetails.objects.all()
        user = request.GET.get('user', None)
        driver = request.GET.get('driver', None)
        status = request.GET.get('status', None)
        if user is not None:
            queryset = queryset.filter(user__username=user)
        if driver is not None:
            queryset = queryset.filter(driver__drivername=driver)
        if status is not None:
            queryset = queryset.filter(status=status)
        serializer = RideSerializer(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        print("This is Create start", request.data)
        try:
            user = UserModel.objects.get(id=request.data['user'])
            print("Try block", user)
        except UserModel.DoesNotExist:
            print("Except block")
            return Response(status=status.HTTP_400_BAD_REQUEST)
        requested = RideDetails.objects.filter(user=user).filter(status='RE').count()
        accepted = RideDetails.objects.filter(user=user).filter(status='AC').count()
        # print("Queryset", len(queryset))
        if requested > 0:
            return Response("Already Requested", status=status.HTTP_226_IM_USED)
        if accepted > 0:
            return Response("Ride is ongoing", status=status.HTTP_403_FORBIDDEN)
        serializer = RideCreateSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def update(self, request, pk=None):
        ride = RideDetails.objects.get(id=pk)
        status = request.data.get('status', None)
        if status == 'AC' or status == 'DO':
            #This ensures only valid states are set, invalid states are ignored
            ride.status = status
        if status == 'AC':
            #Driver is set only while accepting the ride and at no other point
            driver_name = request.data.get('driver', None)
            if driver_name is not None:
                try:
                    driver = DriverModel.objects.get(drivername=driver_name)
                    ride.driver = driver
                except DriverModel.DoesNotExist:
                    return Response("Driver doesnot exist", status=status.HTTP_400_BAD_REQUEST)
        ride.save()




