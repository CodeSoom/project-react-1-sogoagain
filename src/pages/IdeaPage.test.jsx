import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import IdeaPage from './IdeaPage';

import IDEA from '../__fixtures__/idea';

jest.mock('react-redux');
jest.mock('../assets');

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
    const { container } = render(<IdeaPage />);

    expect(container).toHaveTextContent('프로그래머을(를) 위한맛있는 라면');
    expect(dispatch).toBeCalled();
  });
});
