import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';
import { MemoryRouter } from 'react-router';

describe('<HomePage />', () => {
  test('it should mount', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    const homePage = screen.getByTestId('HomePage');

    expect(homePage).toBeInTheDocument();
  });
});
