// Test IDs for the KOBI ISRAEL site.
// Naming: kebab-case `<feature>-<element>`.

export const HOME = {
	emergentLink: 'home-emergent-link',
	// Navigation
	navBrand: 'nav-brand',
	navDesktop: 'nav-desktop',
	navMobileToggle: 'nav-mobile-toggle',
	navMobileDrawer: 'nav-mobile-drawer',
	navLink: (slug) => `nav-link-${slug}`,
	// Hero
	heroTitle: 'hero-title',
	heroSubtitle: 'hero-subtitle',
	heroCtaSelected: 'hero-cta-selected-works',
	heroCtaCollector: 'hero-cta-collector',
	// Concept
	conceptHeading: 'concept-heading',
	// Selected works
	worksHeading: 'works-heading',
	worksGrid: 'works-grid',
	worksCard: (slug) => `works-card-${slug}`,
	worksCardCta: (slug) => `works-card-cta-${slug}`,
	// Split still / moving
	splitStillCta: 'split-still-cta',
	splitMovingCta: 'split-moving-cta',
	// Featured
	featuredViewCta: 'featured-view-cta',
	featuredWatchCta: 'featured-watch-cta',
	featuredInquireCta: 'featured-inquire-cta',
	// Prints
	printsRequestCta: 'prints-request-cta',
	// Books
	booksViewCta: 'books-view-cta',
	// Statement
	statementReadCta: 'statement-read-cta',
	// Contact
	contactForm: 'contact-form',
	contactName: 'contact-name',
	contactEmail: 'contact-email',
	contactType: 'contact-type',
	contactSubject: 'contact-subject',
	contactMessage: 'contact-message',
	contactSubmit: 'contact-submit',
	contactSuccess: 'contact-success',
	// Newsletter
	newsletterForm: 'newsletter-form',
	newsletterEmail: 'newsletter-email',
	newsletterSubmit: 'newsletter-submit',
	newsletterSuccess: 'newsletter-success',
	// Footer
	footer: 'site-footer',
};

export const STILL = {
	page: 'still-page',
	// Hero
	heroTitle: 'still-hero-title',
	heroSubtitle: 'still-hero-subtitle',
	heroIntro: 'still-hero-intro',
	heroCtaProjects: 'still-hero-cta-projects',
	heroCtaCollector: 'still-hero-cta-collector',
	// Curatorial intro
	curatorialHeading: 'still-curatorial-heading',
	// Project index
	indexHeading: 'still-index-heading',
	filtersBar: 'still-filters-bar',
	filterBtn: (slug) => `still-filter-${slug}`,
	grid: 'still-projects-grid',
	emptyState: 'still-empty-state',
	card: (slug) => `still-card-${slug}`,
	cardCta: (slug) => `still-card-cta-${slug}`,
	// Featured
	featuredHeading: 'still-featured-heading',
	featuredViewCta: 'still-featured-view-cta',
	featuredPrintCta: 'still-featured-print-cta',
	featuredBookCta: 'still-featured-book-cta',
	// Collector
	collectorHeading: 'still-collector-heading',
	collectorRequestCta: 'still-collector-request-cta',
	// Archive notes
	notesHeading: 'still-notes-heading',
	noteCard: (slug) => `still-note-${slug}`,
	noteCta: (slug) => `still-note-cta-${slug}`,
};

export const MOVING = {
	page: 'moving-page',
	// Hero
	heroTitle: 'moving-hero-title',
	heroSubtitle: 'moving-hero-subtitle',
	heroIntro: 'moving-hero-intro',
	heroCtaWorks: 'moving-hero-cta-works',
	heroCtaCurator: 'moving-hero-cta-curator',
	// Curatorial
	curatorialHeading: 'moving-curatorial-heading',
	// Works index
	worksHeading: 'moving-works-heading',
	filtersBar: 'moving-filters-bar',
	filterBtn: (slug) => `moving-filter-${slug}`,
	grid: 'moving-works-grid',
	emptyState: 'moving-empty-state',
	card: (slug) => `moving-card-${slug}`,
	cardCta: (slug) => `moving-card-cta-${slug}`,
	// Featured
	featuredHeading: 'moving-featured-heading',
	featuredWatchCta: 'moving-featured-watch-cta',
	featuredPhotographyCta: 'moving-featured-photography-cta',
	featuredCuratorCta: 'moving-featured-curator-cta',
	// Statement
	statementHeading: 'moving-statement-heading',
	// Curator pathway
	curatorHeading: 'moving-curator-heading',
	curatorRequestCta: 'moving-curator-request-cta',
	// Still ↔ Moving bridge
	bridgeHeading: 'moving-bridge-heading',
	bridgeCard: (slug) => `moving-bridge-${slug}`,
	bridgeCta: (slug) => `moving-bridge-cta-${slug}`,
	// Sound, voice, music
	soundHeading: 'moving-sound-heading',
	soundCta: 'moving-sound-cta',
	// Archive fragments
	fragmentsHeading: 'moving-fragments-heading',
	fragmentCard: (slug) => `moving-fragment-${slug}`,
	fragmentCta: (slug) => `moving-fragment-cta-${slug}`,
};

export const PRINTS = {
	page: 'prints-page',
	// Hero
	heroTitle: 'prints-hero-title',
	heroSubtitle: 'prints-hero-subtitle',
	heroIntro: 'prints-hero-intro',
	heroCtaWorks: 'prints-hero-cta-works',
	heroCtaInquire: 'prints-hero-cta-inquire',
	// Viewing room
	viewingHeading: 'prints-viewing-heading',
	// Collections
	collectionsHeading: 'prints-collections-heading',
	collectionsGrid: 'prints-collections-grid',
	collectionCard: (slug) => `prints-collection-${slug}`,
	collectionView: (slug) => `prints-collection-view-${slug}`,
	collectionInquire: (slug) => `prints-collection-inquire-${slug}`,
	// Available works
	availableHeading: 'prints-available-heading',
	availableGrid: 'prints-available-grid',
	availableCard: (slug) => `prints-available-${slug}`,
	availableRequest: (slug) => `prints-available-request-${slug}`,
	// Print information
	infoHeading: 'prints-info-heading',
	// Trust
	trustHeading: 'prints-trust-heading',
	// Inquiry form
	inquiryHeading: 'prints-inquiry-heading',
	inquiryForm: 'prints-inquiry-form',
	inquiryName: 'prints-inquiry-name',
	inquiryEmail: 'prints-inquiry-email',
	inquiryPhone: 'prints-inquiry-phone',
	inquiryCountry: 'prints-inquiry-country',
	inquiryArtwork: 'prints-inquiry-artwork',
	inquirySize: 'prints-inquiry-size',
	inquiryBudget: 'prints-inquiry-budget',
	inquiryType: 'prints-inquiry-type',
	inquiryMessage: 'prints-inquiry-message',
	inquiryConsent: 'prints-inquiry-consent',
	inquirySubmit: 'prints-inquiry-submit',
	inquirySuccess: 'prints-inquiry-success',
	// Institutional
	institutionalHeading: 'prints-institutional-heading',
	institutionalCta: 'prints-institutional-cta',
	// Secondary market
	secondaryHeading: 'prints-secondary-heading',
	// Related archive
	relatedHeading: 'prints-related-heading',
	relatedLink: (slug) => `prints-related-${slug}`,
};

export const BOOKS = {
	page: 'books-page',
	// Hero
	heroTitle: 'books-hero-title',
	heroSubtitle: 'books-hero-subtitle',
	heroIntro: 'books-hero-intro',
	heroCtaView: 'books-hero-cta-view',
	heroCtaInquire: 'books-hero-cta-inquire',
	// Editorial intro
	editorialHeading: 'books-editorial-heading',
	// Publications index
	indexHeading: 'books-index-heading',
	indexGrid: 'books-index-grid',
	card: (slug) => `books-card-${slug}`,
	cardView: (slug) => `books-card-view-${slug}`,
	cardInquire: (slug) => `books-card-inquire-${slug}`,
	// Featured
	featuredHeading: 'books-featured-heading',
	featuredRelatedProject: 'books-featured-related-project',
	featuredRequest: 'books-featured-request',
	featuredCollector: 'books-featured-collector',
	// Purchase
	purchaseHeading: 'books-purchase-heading',
	purchaseRequestCta: 'books-purchase-request-cta',
	// PDF archive
	pdfHeading: 'books-pdf-heading',
	pdfCard: (slug) => `books-pdf-${slug}`,
	pdfCta: (slug) => `books-pdf-cta-${slug}`,
	// Texts
	textsHeading: 'books-texts-heading',
	textCard: (slug) => `books-text-${slug}`,
	textCta: (slug) => `books-text-cta-${slug}`,
	// Publication history
	historyHeading: 'books-history-heading',
	// Inquiry form
	inquiryHeading: 'books-inquiry-heading',
	inquiryForm: 'books-inquiry-form',
	inquiryName: 'books-inquiry-name',
	inquiryEmail: 'books-inquiry-email',
	inquiryCountry: 'books-inquiry-country',
	inquiryBook: 'books-inquiry-book',
	inquiryType: 'books-inquiry-type',
	inquiryMessage: 'books-inquiry-message',
	inquiryConsent: 'books-inquiry-consent',
	inquirySubmit: 'books-inquiry-submit',
	inquirySuccess: 'books-inquiry-success',
	// Related archive
	relatedHeading: 'books-related-heading',
	relatedLink: (slug) => `books-related-${slug}`,
};
