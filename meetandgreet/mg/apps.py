from django.apps import AppConfig
from django.core.signals import request_finished


class ServiceAppConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'mg'
    verbose_name = 'Услуги "Meet + Greet"'

    def ready(self):
        from . import signals
        from .management.commands import botpolling

        request_finished.connect(signals.post_save_feedback)
        request_finished.connect(botpolling.handler_feedback)
