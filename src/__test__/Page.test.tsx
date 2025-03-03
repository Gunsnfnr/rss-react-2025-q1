import { describe, test, expect, vi } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import Page from '../pages';
import mockRouter from 'next-router-mock';

vi.mock('next/router', () => ({
  useRouter: () => mockRouter,
}));

describe('test Page Component', () => {
  test('should redirect to /page/1 on mount', async () => {
    const pushMock = vi.fn();

    mockRouter.push = pushMock;

    render(<Page />);

    await waitFor(() => {
      expect(pushMock).toHaveBeenCalledWith('/page/1');
    });
  });
});
