from django.db import models
from django.contrib.auth.models import User


class Category(models.Model):
    category_name = models.CharField(max_length=30, verbose_name='Категория')

    def __str__(self):
        return self.category_name

    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'


class Customer(models.Model):
    customer = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name='Клиент')

    def __str__(self):
        return self.customer

    class Meta:
        verbose_name = 'Клиент'
        verbose_name_plural = 'Клиенты'


class Service(models.Model):
    name = models.CharField(max_length=200, null=True, verbose_name='Услуга')
    desc = models.CharField(max_length=500, null=True, verbose_name='Описание')
    price = models.DecimalField(max_digits=6, decimal_places=2, verbose_name='Стоимость')
    time_add = models.DateTimeField(auto_now_add=True, verbose_name='Время добавления')
    time_update = models.DateTimeField(auto_now=True, verbose_name='Время изменения')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Услуга'
        verbose_name_plural = 'Услуги'


class Terminal(models.Model):
    name = models.CharField(max_length=200, null=True, verbose_name='Терминал')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Терминал'
        verbose_name_plural = 'Терминалы'


class Airport(models.Model):
    airport_name = models.CharField(max_length=200, null=True, verbose_name='Название аэропорта')
    iata = models.CharField(max_length=3, null=True, verbose_name='Код аэропорта')
    country = models.CharField(max_length=200, null=True, verbose_name='Страна')
    city = models.CharField(max_length=200, null=True, verbose_name='Город')
    terminals = models.ManyToManyField(Terminal, verbose_name='Терминал')
    service = models.ManyToManyField(Service, verbose_name='Услуга')
    time_add = models.DateTimeField(auto_now_add=True, verbose_name='Время добавления')
    time_update = models.DateTimeField(auto_now=True, verbose_name='Время изменения')

    def __str__(self):
        return self.airport_name

    class Meta:
        verbose_name = 'Аэропорт'
        verbose_name_plural = 'Аэропорты'


class BookingNoAccount(models.Model):
    customername = models.CharField(max_length=200, null=True, verbose_name='Имя')
    phone_number = models.CharField(max_length=14, null=True, verbose_name='Номер телефона')
    email = models.EmailField(verbose_name='Электронная почта')
    airport = models.ManyToManyField(Airport, null=True, verbose_name='Аэропорт')
    flight = models.CharField(max_length=200, null=True, verbose_name='Рейс')
    booking_date = models.DateTimeField(auto_now_add=True, verbose_name='Дата бронирования')
    numberofpassengers = models.IntegerField(null=True, verbose_name='Количество пассажиров')
    service = models.ManyToManyField(Service, null=True, verbose_name='Услуга')
    note = models.CharField(max_length=500, null=True, verbose_name='Примечание')
    time_add = models.DateTimeField(auto_now_add=True, verbose_name='Время добавления')
    time_update = models.DateTimeField(auto_now=True, verbose_name='Время изменения')

    def __str__(self):
        return self.customername

    class Meta:
        verbose_name = 'Бронирование без аккаунта'
        verbose_name_plural = 'Бронирования без аккаунта'
