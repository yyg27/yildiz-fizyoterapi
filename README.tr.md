
# Fizyoterapist Nursinem Yıldız

[English](README.md) · [Türkçe](README.tr.md)

**Fizyoterapist Nursinem Yıldız** için geliştirilmiş modern, tek sayfalık bir klinik tanıtım ve randevu web sitesidir.

Web sitesi; fizyoterapi hizmetleri, kliniğin yaklaşımı, çalışma saatleri ve iletişim bilgileri hakkında bilgi sunar. Ziyaretçiler ayrıca doğrudan WhatsApp veya e-posta üzerinden randevu talebi oluşturabilir.

Proje, responsive tasarım, performans ve kolay içerik yönetimi göz önünde bulundurularak **Next.js** ile geliştirilmiştir.

## Canlı Demo

**[yildiz-fizyoterapi.vercel.app](https://yildiz-fizyoterapi.vercel.app/)**

----------

## Özellikler

-   Responsive tek sayfalık tasarım
    
-   Mobil, tablet ve masaüstü desteği
    
-   SEO uyumlu yapı
    
-   Fizyoterapi hizmetlerinin tanıtımı
    
-   Klinik bilgileri ve çalışma saatleri
    
-   WhatsApp üzerinden randevu talebi
    
-   E-posta üzerinden randevu talebi
    
-   JSON üzerinden merkezi içerik yönetimi
    
-   Backend veya veritabanı gerektirmeyen statik yapı
    
-   Vercel deployment
    

----------

## Teknoloji Stack'i

-   **Next.js 16**
    
-   **React 19**
    
-   **TypeScript 5**
    
-   **Tailwind CSS 4**
    
-   **ESLint**
    
-   **Vercel**
    

----------

## Kurulum

### Gereksinimler

Sisteminizde **Node.js** ve **npm** yüklü olduğundan emin olun.

### Kurulum

Projeyi klonladıktan sonra gerekli bağımlılıkları yükleyin:

```bash
npm install

```

### Geliştirme

Geliştirme sunucusunu başlatmak için:

```bash
npm run dev

```

Uygulama aşağıdaki adreste çalışacaktır:

```text
http://localhost:3000

```

### Production

Production build oluşturmak için:

```bash
npm run build

```

Production sunucusunu başlatmak için:

```bash
npm start

```

### Linting

ESLint çalıştırmak için:

```bash
npm run lint

```

----------

## İçerik Yönetimi

Web sitesindeki içerikler tek bir JSON dosyasında merkezi olarak tutulmaktadır:

```text
src/data/content.json

```

Bu yapı sayesinde çoğu site içeriğini React veya CSS dosyalarında değişiklik yapmadan güncellemek mümkündür.

Bu dosya üzerinden aşağıdaki bilgiler yönetilebilir:

-   Telefon numarası
    
-   Adres
    
-   E-posta adresi
    
-   WhatsApp randevu numarası
    
-   Fizyoterapi hizmetleri ve açıklamaları
    
-   Ana sayfa tanıtım metinleri
    
-   Çalışma saatleri
    
-   Hasta yorumları / referanslar
    

Yerel geliştirme ortamında yapılan değişiklikler kaydedildiğinde siteye yansır.

> Production ortamındaki değişikliklerin yayınlanması için yeni bir deployment gereklidir.

----------

## Fotoğraflar ve İkonlar

Statik medya dosyaları `public` klasöründe tutulmaktadır.

### Profil Fotoğrafı

```text
public/photos/fzt.jpeg

```

Profil fotoğrafını değiştirmek için mevcut dosyayı aynı isim ve dosya yolunu koruyarak yeni fotoğrafla değiştirebilirsiniz.

### Hizmet İkonları

```text
public/icons/services/

```

Mevcut hizmet ikonları:

-   Egzersiz
    
-   Manuel Terapi
    
-   Masaj
    
-   Nörolojik Rehabilitasyon
    
-   Ortopedik Rehabilitasyon
    
-   Mat Pilates
    
-   Reformer Pilates
    
-   Spor Rehabilitasyonu
    

### Genel İkonlar

```text
public/icons/

```

Bu klasörde aşağıdaki gibi genel amaçlı ikonlar bulunmaktadır:

-   Saat
    
-   Konum
    
-   Telefon
    
-   WhatsApp
    

----------

## Randevu Sistemi

Web sitesi randevu talepleri için backend, API veya veritabanı kullanmamaktadır.

Bunun yerine iki farklı iletişim yöntemi sunulmaktadır.

### WhatsApp

Randevu formuna girilen bilgiler otomatik olarak bir mesaj formatına dönüştürülerek WhatsApp üzerinden gönderilir.

### E-posta

Randevu bilgileri `mailto` bağlantısı kullanılarak kullanıcının varsayılan e-posta uygulamasına aktarılır.

Bu yaklaşım, uygulamanın hafif kalmasını ve ayrıca bir backend veya veritabanı altyapısına ihtiyaç duyulmamasını sağlar.

----------

## Proje Yapısı

```text
.
├── public/
│   ├── icons/
│   │   ├── services/
│   │   │   ├── exercise.svg
│   │   │   ├── manual.svg
│   │   │   ├── massage.svg
│   │   │   ├── neuro.svg
│   │   │   ├── ortho.svg
│   │   │   ├── pil_mat.svg
│   │   │   ├── pil_refor.svg
│   │   │   └── sports.svg
│   │   ├── clock.svg
│   │   ├── location.svg
│   │   ├── phone.svg
│   │   └── whatsapp.svg
│   └── photos/
│       └── fzt.jpeg
│
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   └── data/
│       └── content.json
│
├── eslint.config.mjs
├── next.config.ts
├── next-env.d.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
└── tsconfig.json

```

### Dizin Açıklamaları

| Dizin | Açıklama |
|---|---|
| `src/app/` | Next.js uygulama dosyalar |
| `src/app/page.tsx` | Ana sayfa |
| `src/app/layout.tsx` | Root layout ve metadata |
| `src/app/globals.css` | Global stiller |
| `src/data/content.json` | Merkezi site içerikleri |
| `public/photos/` | Web sitesinde kullanılan fotoğraflar |
| `public/icons/` |  Genel amaçlı ikonlar |
| `public/icons/services/` | Fizyoterapi hizmetlerinde kullanılan ikonlar |
    
----------

## Deployment

Web sitesi **Vercel** üzerinde yayınlanmaktadır.

```text
GitHub
   │
   ▼
Vercel
   │
   ▼
Production

```

**Canlı:** [yildiz-fizyoterapi.vercel.app](https://yildiz-fizyoterapi.vercel.app/)

----------

## Geliştirici

**Yusuf Yiğit Gültekin**

GitHub: **[@yyg27](https://github.com/yyg27)**

----------

## Lisans

Bu proje **Fizyoterapist Nursinem Yıldız** için özel olarak geliştirilmiştir.

Tasarım, içerik ve kaynak kodu izin alınmadan yeniden kullanılamaz veya dağıtılamaz.

