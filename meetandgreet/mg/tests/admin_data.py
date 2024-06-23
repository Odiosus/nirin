BASE_URL_ADMIN = "http://127.0.0.1:8000/admin/"
SERVICE = "mg/service/"
AIRPORTS = "mg/searchairport/"
BOOKING_NO_ACCOUNT = "mg/bookingnoaccount/"
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
XPATH_AIRPORTS_INPUT_SERVICE = "//span[@role='combobox']"   # Поле Услуга
# XPATH_AIRPORTS_INPUT_SERVICE = "//a[@id='add_id_service']"   # Поле Услуга
XPATH_AIRPORTS_LIST_SERVICES = "//ul[@id='select2-id_service-results']/child::li"   # Список Услуг
XPATH_BUTTON_SAVE = "//input[@name='_save']"
