// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hi there text', () => {
  render(<App />);
  const element = screen.getByText(/Hi there/i);
  expect(element).toBeInTheDocument();
});
