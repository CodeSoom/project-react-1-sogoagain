import React from 'react';

import { render } from '@testing-library/react';

import Footer from './Footer';

describe('Footer', () => {
  it('renders footer', () => {
    const { container } = render(<Footer />);

    expect(container).toHaveTextContent('Developed by sogoagain.');
  });
});
