from django.contrib import admin
from .models import SearchAirport, Service, BookingNoAccount  # Client, Terminal


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    """
    Зарегал модель в админке. Нужно доделать. Добавить филдсеты для эффектности.
    Протестить в связке с jazzmin
    """
    list_display = ('name', 'desc', 'price')
    list_filter = ('name', 'price', 'time_add', 'time_update')
    search_fields = ('name',)
    list_display_links = ('name',)
    ordering = ['-time_add']
    readonly_fields = ('time_add', 'time_update',)
    list_per_page = 10
    fieldsets = (
        (None, {
            'fields': ('name', 'price', 'desc', 'time_add', 'time_update')
        }),
    )

    # TODO: добавить функцию для отображения краткого описания услуги в админке
    # def short_desc_block_description_field(self, obj):
    #     """
    #     Функция для отображения краткого описания услуги в админке
    #     """
    #     if obj.desc_block_description:
    #         return obj.desc_block_description[:100] + '...' if len(
    #             obj.desc_block_description) > 100 else obj.desc_block_description
    #
    # short_desc_block_description_field.short_description = 'Краткое описание'


@admin.register(SearchAirport)
class SearchAirportAdmin(admin.ModelAdmin):
    """
    Зарегал модель в админке. Нужно доделать (см. связи м2м❗️). Добавить филдсеты для эффектности.
    Протестить в связке с jazzmin
    """
    list_display = ('airport_name', 'iata', 'country', 'city',)  # FIXME 'service' не выводится из-за связи м2м.
    list_filter = ('airport_name', 'iata', 'country', 'city', 'time_add', 'time_update')
    search_fields = ('airport_name', 'iata', 'country', 'city')
    list_display_links = ('airport_name', 'iata', 'country', 'city')
    ordering = ['-time_add']
    readonly_fields = ('time_add', 'time_update',)
    list_per_page = 10
    fieldsets = (
        ('Информация об аэропорте', {
            'fields': ('airport_name', 'iata', 'country', 'city')
        }),
        ('Услуги', {
            'fields': ('service',)
        }),
        ('Время добавления и обновления записи', {
            'fields': ('time_add', 'time_update')
        }),
    )


@admin.register(BookingNoAccount)
class BookingNoAccountAdmin(admin.ModelAdmin):
    """
    Зарегал модель в админке. Нужно доделать (см. связи м2м - airport, service). Добавить филдсеты для эффектности.
    Протестить в связке с jazzmin
    """
    list_display = ('customername', 'phone_number', 'email', 'flight', 'booking_date', 'numberofpassengers',
                    'note',)
    list_filter = ('airport', 'flight', 'booking_date',)
    search_fields = ('customername', 'service', 'phone_number', 'email',)
    list_display_links = ('customername',)
    ordering = ['-booking_date']
    readonly_fields = ('time_add', 'time_update',)
    list_per_page = 10
    fieldsets = (
        ('Информация о бронировании', {
            'fields': ('customername', 'phone_number', 'email', 'flight', 'booking_date', 'numberofpassengers')
        }),
        ('Примечания', {
            'fields': ('note',)
        }),
        ('Время добавления и обновления записи', {
            'fields': ('time_add', 'time_update')
        }),
    )

    # TODO: добавить функцию для отображения краткого описания примечания в админке
    # def short_note_block_description_field(self, obj):
    #     """
    #     Функция для отображения краткого описания примечания в админке
    #     """
    #     if obj.note_block_description_field:
    #         return obj.note_block_description_field[:100] + '...' if len(
    #             obj.note_block_description_field) > 100 else obj.note_block_description_field
    #
    # short_note_block_description_field.short_description = 'Краткое описание'
