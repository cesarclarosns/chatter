from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    """
    AbstractUser contains the following fields:
        username
        first_name
        last_name
        email
        password
        last_login
        date_joined
    """

    profile_picture = models.ImageField()
    phone_number = models.IntegerField()
    birthdate = models.IntegerField()
    bio = models.TextField()
    private = models.BooleanField()
