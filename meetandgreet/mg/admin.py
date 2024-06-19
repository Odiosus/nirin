from django.contrib import admin
from .models import SearchAirport, Service, BookingNoAccount, Feedback


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
    list_display = ('airport_name', 'iata', 'country', 'city', 'service_list')
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
            "description": "Этот раздел заполняется автоматически",
            'fields': ('time_add', 'time_update')
        }),
    )

    def service_list(self, obj):
        """Услуги для админки, указываем через запятую"""
        return ", ".join([s.name for s in obj.service.all()])

    service_list.short_description = 'Услуги'

    @admin.register(BookingNoAccount)
    class BookingNoAccountAdmin(admin.ModelAdmin):
        list_display = (
            'customer_name', 'phone_number', 'email', 'flight', 'booking_date', 'number_of_passengers', 'note',
            'service_list', 'airport_list',)
        list_filter = ('airport', 'flight', 'booking_date')
        search_fields = ('customer_name', 'service__name', 'phone_number', 'email')
        list_display_links = ('customer_name',)
        ordering = ['booking_date']
        readonly_fields = ('time_add', 'time_update')
        list_per_page = 10

        fieldsets = (
            ('Информация о бронировании', {
                'fields': (
                    'customer_name', 'phone_number', 'email', 'flight', 'booking_date',
                    'number_of_passengers')
            }),
            ('Выбор услуг и аэропортов', {
                'fields': ('service', 'airport')
            }),
            ('Примечания', {
                "description": "Указать примечание: терминал прибытия, особенности сопровождения и пр. (необязательно)",
                'fields': ('note',)
            }),
            ('Время добавления и обновления записи', {
                "description": "Этот раздел заполняется автоматически",
                'fields': ('time_add', 'time_update')
            }),
        )

        filter_horizontal = ('airport', 'service')

        def service_list(self, obj):
            """Услуги для админки, указываем через запятую"""
            return ", ".join([s.name for s in obj.service.all()])

        service_list.short_description = 'Услуги'

        def airport_list(self, obj):
            """Аэропорты для админки, указываем через запятую"""
            return ", ".join([s.airport_name for s in obj.airport.all()])

        airport_list.short_description = 'Аэропорты'

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


@admin.register(Feedback)
class FeedbackAdmin(admin.ModelAdmin):
    """
    Админка обратной связи
    """
    # поля, которые будут отображаться в админке
    list_display = ('name', 'phone_number', 'email', 'message', 'result', 'time_add', 'time_update')
    # поля, по которым будет производиться фильтрация
    list_filter = ('time_add', 'time_update')
    # поля, по которым будет производиться поиск
    search_fields = ('name', 'phone_number', 'email', 'message')
    # поля, которые используются в качестве ссылок для перехода в конкретную запись
    list_display_links = ('name', 'phone_number',)
    # сортировка: по дате добавления (от последней к первой)
    ordering = ['-time_add']
    # поля, которые нельзя редактировать в админке
    readonly_fields = ('name', 'phone_number', 'email', 'message', 'time_add', 'time_update',)
    # количество записей на странице (пагинация)
    list_per_page = 10
    # полей в админке (конкретная запись)
    fieldsets = (
        ('Обратная связь', {
            'fields': (
                'name', 'phone_number', 'email', 'message', 'result', 'time_add', 'time_update')
        }),
    )