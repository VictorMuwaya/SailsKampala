# Sails Restaurant & Wine Boutique | Kampala

A premium, nautical-themed web application for **Sails Restaurant & Wine Boutique**, located on Old Port Bell Road, Luzira, Kampala. This application provides an elegant digital presence that mirrors the upscale dining experience of the physical location.

## ⚓ Project Overview

Sails Restaurant is defined by its philosophy: *"We shall Sail through the storms."* This application serves as a gateway for customers to explore the "Wine Boutique" and "Continental Cuisine" offerings while enjoying the serene atmosphere of the Luzira lakeside breeze through a digital lens.

## ✨ Key Features

- **Sophisticated Design**: A high-end aesthetic using a "Sails Navy" and "Sails Gold" color palette, paired with elegant typography (Playfair Display & Lato).
- **Dynamic Digital Menu**: A categorized, filterable menu featuring signature items like *Lake Victoria Tilapia* and *Port Bell Pepper Steak*.
- **Atmosphere Gallery**: An interactive masonry-style photo gallery with a full-screen lightbox to showcase the restaurant's interior and culinary plating.
- **Reservation System**: A user-friendly booking interface for managing table reservations.
- **Story & Contact**: A dedicated section for the brand story, integrated Google Maps, and essential contact information.
- **Responsive Experience**: Fully optimized for mobile, tablet, and desktop viewing.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Deployment**: Configured for Cloudflare Pages (via `wrangler.json`)

## 📂 Project Structure

- `src/index.tsx`: Application entry point.
- `src/App.tsx`: Main routing and layout configuration.
- `src/components/`: Reusable UI components (e.g., `Layout.tsx`).
- `src/pages/`: Page-level components:
  - `Home.tsx`: Hero section, features, and social feed.
  - `Menu.tsx`: Interactive food and wine listings.
  - `Gallery.tsx`: Visual tour of the restaurant.
  - `Contact.tsx`: Story, location, and reservation form.
- `src/constants.ts`: Centralized restaurant information and menu data.
- `src/types.ts`: TypeScript interfaces for menu items, social posts, and reviews.

## 🚀 Getting Started

The project is built as a modern ES module application.

1. **Development**:
   - The app uses an import map to load dependencies directly from ESM providers (esm.sh).
   - Styles are managed via the Tailwind CDN in `index.html` for rapid prototyping.

2. **Configuration**:
   - Restaurant metadata and social links are managed in `constants.ts`.
   - The theme (colors and fonts) is defined in the Tailwind configuration within `index.html`.

---
*Created for Sails Restaurant & Wine Boutique - Kampala, Uganda.*