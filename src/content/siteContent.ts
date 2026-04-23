// ============================================================================
// Template Setup
// ============================================================================

const businessName = "Havstein Par 3";

// ============================================================================
// Shared Types
// ============================================================================

interface LinkContent {
  label: string;
  href: string;
}

interface SectionHeaderContent {
  sectionLabel: string;
  title: string;
  subtitle: string;
}

interface ContactItemContent {
  label: string;
  value: string;
}

// ============================================================================
// Hero
// ============================================================================

interface HeroStatusCard {
  title: string;
  status: string;
  statusLabel: string;
  detail: string;
}

interface HeroContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  statusCards: HeroStatusCard[];
  primaryCta: LinkContent;
  secondaryCta: LinkContent;
}

// ============================================================================
// Reviews
// ============================================================================

interface ReviewCardContent {
  name: string;
  rating: number;
  quote: string;
  sourceLabel: string;
}

interface ReviewsContent {
  title: string;
  subtitle: string;
  summaryLabel: string;
  summaryScore: string;
  linkLabel: string;
  linkHref: string;
  cards: ReviewCardContent[];
}

// ============================================================================
// Play Or Train
// ============================================================================

interface PlayOrTrainGroup {
  title: string;
  points: string[];
  intro?: string;
  note?: string;
  example?: string;
}

interface PlayOrTrainCard {
  eyebrow: string;
  title: string;
  status: string;
  statusLabel: string;
  hours: string;
  greenkeeperComment: {
    title: string;
    text: string;
    warning?: string;
  };
  groups: PlayOrTrainGroup[];
  cta: LinkContent;
  variant: string;
}

interface PlayOrTrainContent {
  sectionLabel: string;
  title: string;
  cards: PlayOrTrainCard[];
}

// ============================================================================
// Pricing
// ============================================================================

interface PricingCourseItem {
  label: string;
  sublabel: string;
  price: string;
}

interface PricingContent extends SectionHeaderContent {
  course: {
    title: string;
    items: PricingCourseItem[];
    note: string;
    paymentTitle: string;
    paymentLines: string[];
    fineNote: string;
  };
  range: {
    title: string;
    price: string;
    label: string;
    note: string;
  };
}

// ============================================================================
// Contact
// ============================================================================

interface ContactContent extends SectionHeaderContent {
  area: ContactItemContent;
  phone: ContactItemContent;
  email: ContactItemContent;
  mapCard: {
    eyebrow: string;
    title: string;
    description: string;
    ctaLabel: LinkContent["label"];
    ctaHref: LinkContent["href"];
  };
}

// ============================================================================
// Root Content Object
// ============================================================================

interface SiteContent {
  businessName: string;
  hero: HeroContent;
  reviews: ReviewsContent;
  playOrTrain: PlayOrTrainContent;
  pricing: PricingContent;
  contact: ContactContent;
}

// ============================================================================
// Site Content
// ============================================================================

export const siteContent: SiteContent = {
  // Global business identity
  businessName,

  // Hero section
  hero: {
    eyebrow: "PAR 3-BANE OG DRIVING RANGE",
    title: "Golf rett utenfor Trondheim",
    subtitle: "Spill en rask runde eller ta en treningsøkt på rangen.",
    statusCards: [
      {
        title: "Golfbanen",
        status: "open",
        statusLabel: "Åpen for spill",
        detail: "Hver dag 09:00–20:00",
      },
      {
        title: "Driving range",
        status: "open",
        statusLabel: "Åpen for drop-in",
        detail: "Hver dag 07:00–22:00",
      },
    ],
    primaryCta: {
      label: "Book starttid",
      href: "#",
    },
    secondaryCta: {
      label: "Se praktisk info",
      href: "#",
    },
  },

  // Reviews section
  reviews: {
    title: `Hva folk sier om ${businessName}`,
    subtitle: "Et utvalg Google-anmeldelser fra spillere og besøkende.",
    summaryLabel: "Google reviews",
    summaryScore: "4,1/5",
    linkLabel: "Se alle Google-anmeldelser",
    linkHref: "#",
    cards: [
      {
        name: "Øystein Aas",
        rating: 5,
        quote: "Relativt billig, sentrumsnært og med en fantastisk utsikt!",
        sourceLabel: "Google",
      },
      {
        name: "Peter Jiro Grieg Toyomasu",
        rating: 5,
        quote: "God range og bane for prisen! Tilgjengelig og enkelt.",
        sourceLabel: "Google",
      },
      {
        name: "Mads Iversen",
        rating: 5,
        quote: "Fantastisk personale, fin green og topp stemning.",
        sourceLabel: "Google",
      },
      {
        name: "Rigmor Bøkseth Monge",
        rating: 5,
        quote: "Kjempefint der nå, ut å spill golf folkens.",
        sourceLabel: "Google",
      },
      {
        name: "Wenche Sivertsen",
        rating: 5,
        quote:
          "Fin plass for golf med flott utsikt over Trondheim. 9 hulls bane som tar ca 1 time.",
        sourceLabel: "Google",
      },
      {
        name: "Reidar Angell Hansen",
        rating: 4,
        quote: "Fin utsikt herfra på nyttårsaften, ellers en vakker plass.",
        sourceLabel: "Google",
      },
    ],
  },

  // Practical play / training section
  playOrTrain: {
    sectionLabel: businessName,
    title: `Spill eller tren – enkelt på ${businessName}`,
    cards: [
      {
        eyebrow: "For deg som vil spille",
        title: "Golfbanen",
        status: "open",
        statusLabel: "Åpen",
        hours: "Hver dag 09:00–20:00",
        greenkeeperComment: {
          title: "Kommentar fra greenkeeper",
          text: "Ingen kommentar foreløpig.",
        },
        groups: [
          {
            title: "Booking og spill",
            points: [
              "Booking anbefales ved bra vær",
              "Drop-in mulig ved ledig kapasitet",
              "Kø for drop-in ved utslag 1 (venstre side)",
              "Maks 4 spillere per starttid",
              "Møt opp 10 min før start",
            ],
          },
          {
            title: "Baneregler",
            points: [
              "9 hull par 3-bane",
              "Bruk greengaffel og reparer merker",
              "Legg tilbake torv",
              "Spill hensynsfullt ved våt bane",
              "Hold tempo (løft ball etter 5 slag)",
            ],
          },
          {
            title: "Under 18 år",
            intro:
              "Vi har utfordringer med unge spillere som ikke følger regler. Derfor må alle under 18 registreres før spill.",
            points: [
              "Runde må bestilles via nettside eller drop-in",
              "Før start: send SMS til 91172405",
              "Oppgi navn og starttid (maks 4 spillere)",
              "Oppgi hvordan det er betalt",
            ],
            example: "Eksempel: 12:30 Per, Hans, Nils – vipps fra Per 160 kr",
          },
          {
            title: "Turister",
            points: [
              "Ring +47 91172405 før spill",
              "Mulighet for å leie utstyr",
            ],
          },
        ],
        cta: {
          label: "Book starttid",
          href: "#booking",
        },
        variant: "course",
      },
      {
        eyebrow: "For deg som vil trene",
        title: "Driving range",
        status: "open",
        statusLabel: "Åpen",
        hours: "Hver dag 07:00–22:00",
        greenkeeperComment: {
          title: "Kommentar fra greenkeeper",
          text: "Noe begrenset bruk da baller samles med traktor. Ikke slå når traktor kjører.",
          warning: "Knust glass = kr 15.000,-!",
        },
        groups: [
          {
            title: "Bruk",
            points: [
              "30 baller = 28 kr (liten bøtte)",
              "Stor bøtte = 2 × 30 baller",
            ],
          },
          {
            title: "Regler",
            points: [
              "Driver er forbudt for herrespillere",
              "Tillatt: jern, hybrider og fairway-wooder",
              "Ingen lengdebegrensning på slag med wooder og jern",
            ],
            note:
              "Unntak: gjelder ikke damespillere, barn (< ca. 13 år) og eldre herrespillere med slaglengde ca. 170–180 m",
          },
        ],
        cta: {
          label: "Se range-priser",
          href: "#pricing",
        },
        variant: "range",
      },
    ],
  },

  // Pricing section
  pricing: {
    sectionLabel: businessName,
    title: "Priser for spill og trening",
    subtitle: "Enkle priser for banen og rangen, med betaling samlet på ett sted.",
    course: {
      title: "Golfbanen",
      items: [
        {
          label: "Voksen",
          sublabel: "Runde 2: 50 kr",
          price: "100 kr",
        },
        {
          label: "Ungdom / student",
          sublabel: "Runde 2: 40 kr",
          price: "80 kr",
        },
        {
          label: "Barn (t.o.m. 12 år)",
          sublabel: "Runde 2: 30 kr",
          price: "60 kr",
        },
      ],
      note: "Ungdom t.o.m. 20 år • Student t.o.m. 28 år",
      paymentTitle: "Betaling",
      paymentLines: [
        "Vipps: 89485",
        "Får du ikke brukt Vipps? Ring +47 91172405",
      ],
      fineNote: "Manglende betaling kan føre til gebyr på kr 100 eller bortvisning.",
    },
    range: {
      title: "Driving range",
      price: "28 kr",
      label: "Liten bøtte (30 baller)",
      note: "Drop-in, ingen booking",
    },
  },

  // Contact section
  contact: {
    sectionLabel: businessName,
    title: "Kontakt og beliggenhet",
    subtitle: "Kort vei ut fra byen, enkel adkomst og lav terskel for å ta turen innom.",
    area: {
      label: "Område",
      value: `${businessName}, Trondheim`,
    },
    phone: {
      label: "Telefon",
      value: "+47 72 82 40 00",
    },
    email: {
      label: "E-post",
      value: "post@havsteinpar3.no",
    },
    mapCard: {
      eyebrow: `${businessName}, Trondheim`,
      title: `${businessName}, Trondheim`,
      description: "Kort vei fra sentrum, med enkel adkomst for bil, buss og sykkel.",
      ctaLabel: "Åpne i Google Maps",
      ctaHref: "#",
    },
  },
};
