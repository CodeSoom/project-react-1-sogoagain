import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, screen } from '@testing-library/react';

import ContributingPage from './ContributingPage';

jest.mock('react-redux');

describe('ContributingPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((state) => state({
      contributing: {
        fields: {
          who: '',
          what: '',
        },
      },
    }));
  });

  it('renders form for who item', () => {
    render(<ContributingPage />);

    expect(screen.getByLabelText(/누구를 위한 것인가요?/)).toBeInTheDocument();
    expect(screen.getByLabelText(/어떤 것인가요?/)).toBeInTheDocument();
  });
});
