<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
# API Meet and Greet

Это API для компании Meet and Greet, который включает в себя API для всплывающего чата с ботом, поиска аэропортов, формы заполнения бронирований и т.д. API документация предоставляется с использованием Swagger.

## Клонирование и запуск репозитория

### Клонирование ветки 

```bash
git clone https://github.com/Odiosus/nirin
cd nirin
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
cd meetandgreet
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

### Создание суперюзера и вход в админ-панель

Остановить локальный сервер, если он запущен (комбинация клавиш `ctr + C`)
Ввести команду

```bash
python manage.py createsuperuser
```
Ввести логин, электронную почту (можно пропустить нажав ENTER), пароль.

Запустите сервер разработки.

```bash
python manage.py runserver
```

Перейти по адресу `http://127.0.0.1:8000/admin/` для входа в админку.
Ввести ранее указанные логин и пароль
>>>>>>> 3f301c960f816ebd146c33a8989325d87af14156
