from django.shortcuts import render
from django.shortcuts import get_object_or_404

from .serializers import UserSerializers, DriverSerializers, RideSerializer
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


