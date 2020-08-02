import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import IdeaDescription from './IdeaDescription';

import IDEA from '../__fixtures__/idea';

describe('IdeaDescription', () => {
  const handleClick = jest.fn();

  function renderIdeaDescription() {
    render(<IdeaDescription
      idea={IDEA}
      onClick={handleClick}
    />);
  }

  beforeEach(() => {
    handleClick.mockClear();
  });

  it('renders idea', () => {
    renderIdeaDescription();

    expect(screen.getByText(/'프로그래머'를 위한 '맛있는 라면' 어때\?/)).toBeInTheDocument();
  });

  it('refreshes idea', () => {
    renderIdeaDescription();

    fireEvent.click(screen.getByRole('button', { name: '생각하기' }));

    expect(handleClick).toBeCalled();
  });
});
