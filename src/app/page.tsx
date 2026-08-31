"use client";

import React, { useRef } from 'react';

export default function Home() {
  const adRef = useRef<HTMLInputElement>(null);
  const telRef = useRef<HTMLInputElement>(null);
  const hizmetRef = useRef<HTMLSelectElement>(null);
  const tarihRef = useRef<HTMLInputElement>(null);
  const notRef = useRef<HTMLTextAreaElement>(null);

  const handleMailTo = (e: React.MouseEvent) => {
    e.preventDefault();
    const ad = adRef.current?.value || '-';
    const tel = telRef.current?.value || '-';
    const hizmet = hizmetRef.current?.value || '-';
    const tarih = tarihRef.current?.value || '-';
    const notVal = notRef.current?.value || '-';
    
    const subject = 'Randevu Talebi - ' + ad;
    const body = 'Ad Soyad: ' + ad
      + '\nTelefon: ' + tel
      + '\nHizmet: ' + hizmet
      + '\nTercih edilen tarih: ' + tarih
      + '\nNot: ' + notVal;
      
    window.location.href = 'mailto:info@yildizfizyoterapi.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  };

  return (
    <>
      <header>
        <div className="wrap">
          <nav>
            <div className="logo">Yıldız<span>.</span></div>
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
        <div className="wrap hero" style={{ padding: '96px 32px 100px' }}>
          <div>
            <div className="hero-eyebrow">Dr. Fzt. Nur Sinem Yıldız</div>
            <h1>Sizi <em>dinleyerek</em> başlayan, kişiye özel bir tedavi süreci</h1>
            <p>Ortopedik, sportif ve nörolojik rehabilitasyon alanlarında yıllardır edindiğim tecrübeyle her danışanıma özel bir program oluşturuyorum. Amacım sadece ağrınızı dindirmek değil, hareketinizi kalıcı olarak geri kazandırmak.</p>
            <div className="hero-badges">
              <span className="hero-badge">Fizyoterapist</span>
              <span className="hero-badge">Ortopedik Rehabilitasyon</span>
              <span className="hero-badge">Manuel Terapi Sertifikalı</span>
            </div>
            <div className="hero-ctas">
              <a href="#randevu" className="btn btn-primary">Randevu al</a>
              <a href="#hizmetler" className="btn btn-outline">Hizmetleri gör</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="photo-frame">
              <div className="photo-placeholder">
                <img src="/icons/placeholder.svg" alt="" style={{ width: 44, height: 44, opacity: 0.5 }} />
                <span>Doktor fotoğrafı buraya eklenecek</span>
              </div>
              <div className="photo-tag"><strong>Dr. Fzt. Nur Sinem Yıldız</strong>Fizyoterapi ve Rehabilitasyon Uzmanı</div>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="hizmetler">
        <div className="wrap">
          <div className="section-head">
            <div className="section-label">Hizmetlerimiz</div>
            <h2>Her vücut farklı, her tedavi de öyle olmalı</h2>
          </div>
          <div className="service-grid">
            <div className="service-card">
              <img src="/icons/ortho.svg" alt="Ortopedi" className="icon" />
              <h3>Ortopedik Rehabilitasyon</h3>
              <p>Ameliyat sonrası ve eklem, kas iskelet sistemi problemlerinde iyileşme sürecinizi hızlandırıyoruz.</p>
            </div>
            <div className="service-card">
              <img src="/icons/sports.svg" alt="Spor" className="icon" />
              <h3>Spor Yaralanmaları</h3>
              <p>Sahaya veya salona güvenle dönmeniz için performans odaklı, aşamalı iyileşme programları.</p>
            </div>
            <div className="service-card">
              <img src="/icons/manual.svg" alt="Manuel Terapi" className="icon" />
              <h3>Manuel Terapi</h3>
              <p>Elle uygulanan tekniklerle eklem hareketliliğini ve doku esnekliğini geri kazandırıyoruz.</p>
            </div>
            <div className="service-card">
              <img src="/icons/neuro.svg" alt="Nöroloji" className="icon" />
              <h3>Nörolojik Rehabilitasyon</h3>
              <p>İnme ve nörolojik rahatsızlıklar sonrası denge, koordinasyon ve bağımsız hareket kazanımı.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="approach" id="yaklasim">
        <div className="wrap approach-grid">
          <div>
            <h2>Süreç nasıl işliyor</h2>
            <p>İlk görüşmeden takip seansına kadar her adımda size özel bir yol haritası izliyoruz.</p>
          </div>
          <div>
            <div className="step">
              <div className="step-num">01</div>
              <div>
                <h4>Değerlendirme</h4>
                <p>Ağrınızı, hareket kısıtlılığınızı ve günlük yaşamınızı etkileyen faktörleri birlikte inceliyoruz.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">02</div>
              <div>
                <h4>Kişisel program</h4>
                <p>Değerlendirme sonuçlarına göre hedeflerinize uygun bir tedavi planı oluşturuyoruz.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">03</div>
              <div>
                <h4>Tedavi</h4>
                <p>Manuel terapi, egzersiz ve gerektiğinde elektroterapi yöntemlerini bir arada uyguluyoruz.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">04</div>
              <div>
                <h4>Takip</h4>
                <p>İlerlemenizi düzenli olarak ölçüp programı gerektiğinde yeniden şekillendiriyoruz.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="booking" id="randevu">
        <div className="wrap booking-grid">
          <div>
            <h2>Randevunuzu oluşturun</h2>
            <p>Formu doldurun, size en kısa sürede dönüş yapıp uygun seans saatini birlikte belirleyelim.</p>
            <div className="contact-line">📍 Bağdat Caddesi No:24, İstanbul</div>
            <div className="contact-line">📞 0212 555 01 23</div>
            <div className="contact-line">🕐 Pazartesi–Cumartesi, 09:00–19:00</div>
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
              <div className="field">
                <label htmlFor="hizmet">Hizmet</label>
                <select id="hizmet" ref={hizmetRef}>
                  <option>Ortopedik Rehabilitasyon</option>
                  <option>Spor Yaralanmaları</option>
                  <option>Manuel Terapi</option>
                  <option>Nörolojik Rehabilitasyon</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="tarih">Tercih edilen tarih</label>
                <input id="tarih" type="date" ref={tarihRef} />
              </div>
            </div>
            <div className="form-row">
              <div className="field full">
                <label htmlFor="not">Not (opsiyonel)</label>
                <textarea id="not" rows={3} placeholder="Şikayetiniz hakkında kısa bilgi verin" ref={notRef}></textarea>
              </div>
            </div>
            <a href="#" onClick={handleMailTo} className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>Randevu talebi gönder</a>
            <p className="form-note">Butona bastığınızda e-posta uygulamanız, doldurduğunuz bilgilerle birlikte açılır.</p>
          </div>
        </div>
      </section>

      <section className="testimonial">
        <div className="wrap">
          <blockquote>“Diz ameliyatından sonra tekrar koşabileceğimi düşünmüyordum. Yıldız'daki programla üç ayda sahalara döndüm.”</blockquote>
          <cite>— Emre K., Danışan</cite>
        </div>
      </section>

      <footer id="iletisim">
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <h5>Yıldız<span style={{ color: '#f4c2c6' }}>.</span></h5>
              <p style={{ maxWidth: '280px', fontSize: '14px', color: 'rgba(253,252,250,0.6)', marginTop: '8px' }}>Kişiye özel fizyoterapi ve rehabilitasyon programlarıyla hareket özgürlüğünüzü yeniden kazanın.</p>
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
                <a href="#">0212 555 01 23</a>
                <a href="#">info@yildizfizyoterapi.com</a>
                <a href="#">Bağdat Cad. No:24, İstanbul</a>
              </div>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© 2026 Yıldız Fizyoterapi</span>
            <span>Tüm hakları saklıdır</span>
          </div>
        </div>
      </footer>

      <a className="wa-float" href="https://wa.me/905555550123?text=Merhaba%2C%20randevu%20almak%20istiyorum" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp ile iletişime geç">
        <img src="/icons/whatsapp.svg" alt="WhatsApp" style={{ width: 30, height: 30 }} />
      </a>
    </>
  );
}
