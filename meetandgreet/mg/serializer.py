from rest_framework import serializers
from .models import (
    BookingNoAccount, SearchAirport, Service
)
import json


class ServiceSerializer(serializers.ModelSerializer):
    """Сериализация списка всех услуг"""

    class Meta:
        model = Service  # указываем модель, которую хотим сериализовать
        fields = ('name', 'desc', 'price')  # явно прописываем поля, которые хотим сериализовать

    # def create(self, validated_data):
    #     return super().create(self.name)


class SearchAirportSerializer(serializers.ModelSerializer):
    """Сериализация списка всех аэропортов"""
    service = ServiceSerializer(read_only=True, many=True)

    class Meta:
        model = SearchAirport  # сериализуем модель SearchAirport
        exclude = ("time_add", "time_update")  # все поля, кроме этих

    # def create(self, validated_data):
    #     return super().create(self.name)


class BookingSerializer(serializers.ModelSerializer):
    """Сериализация списка всех бронирований"""
    airport = SearchAirportSerializer(many=True, read_only=True)  # сериализуем модель SearchAirport
    service = ServiceSerializer(many=True, read_only=True)  # сериализуем модель Service

    class Meta:
        model = BookingNoAccount  # сериализуем модель BookingNoAccount
        fields = ('customer_name', 'phone_number', 'email', 'airport', 'flight', 'booking_date',
                  'number_of_passengers', 'service', 'note')  # явно прописываем поля, которые хотим сериализовать
