import { render, screen } from '@testing-library/react';
import App from './App';

it('renders count label', () => {
  render( 
      <App />
  );
  const linkElement = screen.getByText(/count: 0/i);
  expect(linkElement).toBeInTheDocument();
});
