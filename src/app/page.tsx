import content from "@/data/content.json";
import BookingForm from "@/components/BookingForm";
import MobileNav from "@/components/MobileNav";
import ScrollReveal from "@/components/ScrollReveal";

// Server component: rendered to static HTML. Only BookingForm and MobileNav ship JavaScript.

// Structured data so search engines can show the clinic in local results
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physiotherapy",
  name: content.site.name,
  description: content.site.description,
  url: content.site.url,
  image: new URL(content.hero.photo, content.site.url).href,
  telephone: content.contact.phone,
  email: content.contact.email,
  address: content.contact.address,
};

export default function Home() {
  const { ui } = content;

  return (
    <>
      <script
        type="application/ld+json"
        // Escape "<" so content can never close the script tag
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <header>
        <div className="wrap">
          <nav>
            <a href="#" className="logo">
              <img src="/logos/sinem-full.svg" alt={content.site.name} className="header-img" />
            </a>
            <div className="nav-links">
              {content.nav.map((item) => (
                <a key={item.href} href={item.href}>{item.label}</a>
              ))}
            </div>
            <div className="nav-actions">
              <a href="#randevu" className="btn btn-primary">{ui.bookCta}</a>
              <MobileNav items={content.nav} label={ui.menu} />
            </div>
          </nav>
        </div>
      </header>

      <section>
        <div className="wrap hero">
          <div>
            <div className="hero-eyebrow">{content.hero.eyebrow}</div>
            <h1>{content.hero.titleStart}<em>{content.hero.titleHighlight}</em>{content.hero.titleEnd}</h1>
            <p>{content.hero.description}</p>
            <div className="hero-badges">
              {content.hero.badges.map((badge, index) => (
                <span key={index} className="hero-badge">{badge}</span>
              ))}
            </div>
            <div className="hero-ctas">
              <a href="#randevu" className="btn btn-primary">{ui.bookCta}</a>
              <a href="#hizmetler" className="btn btn-outline">{ui.servicesCta}</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="photo-frame">
              <img src={content.hero.photo} alt={content.hero.photoName} />
              <div className="photo-tag"><strong>{content.hero.photoName}</strong>{content.hero.photoTitle}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="hizmetler">
        <div className="wrap">
          <div className="section-head">
            <div className="section-label">{content.services.label}</div>
            <h2>{content.services.title}</h2>
          </div>
          <div className="service-grid">
            {content.services.items.map((item) => (
              <div key={item.id} className="service-card">
                <img src={item.icon} alt="" className="icon" />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="approach" id="yaklasim">
        <div className="wrap approach-grid">
          <div>
            <h2>{content.approach.title}</h2>
            <p>{content.approach.description}</p>
          </div>
          <div>
            {content.approach.steps.map((step) => (
              <div key={step.num} className="step">
                <div className="step-num">{step.num}</div>
                <div>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="booking" id="randevu">
        <div className="wrap booking-grid">
          <div className="left-column">
            <div className="booking-header">
              <h2>{content.booking.title}</h2>
              <p>{content.booking.description}</p>
            </div>
            <div className="contact-lines">
              <a className="contact-line" href={content.contact.mapsUrl} target="_blank" rel="noopener noreferrer"><img src="/icons/location.svg" alt={ui.contactLabels.address} /> {content.contact.address}</a>
              <a className="contact-line" href={`tel:${content.contact.phone.replace(/\s+/g, "")}`}><img src="/icons/phone.svg" alt={ui.contactLabels.phone} /> {content.contact.phone}</a>
              <div className="contact-line"><img src="/icons/clock.svg" alt={ui.contactLabels.hours} /> {content.contact.hours}</div>
            </div>
          </div>
          <BookingForm />
        </div>
      </section>

      <section className="testimonial">
        <div className="wrap">
          <blockquote>“{content.testimonial.quote}”</blockquote>
          <cite>— {content.testimonial.author}</cite>
        </div>
      </section>

      <footer id="iletisim">
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <img src="/logos/sinem-full-white.svg" alt={content.site.name} className="footer-img" />
              <p className="footer-desc">{content.footer.description}</p>
            </div>
            <div>
              <h6>{ui.footer.menu}</h6>
              <div className="foot-links">
                {content.nav.map((item) => (
                  <a key={item.href} href={item.href}>{item.label}</a>
                ))}
              </div>
            </div>
            <div>
              <h6>{ui.footer.contact}</h6>
              <div className="foot-links">
                <a href={`tel:${content.contact.phone.replace(/\s+/g, "")}`}>{content.contact.phone}</a>
                <a href={`mailto:${content.contact.email}`}>{content.contact.email}</a>
                <a href={content.contact.mapsUrl} target="_blank" rel="noopener noreferrer">{content.contact.address}</a>
              </div>
            </div>
          </div>
          <div className="foot-bottom">
            <div className="foot-row">
              <span>{ui.footer.lastUpdated}: {content.site.lastUpdated}</span>
              <span>{content.footer.editorInfo}</span>
            </div>
            <div className="foot-row">
              <span>{ui.footer.copyright}</span>
              <span>{ui.footer.rights}</span>
            </div>
            {content.footer.developerCredit && (
              <div className="foot-row">
                <a href={content.footer.developerUrl} target="_blank" rel="noopener">{content.footer.developerCredit}</a>
              </div>
            )}
          </div>
        </div>
      </footer>

      <ScrollReveal />

      <a className="wa-float" href={`https://wa.me/${content.contact.whatsappPhone}?text=${encodeURIComponent(content.contact.whatsappMessage)}`} target="_blank" rel="noopener noreferrer" aria-label={ui.whatsappFloat}>
        <img src="/icons/whatsapp.svg" alt="" style={{ width: 30, height: 30 }} />
      </a>
    </>
  );
}
