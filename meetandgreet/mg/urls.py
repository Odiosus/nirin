from django.urls import path

from . import views

app_name = 'mg'

urlpatterns = [
    path('service/', views.ServiceListView.as_view()),  # доступ к списку всех услуг
    path('service/<int:pk>/', views.ServiceDetailView.as_view()),  # доступ к одной услуге
    path('airport/', views.AirportListView.as_view()),  # доступ к списку всех аэропортов
    path('booking/', views.BookingCreateApiView.as_view()),  # создание полного бронирования
    path('fast_booking/', views.FastBookingCreateApiView.as_view())  # создание быстрого бронирования
]
