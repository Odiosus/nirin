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
    airport_list = SearchAirportSerializer(many=True, read_only=True)
    service_list = ServiceSerializer(many=True, read_only=True)

    class Meta:
        model = BookingNoAccount
        fields = ('customername', 'phone_number', 'email', 'airport_list', 'flight', 'booking_date',
                  'numberofpassengers', 'service_list', 'note')
        depth = 1
