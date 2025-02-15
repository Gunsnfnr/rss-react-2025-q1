import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.tsx';
import { App } from './App.tsx';
import { BrowserRouter } from 'react-router';
import { ThemeProvider } from './context/themeContext.tsx';

const rootElement = document.getElementById('root');

if (rootElement instanceof HTMLElement)
  createRoot(rootElement).render(
    <StrictMode>
      <ErrorBoundary>
        <BrowserRouter>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </ErrorBoundary>
    </StrictMode>
  );
