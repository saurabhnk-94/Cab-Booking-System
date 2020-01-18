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

