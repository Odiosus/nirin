import os

from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import BookingNoAccount, SearchAirport, Service, Feedback
from .serializer import BookingSerializer, SearchAirportSerializer, ServiceSerializer, FastBookingSerializer, FeedbackSerializer
from rest_framework.response import Response
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveAPIView
from django.core.mail import send_mail


class ServiceListView(ListAPIView):
    """Вывод списка всех услуг"""
    serializer_class = ServiceSerializer  # сериализуем данные
    queryset = Service.objects.order_by('-id')  # выбираем все записи об услугах, сортируем по id


class ServiceDetailView(RetrieveAPIView):
    """Вывод одной услуги"""
    serializer_class = ServiceSerializer  # сериализуем данные
    queryset = Service.objects.all()  # выбираем все записи об услугах, но выводим 1 (RetrieveAPIView)


class AirportListView(ListAPIView):
    """Вывод списка всех аэропортов"""
    serializer_class = SearchAirportSerializer  # сериализуем данные
    queryset = SearchAirport.objects.order_by('-id')  # выбираем все записи об аэропортах, сортируем по id


class SearchAirportViewSet(viewsets.ModelViewSet):
    """Поиск по всем аэропортам"""
    queryset = SearchAirport.objects.all()  # выбираем все записи
    serializer_class = SearchAirportSerializer  # сериализуем данные
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]  # настройка фильтрации
    filterset_fields = ['country', 'city']  # указываем поля, по которым можно фильтровать TODO нужна ли фильтрация?
    search_fields = ['airport_name', 'iata', 'country', 'city']  # указываем поля, по которым можно искать


def send_email_notification(booking):
    """Отправка на почту уведомления о создании новой заявки"""
    subject = 'Поступила новая заявка'
    message = f'Поступила новая заявка.\n\nДетали:\n' \
              f'Имя клиента: {booking.customer_name}\n' \
              f'Номер телефона: {booking.phone_number}\n' \
              f'E-mail: {booking.email}\n' \
              f'Рейс: {booking.flight}\n' \
              f'Дата: {booking.booking_date}\n' \
              f'Количество пассажиров: {booking.number_of_passengers}\n' \
              f'Примечание: {booking.note}\n'
    recipient_list = [booking.email]
    send_mail(subject, message, os.getenv('SERVER_EMAIL'), recipient_list)


class BookingCreateApiView(CreateAPIView):
    """Вывод создания новой заявки"""
    serializer_class = BookingSerializer
    queryset = BookingNoAccount.objects.all()

    def create(self, request, *args, **kwargs):
        """Функция создания новой заявки"""
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        response_data = serializer.data
        return Response(response_data)

    def perform_create(self, serializer):
        """Функция, непосредственно создающая запись в базе данных"""
        data = serializer.validated_data
        booking = BookingNoAccount.objects.create(
            customer_name=data["customer_name"],
            phone_number=data["phone_number"],
            email=data["email"],
            flight=data['flight'],
            booking_date=data['booking_date'],
            number_of_passengers=data['number_of_passengers'],
            note=data.get('note')
        )

        booking.airport.set(data['airport'])
        booking.service.set(data['service'])

        # Отправка уведомления на почту
        send_email_notification(booking)


class FastBookingCreateApiView(CreateAPIView):
    """Вывод создание новой быстрой заявки"""
    serializer_class = FastBookingSerializer  # сериализуем данные
    queryset = BookingNoAccount.objects.all()  # выбираем все записи быстрой заявки

    def create(self, request, *args, **kwargs):
        """Функция создания новой быстрой заявки"""
        response = {}
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        headers = self.get_success_headers(serializer.data)
        response['data'] = serializer.data
        response['response'] = "OK"

        data = request.data

        new_res = BookingNoAccount.objects.create(
            customer_name=data.get("customer_name"),
            phone_number=data.get("phone_number"),
            email=data.get("email"),
            flight=data.get("flight"),
            booking_date=data.get("booking_date"),
            number_of_passengers=data['number_of_passengers'],
        )

        serializer = FastBookingSerializer(new_res)

        return Response(serializer.data)


class FeedbackCreateApiView(CreateAPIView):
    """Вывод создание обратной связи"""
    serializer_class = FeedbackSerializer
    queryset = Feedback.objects.all()

    @receiver(post_save, sender=Feedback)
    def send_feedback_notification(sender, instance, created, **kwargs):
        if created:
            subject = 'Новое сообщение обратной связи'
            message = f'Вы получили новое сообщение от {instance.name}. Текст сообщения: {instance.message}.'
            from_email = os.getenv('SERVER_EMAIL')
            recipient_list = ['suchkovmaks@gmail.com']
            send_mail(subject, message, from_email, recipient_list)