import requests


BASE_URL = "https://hotel.gswack.com"


def test_create_reservation():
    payload = {
        "hotelId": "5",
        "fullName": "Test User3",
        "email": "test3@test.com",
        "checkIn": "2026-08-04",
        "checkOut": "2026-08-05"
    }

    response = requests.post(
        f"{BASE_URL}",
        json=payload
    )

    assert response.status_code == 200
    assert "successfully" in response.json()
    