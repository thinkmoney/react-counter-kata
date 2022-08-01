import { render, screen } from '@testing-library/react';
import About from './About';

it('renders about page title', () => {
  render( 
      <About />
  );
  const pageTitle = screen.getByText(/about page/i)
  expect(pageTitle).toBeInTheDocument();
});
