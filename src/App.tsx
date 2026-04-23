import { useEffect, useRef, useState } from 'react';
import { SectionHeading } from './components/SectionHeading';
import { ReviewCard } from './components/ReviewCard';
import { siteContent } from './content/siteContent';
import heroImage from './assets/images/hero.png';
import clubLogo from './assets/images/logo.jpg';
import courseImageOne from './assets/images/course-1.jpg';
import courseImageTwo from './assets/images/hull-2.png';
import juniorCourseImage from './assets/images/juniorkurs.png';
import mapBackgroundImage from './assets/images/Map.png';
import courseImageThree from './assets/images/course-1.jpg';
import courseImageFour from './assets/images/hero.png';
import courseImageFive from './assets/images/hull-2.png';
import vtgCourseImage from './assets/images/vtg-kurs.png';

const gallery = [
  {
    src: courseImageOne,
    alt: `Banemiljø ved ${siteContent.businessName}`,
  },
  {
    src: courseImageTwo,
    alt: `Oversiktsbilde fra ${siteContent.businessName}`,
  },
  {
    src: courseImageThree,
    alt: `Treningsområde ved ${siteContent.businessName}`,
  },
  {
    src: courseImageFour,
    alt: `Natur og golfmiljø ved ${siteContent.businessName}`,
  },
  {
    src: courseImageFive,
    alt: `Spillområde på ${siteContent.businessName}`,
  },
];

const newsImages = {
  hero: heroImage,
  course: courseImageOne,
  hull: courseImageTwo,
  junior: juniorCourseImage,
  vtg: vtgCourseImage,
} as const;

function FacilitiesIcon({ icon }: { icon: 'practice' | 'clubhouse' | 'visitor' }) {
  if (icon === 'practice') {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M5 18.5h14M7.2 18.5l3.2-9.8c.25-.76 1.33-.76 1.58 0l3.22 9.8"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="5.5" r="1.75" fill="currentColor" />
      </svg>
    );
  }

  if (icon === 'clubhouse') {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4.5 10.5 12 5l7.5 5.5V19a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1v-8.5Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path d="M10 20v-5h4v5" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 20.5s5.5-4.95 5.5-10.08a5.5 5.5 0 1 0-11 0C6.5 15.55 12 20.5 12 20.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="10.5" r="1.9" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

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
        <div className="hero__media" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="container hero__inner">
          <div className="hero-bar" aria-label="Toppnavigasjon">
            <a className="hero-bar__brand" href="/">
              <img src={clubLogo} alt={businessName} />
            </a>
            <a className="hero-bar__link" href="#contact">
              <span className="sr-only">Kontakt</span>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5v-11Zm2 1.03v.24l5.62 4.28a.6.6 0 0 0 .76 0L18 7.77v-.24a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5Zm12 1.5-4.4 3.34a2.6 2.6 0 0 1-3.2 0L6 9.03v8.47c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5V9.03Z"
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
              {siteContent.hero.statusCards.map((card, index) => (
                <article
                  key={card.title}
                  className={`hero-teaser ${index === 0 ? 'hero-teaser--course' : 'hero-teaser--range'}`}
                >
                  <p className="hero-teaser__label">{card.title}</p>
                  <div className="hero-teaser__status-row">
                    <span
                      className={`facility-card__status-dot facility-card__status-dot--${card.status}`}
                      aria-hidden="true"
                    />
                    <p className="hero-teaser__status">{card.statusLabel}</p>
                  </div>
                  <p className="hero-teaser__detail">{card.detail}</p>
                </article>
              ))}
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

        <section className="section about-course-section" id="about-course">
          <div className="container about-course-layout">
            <div className="content-card about-course__panel">
              <div className="section-heading">
                <p className="section-label">{siteContent.aboutCourse.sectionLabel}</p>
                <h2>{siteContent.aboutCourse.title}</h2>
                <p className="section-description">{siteContent.aboutCourse.subtitle}</p>
              </div>
              <p className="about-course__body">{siteContent.aboutCourse.body}</p>
              <div className="about-course__stats" aria-label="Nøkkeltall om banen">
                {siteContent.aboutCourse.stats.map((stat) => (
                  <span key={stat} className="about-course__stat">
                    {stat}
                  </span>
                ))}
              </div>
            </div>

            <article className="image-block image-block--tall about-course__image">
              <img src={courseImageOne} alt={`Utsnitt fra banen ved ${businessName}`} />
            </article>
          </div>
        </section>

        <section className="section news-section" id="news">
          <div className="container">
            <SectionHeading
              title={siteContent.news.title}
              description={siteContent.news.subtitle}
            />
            <div className="news-grid">
              {siteContent.news.cards.map((item) => (
                <article key={item.title} className="news-card">
                  <div className="news-card__image-wrap">
                    <img
                      className="news-card__image"
                      src={newsImages[item.image]}
                      alt={item.title}
                    />
                  </div>
                  <div className="news-card__content">
                    <p className="news-card__date">{item.date}</p>
                    <h3 className="news-card__title">{item.title}</h3>
                    <p className="news-card__excerpt">{item.excerpt}</p>
                    <a className="news-card__link" href={item.linkHref}>
                      {item.linkLabel}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section facilities-overview-section" id="facilities">
          <div className="container">
            <SectionHeading
              title={siteContent.facilities.title}
              description={siteContent.facilities.subtitle}
            />
            <div className="facility-overview-grid">
              {siteContent.facilities.groups.map((group) => (
                <article key={group.title} className="content-card facility-overview-card">
                  <div className="facility-overview-card__accent">
                    <span className="facility-overview-card__icon">
                      <FacilitiesIcon icon={group.icon} />
                    </span>
                    <p className="facility-overview-card__eyebrow">{group.eyebrow}</p>
                  </div>
                  <div className="facility-overview-card__body">
                    <p className="facility-overview-card__title">{group.title}</p>
                    <p className="facility-overview-card__description">{group.description}</p>
                  </div>
                  <ul className="facility-overview-card__list">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
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

                  <div className="facility-card__comment">
                    <p className="facility-card__section-title">
                      {facility.greenkeeperComment.title}
                    </p>
                    <p>{facility.greenkeeperComment.text}</p>
                    {facility.greenkeeperComment.warning ? (
                      <p className="facility-card__comment-warning">
                        {facility.greenkeeperComment.warning}
                      </p>
                    ) : null}
                  </div>

                  <div className="facility-card__detail-groups">
                    {facility.groups.map((group) => (
                      <section
                        key={group.title}
                        className="facility-card__notes facility-card__notes--compact"
                      >
                        <p className="facility-card__section-title">{group.title}</p>
                        {group.intro ? (
                          <p className="facility-card__section-intro">{group.intro}</p>
                        ) : null}
                        <ul>
                          {group.points.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                        {group.note ? (
                          <p className="facility-card__section-note">{group.note}</p>
                        ) : null}
                        {group.example ? (
                          <p className="facility-card__section-example">{group.example}</p>
                        ) : null}
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
                  <p className="pricing-panel__fine-note">{siteContent.pricing.course.fineNote}</p>
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
              title="Fra banen"
              description={`Noen glimt fra anlegget og golfmiljøet på ${businessName}.`}
            />
            <div className="gallery-strip" aria-label={`Bildegalleri fra ${businessName}`}>
              {gallery.map((item, index) => (
                <article
                  key={item.alt}
                  className={`gallery-card gallery-card--local${
                    index === 0 ? ' gallery-card--featured' : ''
                  }`}
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
                title={siteContent.visitSection.title}
                description={siteContent.visitSection.subtitle}
              />
              <div className="steps-list">
                {siteContent.visitSection.steps.map((step, index) => (
                  <div key={step.title} className="step">
                    <span className="step__number">{index + 1}</span>
                    <div>
                      <p className="step__title">{step.title}</p>
                      <p className="step__detail">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a className="button button--primary" href={siteContent.visitSection.cta.href}>
                {siteContent.visitSection.cta.label}
              </a>
            </div>

            <div className="notes-stack">
              {siteContent.visitSection.notes.map((note) => (
                <article key={note.title} className="content-card note-card">
                  <p className="note-card__title">{note.title}</p>
                  <p>{note.text}</p>
                </article>
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
                      <path
                        d="M12 21s6-5.4 6-11a6 6 0 1 0-12 0c0 5.6 6 11 6 11Z"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />
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
                      <path
                        d="M6.8 4.5h2.7l1.1 3.5-1.6 1.7a13 13 0 0 0 5.2 5.2l1.7-1.6 3.5 1.1v2.7a1.8 1.8 0 0 1-2 1.8A15.6 15.6 0 0 1 5 6.5a1.8 1.8 0 0 1 1.8-2Z"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinejoin="round"
                      />
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
                      <rect
                        x="3.5"
                        y="6"
                        width="17"
                        height="12"
                        rx="2.2"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />
                      <path
                        d="m5.5 8 6.5 5 6.5-5"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinejoin="round"
                      />
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
              <div
                className="map-placeholder"
                style={{
                  backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.92) 0%, rgba(255, 255, 255, 0.85) 35%, rgba(255, 255, 255, 0.65) 60%, rgba(255, 255, 255, 0.4) 100%), radial-gradient(circle at top right, rgba(255, 255, 255, 0.18), transparent 38%), url(${mapBackgroundImage})`,
                  backgroundSize: 'auto, auto, cover',
                  backgroundPosition: 'left center, top right, center',
                  backgroundRepeat: 'no-repeat, no-repeat, no-repeat',
                }}
              >
                <div className="map-placeholder__content">
                  <p className="map-placeholder__eyebrow">{siteContent.contact.mapCard.eyebrow}</p>
                  <p className="map-placeholder__title">{siteContent.contact.mapCard.title}</p>
                  <p className="map-placeholder__text">{siteContent.contact.mapCard.description}</p>
                  <a
                    className="button button--primary map-placeholder__cta"
                    href={siteContent.contact.mapCard.ctaHref}
                  >
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
          <a className="footer__cta" href="#contact">
            Kontakt klubben
          </a>
          <p>© 2026 {businessName}</p>
          <p>9-hulls golfbane på Sævik i Namsos.</p>
        </div>
      </footer>
    </div>
  );
}
