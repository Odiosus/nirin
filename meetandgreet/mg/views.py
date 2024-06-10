from django.shortcuts import render
from django.http import HttpRequest

from .forms import FeedbackForm
from .models import Feedback

from django.shortcuts import get_object_or_404

from .models import BookingNoAccount, SearchAirport, Service
from .serializer import (
    BookingSerializer,
    AirportSerializer, ServiceSerializer
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


class AirportView(ListAPIView):
    serializer_class = AirportSerializer
    queryset = SearchAirport.objects.order_by('-id')


class ServiceView(ListAPIView):
    serializer_class = ServiceSerializer
    queryset = Service.objects.order_by('-id')


class BookingCreateApiView(CreateAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = BookingSerializer
    queryset = BookingNoAccount.objects.all()

    def create(self, request, *args, **kwargs):
        response = {}
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        headers = self.get_success_headers(serializer.data)
        response['data'] = serializer.data
        response['response'] = "OK"

        data = request.data

        new_res = BookingNoAccount.objects.create(customername=data["customername"],
                                                  phone_number=data["phone_number"],
                                                  email=data["email"],
                                                  flight=data['flight'],
                                                  booking_date=data['booking_date'],
                                                  numberofpassengers=data['numberofpassengers'],
                                                  note=data['note'], )

        print(request.data['airport'])

        for airport in request.data['airport']:
            airport_obj = SearchAirport.objects.get(airport_name=request.data['airport']['airport_name'])
            new_res.airport.add(airport_obj)

        for service in request.data['service']:
            service_obj = Service.objects.get(name=request.data['service']['name'])
            new_res.service.add(service_obj)

        serializer = BookingSerializer(new_res)

        return Response(serializer.data)


def feedback(request: HttpRequest, template_name='index.html'):
    if request.method == 'POST':
        form = FeedbackForm(request.POST or None, template_name)
        if form.is_valid():
            form_data = form.data
            full_name = form_data['full_name']
            number = form_data['number']
            email = form_data['email']
            contact_method = form_data['contact_method']
            Feedback.objects.create(full_name=full_name, number=number, email=email,
                                    contact_method=contact_method)

    return render(request, template_name=template_name, context={'form': FeedbackForm()})
