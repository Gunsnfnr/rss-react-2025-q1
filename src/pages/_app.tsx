import type { AppProps } from 'next/app';
import '../index.css';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import { Provider } from 'react-redux';
import { store } from '../store';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ErrorBoundary>
  );
}
