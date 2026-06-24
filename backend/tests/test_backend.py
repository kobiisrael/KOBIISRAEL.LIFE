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
    assert data["featured"]


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


# ---------- Prints / Collector inquiry — new optional fields ----------
def test_create_inquiry_with_prints_optional_fields(client):
    """Full collector inquiry from /prints form with phone, country, size, budget, consent."""
    payload = {
        "name": "TEST_PrintsCollector",
        "email": f"test_prints_{uuid.uuid4().hex[:8]}@example.com",
        "inquiry_type": "collector",
        "subject": "Cuba, Love Story",
        "message": "I would like to inquire about a print of Cuba, Love Story.",
        "project_interest": "Cuba, Love Story",
        "phone": "+44 20 7946 0000",
        "country": "United Kingdom",
        "preferred_size": "60 × 80 cm",
        "budget_range": "£3,000 – £8,000",
        "consent": True,
    }
    r = client.post(f"{API}/inquiries", json=payload)
    assert r.status_code == 201, r.text
    data = r.json()
    # Echo back assertions
    assert data["phone"] == payload["phone"]
    assert data["country"] == payload["country"]
    assert data["preferred_size"] == payload["preferred_size"]
    assert data["budget_range"] == payload["budget_range"]
    assert data["consent"]
    assert data["inquiry_type"] == "collector"
    assert "id" in data and "created_at" in data


def test_create_inquiry_institutional_type(client):
    """Institutional inquiry type must be accepted."""
    payload = {
        "name": "TEST_Institution",
        "email": f"test_inst_{uuid.uuid4().hex[:8]}@example.com",
        "inquiry_type": "institutional",
        "message": "Institutional inquiry from museum.",
        "consent": True,
    }
    r = client.post(f"{API}/inquiries", json=payload)
    assert r.status_code == 201, r.text
    data = r.json()
    assert data["inquiry_type"] == "institutional"
    # Optional fields not provided should be None
    assert data["phone"] is None
    assert data["country"] is None
    assert data["preferred_size"] is None
    assert data["budget_range"] is None


def test_create_inquiry_homepage_regression_no_optional_fields(client):
    """Homepage contact form regression — no new optional fields."""
    payload = {
        "name": "TEST_Homepage",
        "email": f"test_home_{uuid.uuid4().hex[:8]}@example.com",
        "inquiry_type": "general",
        "subject": "General question",
        "message": "Hello from homepage form.",
        "project_interest": "Cuba, Love Story",
    }
    r = client.post(f"{API}/inquiries", json=payload)
    assert r.status_code == 201, r.text
    data = r.json()
    assert data["inquiry_type"] == "general"
    assert data["phone"] is None
    assert data["country"] is None
    assert data["consent"] is None


def test_create_inquiry_invalid_inquiry_type(client):
    """Invalid inquiry_type (e.g., 'random_string') must be rejected with 422."""
    payload = {
        "name": "TEST_BadType",
        "email": f"test_bad_{uuid.uuid4().hex[:8]}@example.com",
        "inquiry_type": "random_string",
        "message": "msg",
    }
    r = client.post(f"{API}/inquiries", json=payload)
    assert r.status_code == 422


def test_create_inquiry_books_types(client):
    """Books-page InquiryType literals must be accepted: purchase, signed_copy, research."""
    for itype in ["purchase", "signed_copy", "research"]:
        payload = {
            "name": f"TEST_books_{itype}",
            "email": f"test_books_{itype}_{uuid.uuid4().hex[:6]}@example.com",
            "inquiry_type": itype,
            "subject": "Cuba, Love Story",
            "message": f"Books inquiry of type {itype}.",
            "project_interest": "Cuba, Love Story",
            "country": "France",
            "consent": True,
        }
        r = client.post(f"{API}/inquiries", json=payload)
        assert r.status_code == 201, f"{itype} failed: {r.text}"
        data = r.json()
        assert data["inquiry_type"] == itype
        assert data["country"] == "France"
        assert data["consent"]


def test_create_inquiry_cv_new_types(client):
    """CV page introduced 6 new InquiryType literals."""
    for itype in ["gallery", "curator", "museum", "publisher", "film_programmer", "academic"]:
        payload = {
            "name": f"TEST_cv_{itype}",
            "email": f"test_cv_{itype}_{uuid.uuid4().hex[:6]}@example.com",
            "inquiry_type": itype,
            "subject": "CV inquiry",
            "message": f"CV inquiry of type {itype}.",
            "country": "United Kingdom",
            "consent": True,
        }
        r = client.post(f"{API}/inquiries", json=payload)
        assert r.status_code == 201, f"{itype} failed: {r.text}"
        data = r.json()
        assert data["inquiry_type"] == itype
        assert data["consent"]


def test_create_inquiry_all_valid_types(client):
    """All 14 InquiryType literals are accepted (regression + books + CV additions)."""
    for itype in [
        "general", "collector", "gallery_curator", "press", "institutional",
        "purchase", "signed_copy", "research",
        "gallery", "curator", "museum", "publisher", "film_programmer", "academic",
    ]:
        payload = {
            "name": f"TEST_{itype}",
            "email": f"test_{itype}_{uuid.uuid4().hex[:6]}@example.com",
            "inquiry_type": itype,
            "message": f"Inquiry of type {itype}.",
        }
        r = client.post(f"{API}/inquiries", json=payload)
        assert r.status_code == 201, f"{itype} failed: {r.text}"
        assert r.json()["inquiry_type"] == itype


# ---------- Newsletter ----------
def test_newsletter_subscribe_and_idempotent(client):
    email = f"news_{uuid.uuid4().hex[:8]}@example.com"
    r1 = client.post(f"{API}/newsletter", json={"email": email})
    assert r1.status_code == 201, r1.text
    id1 = r1.json()["id"]

    r2 = client.post(f"{API}/newsletter", json={"email": email})
    assert r2.status_code in (200, 201)
    assert r2.json()["id"] == id1

    lr = client.get(f"{API}/newsletter")
    assert lr.status_code == 200
    emails = [x["email"] for x in lr.json()]
    assert email in emails
    assert emails.count(email) == 1


# ---------- Newsletter — interest field (Journal page) ----------
def test_newsletter_with_interest(client):
    """Journal newsletter now accepts optional 'interest' field."""
    email = f"news_int_{uuid.uuid4().hex[:8]}@test.com"
    r1 = client.post(f"{API}/newsletter", json={
        "email": email,
        "source": "journal",
        "interest": "artist-notes",
    })
    assert r1.status_code == 201, r1.text
    data1 = r1.json()
    assert data1["email"] == email
    assert data1["source"] == "journal"
    assert data1["interest"] == "artist-notes"
    id1 = data1["id"]

    # Idempotent: same email returns existing subscription
    r2 = client.post(f"{API}/newsletter", json={
        "email": email,
        "source": "journal",
        "interest": "artist-notes",
    })
    assert r2.status_code in (200, 201)
    assert r2.json()["id"] == id1
    assert r2.json()["interest"] == "artist-notes"


def test_newsletter_without_interest_backcompat(client):
    """Newsletter without interest still works (backward compat)."""
    email = f"news_noi_{uuid.uuid4().hex[:8]}@test.com"
    r = client.post(f"{API}/newsletter", json={
        "email": email,
        "source": "homepage",
    })
    assert r.status_code == 201, r.text
    data = r.json()
    assert data["email"] == email
    assert data["source"] == "homepage"
    assert data.get("interest") is None


def test_newsletter_list_includes_interest(client):
    """GET /api/newsletter returns the interest field where present."""
    email = f"news_li_{uuid.uuid4().hex[:8]}@test.com"
    client.post(f"{API}/newsletter", json={
        "email": email, "source": "journal", "interest": "process-notes",
    })
    lr = client.get(f"{API}/newsletter")
    assert lr.status_code == 200
    rows = lr.json()
    match = [x for x in rows if x["email"] == email]
    assert len(match) == 1
    assert match[0]["interest"] == "process-notes"


# ---------- Inquiry — curatorial type (Archive page) ----------
def test_create_inquiry_curatorial(client):
    """Archive inquiry uses inquiry_type=curatorial with project_interest + consent."""
    payload = {
        "name": "TEST_Archive_Curatorial",
        "email": f"test_arc_{uuid.uuid4().hex[:8]}@example.com",
        "inquiry_type": "curatorial",
        "subject": "Archive curatorial inquiry",
        "message": "Curatorial inquiry from the Archive page.",
        "project_interest": "Cuba, Love Story",
        "country": "Germany",
        "consent": True,
    }
    r = client.post(f"{API}/inquiries", json=payload)
    assert r.status_code == 201, r.text
    data = r.json()
    assert data["inquiry_type"] == "curatorial"
    assert data["project_interest"] == "Cuba, Love Story"
    assert data["country"] == "Germany"
    assert data["consent"]



# ---------- Contact page: book_inquiry + organisation + deadline (iteration 9) ----------
def test_create_inquiry_book_inquiry_with_org_and_deadline(client):
    """Contact page: book_inquiry type with organisation + deadline + all new fields populated."""
    payload = {
        "name": "TEST_Contact_BookInquiry",
        "email": f"test_book_{uuid.uuid4().hex[:8]}@example.com",
        "inquiry_type": "book_inquiry",
        "subject": "Book inquiry from Contact page",
        "message": "Requesting signed copy and catalogue PDF.",
        "project_interest": "Cuba, Love Story",
        "country": "Spain",
        "phone": "+34 600000000",
        "organisation": "Test Publishing House",
        "deadline": "by 15 September",
        "consent": True,
    }
    r = client.post(f"{API}/inquiries", json=payload)
    assert r.status_code == 201, r.text
    data = r.json()
    assert data["inquiry_type"] == "book_inquiry"
    assert data["organisation"] == "Test Publishing House"
    assert data["deadline"] == "by 15 September"
    assert data["project_interest"] == "Cuba, Love Story"
    assert data["country"] == "Spain"
    assert data["consent"]
    assert "id" in data and isinstance(data["id"], str)


def test_inquiries_list_persists_org_and_deadline(client):
    """POST with organisation+deadline, then GET /api/inquiries — latest record contains them."""
    unique_email = f"test_persist_{uuid.uuid4().hex[:8]}@example.com"
    payload = {
        "name": "TEST_Contact_Persistence",
        "email": unique_email,
        "inquiry_type": "press",
        "message": "Press inquiry persistence test.",
        "country": "France",
        "organisation": "TEST_Press_Org",
        "deadline": "TEST_Deadline_2026_02_01",
        "consent": True,
    }
    r = client.post(f"{API}/inquiries", json=payload)
    assert r.status_code == 201, r.text

    g = client.get(f"{API}/inquiries", params={"limit": 50})
    assert g.status_code == 200
    rows = g.json()
    assert isinstance(rows, list) and len(rows) > 0
    match = next((row for row in rows if row.get("email") == unique_email), None)
    assert match is not None, "Newly created inquiry not found in GET /api/inquiries"
    assert match["organisation"] == "TEST_Press_Org"
    assert match["deadline"] == "TEST_Deadline_2026_02_01"
    assert match["inquiry_type"] == "press"


def test_create_inquiry_rejects_unknown_type(client):
    """random_bad_type must produce 422."""
    payload = {
        "name": "TEST_Bad_Type",
        "email": f"test_bad_{uuid.uuid4().hex[:8]}@example.com",
        "inquiry_type": "random_bad_type",
        "message": "Should be rejected.",
    }
    r = client.post(f"{API}/inquiries", json=payload)
    assert r.status_code == 422, r.text
