// ============================================================================
// Template Setup
// ============================================================================

const businessName = 'Namsos Golfklubb';

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
// About Course
// ============================================================================

interface AboutCourseContent extends SectionHeaderContent {
  stats: string[];
  body: string;
}

// ============================================================================
// News
// ============================================================================

interface NewsCardContent {
  date: string;
  title: string;
  excerpt: string;
  image: 'hero' | 'course' | 'hull' | 'junior' | 'vtg';
  linkLabel: string;
  linkHref: string;
}

interface NewsContent extends SectionHeaderContent {
  cards: NewsCardContent[];
}

// ============================================================================
// Facilities
// ============================================================================

interface FacilitiesGroupContent {
  icon: 'practice' | 'clubhouse' | 'visitor';
  eyebrow: string;
  title: string;
  description: string;
  items: string[];
}

interface FacilitiesContent extends SectionHeaderContent {
  groups: FacilitiesGroupContent[];
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
// Visit Section
// ============================================================================

interface VisitStepContent {
  title: string;
  text: string;
}

interface VisitNoteContent {
  title: string;
  text: string;
}

interface VisitSectionContent {
  title: string;
  subtitle: string;
  steps: VisitStepContent[];
  cta: LinkContent;
  notes: VisitNoteContent[];
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
    ctaLabel: LinkContent['label'];
    ctaHref: LinkContent['href'];
  };
}

// ============================================================================
// Root Content Object
// ============================================================================

interface SiteContent {
  businessName: string;
  hero: HeroContent;
  reviews: ReviewsContent;
  aboutCourse: AboutCourseContent;
  news: NewsContent;
  facilities: FacilitiesContent;
  playOrTrain: PlayOrTrainContent;
  visitSection: VisitSectionContent;
  pricing: PricingContent;
  contact: ContactContent;
}

// ============================================================================
// Site Content
// ============================================================================

export const siteContent: SiteContent = {
  businessName,

  hero: {
    eyebrow: '9-HULLS GOLFBANE PÅ SÆVIK',
    title: 'Golf nær naturen i Namsos',
    subtitle: 'En vakker 9-hulls park- og skogsbane kun 5 kilometer sør for Namsos.',
    statusCards: [
      {
        title: 'Golfbanen',
        status: 'open',
        statusLabel: 'Åpen for spill',
        detail: 'Starttidsbestilling er åpnet',
      },
      {
        title: 'Driving range',
        status: 'open',
        statusLabel: 'Åpen',
        detail: 'Treningsområde og range tilgjengelig',
      },
    ],
    primaryCta: {
      label: 'Book starttid',
      href: '#',
    },
    secondaryCta: {
      label: 'Se praktisk info',
      href: '#practical',
    },
  },

  reviews: {
    title: 'Hva folk sier om Namsos Golfklubb',
    subtitle: 'Et utvalg Google-anmeldelser fra spillere og besøkende.',
    summaryLabel: 'Google reviews',
    summaryScore: '4,0/5',
    linkLabel: 'Se Google-anmeldelser',
    linkHref: '#',
    cards: [
      {
        name: 'Georg Romstad',
        rating: 5,
        quote: 'Fin og trivelig bane i flotte omgivelser.',
        sourceLabel: 'Google',
      },
      {
        name: 'Isak Brattgjerd',
        rating: 5,
        quote: 'Veldig fin bane og flott område.',
        sourceLabel: 'Google',
      },
      {
        name: 'Torunn Mauseth',
        rating: 5,
        quote: 'Trivelig klubb og fine omgivelser.',
        sourceLabel: 'Google',
      },
      {
        name: 'Gunnar Willy Jensen',
        rating: 3,
        quote: 'Ok bane med potensial og fine omgivelser.',
        sourceLabel: 'Google',
      },
    ],
  },

  aboutCourse: {
    sectionLabel: businessName,
    title: 'Om banen',
    subtitle: 'En 9-hulls bane med variert spill og naturskjønne omgivelser på Sævik.',
    stats: [
      '9 hull',
      'Par 66',
      'Park- og skogsbane',
      '3 utslagssteder',
      'Ca. 5 km sør for Namsos',
    ],
    body:
      'Banen ligger vakkert til på Sævik mellom Namsos og Bangsund langs RV17. Hullene er relativt smale og gir en variert spilleopplevelse, med en kombinasjon av par 3, par 4 og par 5. Greenene varierer i størrelse og utfordring, og flere hull har vann i spill.',
  },

  news: {
    sectionLabel: businessName,
    title: 'Siste nytt',
    subtitle:
      'Små oppdateringer fra klubben om banen, aktivitetstilbud og praktisk informasjon gjennom sesongen.',
    cards: [
      {
        date: 'April 2026',
        title: 'Banen er åpen for spill',
        excerpt:
          'Sesongen er i gang, og starttidsbestilling er nå åpnet i Golfbox / Gimmie. Husk å reparere nedslagsmerker og legge tilbake oppslått torv.',
        image: 'hero',
        linkLabel: 'Les oppdatering',
        linkHref: '#',
      },
      {
        date: 'April 2026',
        title: 'Juniorgolf starter opp',
        excerpt:
          'Klubben starter opp et gratis juniorgolf-tilbud for ungdommer som vil prøve golf eller utvikle ferdighetene sine videre.',
        image: 'junior',
        linkLabel: 'Les mer',
        linkHref: '#',
      },
      {
        date: 'Vår 2026',
        title: 'VTG og kurs i sesong',
        excerpt:
          'Namsos Golfklubb tilbyr VTG / golfkurs i sesong for nye spillere som ønsker å komme i gang med golf på en enkel måte.',
        image: 'vtg',
        linkLabel: 'Se informasjon',
        linkHref: '#',
      },
    ],
  },

  facilities: {
    sectionLabel: businessName,
    title: 'Fasiliteter på anlegget',
    subtitle: 'Et velholdt anlegg med det viktigste du trenger for en god runde eller treningsøkt.',
    groups: [
      {
        icon: 'practice',
        eyebrow: 'For trening',
        title: 'Treningsfasiliteter',
        description:
          'Gode områder for oppvarming og trening – enten du vil finpusse teknikken eller komme i gang før runden.',
        items: [
          'Driving range',
          'Putting green',
          'Chipping area',
          'Treningsområde',
        ],
      },
      {
        icon: 'clubhouse',
        eyebrow: 'Klubbhus',
        title: 'Klubbhus og tilbud',
        description:
          'Enkle fasiliteter på anlegget som gjør besøket mer behagelig, både før og etter runden.',
        items: [
          'Klubbhus',
          'Golfbil',
          'Enkle serveringstilbud på anlegget',
        ],
      },
      {
        icon: 'visitor',
        eyebrow: 'Nyttig å vite',
        title: 'Praktisk info',
        description:
          'Praktisk informasjon for deg som skal besøke banen, med enkel adkomst og gode parkeringsmuligheter.',
        items: [
          'Overnatting innenfor 5 km',
          'Kort vei fra Namsos sentrum',
          'Kort vei mellom bane og treningsområder',
        ],
      },
    ],
  },

  playOrTrain: {
    sectionLabel: businessName,
    title: 'Spill golf i Namsos',
    cards: [
      {
        eyebrow: 'For deg som vil spille',
        title: 'Golfbanen',
        status: 'open',
        statusLabel: 'Åpen',
        hours: 'Bestill starttid i Golfbox / Gimmie',
        greenkeeperComment: {
          title: 'Siste info',
          text: 'Banen er åpen for spill. Reparer nedslagsmerker og legg tilbake oppslått torv.',
        },
        groups: [
          {
            title: 'Praktisk info',
            points: [
              'Starttid må bestilles før spill',
              'Banen spilles over 9 hull',
              'Banen har 3 utslagssteder',
            ],
          },
          {
            title: 'Baneregler',
            points: [
              'Legg tilbake oppslått torv',
              'Reparer nedslagsmerker på greenene',
              'Vis hensyn ved arbeid på banen',
            ],
          },
          {
            title: 'Merk',
            points: [
              'Det kan forekomme arbeid på greener og vanningsanlegg utover våren',
              'Noen greener kan være midlertidig stengt',
              'Klubbhuset er ikke alltid åpent',
            ],
          },
        ],
        cta: {
          label: 'Book starttid',
          href: '#',
        },
        variant: 'course',
      },
      {
        eyebrow: 'For deg som vil trene',
        title: 'Driving range',
        status: 'open',
        statusLabel: 'Åpen',
        hours: 'Range og øvingsområde tilgjengelig',
        greenkeeperComment: {
          title: 'Trening',
          text: 'Driving range, putting green og øvrige treningsområder gjør det enkelt å øve på alle deler av spillet.',
        },
        groups: [
          {
            title: 'Fasiliteter',
            points: [
              'Driving range',
              'Putting green',
              'Chipping area',
              'Øvingsområde',
            ],
          },
          {
            title: 'For nye spillere',
            points: [
              'Klubben arrangerer juniorgolf',
              'VTG / golfkurs tilbys i sesong',
            ],
          },
        ],
        cta: {
          label: 'Se kontaktinfo',
          href: '#contact',
        },
        variant: 'range',
      },
    ],
  },

  visitSection: {
    title: 'Enkel vei til en runde',
    subtitle: 'Det skal være enkelt å bruke anlegget, enten du kommer for en runde eller bare en kort treningsøkt.',
    steps: [
      {
        title: 'Skal du spille banen?',
        text: 'Book starttid på forhånd i Golfbox eller Gimmie hvis du vil være sikker på plass. Drop-in går fint når det er ledig.',
      },
      {
        title: 'Vil du bare trene?',
        text: 'Driving range og treningsområder kan brukes uten booking.',
      },
      {
        title: 'Har du spørsmål?',
        text: 'Ta kontakt med klubben for hjelp med medlemskap, kurs eller praktisk info før besøket.',
      },
    ],
    cta: {
      label: 'Kontakt klubben',
      href: '#contact',
    },
    notes: [
      {
        title: 'Før du besøker banen',
        text: 'Banestatus og tilgang til klubbhuset kan variere gjennom sesongen. Det er lurt å sjekke siste praktiske info før du reiser.',
      },
      {
        title: 'Beliggenhet',
        text: 'Anlegget ligger på Sævik, mellom Namsos og Bangsund, med enkel adkomst fra RV17 og kort vei fra sentrum.',
      },
      {
        title: 'For kurs og grupper',
        text: 'Klubben tilbyr juniorgolf og VTG-kurs i sesong. Ta gjerne kontakt hvis du vil vite mer eller melde deg på.',
      },
    ],
  },

  pricing: {
    sectionLabel: businessName,
    title: 'Priser og medlemskap',
    subtitle: 'Enkle oversikter over greenfee, range og utvalgte medlemspriser.',
    course: {
      title: 'Greenfee',
      items: [
        {
          label: 'Voksen',
          sublabel: 'Greenfee',
          price: '300 kr',
        },
        {
          label: 'Junior',
          sublabel: '13–19 år',
          price: '100 kr',
        },
        {
          label: 'Barn',
          sublabel: 't.o.m. 12 år',
          price: '50 kr',
        },
        {
          label: 'Golfbil',
          sublabel: 'Leie per runde',
          price: '200 kr',
        },
      ],
      note: '',
      paymentTitle: 'Kontakt',
      paymentLines: [
        'Andre medlemskap og satser kan opplyses ved kontakt.',
        'Telefon: +47 97 15 21 02',
        'E-post: arild.opdal@moller.no',
      ],
      fineNote: 'Ta kontakt for full oversikt over medlemskap, kurs og øvrige satser.',
    },
    range: {
      title: 'Driving range',
      price: '30 kr',
      label: 'Liten bøtte (30 baller)',
      note: 'Drop-in – ingen booking nødvendig',
    },
  },

  contact: {
    sectionLabel: businessName,
    title: 'Kontakt og beliggenhet',
    subtitle: 'Banen ligger på Sævik, kun noen minutter sør for Namsos.',
    area: {
      label: 'Adresse',
      value: 'Klingavegen 611, 7820 Spillum',
    },
    phone: {
      label: 'Telefon',
      value: '+47 97 15 21 02',
    },
    email: {
      label: 'E-post',
      value: 'arild.opdal@moller.no',
    },
    mapCard: {
      eyebrow: 'Namsos Golfklubb',
      title: 'Finn veien til banen',
      description: 'Beliggende mellom Namsos og Bangsund, med enkel adkomst og naturskjønne omgivelser.',
      ctaLabel: 'Åpne i kart',
      ctaHref: 'https://maps.google.com/?q=Klingavegen+611,+7820+Spillum',
    },
  },
};
