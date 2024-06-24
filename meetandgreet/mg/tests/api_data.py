# BASE_URL = "http://127.0.0.1:8000/api/v1"
BASE_URL = "https://nirin-backend.vercel.app/api/v1"
GET_SERVICES = "/service/"
GET_AIRPORTS = "/airports/"
GET_AIRPORT = "/airport/"
BOOKING = "/booking/"
FBOOKING = "/fast_booking/"

s1 = {"city": "Moscow", "country": "Russia", "search": "VNO"}
s2 = {"city": "Moscow", "country": "", "search": ""}
s3 = {"city": "", "country": "", "search": "VNO"}
s4 = {"city": "", "country": "Russia", "search": ""}
IDS_VARIANT = ["var1", "var2", "var3", "var4"]
SEARCH_VARIANT = [s1, s2, s3, s4]


BOOKING_DATA = {
    "customer_name": "Баканёва Анастасия Александровна",
    "phone_number": "+490000000000",
    "email": "test@mail.ru",
    "airport": [1],
    "flight":  "MP 098",
    "booking_date": "2024-06-11T14:03",
    "number_of_passengers": 1,
    "service": [1],
    "note": ""
}

BOOKING_DATA_CUSTOMER = ("customer_name",[
    'Leonov Leo Leon',
    'Кировкая Лариса-Магдалена Илларионовна',
    'Duhamel du Monceau Jean',
    'Буда-Жемчужников Александр Васильевич',
    'Комиссарова-Костромская Евгения Ильинична',
    'Leoc Leo',
    'Дана',
    'bBZtROKCUhJnBjrplguTYZHNQAfbPDUgVWMziPkLOsspkImNAGFMfGogSWrWbrfuRnFUYMxfTOMMbmwuCSXWMhEXAZrBlyNpgsGzPdPItrTXlJnhSjOETuOAEegZCwmvKqmwYAcxgWKpOghjTcMSFIrphKFsokTgORPFiIZvPLTnMXhanwEJbDAHZoymGthwPgYMEcKf',
    'И'
])

BOOKING_DATA_EMAIL = ("email", [
    "TEST@mail.ru",
    "Test12@gmail.com",
    "te-st@mail.ru",
    "te.st@mail.ru",
    "TE_ST@mail.ru"
])

BOOKING_DATA_AIRPORTS = ("airport", [1, 2])

BOOKING_DATA_FLIGHT = ("flight", [
    "MP098",
    "MR 1324",
    "MR1234",
])

BOOKING_DATA_NUMBER = ("number_of_passengers", [
    10,
    255,
    256
])

BOOKING_DATA_NOTE = ("note", [
    "а",
    "SGgqhmdNidhyONjwkkyrMubcTceibWdaerRGksrXQQnnHZaSYdZuEhcUnOpVMYOyDZQTnhLzQErpeXTULKxluRMxsMbUeWDIuMXGRDoKJoncafYGYTaODjnwUUzORgabpqvytPuyBguQaQsLwQaTNpqCWOdNmGIrutfOAyshpbKyBrCxMWdSAxbNdAywewINmTOWEkjedKlHvGtxyPOZnEZhahMfpjwJzmaHhOdKndUxKDOikrmddlTKPRXcJEssIRSkCQvjZSBqxGHKfCoIyVMngTRvBnvDzlMmhVVztweAnefuzXidWbaxgtHPDqLLLvQvWvRqiNWHzFsHkOCMHMHPWxPBLbaSHnBJIoAhkxJlzokONxMpBwdWdXVTORAkxxlbTKJwklPySvvwzZinohqqwlnZYMHYbIFKqLcvQMePWscwmdqxciodkAfjBzISCjKIJFhHIlqhMMVNJsefOXdHQKnjLDyToTCCJAvoieDEmDOuFqBe",
    "Мне нужно 1 детское кресло",
    "Мне нужно 1 детское кресло",
    "I need 1 child safety seat!!!!!!"
])

BOOKING_DATA_PHONE = ("phone_number", ["+4990785643245", "+79008001122", "255", "7"])