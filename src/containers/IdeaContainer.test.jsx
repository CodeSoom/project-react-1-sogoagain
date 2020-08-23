import React, { useState } from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import IdeaContainer from './IdeaContainer';

import IDEA from '../__fixtures__/idea';

jest.mock('react-redux');
jest.mock('../assets');

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('IdeaContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  beforeEach(() => {
    dispatch.mockClear();
    useSelector.mockImplementation((selector) => selector({
      idea: {
        loading: given.loading,
        alert: given.alert,
        resource: given.idea,
      },
    }));
    useState.mockImplementation((init) => [init, jest.fn()]);
  });

  context('when not loading', () => {
    given('loading', () => false);
    given('idea', () => IDEA);

    context('without alert', () => {
      given('alert', () => ({
        type: '',
        message: '',
      }));

      it('renders idea', () => {
        render(<IdeaContainer />);

        expect(screen.getByText(/프로그래머/)).toBeInTheDocument();
        expect(screen.getByText(/맛있는 라면/)).toBeInTheDocument();
      });

      it('refreshes idea', () => {
        render(<IdeaContainer />);

        fireEvent.click(screen.getByRole('button', { name: '아이디어 있어?' }));

        expect(dispatch).toBeCalledTimes(1);
      });

      it('likes idea', () => {
        render(<IdeaContainer />);

        const likeButton = screen.getByRole('button', { name: '좋아요' });
        fireEvent.click(likeButton);

        expect(dispatch).toBeCalledTimes(1);
      });

      context('when different the previous idea', () => {
        beforeEach(() => {
          useState.mockImplementation((init) => [`새로운 ${init}`, jest.fn()]);
        });

        it('scramble idea', () => {
          render(<IdeaContainer />);

          expect(screen.getByText(/프로그래머/)).toBeInTheDocument();
          expect(screen.getByText(/맛있는 라면/)).toBeInTheDocument();
        });
      });
    });

    context('with alert', () => {
      given('alert', () => ({
        type: 'error',
        message: '생각이 잘 안나네요, 다시 생각해볼까요?',
      }));

      it('renders alert message', () => {
        render(<IdeaContainer />);

        expect(screen.getByText(/생각이 잘 안나네요, 다시 생각해볼까요?/)).toBeInTheDocument();
      });

      it('disable like button', () => {
        render(<IdeaContainer />);

        const likeButton = screen.getByRole('button', { name: '좋아요' });

        expect(likeButton).toBeDisabled();
      });
    });
  });

  context('when loading', () => {
    given('loading', () => true);
    given('idea', () => ({ who: '', what: '' }));
    given('alert', () => ({
      type: '',
      message: '',
    }));

    it('disabled think button', () => {
      render(<IdeaContainer />);

      fireEvent.click(screen.getByRole('button', { name: '아이디어 있어?' }));

      expect(screen.getByRole('button', { name: '아이디어 있어?' })).toBeDisabled();
    });
  });
});
