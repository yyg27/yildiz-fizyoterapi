
# Physiotherapist Nursinem Yıldız

[English](README.md) · [Türkçe](README.tr.md)

A modern, single-page clinic website developed for **Physiotherapist Nursinem Yıldız**.

The website provides information about physiotherapy services, the clinic's approach, working hours, and contact details. Visitors can also submit appointment requests directly through WhatsApp or email.

The project was built with **Next.js**, focusing on responsive design, performance, and a simple content management structure.

## Live Demo

**[yildiz-fizyoterapi.vercel.app](https://yildiz-fizyoterapi.vercel.app/)**

----------

## Features

-   Responsive single-page design
    
-   Mobile, tablet, and desktop support
    
-   SEO-friendly structure
    
-   Physiotherapy service presentation
    
-   Clinic information and working hours
    
-   WhatsApp appointment requests
    
-   Email appointment requests
    
-   Centralized content management through JSON
    
-   Static architecture with no backend or database
    
-   Vercel deployment
    

----------

## Tech Stack

-   **Next.js 16**
    
-   **React 19**
    
-   **TypeScript 5**
    
-   **Tailwind CSS 4**
    
-   **ESLint**
    
-   **Vercel**
    

----------

## Getting Started

### Prerequisites

Make sure you have **Node.js** and **npm** installed.

### Installation

Clone the repository and install the dependencies:

```bash
npm install

```

### Development

Start the development server:

```bash
npm run dev

```

The application will be available at:

```text
http://localhost:3000

```

### Production

Create a production build:

```bash
npm run build

```

Start the production server:

```bash
npm start

```

### Linting

Run ESLint with:

```bash
npm run lint

```

----------

## Content Management

Website content is centralized in a single JSON file:

```text
src/data/content.json

```

This allows most website content to be updated without modifying the React or CSS files.

The following information can be managed from this file:

-   Phone number
    
-   Address
    
-   Email address
    
-   WhatsApp appointment number
    
-   Physiotherapy services and descriptions
    
-   Homepage introduction text
    
-   Working hours
    
-   Testimonials
    

Changes made during local development are reflected immediately.

> Changes to the production website require a new deployment.

----------

## Images & Icons

Static media files are stored in the `public` directory.

### Profile Photo

```text
public/photos/fzt.jpeg

```

To replace the profile photo, replace the existing file while keeping the same filename and path.

### Service Icons

```text
public/icons/services/

```

Available service icons include:

-   Exercise
    
-   Manual Therapy
    
-   Massage
    
-   Neurological Rehabilitation
    
-   Orthopedic Rehabilitation
    
-   Mat Pilates
    
-   Reformer Pilates
    
-   Sports Rehabilitation
    

### General Icons

```text
public/icons/

```

Contains general-purpose icons such as:

-   Clock
    
-   Location
    
-   Phone
    
-   WhatsApp
    

----------

## Appointment System

The website does not use a backend, API, or database for appointment requests.

Instead, it provides two communication methods.

### WhatsApp

The information entered into the appointment form is formatted into a message and sent through WhatsApp.

### Email

The appointment information is passed to the user's default email application using a `mailto` link.

This approach keeps the application lightweight and eliminates the need for backend or database infrastructure.

----------

## Project Structure

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

### Directory Overview

| Path | Description |
|---|---|
| `src/app/` | Next.js application files |
| `src/app/page.tsx` | Main landing page |
| `src/app/layout.tsx` | Root layout and metadata |
| `src/app/globals.css` | Global styles |
| `src/data/content.json` | Centralized website content |
| `public/photos/` | Website images |
| `public/icons/` | General-purpose icons |
| `public/icons/services/` | Physiotherapy service icons |

----------

## Deployment

The website is deployed on **Vercel**.

```text
GitHub
   │
   ▼
Vercel
   │
   ▼
Production

```

**Live:** [https://yildiz-fizyoterapi.vercel.app/](https://yildiz-fizyoterapi.vercel.app/)

----------

## Developer

**Yusuf Yiğit Gültekin**

GitHub: **[@yyg27](https://github.com/yyg27)**

----------

## License

This project was developed specifically for **Physiotherapist Nursinem Yıldız**.

The design, content, and source code may not be reused or redistributed without permission.

