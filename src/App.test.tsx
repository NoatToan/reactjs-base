import { render, screen } from '@testing-library/react';
import App from './App';

describe('app UI', () => {
  test('app have HOME nav links', () => {
    render(<App />);

    const linkHome = screen.getByText(/home/i);
    expect(linkHome).toBeInTheDocument();
  });

  test('app have CONTENT index welcome', () => {
    render(<App />);

    // expect(
    //   screen.getByRole('heading', {
    //     name: /welcome/i,
    //   })
    // ).toBeEmptyDOMElement();
  });
});
