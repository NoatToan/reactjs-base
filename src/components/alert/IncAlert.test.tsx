import { render, screen } from '@testing-library/react';
import { IncAlert } from './IncAlert';

describe('alert UI', () => {
  test('alert show message', () => {
    render(<IncAlert security={'index'} onClose={() => {}} />);

    const alert = screen.getByRole('alert');

    expect(alert).toBeInTheDocument();
  });
});
