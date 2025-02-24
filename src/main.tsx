import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.tsx';
import { App } from './App.tsx';
import { BrowserRouter } from 'react-router';
import { ThemeProvider } from './context/themeContext.tsx';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';

const rootElement = document.getElementById('root');

if (rootElement instanceof HTMLElement)
  createRoot(rootElement).render(
    <StrictMode>
      <ErrorBoundary>
        <Provider store={store}>
          <BrowserRouter>
            <ThemeProvider>
              <App />
            </ThemeProvider>
          </BrowserRouter>
        </Provider>
      </ErrorBoundary>
    </StrictMode>
  );
