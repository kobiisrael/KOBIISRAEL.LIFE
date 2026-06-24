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

export const CV = {
        page: 'cv-page',
        // Hero
        heroTitle: 'cv-hero-title',
        heroSubtitle: 'cv-hero-subtitle',
        heroIntro: 'cv-hero-intro',
        heroCtaRead: 'cv-hero-cta-read',
        heroCtaDownload: 'cv-hero-cta-download',
        // Biography
        bioHeading: 'cv-bio-heading',
        // Positioning
        positioningHeading: 'cv-positioning-heading',
        positioningCard: (slug) => `cv-positioning-${slug}`,
        // Exhibitions
        exhibitionsHeading: 'cv-exhibitions-heading',
        exhibitionsSolo: 'cv-exhibitions-solo',
        exhibitionsGroup: 'cv-exhibitions-group',
        // Collections
        collectionsHeading: 'cv-collections-heading',
        collectionsBlock: (slug) => `cv-collections-${slug}`,
        // Awards
        awardsHeading: 'cv-awards-heading',
        // Publications
        pubsHeading: 'cv-pubs-heading',
        pubsBlock: (slug) => `cv-pubs-${slug}`,
        // Books
        booksHeading: 'cv-books-heading',
        bookEntry: (slug) => `cv-book-${slug}`,
        bookCta: (slug) => `cv-book-cta-${slug}`,
        // Timeline
        timelineHeading: 'cv-timeline-heading',
        timelineEntry: (slug) => `cv-timeline-${slug}`,
        timelineCta: (slug) => `cv-timeline-cta-${slug}`,
        // Materials
        materialsHeading: 'cv-materials-heading',
        materialCard: (slug) => `cv-material-${slug}`,
        materialCta: (slug) => `cv-material-cta-${slug}`,
        // Inquiries
        inquiriesHeading: 'cv-inquiries-heading',
        pathwayCard: (slug) => `cv-pathway-${slug}`,
        pathwayCta: (slug) => `cv-pathway-cta-${slug}`,
        // Contact form
        contactHeading: 'cv-contact-heading',
        contactForm: 'cv-contact-form',
        contactName: 'cv-contact-name',
        contactEmail: 'cv-contact-email',
        contactOrg: 'cv-contact-org',
        contactCountry: 'cv-contact-country',
        contactType: 'cv-contact-type',
        contactMessage: 'cv-contact-message',
        contactConsent: 'cv-contact-consent',
        contactSubmit: 'cv-contact-submit',
        contactSuccess: 'cv-contact-success',
};

export const ARCHIVE = {
        page: 'archive-page',
        heroTitle: 'archive-hero-title',
        heroSubtitle: 'archive-hero-subtitle',
        heroIntro: 'archive-hero-intro',
        heroCtaExplore: 'archive-hero-cta-explore',
        heroCtaSearch: 'archive-hero-cta-search',
        introHeading: 'archive-intro-heading',
        categoriesHeading: 'archive-categories-heading',
        categoryCard: (slug) => `archive-category-${slug}`,
        categoryCta: (slug) => `archive-category-cta-${slug}`,
        indexHeading: 'archive-index-heading',
        search: 'archive-search',
        filtersBar: 'archive-filters-bar',
        filterBtn: (slug) => `archive-filter-${slug}`,
        indexGrid: 'archive-index-grid',
        indexCard: (slug) => `archive-index-${slug}`,
        indexCta: (slug) => `archive-index-cta-${slug}`,
        emptyState: 'archive-empty-state',
        pathwaysHeading: 'archive-pathways-heading',
        pathwayCard: (slug) => `archive-pathway-${slug}`,
        pathwayCta: (slug) => `archive-pathway-cta-${slug}`,
        notesHeading: 'archive-notes-heading',
        noteCard: (slug) => `archive-note-${slug}`,
        libraryHeading: 'archive-library-heading',
        libraryCard: (slug) => `archive-library-${slug}`,
        libraryCta: (slug) => `archive-library-cta-${slug}`,
        timelineHeading: 'archive-timeline-heading',
        timelineEntry: (slug) => `archive-timeline-${slug}`,
        mythologyHeading: 'archive-mythology-heading',
        mythCard: (slug) => `archive-myth-${slug}`,
        relatedHeading: 'archive-related-heading',
        relatedLink: (slug) => `archive-related-${slug}`,
        inquiryHeading: 'archive-inquiry-heading',
        inquiryForm: 'archive-inquiry-form',
        inquiryName: 'archive-inquiry-name',
        inquiryEmail: 'archive-inquiry-email',
        inquiryOrg: 'archive-inquiry-org',
        inquiryCountry: 'archive-inquiry-country',
        inquiryType: 'archive-inquiry-type',
        inquiryArea: 'archive-inquiry-area',
        inquiryMessage: 'archive-inquiry-message',
        inquiryConsent: 'archive-inquiry-consent',
        inquirySubmit: 'archive-inquiry-submit',
        inquirySuccess: 'archive-inquiry-success',
};

export const JOURNAL = {
        page: 'journal-page',
        heroTitle: 'journal-hero-title',
        heroSubtitle: 'journal-hero-subtitle',
        heroIntro: 'journal-hero-intro',
        heroCtaNotes: 'journal-hero-cta-notes',
        heroCtaProjects: 'journal-hero-cta-projects',
        introHeading: 'journal-intro-heading',
        featuredHeading: 'journal-featured-heading',
        featuredCard: (slug) => `journal-featured-${slug}`,
        featuredCta: (slug) => `journal-featured-cta-${slug}`,
        categoriesHeading: 'journal-categories-heading',
        categoryCard: (slug) => `journal-category-${slug}`,
        categoryCta: (slug) => `journal-category-cta-${slug}`,
        indexHeading: 'journal-index-heading',
        search: 'journal-search',
        filtersBar: 'journal-filters-bar',
        filterBtn: (slug) => `journal-filter-${slug}`,
        indexGrid: 'journal-index-grid',
        indexCard: (slug) => `journal-index-${slug}`,
        indexCta: (slug) => `journal-index-cta-${slug}`,
        emptyState: 'journal-empty-state',
        projectNotesHeading: 'journal-project-notes-heading',
        projectNoteCard: (slug) => `journal-project-note-${slug}`,
        projectNoteCta: (slug) => `journal-project-note-cta-${slug}`,
        motifsHeading: 'journal-motifs-heading',
        motifCard: (slug) => `journal-motif-${slug}`,
        motifCta: (slug) => `journal-motif-cta-${slug}`,
        voiceHeading: 'journal-voice-heading',
        voiceCard: (slug) => `journal-voice-${slug}`,
        voiceCta: (slug) => `journal-voice-cta-${slug}`,
        newsletterHeading: 'journal-newsletter-heading',
        newsletterForm: 'journal-newsletter-form',
        newsletterEmail: 'journal-newsletter-email',
        newsletterInterest: 'journal-newsletter-interest',
        newsletterSubmit: 'journal-newsletter-submit',
        newsletterSuccess: 'journal-newsletter-success',
        relatedHeading: 'journal-related-heading',
        relatedLink: (slug) => `journal-related-${slug}`,
        // Individual entry page
        entryPage: 'journal-entry-page',
        entryTitle: 'journal-entry-title',
        entrySubtitle: 'journal-entry-subtitle',
        entryMeta: 'journal-entry-meta',
        entryBody: 'journal-entry-body',
        entryPullquote: 'journal-entry-pullquote',
        entryRelatedStill: 'journal-entry-related-still',
        entryRelatedMoving: 'journal-entry-related-moving',
        entryRelatedBook: 'journal-entry-related-book',
        entryRelatedPrint: 'journal-entry-related-print',
        entryRelatedNote: 'journal-entry-related-note',
        entryBack: 'journal-entry-back',
        entryInquiry: 'journal-entry-inquiry',
        entryNotFound: 'journal-entry-not-found',
};


export const CONTACT = {
        page: 'contact-page',
        heroTitle: 'contact-hero-title',
        heroSubtitle: 'contact-hero-subtitle',
        heroIntro: 'contact-hero-intro',
        heroCtaInquiry: 'contact-hero-cta-inquiry',
        heroCtaPrint: 'contact-hero-cta-print',
        introHeading: 'contact-intro-heading',
        pathwaysHeading: 'contact-pathways-heading',
        pathwayCard: (slug) => `contact-pathway-${slug}`,
        pathwayCta: (slug) => `contact-pathway-cta-${slug}`,
        formHeading: 'contact-form-heading',
        form: 'contact-form',
        formName: 'contact-form-name',
        formEmail: 'contact-form-email',
        formPhone: 'contact-form-phone',
        formOrg: 'contact-form-organisation',
        formCountry: 'contact-form-country',
        formType: 'contact-form-type',
        formProject: 'contact-form-project',
        formBudget: 'contact-form-budget',
        formDeadline: 'contact-form-deadline',
        formMessage: 'contact-form-message',
        formConsent: 'contact-form-consent',
        formSubmit: 'contact-form-submit',
        formSuccess: 'contact-form-success',
        collectorHeading: 'contact-collector-heading',
        collectorCta: 'contact-collector-cta',
        curatorHeading: 'contact-curator-heading',
        curatorCta: 'contact-curator-cta',
        pressHeading: 'contact-press-heading',
        pressCta: 'contact-press-cta',
        filmHeading: 'contact-film-heading',
        filmCta: 'contact-film-cta',
        bookHeading: 'contact-book-heading',
        bookCta: 'contact-book-cta',
        detailsHeading: 'contact-details-heading',
        detailsItem: (slug) => `contact-details-${slug}`,
        beforeHeading: 'contact-before-heading',
        privacyHeading: 'contact-privacy-heading',
        privacyLink: 'contact-privacy-link',
        relatedHeading: 'contact-related-heading',
        relatedLink: (slug) => `contact-related-${slug}`,
};

