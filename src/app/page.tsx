"use client";

import React, { useRef } from 'react';
import content from '../data/content.json';

export default function Home() {
  const adRef = useRef<HTMLInputElement>(null);
  const telRef = useRef<HTMLInputElement>(null);
  const hizmetRef = useRef<HTMLSelectElement>(null);
  const notRef = useRef<HTMLTextAreaElement>(null);

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    const ad = adRef.current?.value || '-';
    const tel = telRef.current?.value || '-';
    const hizmet = hizmetRef.current?.value || '-';
    const notVal = notRef.current?.value || '-';
    
    const text = `Merhaba, randevu almak istiyorum.\n\n*Ad Soyad:* ${ad}\n*Telefon:* ${tel}\n*Hizmet:* ${hizmet}\n*Not:* ${notVal}`;
    window.open(`https://wa.me/${content.contact.whatsappPhone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    const ad = adRef.current?.value || '-';
    const tel = telRef.current?.value || '-';
    const hizmet = hizmetRef.current?.value || '-';
    const notVal = notRef.current?.value || '-';
    
    const subject = 'Randevu Talebi - ' + ad;
    const body = 'Ad Soyad: ' + ad
      + '\nTelefon: ' + tel
      + '\nHizmet: ' + hizmet
      + '\nNot: ' + notVal;
      
    window.location.href = `mailto:${content.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <header>
        <div className="wrap">
          <nav>
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }} className="logo">
              <img src="/logos/sinem-full.svg" alt="Fizyoterapist Nursinem Yıldız" className="header-img" />
            </a>
            <div className="nav-links">
              <a href="#hizmetler">Hizmetler</a>
              <a href="#yaklasim">Yaklaşımımız</a>
              <a href="#randevu">Randevu</a>
              <a href="#iletisim">İletişim</a>
            </div>
            <a href="#randevu" className="btn btn-primary">Randevu al</a>
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
              <a href="#randevu" className="btn btn-primary">Randevu al</a>
              <a href="#hizmetler" className="btn btn-outline">Hizmetleri gör</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="photo-frame">
              <img src="/photos/fzt.jpeg" alt={content.hero.eyebrow} />
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
                <img src={item.icon} alt={item.title} className="icon" />
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
              <div className="contact-line"><img src="/icons/location.svg" alt="Adres" /> {content.contact.address}</div>
              <div className="contact-line"><img src="/icons/phone.svg" alt="Telefon" /> {content.contact.phone}</div>
              <div className="contact-line"><img src="/icons/clock.svg" alt="Çalışma Saatleri" /> {content.contact.hours}</div>
            </div>
          </div>
          <div className="form-card">
            <div className="form-row">
              <div className="field">
                <label htmlFor="ad">Ad Soyad</label>
                <input id="ad" type="text" placeholder="Adınız Soyadınız" ref={adRef} />
              </div>
              <div className="field">
                <label htmlFor="tel">Telefon</label>
                <input id="tel" type="tel" placeholder="05XX XXX XX XX" ref={telRef} />
              </div>
            </div>
            <div className="form-row">
              <div className="field full">
                <label htmlFor="hizmet">Hizmet</label>
                <select id="hizmet" ref={hizmetRef}>
                  {content.services.items.map(item => (
                    <option key={item.id}>{item.title}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="field full">
                <label htmlFor="not">Not (opsiyonel)</label>
                <textarea id="not" rows={3} placeholder="Şikayetiniz hakkında kısa bilgi verin" ref={notRef}></textarea>
              </div>
            </div>
            <div className="form-actions">
              <a href="#" onClick={handleWhatsApp} className="btn btn-whatsapp">WhatsApp'tan Gönder</a>
              <a href="#" onClick={handleEmail} className="btn btn-primary">E-posta ile Gönder</a>
            </div>
            <p className="form-note">Butonlardan birine tıkladığınızda ilgili uygulama formdaki bilgilerle açılır.</p>
          </div>
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
              <img src="/logos/sinem-full-white.svg" alt="Fizyoterapist Nursinem Yıldız" className="footer-img" />
              <p style={{ maxWidth: '280px', fontSize: '14px', color: 'rgba(253,252,250,0.6)' }}>{content.footer.description}</p>
            </div>
            <div>
              <h6>Menü</h6>
              <div className="foot-links">
                <a href="#hizmetler">Hizmetler</a>
                <a href="#yaklasim">Yaklaşımımız</a>
                <a href="#randevu">Randevu</a>
              </div>
            </div>
            <div>
              <h6>İletişim</h6>
              <div className="foot-links">
                <a href={`tel:${content.contact.phone.replace(/\s+/g, '')}`}>{content.contact.phone}</a>
                <a href={`mailto:${content.contact.email}`}>{content.contact.email}</a>
                <a href="https://maps.google.com/?q=Fizyoterapist+Nursinem+Yıldız+Kozan+Fizik+Tedavi" target="_blank" rel="noopener noreferrer">{content.contact.address}</a>
              </div>
            </div>
          </div>
          <div className="foot-bottom" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap', gap: '12px' }}>
              <span>Son güncelleme: {new Date().toLocaleDateString('tr-TR')}</span>
              <span>{content.footer.editorInfo}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap', gap: '12px' }}>
              <span>© Özel Sağlık Meslek Hizmet Birimi Fizyoterapist Nursinem Yıldız</span>
              <span>Tüm hakları saklıdır</span>
            </div>
          </div>
        </div>
      </footer>

      <a className="wa-float" href={`https://wa.me/${content.contact.whatsappPhone}?text=${encodeURIComponent(content.contact.whatsappMessage)}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp ile iletişime geç">
        <img src="/icons/whatsapp.svg" alt="WhatsApp" style={{ width: 30, height: 30 }} />
      </a>
    </>
  );
}
