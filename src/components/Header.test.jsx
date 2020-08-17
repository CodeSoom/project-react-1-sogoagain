import React from 'react';

import { render, screen } from '@testing-library/react';

import Header from './Header';

describe('Header', () => {
  it('renders header', () => {
    render(<Header title="창업하자! 아이디어는 내게 맡겨!" />);

    expect(screen.getByText(/창업하자! 아이디어는 내게 맡겨!/)).toBeInTheDocument();
  });
});
