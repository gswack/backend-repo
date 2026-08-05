import requests


BASE_URL = "http://localhost:3000"


def test_create_reservation():

    payload = {
        "fullName": "Test User3",
        "email": "test3@test.com",
        "hotelId": "1",
        "checkIn": "2026-08-04",
        "checkOut": "2026-08-05"
    }

    response = requests.post(
        f"{BASE_URL}/reservations",
        json=payload
    )

    assert response.status_code == 200
    assert "reservation" in response.json()
    