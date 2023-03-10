import {
  render,
  screen
} from '@testing-library/react';
import App from './App';

test('smoke test', () => {
  render(<App />);
  const dropzone = screen.getByText(/Drag/i);
  expect(dropzone).toBeInTheDocument();
});
