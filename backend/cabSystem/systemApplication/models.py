from django.db import models


class UserModel(models.Model):
    """
    Created the user model!!
    """
    first_name = models.CharField(max_length=50, unique=True, help_text="Name must be unique")
    last_name = models.CharField(max_length=50, null=True, blank=True)
    age = models.IntegerField(default=18)
    contact_number = models.CharField(max_length=10)
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "{} {}".format(self.first_name, self.last_name)


class DriverModel(models.Model):
    """
    Created the Driver model!!
    """
    first_name = models.CharField(max_length=50, unique=True, help_text="Name must be unique")
    last_name = models.CharField(max_length=50, null=True, blank=True)
    age = models.IntegerField(default=18)
    contact_number = models.CharField(max_length=10)
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "{} {}".format(self.first_name, self.last_name)


class RideDetails(models.Model):
    """
    Ride details using user and driver as foreign key.
    """
    user = models.ForeignKey(UserModel, on_delete=models.CASCADE, help_text="Select the user.")
    driver = models.ForeignKey(DriverModel, on_delete=models.CASCADE, help_text="Select the driver.")
    date_created = models.DateTimeField(auto_now_add=True)
    