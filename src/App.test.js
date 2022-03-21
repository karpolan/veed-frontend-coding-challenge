import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  //   beforeEach(() => {});

  test('renders self', () => {
    render(<App />);
    const header = screen.getByText(/GitHub Trends/i).closest('header');
    expect(header).toBeInTheDocument();
    const footer = screen.getByText(/Copyright/i).closest('footer');
    expect(footer).toBeInTheDocument();
  });

  test('shows current year in the copyright', () => {
    render(<App />);
    const copyright = screen.getByText(/Copyright/i);
    const currentYear = new Date().getFullYear();
    expect(copyright).toHaveTextContent(currentYear);
  });
});
