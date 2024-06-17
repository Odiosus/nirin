from django.urls import path

from . import views
from .views import SearchAirportViewSet

app_name = 'mg'

urlpatterns = [
    path('service/', views.ServiceListView.as_view()),  # доступ к списку всех
    path('service/<int:pk>/', views.ServiceDetailView.as_view()),  # доступ к одной услуге
    path('airport/', views.AirportListView.as_view()),  # доступ к списку всех аэропортов
    path('booking/', views.BookingCreateApiView.as_view()),  # доступ к форме создания брони
    path('airports/', SearchAirportViewSet.as_view({'get': 'list'})),  # доступ к списку всех аэропортов
    path('fast_booking/', views.FastBookingCreateApiView.as_view())  # создание быстрого бронирования
]
