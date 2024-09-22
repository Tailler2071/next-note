import { render, screen } from '@testing-library/react';
import { Button } from '@/shared/ui';

describe('Button render', () => {
  test('Button with children', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument()
  });
});
