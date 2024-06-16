import  requests
import json
import sqlite3



BASE_URL = "http://127.0.0.1:8000/api/v1"
GET_SERVICES = "/service/services/"
GET_AIRPORTS = "/airports/"
GET_AIRPORT = "/airport/"

conn = sqlite3.connect('db.sqlite3')

def test_get_airports():
    res = requests.get(BASE_URL+GET_AIRPORT)
    assert res.status_code == 200
    assert res.headers['Content-Type'] == "application/json"
    data = res.json()
    assert "Moscow" in data[0]['city']
    # data = json.loads(res.json())
    # assert "Moscow" in data[0]
