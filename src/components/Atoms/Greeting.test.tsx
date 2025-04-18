// src/components/Greeting.test.tsx
import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('renders greeting with name', () => {
  render(<Greeting name="Việt" />);
  expect(screen.getByText(/hello, việt!/i)).toBeInTheDocument();
});
