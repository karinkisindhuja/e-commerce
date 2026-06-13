# React E-Commerce Assignment

## Live Demo

https://sindhuja-ecommerce-assignment.vercel.app/

## Repository

https://github.com/karinkisindhuja/e-commerce

## Setup Instructions

1. Clone the repository

```bash
git clone https://github.com/karinkisindhuja/e-commerce.git
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Create a production build

```bash
npm run build
```

## Features

- Product listing from Fake Store API
- Product details page
- Add to Cart functionality
- Quantity management in cart
- Cart state persisted using localStorage
- Responsive UI
- React Router navigation

## Folder Structure

```text
src/
├── components/
|── data/
|── pages/
├── router/
├── stores/
├── types/
└── App.tsx
```

## Design Decisions

- Used React Context API for cart state management to avoid unnecessary complexity for a small application.
- Used SCSS Modules for component-scoped styling and maintainability.
- Kept API calls in a dedicated service layer to separate business logic from UI components.
- Used localStorage to persist cart data across page refreshes.

## Lighthouse Audit

| Category       | Score |
| -------------- | ----- |
| Performance    | 98    |
| Accessibility  | 96    |
| Best Practices | 100   |
| SEO            | 100   |

A Lighthouse audit was performed against the deployed application. Screenshot/report can be found in the `docs` folder.

## Known Trade-offs

- No backend/database persistence.
- No authentication or user accounts.
- Fake Store API availability depends on the external service.
- Focused on core e-commerce functionality within the assignment scope.

## Tech Stack

- React
- TypeScript
- React Router
- SCSS Modules
- Vite
- Fake Store API
