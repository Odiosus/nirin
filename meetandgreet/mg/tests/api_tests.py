import allure
import requests
import pytest
from api_data import *


@allure.title("Тестирование получения всех аэропортов")
# @pytest.mark.smoke
class TestApiAllAirports:
    @allure.title("Вывод списка всех аэропортов")
    @allure.testcase("","TC-MG-API-A-001")
    def test_get_airport(self):
        res = requests.get(BASE_URL + GET_AIRPORT)
        with allure.step("Код ответа = 200"):
            assert res.status_code == 200
        with allure.step("Content-Type = json"):
            assert res.headers['Content-Type'] == "application/json"
        with allure.step("Дата присутствует в заголовке"):
            assert len(res.headers['date']) > 1
        data = res.json()
        # search_par = "Moscow"
        with allure.step(f"Запрос вернул одну или несколько записей"):
            assert len(data) > 0

@allure.title("Тестирование поиска аэропорта")
# @pytest.mark.smoke
class TestAirportSearch:
    v = IDS_VARIANT
    s = SEARCH_VARIANT

    @pytest.mark.parametrize("var", s, ids=v)
    @allure.testcase("", "TC-MG-API-A-002gr")
    def test_get_airports(self, var):
            res = requests.get(BASE_URL+GET_AIRPORTS+f"?city={var['city']}&country={var['country']}&search={var['search']}")
            with allure.step("Код ответа = 200"):
                assert res.status_code == 200
            with allure.step("Content-Type = json"):
                assert res.headers['Content-Type'] == "application/json"
            with allure.step("Дата присутствует в заголовке"):
                assert len(res.headers['date']) > 0
            data = res.json()
            with allure.step(f"Запрос вернул ответ, содержащий '{var["city"]}'"):
                assert var["city"] in data[0]['city']


@allure.title("Тестирование вывода списка всех услуг")
# @pytest.mark.smoke
class TestGetService:

    @allure.title("Вывод списка всех услуг")
    @allure.testcase("", "TC-MG-API-S-001")
    def test_get_service(self):
        res = requests.get(BASE_URL + GET_SERVICES)
        with allure.step("Код ответа = 200"):
            assert res.status_code == 200
        with allure.step("Content-Type = json"):
            assert res.headers['Content-Type'] == "application/json"
        with allure.step("Дата присутствует в заголовке"):
            assert len(res.headers['date']) > 1
        data = res.json()
        with allure.step(f"Запрос вернул одну или несколько записей"):
            assert len(data) > 0


@allure.title("Тестирование поиска услуг")
# @pytest.mark.smoke
class TestSearchService:
    @allure.title("Поиск услуги")
    @allure.testcase("", "TC-MG-API-S-002")
    def test_search_service(self):
        res = requests.get(BASE_URL + GET_SERVICES + "1/")
        with allure.step("Код ответа = 200"):
            assert res.status_code == 200
        with allure.step("Content-Type = json"):
            assert res.headers['Content-Type'] == "application/json"
        with allure.step("Дата присутствует в заголовке"):
            assert len(res.headers['date']) > 1
        data = res.json()
        with allure.step(f"Запрос вернул записи об услуге"):
            assert len(data) > 0


"""
Функция для теста
"""
def tmplt(item, endpoint):
    data = BOOKING_DATA
    for par in item[1]:
        data[item[0]] = par
        res = requests.post(BASE_URL + endpoint, data=data)
        with allure.step("Код ответа = 201"):
            assert res.status_code == 201
        with allure.step("Content-Type = json"):
            assert res.headers['Content-Type'] == "application/json"
        with allure.step("Дата присутствует в заголовке"):
            assert len(res.headers['date']) > 1
        res = res.json()
        with allure.step(f"'{item[0]}' совпадает с '{par}'"):
            assert res[item[0]] == data[item[0]]
        with allure.step("---------------------"):
            pass

@allure.title("Тестирование бронирования")
class TestBooking:
    endpoint = BOOKING
    @allure.title("Тестирование поля 'customer_name'")
    @allure.testcase("TC-MG-API-B-001")
    def test_booking_customer(self):
        tmplt(BOOKING_DATA_CUSTOMER, self.endpoint)

    @allure.title("Тестирование поля 'email'")
    @allure.testcase("TC-MG-API-B-002")
    def test_booking_email(self):
        tmplt(BOOKING_DATA_EMAIL, self.endpoint)


    @allure.title("Тестирование поля 'flight'")
    @allure.testcase("TC-MG-API-B-003")
    def test_booking_flight(self):
        tmplt(BOOKING_DATA_FLIGHT, self.endpoint)


    @allure.title("Тестирование поля 'number_of_passengers'")
    @allure.testcase("TC-MG-API-B-004")
    def test_booking_number(self):
        tmplt(BOOKING_DATA_NUMBER, self.endpoint)


    @allure.title("Тестирование поля 'note'")
    @allure.testcase("TC-MG-API-B-005")
    def test_booking_note(self):
        tmplt(BOOKING_DATA_NOTE, self.endpoint)

    @allure.title("Тестирование поля 'phone_number'")
    @allure.testcase("TC-MG-API-B-006")
    def test_booking_phone(self):
        tmplt(BOOKING_DATA_PHONE, self.endpoint)

    @allure.title("Тестирование поля 'airport' с двумя значениями")
    @allure.testcase("TC-MG-API-B-007")
    def test_booking_airports(self):
        data = BOOKING_DATA
        data['airport'] = [1,2]
        res = requests.post(BASE_URL + BOOKING, data=data)
        with allure.step("Код ответа = 201"):
            assert res.status_code == 201
        with allure.step("Content-Type = json"):
            assert res.headers['Content-Type'] == "application/json"
        with allure.step("Дата присутствует в заголовке"):
            assert len(res.headers['date']) > 1
        res = res.json()
        with allure.step(f"'airport' совпадает с '{data['airport']}'"):
            assert res['airport'] == data['airport']
        with allure.step("---------------------"):
            pass


@allure.title("Тестирование Fastbooking")
class TestFastBooking:
    endpoint = FBOOKING
    @allure.title("Тестирование поля 'customer_name'")
    @allure.testcase("TC-MG-API-FB-001")
    def test_fast_booking_customer(self):
        tmplt(BOOKING_DATA_CUSTOMER, self.endpoint)

    @allure.title("Тестирование поля 'email'")
    @allure.testcase("TC-MG-API-FB-002")
    def test_fast_booking_email(self):
        tmplt(BOOKING_DATA_EMAIL, self.endpoint)


    @allure.title("Тестирование поля 'flight'")
    @allure.testcase("TC-MG-API-FB-003")
    def test_fast_booking_flight(self):
        tmplt(BOOKING_DATA_FLIGHT, self.endpoint)


    @allure.title("Тестирование поля 'number_of_passengers'")
    @allure.testcase("TC-MG-API-B-004")
    def test_fast_booking_number(self):
        tmplt(BOOKING_DATA_NUMBER, self.endpoint)


    @allure.title("Тестирование поля 'note'")
    @allure.testcase("TC-MG-API-FB-005")
    def test_fast_booking_note(self):
        tmplt(BOOKING_DATA_NOTE, self.endpoint)

    @allure.title("Тестирование поля 'phone_number'")
    @allure.testcase("TC-MG-API-FB-006")
    def test_booking_phone(self):
        tmplt(BOOKING_DATA_PHONE, self.endpoint)

    @allure.title("Тестирование поля 'airport' с двумя значениями")
    @allure.testcase("TC-MG-API-FB-007")
    def test_booking_airports(self):
        data = BOOKING_DATA
        data['airport'] = [1, 2]
        res = requests.post(BASE_URL + BOOKING, data=data)
        with allure.step("Код ответа = 201"):
            assert res.status_code == 201
        with allure.step("Content-Type = json"):
            assert res.headers['Content-Type'] == "application/json"
        with allure.step("Дата присутствует в заголовке"):
            assert len(res.headers['date']) > 1
        res = res.json()
        with allure.step(f"'airport' совпадает с '{data['airport']}'"):
            assert res['airport'] == data['airport']
        with allure.step("---------------------"):
            pass