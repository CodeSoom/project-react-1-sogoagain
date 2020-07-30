import React from 'react';

import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders title', () => {
    render(<App />);

    expect(screen.getByText(/창업하자, 아이디어는 내게 맡겨./)).toBeInTheDocument();
  });
});
