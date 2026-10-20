# Jobs Archive

An interactive entrepreneur showcase about Steve Jobs, built as a focused React experience. The page presents his work as a visual archive rather than a long biography, with a chronological journey, venture cards, lasting lessons, and source links for further reading.

## What is included

- Editorial hero section with a local Steve Jobs portrait and an animated background.
- Clickable milestone timeline covering 1976, 1984, 1986, 1997, 2007, and 2010.
- Venture cards for Apple, Pixar, and NeXT with links to official websites.
- Two concise takeaways about focus and craft.
- Source and image attribution links in the footer.
- Responsive layout for desktop, tablet, and mobile screens.
- Reduced-motion support for visitors who prefer less animation.

## Tech stack

- React 19
- Vite
- Plain CSS with responsive media queries and CSS animations
- Oxlint

## Run locally

Requirements: Node.js 18 or newer and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173/`.

## Available scripts

```bash
npm run dev      # Start the development server
npm run build    # Create a production build in dist/
npm run preview  # Preview the production build locally
npm run lint     # Run Oxlint
```

## Project structure

```text
src/
  App.jsx                 Main page and data-driven content
  App.css                 Layout, visual system, and animations
  index.css               Global reset and font setup
  assets/steve-jobs.jpg   Local hero portrait
index.html                Document shell and page title
```

The timeline and venture cards are generated from arrays in `src/App.jsx`, so new milestones or companies can be added without duplicating markup.

## Sources

- [Apple: Remembering Steve](https://www.apple.com/stevejobs/)
- [Encyclopaedia Britannica: Steve Jobs](https://www.britannica.com/biography/Steve-Jobs)
- [Steve Jobs portrait on Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Steve_Jobs_Headshot_2010-CROP2.jpg)

The portrait is bundled locally in `src/assets/steve-jobs.jpg` for reliable rendering. The Wikimedia Commons source remains linked in the site footer for attribution.
