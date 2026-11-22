# Nathan Le · Portfolio

My personal portfolio site, built and designed by me.

**Live site:** [nathan-le-portfolio.vercel.app](https://nathan-le-portfolio.vercel.app)

## What it is

A one-page portfolio with a detail page for each project. It covers my software work (Homze, Talkify, a Yelp data pipeline, a Reddit search engine), my brand work (Menacity Clothing), and my photography and video.

## Stack

- **Next.js 15** (App Router) with **React 19** and **TypeScript**
- **Tailwind CSS** for styling
- **Framer Motion** for page and scroll animations
- **EmailJS** and **Google reCAPTCHA** for the contact form
- Deployed on **Vercel**

## How it's organized

```
frontend/
  src/app/
    page.tsx              Home page (hero, about, work, impact, contact)
    components/           Header, sections, project cards, contact form
    projects/<name>/      One route per project detail page
    data/                 Project and about content kept separate from layout
    utils/animations.ts   Shared Framer Motion variants
  public/                 Images and video used across the site
```

Project content lives in `src/app/data/` so I can update copy without touching components.

## Running it locally

```bash
cd frontend
npm install
npm run dev
```

Then open http://localhost:3000.

## Notes

The site went through a full redesign. The current version uses a glassmorphism look with an olive accent, standardized project tiles, and simpler project pages. I use AI tools like Claude as part of my development workflow.
