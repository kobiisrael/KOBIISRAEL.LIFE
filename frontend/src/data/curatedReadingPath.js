// Kobi Israel — "Start Here: Curated Reading Path"
// Twelve notes in the artist's intended reading order, derived from the
// PDF "Kobi Israel Journal Start Here Curated Reading Path".
// Each entry links to /journal/<slug>. Slugs marked with `pending: true`
// do not yet have a full entry page — they will activate when the artist
// supplies the body for those notes.

import { CUBA } from "@/data/cubaImages";

// Cycle through the 5 Cuba photographs as image-led placeholders for the
// 12 curated cards. Each slot gets a unique combination of card + image.
const POOL = [CUBA.i1, CUBA.i2, CUBA.i3, CUBA.i4, CUBA.i5];

export const CURATED_READING_PATH = [
  {
    position: 1,
    original_number: "01",
    theme: "Memory",
    title: "Cuba as Mirror",
    excerpt:
      "In Cuba, Rafael was not only a stranger. He became a mirror through which childhood, father-memory, masculinity, desire and fear returned in altered form.",
    tags: ["Cuba", "Love Story", "Still & Moving Diaries", "Reminiscence Narrative", "Rafael", "Masculinity"],
    slug: "cuba-as-mirror",
    pending: false,
  },
  {
    position: 2,
    original_number: "02",
    theme: "Encounter",
    title: "The Man Waiting for the Bus",
    excerpt:
      "In Trinidad, Rafael was only a man waiting for a bus. Then he stepped into traffic, and the journey became a mirror I could not leave behind.",
    tags: ["Cuba", "Love Story", "Rafael", "Trinidad", "Sancti Spíritus", "Reminiscence Narrative"],
    slug: "the-man-waiting-for-the-bus",
    pending: false,
  },
  {
    position: 3,
    original_number: "05",
    theme: "Belonging",
    title: "The Football Field and the White Line",
    excerpt:
      "In Cuba, Rafael ran into the football field and belonged immediately. I stood behind the white line, where childhood fear and adult desire began to look at each other.",
    tags: ["Cuba", "Love Story", "Rafael", "Football Field", "White Line", "Masculinity"],
    slug: "the-football-field-and-the-white-line",
    pending: false,
  },
  {
    position: 4,
    original_number: "06",
    theme: "Water",
    title: "The Chocolate River",
    excerpt:
      "Rafael entered the dark river without hesitation. I followed, and the body that once carried shame found another memory waiting in the water.",
    tags: ["Cuba", "Love Story", "Rafael", "The Chocolate River", "Masculinity", "Homoeroticism"],
    slug: "the-chocolate-river",
    pending: false,
  },
  {
    position: 5,
    original_number: "07",
    theme: "Inheritance",
    title: "The Camera Given by Moshe",
    excerpt:
      "On Jaffa's pier, Moshe, my new partner at the time, gave me John's Nikon FM2 after losing him to cancer at twenty-seven.",
    tags: ["Moshe", "John", "Nikon FM2", "Jaffa", "Photography and Memory", "Camera as Apparatus"],
    slug: "the-camera-given-by-moshe",
    pending: false,
  },
  {
    position: 6,
    original_number: "10",
    theme: "Mother",
    title: "My Mother in Paris",
    excerpt:
      "In Paris, old family photographs interrupted the present. My mother became both witness and archive, and the still image began to move through her body.",
    tags: ["Mother", "Parisian Postcards", "Family Photographs", "Still & Moving Diaries", "Moving Image", "Paris"],
    slug: "my-mother-in-paris",
    pending: true,
  },
  {
    position: 7,
    original_number: "12",
    theme: "Return",
    title: "The Negative That Returned",
    excerpt:
      "A damaged strip of film returned carrying adolescence in reverse. It did not restore the past. It reopened it, asking me to recognise the boy who was already learning how to look.",
    tags: ["Return", "Recovered Negatives", "110mm Film", "Bat Yam", "Adolescence", "Investigating Things Past", "Darkroom"],
    slug: "the-negative-that-returned",
    pending: true,
  },
  {
    position: 8,
    original_number: "14",
    theme: "Soldier",
    title: "Views: The Soldier Who Could Not Look Away",
    excerpt:
      "In army life, male bodies were everywhere and desire was nowhere allowed to speak. Views holds the trembling line between brotherhood, discipline, forbidden looking and the homoerotic charge of proximity.",
    tags: ["Soldier", "Views", "Army Life", "Masculinity", "Homo-social", "Homoerotic", "Forbidden Looking"],
    slug: "views-the-soldier-who-could-not-look-away",
    pending: true,
  },
  {
    position: 9,
    original_number: "16",
    theme: "Code",
    title: "The Male Body as Code",
    excerpt:
      "The male body was never only a body for me. It was a code: father, soldier, stranger, Rafael, lover, threat, desire, theatre and archive written on skin.",
    tags: ["Code", "Male Body", "Masculinity", "Coded Desire", "Views", "Cuba", "Love Story"],
    slug: "the-male-body-as-code",
    pending: true,
  },
  {
    position: 10,
    original_number: "19",
    theme: "Fragment",
    title: "A Chaos of Appearances",
    excerpt:
      "A life does not arrive as a clean story. It arrives as fragments: roads, soldiers, strangers, mothers, rivers, negatives and bodies that refuse one final explanation.",
    tags: ["Fragment", "A Chaos of Appearances", "Archive", "Clues", "Memory", "Photography", "Viewer"],
    slug: "a-chaos-of-appearances",
    pending: true,
  },
  {
    position: 11,
    original_number: "29",
    theme: "Desire",
    title: "Desire as Method",
    excerpt:
      "Desire is not only what appears in the image. It is the force that stops the car, follows the stranger, returns to the contact sheet and asks what memory has been awakened.",
    tags: ["Desire", "Looking", "Rafael", "Views", "Intimate Strangers", "Queer Memory", "Archive"],
    slug: "desire-as-method",
    pending: true,
  },
  {
    position: 12,
    original_number: "32",
    theme: "Diary",
    title: "The Still and Moving Diary",
    excerpt:
      "A still and moving diary is made from photographs, films, books, prints, screens, journeys and delayed sentences, each one returning the self through another form.",
    tags: ["Still and Moving Diary", "Archive", "Journal", "Memory", "Return", "Continuation"],
    slug: "the-still-and-moving-diary",
    pending: true,
  },
].map((item, idx) => ({
  ...item,
  hero_image: POOL[idx % POOL.length].src,
  hero_alt: POOL[idx % POOL.length].alt,
}));
