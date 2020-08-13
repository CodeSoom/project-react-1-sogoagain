import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import IdeaContainer from './IdeaContainer';

import IDEA from '../__fixtures__/idea';

jest.mock('react-redux');

describe('IdeaContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  beforeEach(() => {
    dispatch.mockClear();
    useSelector.mockImplementation((selector) => selector({
      idea: {
        loading: given.loading,
        resource: IDEA,
      },
    }));
  });

  context('when not loading', () => {
    given('loading', () => false);

    it('renders idea', () => {
      render(<IdeaContainer />);

      expect(screen.getByText(/'프로그래머'를 위한 '맛있는 라면' 어때\?/)).toBeInTheDocument();
    });

    it('refreshes idea', () => {
      render(<IdeaContainer />);

      fireEvent.click(screen.getByRole('button', { name: '생각하기' }));

      expect(dispatch).toBeCalledTimes(1);
    });

    it('likes idea', () => {
      render(<IdeaContainer />);

      const likeButton = screen.getByRole('button', { name: '좋아요' });
      fireEvent.click(likeButton);

      expect(dispatch).toBeCalledTimes(1);
    });
  });

  context('when loading', () => {
    given('loading', () => true);

    it('renders loading', () => {
      render(<IdeaContainer />);

      expect(screen.getByText(/생각중/)).toBeInTheDocument();
    });
  });
});
