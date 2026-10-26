import { render, screen } from '@testing-library/react';
import { App } from './App';

it('muestra el título de la app', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: 'Finanzas GT' })).toBeInTheDocument();
});
