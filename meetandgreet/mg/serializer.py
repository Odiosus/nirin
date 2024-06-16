from rest_framework import serializers
from .models import (
    BookingNoAccount, SearchAirport, Service, FastBooking
)
import json


class SearchAirportSerializer(serializers.ModelSerializer):
    """
    Сериализатор для модели SearchAirport. Используется для представления данных об аэропортах.
    """
    class Meta:
        model = SearchAirport
        fields = '__all__'


class ServiceSerializer(serializers.ModelSerializer):
    """
    Сериализатор для модели Service. Используется для представления данных об услугах.
    """
    class Meta:
        model = Service
        fields = '__all__'


class BookingSerializer(serializers.ModelSerializer):
    """
    Сериализатор для модели BookingNoAccount. Включает поля для аэропортов и услуг как списки строк.
    """
    airport = serializers.ListField(
        child=serializers.CharField(max_length=200),
        write_only=True
    )
    service = serializers.ListField(
        child=serializers.CharField(max_length=200),
        write_only=True
    )
    airport_list = SearchAirportSerializer(many=True, read_only=True, source='airport')
    service_list = ServiceSerializer(many=True, read_only=True, source='service')

    class Meta:
        model = BookingNoAccount
        fields = ('customername', 'phone_number', 'email', 'airport', 'flight', 'booking_date',
                  'numberofpassengers', 'service', 'note', 'airport_list', 'service_list')
        depth = 1


class FastBookingSerializer(serializers.ModelSerializer):
    """Сериализация списка всех бронирований быстрой заявки"""
    airport_list = SearchAirportSerializer(many=True, read_only=True)
    service_list = ServiceSerializer(many=True, read_only=True)

    class Meta:
        model = FastBooking
        fields = ('customername', 'phone_number', 'email', 'airport_list', 'flight', 'booking_date', 'service_list')
        depth = 1
