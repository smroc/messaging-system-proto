# Messaging System Prototype

A Bootstrap 4 styled, Vite-powered React prototype that emulates the polished feel of iMessage for quick visual exploration. API calls are simulated to showcase the experience before wiring up a real backend.

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

   Then open the printed local URL in your browser.

## Project Structure

- `src/App.jsx` – top-level layout orchestration and mock data wiring.
- `src/components/` – presentational pieces such as the header, message list, and composer.
- `src/mock/api.js` – mock API helpers that mimic network latency and incoming replies.
- `src/styles.css` – custom theming layered on top of Bootstrap 4.

## Customisation Notes

- Replace the mock helpers in `src/mock/api.js` with real API calls when ready.
- Update `contact` data or message seeding to reflect realistic content during demos.
- The UI leans on Bootstrap 4 utility classes with a small layer of custom CSS for gradients and glassmorphism accents.

## Scripts

- `npm run dev` – start Vite in development mode.
- `npm run build` – create a production build.
- `npm run preview` – preview the production build locally.
