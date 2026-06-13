import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";
import {CartProvider} from './stores/CartContext.tsx';
import ErrorBoundary from './components/ErrorBoundary.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
    <BrowserRouter>
    <CartProvider>
        <App />
    </CartProvider>
    </BrowserRouter>
    </ErrorBoundary>

  </StrictMode>,
)
