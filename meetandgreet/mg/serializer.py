from rest_framework import serializers
from .models import BookingNoAccount, SearchAirport, Service


class ServiceSerializer(serializers.HyperlinkedModelSerializer):
    """Сериализация списка всех услуг"""

    class Meta:
        model = Service  # указываем модель, которую хотим сериализовать
        fields = ('name', 'desc', 'price')  # явно прописываем поля, которые хотим сериализовать


class SearchAirportSerializer(serializers.HyperlinkedModelSerializer):
    """Сериализация списка всех аэропортов"""
    service = ServiceSerializer(read_only=True, many=True)

    class Meta:
        model = SearchAirport  # сериализуем модель SearchAirport
        exclude = ("time_add", "time_update")  # все поля, кроме этих


class BookingSerializer(serializers.HyperlinkedModelSerializer):
    """Сериализация списка всех бронирований"""
    # сериализуем модель SearchAirport
    airport = serializers.PrimaryKeyRelatedField(queryset=SearchAirport.objects.all(), many=True)
    # сериализуем модель Service
    service = serializers.PrimaryKeyRelatedField(queryset=Service.objects.all(), many=True)

    class Meta:
        model = BookingNoAccount  # сериализуем модель BookingNoAccount
        fields = ('customer_name', 'phone_number', 'email', 'airport', 'flight', 'booking_date',
                  'number_of_passengers', 'service', 'note')  # явно прописываем поля, которые хотим сериализовать


class FastBookingSerializer(serializers.ModelSerializer):
    """Сериализация списка всех бронирований быстрой заявки"""
    airport_list = SearchAirportSerializer(many=True, read_only=True)
    service_list = ServiceSerializer(many=True, read_only=True)

    class Meta:
        model = FastBooking
        fields = ('customername', 'phone_number', 'email', 'airport_list', 'flight', 'booking_date', 'service_list')
        depth = 1
