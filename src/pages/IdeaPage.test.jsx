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
      idea: {
        alert: {
          type: 'error',
          message: '생각이 잘 안나네요, 다시 생각해볼까요?',
        },
        resource: IDEA,
      },
    }));
  });

  it('renders idea', () => {
    render(<IdeaPage />);

    expect(screen.getByText(/프로그래머를 위한 맛있는 라면/)).toBeInTheDocument();
    expect(dispatch).toBeCalled();
  });
});
