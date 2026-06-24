from fastapi import FastAPI, APIRouter, HTTPException, status
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional, Literal
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="Kobi Israel — Artist Archive API")
api_router = APIRouter(prefix="/api")


# ---------- Models ----------
def _iso_now() -> str:
    return datetime.now(timezone.utc).isoformat()


class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


InquiryType = Literal[
    "general",
    "collector",
    "gallery_curator",
    "press",
    "institutional",
    "purchase",
    "signed_copy",
    "research",
    "gallery",
    "curator",
    "museum",
    "publisher",
    "film_programmer",
    "academic",
    "curatorial",
    "licensing",
    "book_inquiry",
]


class InquiryCreate(BaseModel):
    name: str = Field(min_length=1, max_length=200)
    email: EmailStr
    inquiry_type: InquiryType = "general"
    subject: Optional[str] = Field(default=None, max_length=300)
    message: str = Field(min_length=1, max_length=5000)
    project_interest: Optional[str] = Field(default=None, max_length=200)
    # Optional fields used by the Limited Edition Prints collector inquiry form
    phone: Optional[str] = Field(default=None, max_length=50)
    country: Optional[str] = Field(default=None, max_length=100)
    preferred_size: Optional[str] = Field(default=None, max_length=100)
    budget_range: Optional[str] = Field(default=None, max_length=100)
    consent: Optional[bool] = None
    # Optional fields used by the Contact page
    organisation: Optional[str] = Field(default=None, max_length=200)
    deadline: Optional[str] = Field(default=None, max_length=100)


class Inquiry(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    inquiry_type: InquiryType
    subject: Optional[str] = None
    message: str
    project_interest: Optional[str] = None
    phone: Optional[str] = None
    country: Optional[str] = None
    preferred_size: Optional[str] = None
    budget_range: Optional[str] = None
    consent: Optional[bool] = None
    organisation: Optional[str] = None
    deadline: Optional[str] = None
    created_at: str = Field(default_factory=_iso_now)


class NewsletterCreate(BaseModel):
    email: EmailStr
    source: Optional[str] = Field(default="homepage", max_length=80)
    interest: Optional[str] = Field(default=None, max_length=80)


class NewsletterSubscription(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: EmailStr
    source: str = "homepage"
    interest: Optional[str] = None
    created_at: str = Field(default_factory=_iso_now)


class Project(BaseModel):
    slug: str
    title: str
    year_range: str
    medium: str
    description: str
    featured: bool = False


# ---------- Static seed of selected works (placeholder content) ----------
SELECTED_PROJECTS: List[Project] = [
    Project(
        slug="cuba-love-story",
        title="Cuba, Love Story",
        year_range="Years to be confirmed by artist",
        medium="Photography and moving image",
        description="A long-term photographic and moving-image investigation into masculinity, militarism, homoerotic codes, memory and desire.",
        featured=True,
    ),
    Project(
        slug="river-of-three-crossings",
        title="River of Three Crossings",
        year_range="Years to be confirmed by artist",
        medium="Photography",
        description="Crossings between landscape, biography and the porous edges of a remembered self.",
    ),
    Project(
        slug="fragments-of-life",
        title="Fragments of Life",
        year_range="Years to be confirmed by artist",
        medium="Photography and archive",
        description="An ongoing diaristic series collecting fragments of daily life, intimacy and ordinary light.",
    ),
    Project(
        slug="intimate-strangers",
        title="Intimate Strangers",
        year_range="Years to be confirmed by artist",
        medium="Portrait photography",
        description="A study of brief encounters: men met, watched, photographed and remembered.",
    ),
    Project(
        slug="views",
        title="Views",
        year_range="Years to be confirmed by artist",
        medium="Photography",
        description="A quiet typology of windows, thresholds and the interior weather of looking out.",
    ),
    Project(
        slug="parisian-postcards",
        title="Parisian Postcards",
        year_range="Years to be confirmed by artist",
        medium="Photography",
        description="Letters in image form from a city of strangers, kept and never sent.",
    ),
    Project(
        slug="investigating-things-past",
        title="Investigating Things Past",
        year_range="Years to be confirmed by artist",
        medium="Photography and archive",
        description="An autobiographical archive in which childhood, exile and recollection are continually re-read.",
    ),
]


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"message": "Kobi Israel — Still & Moving Diaries"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.model_dump())
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    rows = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for r in rows:
        if isinstance(r.get('timestamp'), str):
            r['timestamp'] = datetime.fromisoformat(r['timestamp'])
    return rows


@api_router.get("/projects", response_model=List[Project])
async def list_projects():
    return SELECTED_PROJECTS


@api_router.get("/projects/{slug}", response_model=Project)
async def get_project(slug: str):
    for p in SELECTED_PROJECTS:
        if p.slug == slug:
            return p
    raise HTTPException(status_code=404, detail="Project not found")


@api_router.post("/inquiries", response_model=Inquiry, status_code=status.HTTP_201_CREATED)
async def create_inquiry(payload: InquiryCreate):
    inquiry = Inquiry(**payload.model_dump())
    await db.inquiries.insert_one(inquiry.model_dump())
    return inquiry


@api_router.get("/inquiries", response_model=List[Inquiry])
async def list_inquiries(limit: int = 100):
    rows = await db.inquiries.find({}, {"_id": 0}).sort("created_at", -1).to_list(limit)
    return rows


@api_router.post(
    "/newsletter",
    response_model=NewsletterSubscription,
    status_code=status.HTTP_201_CREATED,
)
async def subscribe_newsletter(payload: NewsletterCreate):
    existing = await db.newsletter.find_one({"email": payload.email}, {"_id": 0})
    if existing:
        return NewsletterSubscription(**existing)
    sub = NewsletterSubscription(**payload.model_dump())
    await db.newsletter.insert_one(sub.model_dump())
    return sub


@api_router.get("/newsletter", response_model=List[NewsletterSubscription])
async def list_newsletter(limit: int = 500):
    rows = await db.newsletter.find({}, {"_id": 0}).sort("created_at", -1).to_list(limit)
    return rows


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
