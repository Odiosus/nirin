from rest_framework import serializers
from .models import (
    BookingNoAccount, Airport, Service
)
import json


def attempt_json_deserialize(data, expect_type=None):
    try:
        data = json.loads(data)
    except (TypeError, json.decoder.JSONDecodeError):
        pass

    if expect_type is not None and not isinstance(data, expect_type):
        raise ValueError(f"Got {type(data)} but expected {expect_type}.")

    return data


class AirportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Airport
        fields = '__all__'

    def create(self, validated_data):
        return super().create(self.name)


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'

    def create(self, validated_data):
        return super().create(self.name)


class BookingSerializer(serializers.ModelSerializer):
    airport_list = AirportSerializer(many=True, read_only=True)
    service_list = ServiceSerializer(many=True, read_only=True)

    class Meta:
        model = BookingNoAccount
        fields = ('customername', 'phone_number', 'email', 'airport_list', 'flight', 'booking_date',
                  'numberofpassengers', 'service_list', 'note')
        depth = 1
