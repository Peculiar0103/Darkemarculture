# Darkemar Culture — Complete Technical Architecture & Codebase Guide

*A Senior Engineer's Learning Guide for Modern Web Development*

---

## 1. What Technology & Framework Is This Project Using?

- **Core Framework**: **Next.js (Version 16.3.1 with App Router)**
- **UI Library**: **React (Version 19.2.8)**
- **Bundler & Compiler**: **Turbopack** (Next.js's high-speed build engine written in Rust)

### The Concepts:
- **WHAT it is**: 
  - **React** is a JavaScript library for building user interfaces by breaking web pages into reusable building blocks called **Components**.
  - **Next.js** is a full-stack web framework built on top of React. While React only handles what happens inside the browser window, Next.js handles routing, server rendering, SEO optimization, and image compression.
- **WHY we use it**: 
  - If you use plain React alone, the browser receives a blank HTML page and takes time to load JavaScript before showing anything (bad for SEO and slow on mobile networks).
  - Next.js pre-renders HTML on the server first, so your website loads instantly with high visual fidelity and top Google search rankings.
- **WHERE it appears**: Everywhere in `src/app/` and configured in `package.json`.

```
┌─────────────────────────────────────────────────────────────┐
│                         NEXT.JS 16                          │
│  ┌───────────────────────┐       ┌────────────────────────┐ │
│  │   Server Environment  │ ────> │   Browser Environment  │ │
│  │  • File-system routing│       │  • React 19 UI         │ │
│  │  • Server rendering   │       │  • Interactive state   │ │
│  │  • SEO meta tags      │       │  • Cart drawer & animations
│  └───────────────────────┘       └────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. What Programming Languages Are Being Used?

1. **TypeScript (`.ts` / `.tsx`)**:
   - **WHAT**: A superset of JavaScript developed by Microsoft that adds **static types** (rules for your data).
   - **WHY**: It prevents bugs before your code even runs. If a dress requires a `priceGBP: number`, TypeScript will alert you with a red squiggly line if you accidentally write `"£120"` (text instead of a number).
   - **WHERE**: Every file in `src/` (`page.tsx`, `Header.tsx`, `products.ts`, etc.).
2. **CSS (Cascading Style Sheets)**:
   - **WHAT**: The styling language for the web.
   - **WHY**: Controls colors, typography, fluid `clamp()` sizing, responsive media queries, and animations.
   - **WHERE**: `src/app/globals.css`.
3. **HTML5 (JSX)**:
   - **WHAT**: Standard semantic structure tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<aside>`, `<footer>`) written inside TypeScript files (`.tsx`).

---

## 3. What Libraries & Packages Are Installed?

Looking at `package.json`:

### Production Packages (Run when live):
- **`next`**: Provides the App Router, image optimization (`<Image />`), and `<Link />` component for fast page transitions.
- **`react`**: Provides core reactive functions (`useState`, `useEffect`, `useContext`).
- **`react-dom`**: Renders React components into the browser's DOM (Document Object Model).

### Development Packages (Only used while coding on your computer):
- **`typescript`**: Compiles TypeScript into JavaScript.
- **`@types/node`**, **`@types/react`**, **`@types/react-dom`**: Type definitions so VS Code gives you accurate autocomplete and tooltips.
- **`eslint`** & **`eslint-config-next`**: Linters that check your code for formatting and syntax mistakes.

---

## 4. Purpose of the Major Folders

```
darkemar-website/
├── public/              # Static files accessible directly by the browser (images, logos)
│   ├── images/          # Real Darkemar product photography
│   └── logo.jpeg        # Brand logo
├── src/                 # All custom source code written for the app
│   ├── app/             # Next.js App Router (All pages and layouts)
│   ├── components/      # Reusable UI building blocks (Header, Footer, ProductCard, CartDrawer)
│   ├── context/         # Global state management (Shopping Cart)
│   └── data/            # Local data models & mock product inventory
├── node_modules/        # Third-party dependencies installed by npm (Never edit manually)
└── .next/               # Compiled production build output created by Next.js
```

---

## 5. Purpose of the Important Files

| File | Purpose |
|---|---|
| `package.json` | The project manifest. Lists dependencies, version, and commands (`npm run dev`, `npm run build`). |
| `tsconfig.json` | Configures TypeScript rules and sets `@/*` as a shortcut alias to `./src/*`. |
| `src/app/layout.tsx` | The **Root Layout Shell**. Wraps *every* page with Google Fonts, `<Header>`, `<Footer>`, and `<CartDrawer>`. |
| `src/app/globals.css` | The **Design System**. Defines CSS custom properties (`--color-burgundy`, `--bg-color`), fluid typography, and media queries. |
| `src/data/products.ts` | The **Product Catalog Data Model**. Defines the `Product` TypeScript type and the array of fashion items. |

---

## 6. How the Application Starts & Displays a Page

```
1. Customer visits URL (e.g. yoursite.com/shop)
                       │
                       ▼
2. Next.js Server matches route -> finds `src/app/shop/page.tsx`
                       │
                       ▼
3. Root Layout (`src/app/layout.tsx`) wraps the page with Header, Footer, and Fonts
                       │
                       ▼
4. Server generates HTML and sends it to browser (Instant Visual Display)
                       │
                       ▼
5. Browser downloads JavaScript and "Hydrates" interactive components
   (Cart drawer slides, filters, dropdowns, and button clicks become active)
```

---

## 7. How Routing Works in This Project (File-System Routing)

Next.js uses **File-System Routing**: every folder inside `src/app/` automatically becomes a URL route in the browser:

| URL in Browser | Corresponding File in Codebase |
|---|---|
| `/` | `src/app/page.tsx` |
| `/shop` | `src/app/shop/page.tsx` |
| `/about` | `src/app/about/page.tsx` |
| `/checkout` | `src/app/checkout/page.tsx` |
| `/contact` | `src/app/contact/page.tsx` |
| `/how-to-order` | `src/app/how-to-order/page.tsx` |
| `/delivery-returns` | `src/app/delivery-returns/page.tsx` |
| `/product/[slug]` *(Dynamic)* | `src/app/product/[slug]/page.tsx` |

### How Dynamic Routes Work (`[slug]`):
- The brackets `[slug]` mean "this part of the URL is variable".
- When a user clicks `/product/aso-oke-fully-stoned-bubu`, Next.js passes `slug = "aso-oke-fully-stoned-bubu"` into the page component.
- The page searches the product array with `sampleProducts.find(p => p.slug === slug)` and renders that exact garment without writing a separate file for each dress!

---

## 8. How Components Are Organized

Components follow the **Single Responsibility Principle** (each component has one clear job):
- `Header.tsx`: Top navigation, announcement bar, logo, shopping bag counter badge, mobile drawer trigger.
- `Footer.tsx`: Brand story, quick links, contact info, customer care, social links.
- `ProductCard.tsx`: Displays a dress card (3/4 aspect ratio photo, category pill, multi-image badge, GBP price).
- `CartDrawer.tsx`: The slide-out shopping bag overlay.

---

## 9. How Styling Works

We use **Vanilla CSS with Design Tokens** in `globals.css`:
- **CSS Variables**:
  - `--bg-color: #F7F3EC` (Warm Ivory background)
  - `--color-burgundy: #4A0E17` (Luxury Deep Wine / Burgundy)
  - `--accent-color: #A8895B` (Muted Antique Gold)
- **Fluid Typography with `clamp()`**:
  - Example: `font-size: clamp(1.8rem, 5vw, 3.2rem)`. It fluidly shrinks on a 320px phone and grows on a 1440px monitor without abrupt line breaks.
- **Media Queries**:
  - `@media (min-width: 768px)` ensures mobile-first responsiveness (mobile styles apply first, and tablet/desktop layouts expand on larger screens).

---

## 10. Where Product Information Currently Comes From

All product data is stored in a static TypeScript array in `src/data/products.ts`.

Each item is structured like this:
```ts
export interface Product {
  id: string
  name: string
  slug: string
  category: string
  priceGBP: number
  description: string
  details: string[]
  sizes: string[]
  colors: string[]
  images: string[]
}
```

---

## 11. How the Shopping Cart Functionality Works

```
1. Customer clicks "Add to Shopping Bag" on a product page
                           │
                           ▼
2. CartContext runs `addToCart(product, size, color, quantity)`
                           │
             ┌─────────────┴─────────────┐
             ▼                           ▼
Saves items to browser's          Slides out `<CartDrawer />`
      `localStorage`             showing subtotal in GBP (£)
```

- When the customer clicks **"Proceed to Checkout"**, they visit `/checkout`.
- When they enter their delivery address and submit, the system generates a unique **Order ID (e.g. `DC-849201`)**, displays an on-screen receipt, and opens **WhatsApp** pre-filled with the exact invoice and delivery address.

---

## 12. Does the Project Currently Have a Backend?

- **Current Status**: **No standalone backend server yet.**
- **Explanation**: Next.js has built-in backend capability via `src/app/api/.../route.ts` (Serverless API functions), but right now, all logic runs directly on the frontend and client side.

---

## 13. Does the Project Currently Have a Database?

- **Current Status**: **No external database connected.**
- **Explanation**: The product inventory is stored in a TypeScript code file (`products.ts`), and cart items are stored in the user's browser storage (`localStorage`).

---

## 14. How the Project Is Deployed

1. **Git Version Control**: All source code commits are pushed to your GitHub repository (`https://github.com/Peculiar0103/Darkemarculture.git`).
2. **Build Validation**: Running `npm run build` compiles TypeScript, checks for errors, and creates optimized static assets in `.next/`.
3. **Deployment Platform**: Platforms like **Vercel** or **Netlify** connect to your GitHub repository and deploy your website automatically every time new code is pushed.

---

## 15. Server-Side vs. Client-Side Breakdown

In modern Next.js, components are divided into two categories:

- **Server Components (Default)**:
  - Files *without* `"use client"` (e.g. `src/app/about/page.tsx`, `src/app/page.tsx`).
  - Rendered entirely on the server into pure HTML. Faster load times and zero extra JavaScript sent to the browser.
- **Client Components**:
  - Files marked with `"use client"` at line 1 (e.g. `Header.tsx`, `CartDrawer.tsx`, `ProductPage`, `CheckoutPage`).
  - Required whenever a component uses interactivity, such as `useState`, `useEffect`, `onClick`, `localStorage`, or `window.open()`.

---

## 16. What Is Currently Placeholder / Mock / Static Data?

1. **Product Inventory**: Stored in a TypeScript file instead of a live database.
2. **Order ID Generator**: Generated randomly in the browser (`Math.random()`) instead of an auto-incrementing database sequence.
3. **Live Stock Counts**: Every item currently shows as in-stock because there is no warehouse inventory database yet.
4. **Returns Policy**: Editorial placeholder notes pending final management policy.

---

## 17. What Will Need to Change to Become a Full E-Commerce System?

| Current Step | Full Production Upgrade |
|---|---|
| Static `products.ts` | **Database (e.g. Supabase, PostgreSQL, or MongoDB)** + an Admin Dashboard where the store owner can upload dresses and change prices without writing code. |
| Browser-generated Order ID | **Backend API Route (`/api/orders`)** that saves orders to a database and sends automated email receipts (via SendGrid or Resend). |
| WhatsApp-only payment confirmation | **Stripe / Paystack Payment Gateway** for direct online debit/credit card and Apple Pay processing. |
| Local images in `/public/images` | **Cloud Media Storage (Cloudinary or AWS S3)** for automated image compression and global CDN delivery. |
| Guest checkout | **Customer Accounts / Authentication (NextAuth or Supabase Auth)** so customers can log in, view order history, and save shipping addresses. |

---
*Created for your personal software engineering and web development mentorship journey.*
