# React E-Commerce Assignment

## Live Demo

https://sindhuja-ecommerce-assignment.vercel.app/

## Repository

https://github.com/karinkisindhuja/e-commerce.git

## Setup Instructions

1. Clone the repository
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
- Shopping cart functionality
- Cart state persisted using localStorage
- Responsive UI
- React Router navigation

## Design Decisions

- Used React Context API for cart state management
- Used SCSS Modules for component-scoped styling
- Kept API calls in a dedicated service layer
- Used localStorage to persist cart data

## Known Trade-offs

- No backend/database persistence
- No authentication
- Fake Store API data may vary or be unavailable

## Tech Stack

- React
- React Router
- SCSS Modules
- Vite
- Fake Store API
