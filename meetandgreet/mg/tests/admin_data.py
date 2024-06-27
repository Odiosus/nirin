BASE_URL = "http://127.0.0.1:8000/api/v1/"
# BASE_URL = "https://nirin-backend.vercel.app/api/v1"
GET_AIRPORTS = "airports/"
BASE_URL_ADMIN = "http://127.0.0.1:8000/admin/mg/"
SERVICE = "service/"
AIRPORTS = "searchairport/"
BOOKING_NO_ACCOUNT = "bookingnoaccount/"
LOGIN = "login/?next=/admin/"

XPATH_LOGIN_NAME = "//input[@name='username']"
XPATH_LOGIN_PASSWORD = "//input[@name='password']"
XPATH_LOGIN_BUTTON = "//button[contains(text(),'Войти')]"

XPATH_LOGOFF_BUTTON = "//button[contains(text(),'Выйти')]"


XPATH_AIRPORTS_BUTTON_ADD = "//a[@href='/admin/mg/searchairport/add/']"
XPATH_AIRPORTS_INPUT_NAME = "//input[@name='airport_name']"
XPATH_AIRPORTS_INPUT_IATA = "//input[@name='iata']"
XPATH_AIRPORTS_INPUT_COUNTRY = "//input[@name='country']"
XPATH_AIRPORTS_INPUT_CITY = "//input[@name='city']"
XPATH_AIRPORTS_PANEL_SERVICES = "//div[@data-target='#услуги-tab']"    # Панель Услуги
XPATH_AIRPORTS_INPUT_SERVICE = "//select[@name='service']/following::span"
XPATH_AIRPORTS_LIST_SERVICES = "//ul[@id='select2-id_service-results']/child::li"   # Список Услуг
XPATH_BUTTON_SAVE = "//input[@name='_save']"

AIRPORT_NAME = "Образец"
AIRPORT_CITY = "Город"
AIRPORT_COUNTRY = "Россия"
AIRPORT_IATA = "OBR"
SERVICE_NAME = "Meeting"
SERVICE_DESCR = "Встреча в аэропорту"
SERVICE_PRICE = 100

XPATH_AIRPORTS_NAME_SELECT = "//span[@role='textbox']"  # Поле Название аэропорта
XPATH_AIRPORTS_BUTTON_FIND = "//button[contains(text(),'Найти')]" # Кнопка Найти
XPATH_AIRPORTS_CHECK = "//a[contains(text(),'Образец')]"
XPATH_AIRPORTS_ACTION = "//select[@name='action']"  # Список выбора действия
XPATH_AIRPORTS_DELETE = "//a[contains(text(),'Удалить')]"   # Кнопка Удалить
XPATH_AIRPORTS_BUTTON_CONFIRM = "//input[@value='Да, я уверен']"   # Кнопка подтверждения



