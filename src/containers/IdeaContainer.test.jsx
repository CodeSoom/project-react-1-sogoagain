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
      idea: given.idea,
    }));
  });

  context('with idea', () => {
    given('idea', () => IDEA);

    it('loads idea', () => {
      render(<IdeaContainer />);

      expect(dispatch).toBeCalled();
    });

    it('renders idea', () => {
      render(<IdeaContainer />);

      expect(screen.getByText(/'프로그래머'를 위한 '맛있는 라면' 어때\?/)).toBeInTheDocument();
    });

    it('refreshes idea', () => {
      render(<IdeaContainer />);

      fireEvent.click(screen.getByRole('button', { name: '생각하기' }));

      expect(dispatch).toBeCalledTimes(2);
    });
  });

  context('without idea', () => {
    given('idea', () => ({
      who: '',
      what: '',
    }));

    it('renders loading', () => {
      render(<IdeaContainer />);

      expect(screen.getByText(/생각중/)).toBeInTheDocument();
    });
  });
});
