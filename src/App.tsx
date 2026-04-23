import { useEffect, useRef, useState } from 'react';
import { SectionHeading } from './components/SectionHeading';
import { PartnerLogoCard } from './components/PartnerLogoCard';
import { ReviewCard } from './components/ReviewCard';
import { siteContent } from './content/siteContent';
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
    alt: `Nærspillområde på ${siteContent.businessName} med green og flagg`,
  },
  {
    src: courseImageTwo,
    alt: `Oversiktsbilde fra par 3-banen på ${siteContent.businessName}`,
  },
  {
    src: courseImageThree,
    alt: `Driving rangen på ${siteContent.businessName}`,
  },
  {
    src: courseImageFour,
    alt: `Banemiljø på ${siteContent.businessName} i sommersesong`,
  },
  {
    src: courseImageFive,
    alt: `Hullområde på ${siteContent.businessName}`,
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

export default function App() {
  const reviewsStripRef = useRef<HTMLDivElement | null>(null);
  const [desktopReviews, setDesktopReviews] = useState(false);
  const [reviewStart, setReviewStart] = useState(0);
  const businessName = siteContent.businessName;

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

    const maxStart = Math.max(0, siteContent.reviews.cards.length - 4);
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
              <img src={par3Logo} alt={businessName} />
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
            <p className="hero__eyebrow">{siteContent.hero.eyebrow}</p>
            <h1>{siteContent.hero.title}</h1>
            <p className="hero__text">{siteContent.hero.subtitle}</p>

            <div className="hero__actions">
              <a className="button button--primary" href={siteContent.hero.primaryCta.href}>
                {siteContent.hero.primaryCta.label}
              </a>
              <a className="button button--ghost" href={siteContent.hero.secondaryCta.href}>
                {siteContent.hero.secondaryCta.label}
              </a>
            </div>

            <div className="hero__facility-grid">
              <article className="hero-teaser hero-teaser--course">
                <p className="hero-teaser__label">{siteContent.hero.statusCards[0].title}</p>
                <div className="hero-teaser__status-row">
                  <span
                    className="facility-card__status-dot facility-card__status-dot--open"
                    aria-hidden="true"
                  />
                  <p className="hero-teaser__status">
                    {siteContent.hero.statusCards[0].statusLabel}
                  </p>
                </div>
                <p className="hero-teaser__detail">{siteContent.hero.statusCards[0].detail}</p>
              </article>

              <article className="hero-teaser hero-teaser--range">
                <p className="hero-teaser__label">{siteContent.hero.statusCards[1].title}</p>
                <div className="hero-teaser__status-row">
                  <span
                    className="facility-card__status-dot facility-card__status-dot--open"
                    aria-hidden="true"
                  />
                  <p className="hero-teaser__status">
                    {siteContent.hero.statusCards[1].statusLabel}
                  </p>
                </div>
                <p className="hero-teaser__detail">{siteContent.hero.statusCards[1].detail}</p>
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
                title={siteContent.reviews.title}
                description={siteContent.reviews.subtitle}
              />
              <div className="reviews-section__meta">
                <div className="reviews-summary" aria-label="Google reviews sammendrag">
                  <p className="reviews-summary__label">{siteContent.reviews.summaryLabel}</p>
                  <p className="reviews-summary__score">{siteContent.reviews.summaryScore}</p>
                </div>
                <a className="reviews-section__link" href={siteContent.reviews.linkHref}>
                  {siteContent.reviews.linkLabel}
                </a>
              </div>
            </div>

            <div className="reviews-strip" aria-label="Google-anmeldelser" ref={reviewsStripRef}>
              {siteContent.reviews.cards.map((review) => (
                <ReviewCard
                  key={`${review.name}-${review.quote}`}
                  rating={review.rating}
                  text={review.quote}
                  name={review.name}
                  sourceLabel={review.sourceLabel}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="practical" className="section">
          <div className="container">
            <div className="section-heading practical-section__heading">
              <p className="section-label">{siteContent.playOrTrain.sectionLabel}</p>
              <h2>{siteContent.playOrTrain.title}</h2>
            </div>
            <div className="facility-grid">
              {siteContent.playOrTrain.cards.map((facility) => (
                <article
                  key={facility.title}
                  className={`facility-card facility-card--${facility.variant}`}
                >
                  <div className="facility-card__header">
                    <p className="facility-card__eyebrow">{facility.eyebrow}</p>
                    <h3>{facility.title}</h3>
                    <div className="facility-card__status-row">
                      <span
                        className={`facility-card__status-dot facility-card__status-dot--${facility.status}`}
                        aria-hidden="true"
                      />
                      <span className="facility-card__status-text">{facility.statusLabel}</span>
                    </div>
                    <p className="facility-card__hours">{facility.hours}</p>
                  </div>

                  {facility.greenkeeperComment ? (
                    <div className="facility-card__comment">
                      <p className="facility-card__section-title">{facility.greenkeeperComment.title}</p>
                      <p>{facility.greenkeeperComment.text}</p>
                      {facility.greenkeeperComment.warning ? (
                        <p className="facility-card__comment-warning">
                          {facility.greenkeeperComment.warning}
                        </p>
                      ) : null}
                    </div>
                  ) : null}

                  <div className="facility-card__detail-groups">
                    {facility.groups.map((group) => (
                      <section key={group.title} className="facility-card__notes facility-card__notes--compact">
                        <p className="facility-card__section-title">{group.title}</p>
                        {group.intro ? <p className="facility-card__section-intro">{group.intro}</p> : null}
                        <ul>
                          {group.points.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                        {group.note ? <p className="facility-card__section-note">{group.note}</p> : null}
                        {group.example ? <p className="facility-card__section-example">{group.example}</p> : null}
                      </section>
                    ))}
                  </div>

                  <a className="button button--primary facility-card__cta" href={facility.cta.href}>
                    {facility.cta.label}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="section section--accent">
          <div className="container">
            <SectionHeading
              title={siteContent.pricing.title}
              description={siteContent.pricing.subtitle}
            />
            <div className="pricing-layout">
              <article className="pricing-panel pricing-panel--course">
                <p className="pricing-panel__title">{siteContent.pricing.course.title}</p>

                <div className="pricing-table">
                  {siteContent.pricing.course.items.map((item) => (
                    <div key={item.label} className="pricing-row">
                      <div>
                        <p className="pricing-row__label">{item.label}</p>
                        <p className="pricing-row__sub">{item.sublabel}</p>
                      </div>
                      <p className="pricing-row__price">{item.price}</p>
                    </div>
                  ))}
                </div>

                <p className="pricing-panel__note">{siteContent.pricing.course.note}</p>

                <div className="pricing-panel__payment">
                  <p className="pricing-panel__subtitle">{siteContent.pricing.course.paymentTitle}</p>
                  {siteContent.pricing.course.paymentLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                  <p className="pricing-panel__fine-note">
                    {siteContent.pricing.course.fineNote}
                  </p>
                </div>
              </article>

              <article className="pricing-panel pricing-panel--range">
                <p className="pricing-panel__title">{siteContent.pricing.range.title}</p>
                <div className="pricing-range">
                  <p className="pricing-range__price">{siteContent.pricing.range.price}</p>
                  <p className="pricing-range__label">{siteContent.pricing.range.label}</p>
                  <p className="pricing-range__note">{siteContent.pricing.range.note}</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section section--compact gallery-section">
          <div className="container">
            <SectionHeading
              title="Fra anlegget"
              description={`Noen glimt fra banen, rangen og miljøet på ${businessName}.`}
            />
            <div className="gallery-strip" aria-label={`Bildegalleri fra ${businessName}`}>
              {gallery.map((item, index) => (
                <article
                  key={item.alt}
                  className={`gallery-card gallery-card--local${index === 0 ? ' gallery-card--featured' : ''}`}
                >
                  <img src={item.src} alt={item.alt} />
                  <div className="gallery-card__overlay">
                    <p className="gallery-card__caption">
                      {index === 0 ? 'Se flere bilder fra anlegget' : businessName}
                    </p>
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
              description={`Vi samarbeider med lokale aktører for å skape et bedre tilbud på ${businessName}.`}
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
                title={siteContent.contact.title}
                description={siteContent.contact.subtitle}
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
                    <p className="contact-item__label">{siteContent.contact.area.label}</p>
                    <p className="contact-item__value">{siteContent.contact.area.value}</p>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="contact-item__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M6.8 4.5h2.7l1.1 3.5-1.6 1.7a13 13 0 0 0 5.2 5.2l1.7-1.6 3.5 1.1v2.7a1.8 1.8 0 0 1-2 1.8A15.6 15.6 0 0 1 5 6.5a1.8 1.8 0 0 1 1.8-2Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <p className="contact-item__label">{siteContent.contact.phone.label}</p>
                    <p className="contact-item__value">{siteContent.contact.phone.value}</p>
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
                    <p className="contact-item__label">{siteContent.contact.email.label}</p>
                    <p className="contact-item__value">{siteContent.contact.email.value}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="map-card">
              <div className="map-placeholder">
                <div className="map-placeholder__content">
                  <p className="map-placeholder__eyebrow">{siteContent.contact.mapCard.eyebrow}</p>
                  <p className="map-placeholder__title">{siteContent.contact.mapCard.title}</p>
                  <p className="map-placeholder__text">{siteContent.contact.mapCard.description}</p>
                  <a className="button button--primary map-placeholder__cta" href={siteContent.contact.mapCard.ctaHref}>
                    {siteContent.contact.mapCard.ctaLabel}
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
          <p>© 2026 {businessName}</p>
          <p>Par 3-bane og driving range i Trondheim.</p>
        </div>
      </footer>
    </div>
  );
}
