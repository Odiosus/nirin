from django.db import models


class Service(models.Model):
    """Модель таблицы Услуги, где хранятся данные об услугах.
    Поля: название услуги, описание услуги, стоимость услуги, время создания/изменения записи об услуге"""
    # название услуги: текстовое поле (200 знаков), обязательное для заполнения
    name = models.CharField(max_length=200, verbose_name='Услуга')
    # описание услуги: текстовое поле (500 знаков), обязательное для заполнения
    desc = models.CharField(max_length=500, verbose_name='Описание')
    # стоимость услуг: число с плавающей запятой (6 знаков до запятой и 2 знака после), обязательное для заполнения
    price = models.DecimalField(max_digits=6, decimal_places=2, verbose_name='Стоимость')
    # время создания записи: дата и время добавляются автоматически при создании записи
    time_add = models.DateTimeField(auto_now_add=True, verbose_name='Время добавления')
    # время изменения записи: дата и время изменяются автоматически при изменении записи
    time_update = models.DateTimeField(auto_now=True, verbose_name='Время изменения')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Услуга'
        verbose_name_plural = 'Услуги'


class SearchAirport(models.Model):
    """Модель таблицы Аэропорт, где хранятся данные об аэропортах.
    Поля: название аэропорта, код аэропорта, страна, город, список терминалов, список услуг,
    время создания/изменения записи об аэропорте"""
    # название аэропорта: текстовое поле (200 знаков), обязательное для заполнения
    airport_name = models.CharField(max_length=200, verbose_name='Название аэропорта')
    # код аэропорта: текстовое поле (3 знака), обязательное для заполнения
    iata = models.CharField(max_length=3, verbose_name='Код аэропорта')
    # страна: текстовое поле (200 знаков), обязательное для заполнения
    country = models.CharField(max_length=200, verbose_name='Страна')
    # город: текстовое поле (200 знаков), обязательное для заполнения
    city = models.CharField(max_length=200, verbose_name='Город')
    # # ❗️терминал: связь многие к многим
    # terminals = models.ManyToManyField(Terminal, verbose_name='Терминал')
    # услуга: связь многие к многим
    service = models.ManyToManyField(Service, verbose_name='Услуга', related_name='services')
    # время создания записи: дата и время добавляются автоматически при создании записи
    time_add = models.DateTimeField(auto_now_add=True, verbose_name='Время добавления')
    # время изменения записи: дата и время изменяются автоматически при изменении записи
    time_update = models.DateTimeField(auto_now=True, verbose_name='Время изменения')

    def __str__(self):
        return self.airport_name

    class Meta:
        verbose_name = 'Аэропорт'
        verbose_name_plural = 'Аэропорты'


class BookingNoAccount(models.Model):
    """
    Модель таблицы Бронирование без аккаунта, где хранятся данные о бронированиях без аккаунта.
    Поля: имя, номер телефона, электронная почта, аэропорт, рейс, дата бронирования, количество пассажиров,
    услуга, примечание, время создания/изменения записи о бронировании без аккаунта.
    """
    # Имя: текстовое поле (200 знаков), обязательное для заполнения
    customer_name = models.CharField(max_length=200, verbose_name='Имя клиента')
    # Номер телефона: текстовое поле (14 знаков), обязательное для заполнения
    phone_number = models.CharField(max_length=14, verbose_name='Номер телефона')
    # Электронная почта: текстовое поле (254 знаков), обязательное для заполнения
    email = models.EmailField(verbose_name='Электронная почта')
    # Аэропорт: связь многие к многим с таблицей Аэропорт, обязательное для заполнения
    airport = models.ManyToManyField(SearchAirport, verbose_name='Аэропорт')
    # Рейс: текстовое поле (200 знаков), обязательное для заполнения
    flight = models.CharField(max_length=200, verbose_name='Рейс')
    # Дата бронирования: дата и время выбирает пользователь, обязательное для заполнения
    booking_date = models.DateTimeField(verbose_name='Дата бронирования')
    # Количество пассажиров: числовое (целое) поле, обязательное для заполнения
    number_of_passengers = models.IntegerField(verbose_name='Количество пассажиров')
    # Услуга: связь многие к многим с таблицей Услуга, обязательное для заполнения
    service = models.ManyToManyField(Service, verbose_name='Услуга')
    # Примечание: текстовое поле (500 знаков), необязательное для заполнения, по умолч. None
    note = models.CharField(max_length=500, null=True, blank=True, default=None, verbose_name='Примечание')
    # Время создания записи: дата и время добавляются автоматически при создании записи
    time_add = models.DateTimeField(auto_now_add=True, verbose_name='Время добавления')
    # Время изменения записи: дата и время изменяются автоматически при изменении записи
    time_update = models.DateTimeField(auto_now=True, verbose_name='Время изменения')

    def __str__(self):
        return self.customer_name

    class Meta:
        verbose_name = 'Бронирование без аккаунта'
        verbose_name_plural = 'Бронирования без аккаунта'


class Feedback(models.Model):
    """
    Модель таблицы Обратная связь, где хранятся данные о поступившем от пользователей обратной связи,
    а также результате обработки и времени создания/изменения записи обратной связи.
    """
    # Имя: текстовое поле (200 знаков), обязательное для заполнения
    name = models.CharField(max_length=200, verbose_name='Имя')
    # Номер телефона: текстовое поле (14 знаков), обязательное для заполнения
    phone_number = models.CharField(max_length=14, verbose_name='Номер телефона')
    # Электронная почта: текстовое поле (254 знака), обязательное для заполнения
    email = models.EmailField(verbose_name='Электронная почта')
    # Сообщение: текстовое поле (500 знаков), обязательное для заполнения
    message = models.TextField(verbose_name='Сообщение')
    # Результат: текстовое поле (500 знаков), необязательное для заполнения, по умолч. None
    result = models.TextField(null=True, blank=True, default=None, verbose_name='Результат')
    # Время создания записи: дата и время добавляются автоматически при создании записи
    time_add = models.DateTimeField(auto_now_add=True, verbose_name='Время добавления')
    # Время изменения записи: дата и время изменяются автоматически при изменении записи
    time_update = models.DateTimeField(auto_now=True, verbose_name='Время изменения')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Обратная связь'
        verbose_name_plural = 'Обратная связь'