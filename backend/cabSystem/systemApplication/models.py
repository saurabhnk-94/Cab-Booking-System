from django.db import models
# from django.dispatch import receiver
# from django.db.models.signals import post_save


class UserModel(models.Model):
    """
    Created the user model!!
    username is Unique.
    """
    username = models.CharField(max_length=50, unique=True, help_text="Name must be unique and Enter your name")
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.username


class DriverModel(models.Model):
    """
    Created the Driver model!!
    Driver name is Unique.
    """
    drivername = models.CharField(max_length=50, unique=True, help_text="Name must be unique")
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.drivername


class RideDetails(models.Model):
    """
    Ride details using user and driver as foreign key.
    driver
    """
    REQUESTED = "RE"
    ACCEPTED = "AC"
    DONE = "DO"
    RIDE_CHOICES = [
        (REQUESTED, "Requested"),
        (ACCEPTED, "Accepted"),
        (DONE, "Done")
    ]

    user = models.ForeignKey(UserModel, on_delete=models.CASCADE, help_text="Select the user.")
    driver = models.ForeignKey(DriverModel, on_delete=models.CASCADE, blank=True, null=True, help_text="Select the driver and it can be left null while accessing through the user.")
    ride_created = models.DateTimeField(auto_now_add=True)
    status = models.CharField(choices=RIDE_CHOICES, default=DONE, max_length=2, help_text="Select your choices for a particular user")

    def __str__(self):
        return "Ride of {} and {}".format(self.user, self.driver)


