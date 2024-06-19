from rest_framework import serializers
from .models import BookingNoAccount, SearchAirport, Service, Feedback


class ServiceSerializer(serializers.HyperlinkedModelSerializer):
    """Сериализация списка всех услуг"""

    class Meta:
        model = Service  # указываем модель, которую хотим сериализовать
        fields = ('name', 'desc', 'price')  # явно прописываем поля, которые хотим сериализовать


class SearchAirportSerializer(serializers.HyperlinkedModelSerializer):
    """Сериализация списка всех аэропортов"""
    service = ServiceSerializer(read_only=True, many=True)

    class Meta:
        # сериализуем модель SearchAirport
        model = SearchAirport
        # явно прописываем поля, которые хотим сериализовать
        fields = ('airport_name', 'iata', 'country', 'city', 'service')


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


class FastBookingSerializer(serializers.HyperlinkedModelSerializer):
    """Сериализация списка быстрого бронирования"""

    class Meta:
        model = BookingNoAccount  # сериализуем модель BookingNoAccount
        fields = ('customer_name', 'phone_number', 'email', 'flight', 'booking_date',
                  'number_of_passengers', 'note')  # явно прописываем поля, которые хотим сериализовать


class FeedbackSerializer(serializers.HyperlinkedModelSerializer):
    """Сериализация обратной связи"""

    class Meta:
        # сериализуем модель Feedback
        model = Feedback
        # явно прописываем поля, которые хотим сериализовать
        fields = ('name', 'phone_number', 'email', 'message')