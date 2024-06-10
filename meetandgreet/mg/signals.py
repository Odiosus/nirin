from django.db.models.signals import post_save
from django.dispatch import receiver, Signal
from .models import Feedback


feedback_data_ready = Signal()
feedback_data_ready.providing_args = ['feedback_data']


@receiver(post_save, sender=Feedback)
def post_save_feedback(**kwargs):
    instance = kwargs.get('instance')
    text = f'Info: {instance.full_name}: [{instance.number}, {instance.email}]\nMethod: {instance.contact_method}'
    feedback_data_ready.send(sender='ready_data', feedback_data=text)
