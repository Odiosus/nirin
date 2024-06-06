from django.urls import path

from .views import (
    BookingCreateApiView, AirportView, ServiceView
)

app_name = 'mg'

urlpatterns = [
    path('airports/', AirportView.as_view(), name="airport_list"),
    path('services/', ServiceView.as_view(), name="service_list"),
    path('book/', BookingCreateApiView.as_view(), name='book_room'),
]
