from django.shortcuts import get_object_or_404

from .models import BookingNoAccount, SearchAirport, Service, FastBooking
from .serializer import (
    BookingSerializer,
    SearchAirportSerializer, ServiceSerializer, FastBookingSerializer
)
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import (
    ListAPIView,
    CreateAPIView,
    RetrieveAPIView,
)
from rest_framework.permissions import (
    IsAuthenticated,
    IsAdminUser
)
from urllib.parse import unquote
import json


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


class BookingCreateApiView(CreateAPIView):
    """
    APIView для создания новой записи бронирования без аккаунта.
    """
    serializer_class = BookingSerializer  # Используем BookingSerializer для сериализации данных
    queryset = BookingNoAccount.objects.all()  # Выбираем все записи BookingNoAccount

    def create(self, request, *args, **kwargs):
        """
        Функция для создания новой записи бронирования без аккаунта.
        """
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)  # Проверка данных на валидность

        data = serializer.validated_data

        # Создание новой записи BookingNoAccount
        new_res = BookingNoAccount.objects.create(
            customername=data["customername"],
            phone_number=data["phone_number"],
            email=data["email"],
            flight=data["flight"],
            booking_date=data["booking_date"],
            numberofpassengers=data["numberofpassengers"],
            note=data.get("note", "")  # Используем get для обработки необязательного поля
        )

        # Добавление аэропортов к бронированию
        for airport_name in data['airport']:
            airport_obj = SearchAirport.objects.get(airport_name=airport_name)
            new_res.airport.add(airport_obj)

        # Добавление услуг к бронированию
        for service_name in data['service']:
            service_obj = Service.objects.get(name=service_name)
            new_res.service.add(service_obj)

        new_res.save()  # Сохранение новой записи
        serializer = BookingSerializer(new_res)  # Сериализация новой записи для ответа
        return Response(serializer.data)  # Возвращаем ответ с данными новой записи


class FastBookingCreateApiView(CreateAPIView):
    """Вывод создание новой быстрой заявки"""
    serializer_class = FastBookingSerializer  # сериализуем данные
    queryset = FastBooking.objects.all()  # выбираем все записи быстрой заявки

    def create(self, request, *args, **kwargs):
        """Функция создания новой быстрой заявки"""
        response = {}
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        headers = self.get_success_headers(serializer.data)
        response['data'] = serializer.data
        response['response'] = "OK"

        data = request.data

        new_res = FastBooking.objects.create(
            customername=data.get("customername"),
            phone_number=data.get("phone_number"),
            email=data.get("email"),
            flight=data.get("flight"),
            booking_date=data.get("booking_date"),
        )

        if 'airport' in request.data:
            for airport in request.data['airport']:
                airport_obj = SearchAirport.objects.get(airport_name=airport['airport_name'])
                new_res.airport.add(airport_obj)

        if 'service' in request.data:
            for service in request.data['service']:
                service_obj = Service.objects.get(name=service['name'])
                new_res.service.add(service_obj)

        serializer = FastBookingSerializer(new_res)

        return Response(serializer.data)