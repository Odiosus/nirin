import pytest
from admin_data import *
from selenium import webdriver
from selenium.webdriver import Keys, ActionChains
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as ec
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
    ActionChains(browser).click(input_airport_name).send_keys("Образец").perform()    #   Ввод в поле Название

    input_airport_iata = browser.find_element(By.XPATH, XPATH_AIRPORTS_INPUT_IATA)
    ActionChains(browser).click(input_airport_iata).send_keys("OBR").perform()    # Ввод в поле IATA

    input_airport_country = browser.find_element(By.XPATH, XPATH_AIRPORTS_INPUT_COUNTRY)
    ActionChains(browser).click(input_airport_country).send_keys("Россия").perform()  # Ввод в поле Страна

    input_airport_city = browser.find_element(By.XPATH, XPATH_AIRPORTS_INPUT_CITY)
    ActionChains(browser).click(input_airport_city).send_keys("Город").perform()  # Ввод в поле Город
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




    browser.quit()

