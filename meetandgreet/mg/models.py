from django.db import models
from django.contrib.auth.models import User


class Category(models.Model):
    category_name = models.CharField(max_length=30)

    def __str__(self):
        return self.category_name


class Customer(models.Model):
    customer = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.customer


class Service(models.Model):
    name = models.CharField(max_length=200, null=True)
    desc = models.CharField(max_length=3, null=True)
    price = models.DecimalField(max_digits=6, decimal_places=2)

    def __str__(self):
        return self.name


class Terminal(models.Model):
    name = models.CharField(max_length=200, null=True)

    def __str__(self):
        return self.name


class Airport(models.Model):
    airport_name = models.CharField(max_length=200, null=True)
    iata = models.CharField(max_length=3, null=True)
    country = models.CharField(max_length=200, null=True)
    city = models.CharField(max_length=200, null=True)
    terminals = models.ManyToManyField(Terminal)
    service = models.ManyToManyField(Service)

    def __str__(self):
        return self.airport_name


class BookingNoAccount(models.Model):
    customername = models.CharField(max_length=200, null=True)
    phone_number = models.CharField(max_length=14, null=True)
    email = models.EmailField()
    airport = models.ManyToManyField(Airport, null=True)
    flight = models.CharField(max_length=200, null=True)
    booking_date = models.DateTimeField(auto_now_add=True)
    numberofpassengers = models.IntegerField(null=True)
    service = models.ManyToManyField(Service, null=True)
    note = models.CharField(max_length=500, null=True)

    def __str__(self):
        return self.customername
