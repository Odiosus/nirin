"""
Тестирование панели администратора
"""
import pytest
import requests
from admin_data import *
from selenium import webdriver
from selenium.webdriver import Keys, ActionChains
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as ec
import allure
import time


@pytest.fixture()
def browser():
    options = Options()
    # options.add_argument("--headless=new")
    chrome_browser = webdriver.Chrome(options=options)
    return chrome_browser

def test_airports_add(browser):
    """ Проверка добавления аэропорта и услуг для него из списка"""
    browser.get(BASE_URL_ADMIN + LOGIN)
    input_name = WebDriverWait(browser, 10).until(ec.presence_of_element_located((By.XPATH, XPATH_LOGIN_NAME)))
    ActionChains(browser).click(input_name).send_keys("eugen").perform()   #   Ввод в поле Login

    input_password = WebDriverWait(browser, 10).until(ec.presence_of_element_located((By.XPATH, XPATH_LOGIN_PASSWORD)))
    ActionChains(browser).click(input_password).send_keys("12345").perform()  # Ввод в поле Password

    button_submit = WebDriverWait(browser, 10).until(ec.presence_of_element_located((By.XPATH, XPATH_LOGIN_BUTTON)))
    button_submit.click()  # Клик кнопка Войти

    # alert = browser.find_element(By.LINK_TEXT, "OK")
    # alert.click()

    browser.get(BASE_URL_ADMIN + AIRPORTS)
    button_add = WebDriverWait(browser, 10).until(ec.presence_of_element_located((By.XPATH, XPATH_AIRPORTS_BUTTON_ADD)))
    button_add.click()  # Клик кнопка Добавить

    input_airport_name = WebDriverWait(browser, 10).until(ec.presence_of_element_located((By.XPATH, XPATH_AIRPORTS_INPUT_NAME)))
    ActionChains(browser).click(input_airport_name).send_keys(AIRPORT_NAME).perform()    #   Ввод в поле Название

    input_airport_iata = browser.find_element(By.XPATH, XPATH_AIRPORTS_INPUT_IATA)
    ActionChains(browser).click(input_airport_iata).send_keys(AIRPORT_IATA).perform()    # Ввод в поле IATA

    input_airport_country = browser.find_element(By.XPATH, XPATH_AIRPORTS_INPUT_COUNTRY)
    ActionChains(browser).click(input_airport_country).send_keys(AIRPORT_COUNTRY).perform()  # Ввод в поле Страна

    input_airport_city = browser.find_element(By.XPATH, XPATH_AIRPORTS_INPUT_CITY)
    ActionChains(browser).click(input_airport_city).send_keys(AIRPORT_CITY).perform()  # Ввод в поле Город
    #Добавляем услугу
    panel_service = browser.find_element(By.XPATH, XPATH_AIRPORTS_PANEL_SERVICES)
    panel_service.click()   # Клик панель Услуга

    time.sleep(3)

    input_service = browser.find_element(By.XPATH, XPATH_AIRPORTS_INPUT_SERVICE)
    input_service.click()   # Клик поле Услуга

    time.sleep(3)

    list_services = browser.find_elements(By.XPATH, XPATH_AIRPORTS_LIST_SERVICES)
    list_services[0].click()    # Клик первый элемент в выпадающем списке

    time.sleep(3)

    button_save = browser.find_element(By.XPATH, XPATH_BUTTON_SAVE)
    button_save.click() #   № Клик кнопка Сохранить

    res = requests.get(BASE_URL + GET_AIRPORTS + f"?city={AIRPORT_CITY}&country={AIRPORT_COUNTRY}")
    # with allure.step("Код ответа = 200"):
    #     assert res.status_code == 200
    # with allure.step("Content-Type = json"):
    #     assert res.headers['Content-Type'] == "application/json"
    # with allure.step("Дата присутствует в заголовке"):
    #     assert len(res.headers['date']) > 0
    data = res.json()
    with allure.step(f"Поле 'airport_name' совпадает с '{AIRPORT_NAME}'"):
        assert AIRPORT_NAME == data[0]['airport_name']
    with allure.step(f"Поле 'city' совпадает с '{AIRPORT_CITY}'"):
        assert AIRPORT_CITY == data[0]['city']
    with allure.step(f"Поле 'country' совпадает с '{AIRPORT_COUNTRY}'"):
        assert AIRPORT_COUNTRY == data[0]['country']
    with allure.step(f"Поле 'iata' совпадает с '{AIRPORT_IATA}'"):
        assert AIRPORT_IATA == data[0]['iata']
    with allure.step("-----------------------"):
        pass

    browser.quit()


def test_airports_search(browser):
    """ Проверка поиска аэропорта """
    browser.get(BASE_URL_ADMIN + LOGIN)
    input_name = WebDriverWait(browser, 10).until(ec.presence_of_element_located((By.XPATH, XPATH_LOGIN_NAME)))
    ActionChains(browser).click(input_name).send_keys("eugen").perform()  # Ввод в поле Login

    input_password = WebDriverWait(browser, 10).until(ec.presence_of_element_located((By.XPATH, XPATH_LOGIN_PASSWORD)))
    ActionChains(browser).click(input_password).send_keys("12345").perform()  # Ввод в поле Password

    button_submit = WebDriverWait(browser, 10).until(ec.presence_of_element_located((By.XPATH, XPATH_LOGIN_BUTTON)))
    button_submit.click()  # Клик кнопка Войти

    browser.get(BASE_URL_ADMIN + AIRPORTS)
    input_name = WebDriverWait(browser, 10).until(ec.presence_of_element_located((By.XPATH, XPATH_AIRPORTS_NAME_SELECT)))
    ActionChains(browser).click(input_name).send_keys(AIRPORT_NAME).perform()  # Ввод в поле Наименование аэропорта

    button_search = browser.find_element(By.XPATH, XPATH_AIRPORTS_BUTTON_FIND)
    button_search.click()  # Клик кнопка Найти

    airport_check = browser.find_elements(By.XPATH, XPATH_AIRPORTS_CHECK)  # Находим все записи с Наименованием аэропорта

    with allure.step(f"Аэропорт '{AIRPORT_NAME}' присутствует в результате поиска"):
        assert len(airport_check) > 0
    with allure.step("-----------------------"):
        pass

    browser.quit()


def test_airports_delete(browser):
    """ Проверка удаления аэропорта """

    browser.get(BASE_URL_ADMIN + LOGIN)
    input_name = WebDriverWait(browser, 10).until(ec.presence_of_element_located((By.XPATH, XPATH_LOGIN_NAME)))
    ActionChains(browser).click(input_name).send_keys("eugen").perform()  # Ввод в поле Login

    input_password = WebDriverWait(browser, 10).until(ec.presence_of_element_located((By.XPATH, XPATH_LOGIN_PASSWORD)))
    ActionChains(browser).click(input_password).send_keys("12345").perform()  # Ввод в поле Password

    button_submit = WebDriverWait(browser, 10).until(ec.presence_of_element_located((By.XPATH, XPATH_LOGIN_BUTTON)))
    button_submit.click()  # Клик кнопка Войти
    """   """

    browser.get(BASE_URL_ADMIN + AIRPORTS)
    input_name = WebDriverWait(browser, 10).until(
        ec.presence_of_element_located((By.XPATH, XPATH_AIRPORTS_NAME_SELECT)))
    ActionChains(browser).click(input_name).send_keys(AIRPORT_NAME).perform()  # Ввод в поле Наименование аэропорта

    button_search = browser.find_element(By.XPATH, XPATH_AIRPORTS_BUTTON_FIND)
    button_search.click()  # Клик кнопка Найти


    """   """
    airport_check = browser.find_elements(By.XPATH, XPATH_AIRPORTS_CHECK)
    airport_check[0].click()  # Клик Название аэропорта
    rec_count = len(airport_check)

    # airport_action = browser.find_element(By.XPATH, XPATH_AIRPORTS_ACTION)
    # airport_action.click()  # Клик поля выбора действия

    button_delete = browser.find_element(By.XPATH, XPATH_AIRPORTS_DELETE)
    button_delete.click()  # Клик кнопка Удалить

    button_confirm = browser.find_element(By.XPATH, XPATH_AIRPORTS_BUTTON_CONFIRM)
    button_confirm.click()  # Клик кнопка Да, я уверен

    """ Ищем аэропорт снова"""
    # button_do = browser.find_element(By.XPATH, XPATH_AIRPORTS_BUTTON_DO)
    # button_do.click()  # Клик кнопка Выполнить

    browser.get(BASE_URL_ADMIN + AIRPORTS)
    input_name = WebDriverWait(browser, 10).until(
        ec.presence_of_element_located((By.XPATH, XPATH_AIRPORTS_NAME_SELECT)))
    ActionChains(browser).click(input_name).send_keys(AIRPORT_NAME).perform()  # Ввод в поле Наименование аэропорта

    button_search = browser.find_element(By.XPATH, XPATH_AIRPORTS_BUTTON_FIND)
    button_search.click()  # Клик кнопка Найти

    airport_check = browser.find_elements(By.XPATH, XPATH_AIRPORTS_CHECK)  # Находим все записи с Наименованием аэропорта

    with allure.step(f"Аэропорт '{AIRPORT_NAME}' удален"):
        assert len(airport_check) == rec_count-1
    with allure.step("-----------------------"):
        pass

    browser.quit()
