import React from 'react';

import { render, screen } from '@testing-library/react';

import PageHeader from './PageHeader';

describe('PageHeader', () => {
  it('renders page header', () => {
    render(<PageHeader>좋은 아이디어가 있나요?</PageHeader>);

    expect(screen.getByText(/좋은 아이디어가 있나요?/)).toBeInTheDocument();
  });
});
