from django.urls import path

from . import views

app_name = 'mg'

urlpatterns = [
    path('service/', views.ServiceListView.as_view()),  # доступ к списку всех
    path('service/<int:pk>/', views.ServiceDetailView.as_view()),  # доступ к одной услуге
    path('airport/', views.AirportListView.as_view()),  # доступ к списку всех аэропортов
    path('booking/', views.BookingCreateApiView.as_view()),  # доступ к форме создания брони
]
