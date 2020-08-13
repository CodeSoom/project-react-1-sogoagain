import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, screen } from '@testing-library/react';

import IdeaPage from './IdeaPage';

import IDEA from '../__fixtures__/idea';

jest.mock('react-redux');

describe('IdeaPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((state) => state({
      idea: IDEA,
    }));
  });

  it('renders idea', () => {
    render(<IdeaPage />);

    expect(screen.getByText(/'프로그래머'를 위한 '맛있는 라면' 어때\?/)).toBeInTheDocument();
    expect(dispatch).toBeCalled();
  });
});
