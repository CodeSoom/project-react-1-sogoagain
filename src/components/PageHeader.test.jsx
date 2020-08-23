import React from 'react';

import { render, screen } from '@testing-library/react';

import PageHeader from './PageHeader';

describe('PageHeader', () => {
  it('renders page header', () => {
    render(<PageHeader>아이디어 기여</PageHeader>);

    expect(screen.getByText(/아이디어 기여/)).toBeInTheDocument();
  });
});
