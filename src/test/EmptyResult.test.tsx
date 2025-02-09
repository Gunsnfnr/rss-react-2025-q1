import { describe, test, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import { EmptyResult } from '../components/EmptyResult/EmptyResult';

describe('test EmptyResult', () => {
  test('test render EmptyResult', () => {
    render(<EmptyResult searchQuery={'bla-bla'} />);
    const text = screen.getByText('Nothing was found for the search term "bla-bla".');

    expect(text).toBeDefined();
  });
});
