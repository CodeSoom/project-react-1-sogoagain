import React from 'react';

import { render, screen } from '@testing-library/react';

import Alert from './Alert';

describe('Alert', () => {
  it('renders alert', () => {
    render(<Alert message="생각이 잘 안나네요, 다시 생각해볼까요?" />);

    expect(screen.getByText(/생각이 잘 안나네요, 다시 생각해볼까요?/)).toBeInTheDocument();
  });
});
