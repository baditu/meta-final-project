import React from 'react';
import { render, screen } from '@testing-library/react';
import ReservationsPage from './ReservationsPage';

test('renders ReservationsPage with h1 element', () => {
  render(<ReservationsPage />);
  const h1Element = screen.getByText(/Reservations/i);
  expect(h1Element).toBeInTheDocument();
});