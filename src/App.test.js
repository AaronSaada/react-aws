import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the React App', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument();
});