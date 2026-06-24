"""Backend API tests for KOBIISRAEL.COM"""
import os
import uuid
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://still-moving-1.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- Root ----------
def test_root(client):
    r = client.get(f"{API}/")
    assert r.status_code == 200
    assert "message" in r.json()


# ---------- Projects ----------
def test_projects_list(client):
    r = client.get(f"{API}/projects")
    assert r.status_code == 200
    data = r.json()
    assert isinstance(data, list)
    assert len(data) == 7
    featured = [p for p in data if p.get("featured")]
    assert any(p["slug"] == "cuba-love-story" for p in featured)


def test_project_detail_valid(client):
    r = client.get(f"{API}/projects/cuba-love-story")
    assert r.status_code == 200
    data = r.json()
    assert data["slug"] == "cuba-love-story"
    assert data["featured"] is True


def test_project_detail_invalid(client):
    r = client.get(f"{API}/projects/does-not-exist")
    assert r.status_code == 404


# ---------- Inquiries ----------
def test_create_inquiry_valid(client):
    payload = {
        "name": "TEST_Collector",
        "email": f"test_{uuid.uuid4().hex[:8]}@example.com",
        "inquiry_type": "collector",
        "subject": "TEST inquiry subject",
        "message": "I would like to inquire about a print.",
    }
    r = client.post(f"{API}/inquiries", json=payload)
    assert r.status_code == 201, r.text
    data = r.json()
    assert "id" in data and "created_at" in data
    assert data["email"] == payload["email"]
    assert data["inquiry_type"] == "collector"

    # Verify persistence via list
    list_r = client.get(f"{API}/inquiries")
    assert list_r.status_code == 200
    emails = [x["email"] for x in list_r.json()]
    assert payload["email"] in emails


def test_create_inquiry_invalid_email(client):
    payload = {
        "name": "Bad",
        "email": "not-an-email",
        "inquiry_type": "general",
        "message": "msg",
    }
    r = client.post(f"{API}/inquiries", json=payload)
    assert r.status_code == 422


# ---------- Newsletter ----------
def test_newsletter_subscribe_and_idempotent(client):
    email = f"news_{uuid.uuid4().hex[:8]}@example.com"
    r1 = client.post(f"{API}/newsletter", json={"email": email})
    assert r1.status_code == 201, r1.text
    id1 = r1.json()["id"]

    # Idempotent — same email returns existing
    r2 = client.post(f"{API}/newsletter", json={"email": email})
    assert r2.status_code in (200, 201)
    assert r2.json()["id"] == id1

    # List
    lr = client.get(f"{API}/newsletter")
    assert lr.status_code == 200
    emails = [x["email"] for x in lr.json()]
    assert email in emails
    # No duplicates
    assert emails.count(email) == 1
