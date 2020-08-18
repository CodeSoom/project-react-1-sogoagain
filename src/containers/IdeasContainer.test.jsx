import React from 'react';

import { render, screen } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import IdeasContainer from './IdeasContainer';

import IDEAS from '../__fixtures__/ideas';

jest.mock('react-redux');

describe('IdeasContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  beforeEach(() => {
    dispatch.mockClear();
    useSelector.mockImplementation((selector) => selector({
      ideas: {
        resources: IDEAS,
        loading: given.loading,
      },
    }));
  });

  context('when not loading', () => {
    given('loading', () => false);

    it('renders idea list', () => {
      render(<IdeasContainer />);

      expect(screen.getAllByRole('listitem')).toHaveLength(IDEAS.length);
    });
  });

  context('when loading', () => {
    given('loading', () => true);

    it('renders loading', () => {
      render(<IdeasContainer />);

      expect(screen.getByText(/수집중/)).toBeInTheDocument();
    });
  });
});
