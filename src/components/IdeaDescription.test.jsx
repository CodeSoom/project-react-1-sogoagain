import React from 'react';

import { render, screen } from '@testing-library/react';

import IdeaDescription from './IdeaDescription';

describe('IdeaDescription', () => {
  it('renders idea', () => {
    const idea = {
      who: '프로그래머',
      what: '맛있는 라면',
    };

    render(<IdeaDescription idea={idea} />);

    expect(screen.getByText(/'프로그래머'를 위한 '맛있는 라면' 어때\?/)).toBeInTheDocument();
  });
});
