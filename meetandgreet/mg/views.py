from django.shortcuts import get_object_or_404

from .models import BookingNoAccount, SearchAirport, Service
from .serializer import (
    BookingSerializer,
    SearchAirportSerializer, ServiceSerializer
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

        if 'airport' in self.request.data:
            for airport_data in self.request.data['airport']:
                airport = SearchAirport.objects.get(name=airport_data['name'])
                booking.airport.add(airport)

        if 'service' in self.request.data:
            for service_data in self.request.data['service']:
                service = Service.objects.get(name=service_data['name'])
                booking.service.add(service)
