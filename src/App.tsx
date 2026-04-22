import { useEffect, useRef, useState } from 'react';
import { SectionHeading } from './components/SectionHeading';
import { PartnerLogoCard } from './components/PartnerLogoCard';
import { ReviewCard } from './components/ReviewCard';
import heroImage from './assets/images/par3hero.jpg';
import par3Logo from './assets/images/Par3logo.png';
import admentoLogo from './assets/images/admento logo web.jpg';
import cafeDublinLogo from './assets/images/CafeDublin-skilt(121x76)web.jpg';
import kLundLogo from './assets/images/k_lund1.jpg';
import vaernessLogo from './assets/images/vaerness4.jpg';
import courseImageOne from './assets/images/sigridbane2.jpg';
import courseImageTwo from './assets/images/trondheimpar3golf2016b.jpg';
import courseImageThree from './assets/images/Trondheim par3golf range.jpg';
import courseImageFour from './assets/images/trondheimpar3golf2016c.jpg';
import courseImageFive from './assets/images/trondheim par3golf hull 8b.jpg';

const facilityCards = [
  {
    name: 'Golfbanen',
    tag: 'For deg som vil spille',
    status: 'Åpen',
    statusTone: 'open',
    hours: 'Hver dag 09:00–20:00',
    greenkeeperComment: 'Ingen kommentar foreløpig.',
    details: [
      {
        title: 'Booking og spill',
        points: [
          'Booking anbefales ved bra vær',
          'Drop-in mulig ved ledig kapasitet',
          'Kø for drop-in ved utslag 1 (venstre side)',
          'Maks 4 spillere per starttid',
          'Møt opp 10 min før start',
        ],
      },
      {
        title: 'Baneregler',
        points: [
          '9 hull par 3-bane',
          'Bruk greengaffel og reparer merker',
          'Legg tilbake torv',
          'Spill hensynsfullt ved våt bane',
          'Hold tempo (løft ball etter 5 slag)',
        ],
      },
      {
        title: 'Under 18 år',
        intro:
          'Vi har utfordringer med unge spillere som ikke følger regler. Derfor må alle under 18 registreres før spill.',
        points: [
          'Runde må bestilles via nettside eller drop-in',
          'Før start: send SMS til 91172405',
          'Oppgi navn og starttid (maks 4 spillere)',
          'Oppgi hvordan det er betalt',
        ],
        example: 'Eksempel: 12:30 Per, Hans, Nils – vipps fra Per 160 kr',
      },
      {
        title: 'Turister',
        points: [
          'Ring +47 91172405 før spill',
          'Mulighet for å leie utstyr',
        ],
      },
    ],
    ctaLabel: 'Book starttid',
    ctaHref: '#booking',
    variant: 'course',
  },
  {
    name: 'Driving range',
    tag: 'For deg som vil trene',
    status: 'Åpen',
    statusTone: 'open',
    hours: 'Hver dag 07:00–22:00',
    usage: [
      '30 baller = 28 kr (liten bøtte)',
      'Stor bøtte = 2 × 30 baller',
    ],
    rules: [
      'Driver er forbudt for herrespillere',
      'Tillatt: jern, hybrider og fairway-wooder',
      'Ingen lengdebegrensning på slag med wooder og jern',
    ],
    rulesNote:
      'Unntak: gjelder ikke damespillere, barn (< ca. 13 år) og eldre herrespillere med slaglengde ca. 170–180 m',
    greenkeeperComment:
      'Noe begrenset bruk da baller samles med traktor. Ikke slå når traktor kjører.',
    greenkeeperWarning: 'Knust glass = kr 15.000,-!',
    ctaLabel: 'Se range-priser',
    ctaHref: '#pricing',
    variant: 'range',
  },
];

const steps = [
  {
    label: 'Skal du spille banen?',
    detail: 'Book starttid på forhånd hvis du vil være sikker på plass. Drop-in går fint når det er ledig.',
  },
  {
    label: 'Skal du bare trene?',
    detail: 'Driving rangen brukes uten booking. Kjøp baller i automaten og gå rett ut på utslagsmattene.',
  },
  {
    label: 'Trenger du utstyr?',
    detail: 'Vi har enkel kølleutleie og det viktigste du trenger for en spontan tur innom.',
  },
];

const gallery = [
  {
    src: courseImageOne,
    alt: 'Nærspillområde på Havstein med green og flagg',
  },
  {
    src: courseImageTwo,
    alt: 'Oversiktsbilde fra par 3-banen på Havstein',
  },
  {
    src: courseImageThree,
    alt: 'Driving rangen på Havstein',
  },
  {
    src: courseImageFour,
    alt: 'Banemiljø på Havstein i sommersesong',
  },
  {
    src: courseImageFive,
    alt: 'Hullområde på Havstein par 3',
  },
];

const arrivalNotes = [
  {
    title: 'Før du kommer',
    text: 'Banestatus oppdateres fortløpende ved regn og tidlig vår. Sjekk åpningstider før du drar hvis været er ustabilt.',
  },
  {
    title: 'Parkering og ankomst',
    text: 'Parkering finnes ved anlegget. Kommer du med buss eller sykkel er det kort vei siste stykket inn.',
  },
  {
    title: 'For grupper',
    text: 'Bedrifter, vennegjenger og mindre arrangementer kan ta kontakt for samlet booking av bane og trening.',
  },
];

const partners = [
  { name: 'Admento', logo: admentoLogo },
  { name: 'Cafe Dublin', logo: cafeDublinLogo },
  { name: 'K Lund', logo: kLundLogo },
  { name: 'Værness', logo: vaernessLogo },
];

const reviews = [
  {
    rating: 5,
    text: 'Relativt billig, sentrumsnært og med en fantastisk utsikt!',
    name: 'Øystein Aas',
  },
  {
    rating: 5,
    text: 'God range og bane for prisen! Tilgjengelig og enkelt.',
    name: 'Peter Jiro Grieg Toyomasu',
  },
  {
    rating: 5,
    text: 'Fantastisk personale, fin green og topp stemning.',
    name: 'Mads Iversen',
  },
  {
    rating: 5,
    text: 'Kjempefint der nå, ut å spill golf folkens.',
    name: 'Rigmor Bøkseth Monge',
  },
  {
    rating: 5,
    text: 'Fin plass for golf med flott utsikt over Trondheim. 9 hulls bane som tar ca 1 time.',
    name: 'Wenche Sivertsen',
  },
  {
    rating: 4,
    text: 'Fin utsikt herfra på nyttårsaften, ellers en vakker plass.',
    name: 'Reidar Angell Hansen',
  },
];

export default function App() {
  const reviewsStripRef = useRef<HTMLDivElement | null>(null);
  const [desktopReviews, setDesktopReviews] = useState(false);
  const [reviewStart, setReviewStart] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1180px)');
    const syncDesktopState = () => setDesktopReviews(mediaQuery.matches);

    syncDesktopState();
    mediaQuery.addEventListener('change', syncDesktopState);

    return () => mediaQuery.removeEventListener('change', syncDesktopState);
  }, []);

  useEffect(() => {
    if (!desktopReviews) {
      setReviewStart(0);
      return;
    }

    const maxStart = Math.max(0, reviews.length - 4);
    const intervalId = window.setInterval(() => {
      setReviewStart((current) => (current >= maxStart ? 0 : current + 1));
    }, 3800);

    return () => window.clearInterval(intervalId);
  }, [desktopReviews]);

  useEffect(() => {
    const strip = reviewsStripRef.current;

    if (!strip) {
      return;
    }

    if (!desktopReviews) {
      strip.scrollTo({ left: 0, behavior: 'auto' });
      return;
    }

    const targetCard = strip.children[reviewStart] as HTMLElement | undefined;

    if (targetCard) {
      strip.scrollTo({ left: targetCard.offsetLeft, behavior: 'smooth' });
    }
  }, [desktopReviews, reviewStart]);

  return (
    <div className="page-shell">
      <header className="hero">
        <div
          className="hero__media"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="container hero__inner">
          <div className="hero-bar" aria-label="Toppnavigasjon">
            <a className="hero-bar__brand" href="/">
              <img src={par3Logo} alt="Havstein Par 3" />
            </a>
            <a className="hero-bar__link" href="#">
              <span className="sr-only">Facebook</span>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M13.5 21v-7.5h2.55l.45-3h-3V8.58c0-.84.27-1.41 1.47-1.41H16.5V4.53c-.27-.03-1.2-.12-2.28-.12-2.28 0-3.84 1.38-3.84 4.02v2.07H7.8v3h2.58V21h3.12Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>

          <div className="hero__content">
            <p className="hero__eyebrow">PAR 3-BANE OG DRIVING RANGE</p>
            <h1>Golf rett utenfor Trondheim</h1>
            <p className="hero__text">Spill en rask runde eller ta en treningsøkt på rangen.</p>

            <div className="hero__actions">
              <a className="button button--primary" href="#booking">
                Book starttid
              </a>
              <a className="button button--ghost" href="#practical">
                Se praktisk info
              </a>
            </div>

            <div className="hero__facility-grid">
              <article className="hero-teaser hero-teaser--course">
                <p className="hero-teaser__label">Golfbanen</p>
                <div className="hero-teaser__status-row">
                  <span
                    className="facility-card__status-dot facility-card__status-dot--open"
                    aria-hidden="true"
                  />
                  <p className="hero-teaser__status">Åpen for spill</p>
                </div>
                <p className="hero-teaser__detail">Hver dag 09:00–20:00</p>
              </article>

              <article className="hero-teaser hero-teaser--range">
                <p className="hero-teaser__label">Driving Range</p>
                <div className="hero-teaser__status-row">
                  <span
                    className="facility-card__status-dot facility-card__status-dot--open"
                    aria-hidden="true"
                  />
                  <p className="hero-teaser__status">Åpen for drop-in</p>
                </div>
                <p className="hero-teaser__detail">Hver dag 07:00–22:00</p>
              </article>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="section section--compact reviews-section">
          <div className="container">
            <div className="reviews-section__header">
              <SectionHeading
                title="Hva folk sier om Havstein"
                description="Et utvalg Google-anmeldelser fra spillere og besøkende."
              />
              <div className="reviews-section__meta">
                <div className="reviews-summary" aria-label="Google reviews sammendrag">
                  <p className="reviews-summary__label">Google reviews</p>
                  <p className="reviews-summary__score">4,1/5</p>
                </div>
                <a className="reviews-section__link" href="#">
                  Se alle Google-anmeldelser
                </a>
              </div>
            </div>

            <div className="reviews-strip" aria-label="Google-anmeldelser" ref={reviewsStripRef}>
              {reviews.map((review) => (
                <ReviewCard
                  key={`${review.name}-${review.text}`}
                  rating={review.rating}
                  text={review.text}
                  name={review.name}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="practical" className="section">
          <div className="container">
            <div className="section-heading practical-section__heading">
              <p className="section-label">Havstein Par3</p>
              <h2>Spill eller tren – enkelt på Havstein</h2>
            </div>
            <div className="facility-grid">
              {facilityCards.map((facility) => (
                <article
                  key={facility.name}
                  className={`facility-card facility-card--${facility.variant}`}
                >
                  <div className="facility-card__header">
                    <p className="facility-card__eyebrow">{facility.tag}</p>
                    <h3>{facility.name}</h3>
                    <div className="facility-card__status-row">
                      <span
                        className={`facility-card__status-dot facility-card__status-dot--${facility.statusTone}`}
                        aria-hidden="true"
                      />
                      <span className="facility-card__status-text">{facility.status}</span>
                    </div>
                    <p className="facility-card__hours">{facility.hours}</p>
                  </div>

                  {facility.greenkeeperComment ? (
                    <div className="facility-card__comment">
                      <p className="facility-card__section-title">Kommentar fra greenkeeper</p>
                      <p>{facility.greenkeeperComment}</p>
                      {facility.greenkeeperWarning ? (
                        <p className="facility-card__comment-warning">{facility.greenkeeperWarning}</p>
                      ) : null}
                    </div>
                  ) : null}

                  {facility.details ? (
                    <div className="facility-card__detail-groups">
                      {facility.details.map((group) => (
                        <section key={group.title} className="facility-card__notes facility-card__notes--compact">
                          <p className="facility-card__section-title">{group.title}</p>
                          {group.intro ? <p className="facility-card__section-intro">{group.intro}</p> : null}
                          <ul>
                            {group.points.map((point) => (
                              <li key={point}>{point}</li>
                            ))}
                          </ul>
                          {group.example ? <p className="facility-card__section-example">{group.example}</p> : null}
                        </section>
                      ))}
                    </div>
                  ) : (
                    <>
                      <div className="facility-card__notes facility-card__notes--compact">
                        <p className="facility-card__section-title">Bruk</p>
                        <ul>
                          {facility.usage.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="facility-card__notes facility-card__notes--compact">
                        <p className="facility-card__section-title">Regler</p>
                        <ul>
                          {facility.rules.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                        {facility.rulesNote ? (
                          <p className="facility-card__section-note">{facility.rulesNote}</p>
                        ) : null}
                      </div>
                    </>
                  )}

                  <a className="button button--primary facility-card__cta" href={facility.ctaHref}>
                    {facility.ctaLabel}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="section section--accent">
          <div className="container">
            <SectionHeading
              title="Priser for spill og trening"
              description="Enkle priser for banen og rangen, med betaling samlet på ett sted."
            />
            <div className="pricing-layout">
              <article className="pricing-panel pricing-panel--course">
                <p className="pricing-panel__title">Golfbanen</p>

                <div className="pricing-table">
                  <div className="pricing-row">
                    <div>
                      <p className="pricing-row__label">Voksen</p>
                      <p className="pricing-row__sub">Runde 2: 50 kr</p>
                    </div>
                    <p className="pricing-row__price">100 kr</p>
                  </div>

                  <div className="pricing-row">
                    <div>
                      <p className="pricing-row__label">Ungdom / student</p>
                      <p className="pricing-row__sub">Runde 2: 40 kr</p>
                    </div>
                    <p className="pricing-row__price">80 kr</p>
                  </div>

                  <div className="pricing-row">
                    <div>
                      <p className="pricing-row__label">Barn (t.o.m. 12 år)</p>
                      <p className="pricing-row__sub">Runde 2: 30 kr</p>
                    </div>
                    <p className="pricing-row__price">60 kr</p>
                  </div>
                </div>

                <p className="pricing-panel__note">Ungdom t.o.m. 20 år • Student t.o.m. 28 år</p>

                <div className="pricing-panel__payment">
                  <p className="pricing-panel__subtitle">Betaling</p>
                  <p>Vipps: 89485</p>
                  <p>Får du ikke brukt Vipps? Ring +47 91172405</p>
                  <p className="pricing-panel__fine-note">
                    Manglende betaling kan føre til gebyr på kr 100 eller bortvisning.
                  </p>
                </div>
              </article>

              <article className="pricing-panel pricing-panel--range">
                <p className="pricing-panel__title">Driving range</p>
                <div className="pricing-range">
                  <p className="pricing-range__price">28 kr</p>
                  <p className="pricing-range__label">Liten bøtte (30 baller)</p>
                  <p className="pricing-range__note">Drop-in, ingen booking</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section section--compact gallery-section">
          <div className="container">
            <SectionHeading
              title="Fra anlegget"
              description="Noen glimt fra banen, rangen og miljøet på Havstein."
            />
            <div className="gallery-strip" aria-label="Bildegalleri fra Havstein">
              {gallery.map((item, index) => (
                <article
                  key={item.alt}
                  className={`gallery-card gallery-card--local${index === 0 ? ' gallery-card--featured' : ''}`}
                >
                  <img src={item.src} alt={item.alt} />
                  <div className="gallery-card__overlay">
                    <p className="gallery-card__caption">{index === 0 ? 'Se flere bilder fra anlegget' : 'Havstein Par 3'}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="booking" className="section">
          <div className="container split-grid reverse-on-mobile">
            <div className="content-card">
              <SectionHeading
                title="Slik fungerer det"
                description="Det skal være enkelt å bruke anlegget, enten du kommer for en runde eller bare en kort treningsøkt."
              />
              <div className="steps-list">
                {steps.map((step, index) => (
                  <div key={step.label} className="step">
                    <span className="step__number">{index + 1}</span>
                    <div>
                      <p className="step__title">{step.label}</p>
                      <p className="step__detail">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a className="button button--primary" href="#contact">
                Spør oss gjerne
              </a>
            </div>

            <div className="notes-stack">
              {arrivalNotes.map((note) => (
                <article key={note.title} className="content-card note-card">
                  <p className="note-card__title">{note.title}</p>
                  <p>{note.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section partners-section">
          <div className="container">
            <SectionHeading
              title="Våre partnere"
              description="Vi samarbeider med lokale aktører for å skape et bedre tilbud på Havstein."
            />
            <div className="partners-grid partners-grid--logos">
              {partners.map((partner) => (
                <PartnerLogoCard key={partner.name} name={partner.name} logo={partner.logo} />
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container split-grid">
            <div>
              <SectionHeading
                title="Kontakt og beliggenhet"
                description="Kort vei ut fra byen, enkel adkomst og lav terskel for å ta turen innom."
              />
              <div className="contact-list">
                <div className="contact-item">
                  <span className="contact-item__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M12 21s6-5.4 6-11a6 6 0 1 0-12 0c0 5.6 6 11 6 11Z" stroke="currentColor" strokeWidth="1.7" />
                      <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.7" />
                    </svg>
                  </span>
                  <div>
                    <p className="contact-item__label">Område</p>
                    <p className="contact-item__value">Havstein, Trondheim</p>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="contact-item__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M6.8 4.5h2.7l1.1 3.5-1.6 1.7a13 13 0 0 0 5.2 5.2l1.7-1.6 3.5 1.1v2.7a1.8 1.8 0 0 1-2 1.8A15.6 15.6 0 0 1 5 6.5a1.8 1.8 0 0 1 1.8-2Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <p className="contact-item__label">Telefon</p>
                    <p className="contact-item__value">+47 72 82 40 00</p>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="contact-item__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <rect x="3.5" y="6" width="17" height="12" rx="2.2" stroke="currentColor" strokeWidth="1.7" />
                      <path d="m5.5 8 6.5 5 6.5-5" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <p className="contact-item__label">E-post</p>
                    <p className="contact-item__value">post@havsteinpar3.no</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="map-card">
              <div className="map-placeholder">
                <div className="map-placeholder__content">
                  <p className="map-placeholder__eyebrow">Havstein, Trondheim</p>
                  <p className="map-placeholder__title">Havstein, Trondheim</p>
                  <p className="map-placeholder__text">Kort vei fra sentrum, med enkel adkomst for bil, buss og sykkel.</p>
                  <a className="button button--primary map-placeholder__cta" href="#">
                    Åpne i Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__content">
          <a className="footer__cta" href="#booking">
            Book starttid
          </a>
          <p>© 2026 Trondheim Par3golf på Havstein</p>
          <p>Par 3-bane og driving range i Trondheim.</p>
        </div>
      </footer>
    </div>
  );
}
