import { describe, test, expect, vi, Mock } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import { store } from '../store';
import { Provider } from 'react-redux';
import { useRouter } from 'next/navigation';
import InitialPage from '../app/page';

vi.mock('next/navigation', () => ({
  useRouter: vi.fn(),
}));

describe('test Initial Page component', () => {
  test('should redirect to /page/1 on mount', async () => {
    const pushMock = vi.fn();

    (useRouter as Mock).mockReturnValue({
      push: pushMock,
    });

    render(
      <Provider store={store}>
        <InitialPage />
      </Provider>
    );

    await waitFor(() => {
      expect(pushMock).toHaveBeenCalledWith('/page/1');
    });
  });
});
