import React from 'react';

import { render } from '@testing-library/react';

import Header from './Header';

describe('Header', () => {
  it('renders header', () => {
    const { container } = render(<Header primary="창업하자!" secondary="아이디어는 내게 맡겨!" />);

    expect(container).toHaveTextContent('창업하자!아이디어는 내게 맡겨!');
  });
});
