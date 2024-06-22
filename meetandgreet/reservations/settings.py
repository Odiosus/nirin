import os
from datetime import timedelta
from pathlib import Path
from dotenv import find_dotenv, load_dotenv

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent
load_dotenv(find_dotenv())

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.getenv('SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['127.0.0.1', 'localhost']
SITE_ID = 1

# Application definition

INSTALLED_APPS = [
    'jazzmin',  # библиотека jazzmin — красоты админки невероятной для))
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'corsheaders',
    'rest_framework',
    'drf_yasg',
    'mg',
    'django_filters',  # для фильтрации в SearchAirportViewSet
    # 'accounts',
]

REST_FRAMEWORK = {
    'DEFAULT_SCHEMA_CLASS': 'rest_framework.schemas.coreapi.AutoSchema',
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.AllowAny',
    ),
    'DEFAULT_AUTHENTICATION_CLASSES': (
        # 'rest_framework.authentication.SessionAuthentication',
        'rest_framework.authentication.BasicAuthentication',
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
}

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'reservations.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'reservations.wsgi.application'

# Database
# https://docs.djangoproject.com/en/3.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

# Password validation
# https://docs.djangoproject.com/en/3.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# Internationalization
# https://docs.djangoproject.com/en/3.0/topics/i18n/

LANGUAGE_CODE = 'ru'

TIME_ZONE = 'Europe/Moscow'

USE_I18N = True

USE_L10N = True

USE_TZ = True

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.0/howto/static-files/

STATIC_URL = '/static/'
STATICFILES_DIRS = [os.path.join(BASE_DIR, 'static')]
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

CORS_ORIGIN_WHITELIST = [
    'http://localhost:3000',
    'http://localhost:8000',
]

# Token Configuration For JWT Authentication
SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(days=1),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=1),
    'ROTATE_REFRESH_TOKENS': False,
    'BLACKLIST_AFTER_ROTATION': True,

    'ALGORITHM': 'HS256',
    'SIGNING_KEY': SECRET_KEY,
    'VERIFYING_KEY': None,

    'AUTH_HEADER_TYPES': ('Bearer',),
    'USER_ID_FIELD': 'id',
    'USER_ID_CLAIM': 'user_id',

    'AUTH_TOKEN_CLASSES': ('rest_framework_simplejwt.tokens.AccessToken',),
    'TOKEN_TYPE_CLAIM': 'token_type',

    'SLIDING_TOKEN_REFRESH_EXP_CLAIM': 'refresh_exp',
    'SLIDING_TOKEN_LIFETIME': timedelta(days=1),
    'SLIDING_TOKEN_REFRESH_LIFETIME': timedelta(days=1),
}

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

"""
Настройки библиотеки Jazzmin. С комментариями по каждой настройке. Некоторые закомментированы. Будем тестить
"""
JAZZMIN_SETTINGS = {
    # заголовок окна (по умолчанию будет current_admin_site.site_title, если он отсутствует или отсутствует)
    "site_title": "Meet + Greet Admin",

    # Заголовок на экране входа в систему (максимум 19 символов) (по умолчанию — current_admin_site.site_header,
    # если он отсутствует или отсутствует)
    "site_header": "Meet + Greet",

    # Название бренда (максимум 19 символов) (по умолчанию current_admin_site.site_header,
    # если оно отсутствует или отсутствует)
    "site_brand": "Meet + Greet",

    # # Название бренда (максимум 19 символов) (по умолчанию current_admin_site.site_header,
    # # если оно отсутствует или отсутствует)
    # "site_logo": "nirinsite/staticfiles/img/logo.png",

    # # Логотип, используемый для вашего сайта, должен присутствовать в статических файлах,
    # # используется для логотипа формы входа (по умолчанию site_logo)
    # "login_logo": None,
    #
    # # Логотип для формы входа в темные темы (по умолчанию — login_logo)
    # "login_logo_dark": None,
    #
    # # Классы CSS, которые применяются к логотипу выше
    # "site_logo_classes": "img-circle",

    # # Относительный путь к значку вашего сайта, по умолчанию будет site_logo,
    # # если он отсутствует (в идеале 32x32 пикселей).
    # "site_icon": None,

    # Текст приветствия на экране входа в систему
    "welcome_sign": "Welcome to the Meet + Greet",

    # Авторские права в нижнем колонтитуле
    "copyright": "TOXIC TEAM",

    # # Список администраторов модели для поиска из панели поиска, панель поиска опускается, если она исключена
    # # Если вы хотите использовать одно поле поиска, вам не нужно использовать список,
    # # вы можете использовать простую строку
    # "search_model": ["auth.User", "auth.Group"],

    # Имя поля в модели пользователя, которое содержит аватар ImageField/URLField/Charfield или вызываемый объект,
    # который получает пользователя
    # "user_avatar": None,

    ############
    # Top Menu #
    ############

    # # Ссылки для размещения в верхнем меню
    # "topmenu_links": [
    #
    #     # Url that gets reversed (Permissions can be added)
    #     {"name": "Home", "url": "admin:index", "permissions": ["auth.view_user"]},
    #
    #     # external url that opens in a new window (Permissions can be added)
    #     {"name": "Support", "url": "https://github.com/farridav/django-jazzmin/issues", "new_window": True},
    #
    #     # model admin to link to (Permissions checked against model)
    #     {"model": "auth.User"},
    #
    #     # App with dropdown menu to all its models pages (Permissions checked against models)
    #     {"app": "books"},
    # ],

    #############
    # User Menu #
    #############

    # # Дополнительные ссылки для включения в меню пользователя в правом верхнем углу
    # # (тип URL-адреса «приложение» не разрешен)
    # "usermenu_links": [
    #     {"name": "Support", "url": "https://github.com/farridav/django-jazzmin/issues", "new_window": True},
    #     {"model": "auth.user"}
    # ],

    #############
    # Side Menu #
    #############

    # Отображать ли боковое меню
    "show_sidebar": True,

    # Стоит ли автоматически расширять меню
    "navigation_expanded": True,

    # # Скрыть эти приложения при создании бокового меню, например (аутентификация)
    # "hide_apps": [],
    #
    # # Скрыть эти модели при создании бокового меню (например, auth.user)
    # "hide_models": [],

    # # Список приложений (и/или моделей) для заказа в базовом боковом меню
    # # (не обязательно содержать все приложения/модели)
    # "order_with_respect_to": ["auth", "books", "books.author", "books.book"],

    # # Пользовательские ссылки для добавления в группы приложений, привязанные к названию приложения.
    # "custom_links": {
    #     "books": [{
    #         "name": "Make Messages",
    #         "url": "make_messages",
    #         "icon": "fas fa-comments",
    #         "permissions": ["books.view_book"]
    #     }]
    # },

    # # Пользовательские значки для приложений/моделей бокового меню.
    # # См. https://fontawesome.com/icons?d=gallery&m=free&v=5.0.0,5.0.1,5.0.10,5.0.11,5.0.12,5.0.13, 5.0.2,5.0.3,5.0.4,5.0.5,5.0.6,5.0.7,5.0.8,5.0.9,5.1.0,5.1.1,5.2.0,5.3.0,5.3. 1,5.4.0,5.4.1,5.4.2,5.13.0,5.12.0,5.11.2,5.11.1,5.10.0,5.9.0,5.8.2,5.8.1,5.7.2, 5.7.1,5.7.0,5.6.3,5.5.0,5.4.2
    # # для получения полного списка бесплатных классов значков версии 5.13.0
    # "icons": {
    #     "auth": "fas fa-users-cog",
    #     "auth.user": "fas fa-user",
    #     "auth.Group": "fas fa-users",
    # },
    # # Значки, которые используются, если они не указаны вручную
    # "default_icon_parents": "fas fa-chevron-circle-right",
    # "default_icon_children": "fas fa-circle",

    #################
    # Related Modal #
    #################
    # Используйте модальные окна вместо всплывающих окон (False по умолчанию)
    # "related_modal_active": True,

    #############
    # UI Tweaks #
    #############
    # # Относительные пути к пользовательским сценариям CSS/JS (должны присутствовать в статических файлах)
    # "custom_css": None,
    # "custom_js": None,
    # # Связывать ли шрифт с Fonts.googleapis.com (в противном случае используйте custom_css для указания шрифта)
    # "use_google_fonts_cdn": True,
    # Показывать ли настройщик пользовательского интерфейса на боковой панели
    "show_ui_builder": True,

    ###############
    # Change view #
    ###############
    # Render out the change view as a single form, or in tabs, current options are
    # - single
    # - horizontal_tabs (default)
    # - vertical_tabs
    # - collapsible
    # - carousel
    # Отображение представления изменений в виде одной формы или вкладок, текущие параметры
    # - одинокий
    # - горизонтальные_табы (по умолчанию)
    # - вертикальные_табы
    # - складной
    # - карусель
    "changeform_format": "collapsible",
    # # переопределить формы изменений для каждого администратора модели
    # "changeform_format_overrides": {"auth.user": "collapsible", "auth.group": "vertical_tabs"},
    # # Добавляем раскрывающийся список языков в админку
    # "language_chooser": True,
}

"""
Настройки библиотеки Jazzmin. Выбор темы. Пока подключена тема для. Дальше сделаем свой CSS под цветовую гамму сайта
"""

JAZZMIN_UI_TWEAKS = {
    "navbar_small_text": False,
    "footer_small_text": False,
    "body_small_text": True,
    "brand_small_text": False,
    "brand_colour": "navbar-lightblue",
    "accent": "accent-navy",
    "navbar": "navbar-lightblue navbar-dark",
    "no_navbar_border": False,
    "navbar_fixed": True,
    "layout_boxed": False,
    "footer_fixed": False,
    "sidebar_fixed": False,
    "sidebar": "sidebar-light-lightblue",
    "sidebar_nav_small_text": False,
    "sidebar_disable_expand": False,
    "sidebar_nav_child_indent": False,
    "sidebar_nav_compact_style": True,
    "sidebar_nav_legacy_style": False,
    "sidebar_nav_flat_style": False,
    "theme": "simplex",
    "dark_mode_theme": None,
    "button_classes": {
        "primary": "btn-primary",
        "secondary": "btn-secondary",
        "info": "btn-info",
        "warning": "btn-warning",
        "danger": "btn-danger",
        "success": "btn-success"
    },
    "actions_sticky_top": True
}

# Настройки библиотеки Django. Почтовая рассылка
EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
SERVER_EMAIL = os.getenv('SERVER_EMAIL')
EMAIL_HOST = os.getenv('EMAIL_HOST')
EMAIL_PORT = os.getenv('EMAIL_PORT')
EMAIL_HOST_USER = os.getenv('EMAIL_HOST_USER')
EMAIL_HOST_PASSWORD = os.getenv('EMAIL_HOST_PASSWORD')
EMAIL_USE_TLS = False
EMAIL_USE_SSL = True
DEFAULT_FROM_EMAIL = os.getenv('SERVER_EMAIL')
