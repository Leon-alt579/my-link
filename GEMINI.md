# GEMINI Context: my-profile

This project is a modern web application built with **Next.js 15+** and **React 19**, utilizing the **App Router** architecture. It is styled with **Tailwind CSS 4** and written in **TypeScript**.

## Project Overview

- **Name:** my-profile
- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **State Management:** React Server Components (RSC) and Client Components as needed.
- **Architecture:** The project follows the standard Next.js App Router structure, with the main application logic located in the `my-profile/app` directory.

## Directory Structure (Highlights)

- `my-profile/app/`: Contains the application routes, layouts, and components.
- `my-profile/public/`: Static assets like images and SVG files.
- `my-profile/next.config.ts`: Next.js configuration.
- `my-profile/tailwind.config.mjs` (or similar): Tailwind CSS configuration (Note: Tailwind 4 may use different config methods).
- `my-profile/package.json`: Project metadata, dependencies, and scripts.

## Building and Running

Commands should be executed within the `my-profile/` directory.

- **Development Server:**
  ```bash
  npm run dev
  ```
  Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

- **Production Build:**
  ```bash
  npm run build
  ```
  Compiles the application for production.

- **Production Start:**
  ```bash
  npm run start
  ```
  Starts the production server after building.

- **Linting:**
  ```bash
  npm run lint
  ```
  Runs ESLint to check for code quality issues.

## Development Conventions

- **App Router:** Use the `app/` directory for routing. Favor Server Components for data fetching and only use Client Components (`'use client'`) when interactivity is required.
- **Styling:** Use Tailwind CSS utility classes for styling. Adhere to the design tokens defined in the Tailwind configuration.
- **TypeScript:** Ensure all new code is properly typed. Avoid using `any`.
- **Linting:** Follow the ESLint rules configured in `eslint.config.mjs`.
- **Formatting:** Ensure consistent code formatting (Prettier is recommended if not already configured).
