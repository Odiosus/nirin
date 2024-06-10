from django.forms import ModelForm, TextInput, EmailInput, NumberInput, Textarea

from .models import Feedback


class FeedbackForm(ModelForm):
    class Meta:
        model = Feedback
        fields = ['full_name', 'email', 'number', 'contact_method']
        labels = {
            'full_name': '',
            'number': '',
            'email': '',
            'contact_method': ''}
        help_texts = {
            'full_name': '',
            'number': '',
            'email': '',
            'contact_method': ''}
        error_messages = {
            'full_name': {
                'max_length': 'Please enter no more than 100 characters.'},
            'number': {
                'max_length': 'Please enter no more than 20 characters.'}}
        widgets = {
            'full_name': TextInput(attrs={'class': 'contact-form', 'type': 'text', 'placeholder': 'Name / Surname'}),
            'number': NumberInput(attrs={'class': 'contact-form', 'type': 'tel', 'placeholder': 'Your Phone Number'}),
            'email': EmailInput(attrs={'class': 'contact-form', 'type': 'email', 'placeholder': 'Your Email'}),
            'contact_method': Textarea(attrs={'class': 'contact-form', 'placeholder': 'Preferred Contact Method'})}
