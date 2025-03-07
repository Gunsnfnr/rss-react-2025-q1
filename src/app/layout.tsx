import { ReactNode } from 'react';
import '../index.css';
import { ThemeProvider } from '../context/themeContext';
import { StoreProvider } from '../store/storeProvider';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
// import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ErrorBoundary>
          <StoreProvider>
            <ThemeProvider>{children}</ThemeProvider>
          </StoreProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
