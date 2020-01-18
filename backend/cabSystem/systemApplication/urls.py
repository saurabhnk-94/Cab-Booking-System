from django.urls import path

from rest_framework.routers import DefaultRouter

from .views import UserViewSet, DriverViewSet, RideViewSet

router = DefaultRouter()
router.register(r'users',UserViewSet, basename="users")
router.register(r"drivers", DriverViewSet, basename="drivers")
router.register(r'ridedetails', RideViewSet, basename="ride-details")
urlpatterns = router.urls
