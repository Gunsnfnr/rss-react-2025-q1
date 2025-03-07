import { describe, test, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import { Pagination } from '../components/Pagination/Pagination';

vi.mock('next/navigation', () => ({
  useRouter: () => ({}),
  useSearchParams: () => ({
    get: vi.fn(),
  }),
}));

describe('test Pagination', () => {
  test('should render text on the button', () => {
    render(<Pagination nextPage={null} pagenumber={'1'} setIsLoading={() => {}} />);

    const button = screen.getByText('Prev');
    expect(button).toBeTruthy();
  });
});
