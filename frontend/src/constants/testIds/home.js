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
