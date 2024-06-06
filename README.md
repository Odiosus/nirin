# API Meet and Greet

Это API для компании Meet and Greet, который включает в себя API для всплывающего чата с ботом, поиска аэропортов, формы заполнения бронирований и т.д. API документация предоставляется с использованием Swagger.

## Клонирование и запуск репозитория

### Клонирование ветки `main-create-app-models-api-vlad`

```bash
git clone -b main-create-app-models-api-vlad https://github.com/ericspade/SFHackaton2.git
cd SFHackaton
cd nirinsite
```

### Создание виртуального окружения

Рекомендуется использовать виртуальное окружение для установки зависимостей.

```bash
python -m venv venv
source venv/bin/activate  # Для Windows используйте команду venv\Scripts\activate
```

### Установка зависимостей

Установите необходимые пакеты с помощью pip.

```bash
pip install -r requirements.txt
```

### Настройка Django SECRET_KEY

Django требует наличия `SECRET_KEY` для обеспечения безопасности. Создайте файл `.env` в корне проекта и добавьте туда ваш `SECRET_KEY`.

1. Получите `SECRET_KEY`(он находится в самом начале чата DevCall в Telegram):

2. Создайте файл `.env` в корне проекта и добавьте туда:

    ```env
    SECRET_KEY=...
    ```

### Применение миграций и сборка статических файлов

Выполните команды для применения миграций и сбора статических файлов.

```bash
python manage.py makemigrations
python manage.py migrate
python manage.py collectstatic
```

### Запуск сервера разработки

Запустите сервер разработки.

```bash
python manage.py runserver
```

Теперь вы можете перейти по адресу `http://127.0.0.1:8000/` для просмотра главной страницы вашего проекта.

## Swagger для API документации

Swagger предоставляет удобный интерфейс для взаимодействия с вашим API. Чтобы просмотреть документацию API, перейдите по адресу `http://127.0.0.1:8000/swagger/`.

Вы также можете использовать ReDoc для документации API по адресу `http://127.0.0.1:8000/redoc/`.
