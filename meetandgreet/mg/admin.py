from django.contrib import admin
from .models import (
    Airport,
Service,
BookingNoAccount
)


admin.site.register(Airport)
admin.site.register(Service)
admin.site.register(BookingNoAccount)
