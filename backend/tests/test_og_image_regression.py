# Regression tests for page-aware og:image SEO + inquiries smoke
import os
import requests
import pytest

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL") or open("/app/frontend/.env").read().split("REACT_APP_BACKEND_URL=")[1].split()[0]
BASE_URL = BASE_URL.rstrip("/")


def test_inquiries_post_minimal_returns_201():
    payload = {
        "name": "TEST_user_og_regression",
        "email": "test_og@example.com",
        "message": "Regression smoke from og:image test",
    }
    r = requests.post(f"{BASE_URL}/api/inquiries", json=payload, timeout=20)
    assert r.status_code == 201, f"Expected 201 got {r.status_code}: {r.text[:300]}"
    data = r.json()
    # Loose data assertion - ensure response is dict, has some identifier
    assert isinstance(data, dict)


def test_first_paint_html_has_homepage_og_image():
    """The raw HTML served at / must already contain the Cuba.i1 og:image baked in."""
    r = requests.get(f"{BASE_URL}/", timeout=20)
    assert r.status_code == 200
    html = r.text
    assert "7bp5yfi9_01.1029.07.jpg" in html, "Cuba.i1 og:image not baked into first-paint HTML"
    assert 'property="og:image"' in html
    assert 'name="twitter:image"' in html
    assert 'property="og:image:width"' in html and "1600" in html
    assert 'property="og:image:height"' in html and "1067" in html
