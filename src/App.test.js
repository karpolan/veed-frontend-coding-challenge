import { render, screen } from '@testing-library/react';
import App from './App';

test('renders self', () => {
  render(<App />);
  const header = screen.getByText(/GitHub/i);
  expect(header).toBeInTheDocument();
  const footer = screen.getByText(/Copyright/i);
  expect(footer).toBeInTheDocument();
});
