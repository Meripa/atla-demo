# Atla Distillery demo

Live: https://atla-demo.vercel.app/

A portfolio project designed to showcase a modern React + TypeScript + Vite application in the form of a small storefront / product showcase website.

## What this project is

This application is a website that introduces Atla Distillery product-related content, including:
- product listings and product cards
- product detail page
- manufacturing tour and blog sections
- contact form and map display

The app is built with a clean component-based architecture and uses React Router for page navigation.

## Key features

- Multi-page React application
- Background imagery and dark UI elements styled with Tailwind CSS
- Framer Motion animations for pages and product cards
- Product grid and product detail view
- Contact page with a form and Google Maps iframe
- Shared layout using `MainLayout`, `Navbar`, and `Footer`

## Technologies

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Framer Motion
- ESLint

## Getting started

1. Install dependencies

```bash
npm install
```

2. Start the development server

```bash
npm run dev
```

3. Open in browser

```bash
http://localhost:5173
```

4. Build for production

```bash
npm run build
```

5. Preview production build

```bash
npm run preview
```

## Project structure

- `src/App.tsx` – application router and page setup
- `src/layouts/MainLayout.tsx` – shared layout with navigation and footer
- `src/pages/` – individual page components
- `src/components/` – reusable UI components
- `src/data/products.ts` – product descriptions and metadata
- `src/assets/` – images and visual assets

## What this project demonstrates

- ability to build an interactive React application with multiple pages
- experience with a modern front-end stack: Vite + React + TypeScript
- integration of styled UI and animation using Tailwind CSS and Framer Motion
- ability to organize code into modular components and pages

## Improvements to add

- real shopping cart and checkout flow
- product search and filtering
- form validation and backend integration
- customer reviews / feedback section
- authentication and admin panel

---

> Note: this project is intended as a portfolio example to demonstrate front-end development and a polished user interface.
