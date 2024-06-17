from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import BookingNoAccount, SearchAirport, Service
from .serializer import BookingSerializer, SearchAirportSerializer, ServiceSerializer
from rest_framework.response import Response
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveAPIView


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