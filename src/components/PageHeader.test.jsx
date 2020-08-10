import React from 'react';

import { render, screen } from '@testing-library/react';

import PageHeader from './PageHeader';

describe('PageHeader', () => {
  it('renders page header', () => {
    render(<PageHeader title="아이디어 기여" />);

    expect(screen.getByText(/아이디어 기여/)).toBeInTheDocument();
  });
});
