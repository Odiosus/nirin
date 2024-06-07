import os, django
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "reservations.settings")
django.setup()
import datetime
from django.core.management.base import BaseCommand
from django.dispatch import receiver
from telegram import Bot, request, KeyboardButton, ReplyKeyboardMarkup
from telegram.ext import CommandHandler, MessageHandler, filters, Updater, CallbackContext
from bot_telegram.signals import feedback_data_ready
from bot_telegram.models import Feedback
from reservations import settings

white_list = [1780892295]
bot = Bot(token=settings.TELEGRAM_TOKEN)
updater = Updater(bot=bot, use_context=True)

button_list = [
    KeyboardButton('/help'),
    KeyboardButton('/week_feedback'),
    KeyboardButton('/last_people'),
]


def check_white_list(id):
    return True if id in white_list else False


def build_menu(buttons, n_cols):
    menu = [buttons[i: i + n_cols] for i in range(0, len(buttons), n_cols)]
    return menu


@receiver(signal=feedback_data_ready, sender='ready_data')
def handler_feedback(feedback_data, **kwargs):
    for id in white_list:
        bot.send_message(chat_id=id, text=feedback_data)


def start(update, context):
    if check_white_list(update.effective_chat.id):
        reply_markup = ReplyKeyboardMarkup(build_menu(button_list, 3), resize_keyboard=True)
        context.bot.send_message(chat_id=update.effective_chat.id, text='commands', reply_markup=reply_markup)


def help_commands(update, context):
    if check_white_list(update.effective_chat.id):
        text = f'/info - информация о последнем фидбэке\n/week_feedback - информация о фидбэках за прошлую неделю\n\
add_manager {{id менеджера}} - добавить менеджера'
        context.bot.send_message(chat_id=update.effective_chat.id, text=text)


def week_feedback(update, context):
    if check_white_list(update.effective_chat.id):
        text = ""
        now = datetime.datetime.today()
        last_week = datetime.timedelta(days=7)
        for people in list(Feedback.objects.filter(time_created__gte=now - last_week)):
            text += f"\nInfo: {people.full_name}: [{people.number}, {people.email}] Method: {people.contact_method}\n"
        context.bot.send_message(chat_id=update.effective_chat.id, text=text if text != "" else 'Empty')


def last_people(update, context):
    if check_white_list(update.effective_chat.id):
        people = list(Feedback.objects.filter(time_created__lte=datetime.datetime.today()))[-1]
        text = f"\nInfo: {people.full_name}: [{people.number}, {people.email}] Method: {people.contact_method}\n"
        context.bot.send_message(chat_id=update.effective_chat.id, text=text)


def add_manager(update, context):
    if check_white_list(update.effective_chat.id) and update.message.text.startswith('add_manager'):
        try:
            id_manager = update.message.text.split(' ')
            white_list.append(int(id_manager[1]))
            context.bot.send_message(chat_id=update.effective_chat.id, text='Менеджер добавлен!')
        except ValueError:
            text = f'{id_manager[1]} не является id пользователя'
            context.bot.send_message(chat_id=update.effective_chat.id, text=text)
        except IndexError:
            context.bot.send_message(chat_id=update.effective_chat.id, text='Неверное число параметров')


def add_handlers(updater):
    dp = updater.dispatcher
    dp.add_handler(CommandHandler('start', start))
    dp.add_handler(CommandHandler('help', help_commands))
    dp.add_handler(CommandHandler('last_people', last_people))
    dp.add_handler(CommandHandler('week_feedback', week_feedback))
    dp.add_handler(MessageHandler(Filters.text & ~Filters.command, add_manager))


class Command(BaseCommand):
    help = "Телеграм бот"

    def handle(self, *args, **kwargs):
        add_handlers(updater)
        updater.start_polling()
