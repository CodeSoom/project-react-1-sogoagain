import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, screen, fireEvent } from '@testing-library/react';

import ContributingContainer from './ContributingContainer';

jest.mock('react-redux');

describe('ContributingPage', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  beforeEach(() => {
    dispatch.mockClear();
    useSelector.mockImplementation((state) => state({
      contributing: {
        loading: given.loading,
        fields: {
          who: '',
          what: '',
        },
      },
    }));
  });

  context('when not loading', () => {
    given('loading', () => false);

    it('renders form for who item', () => {
      render(<ContributingContainer />);

      expect(screen.getByLabelText(/누구를 위한 것인가요?/)).toBeInTheDocument();
      expect(screen.getByLabelText(/어떤 것인가요?/)).toBeInTheDocument();
    });

    it('changes input fields', () => {
      render(<ContributingContainer />);

      const controls = [
        { label: '누구를 위한 것인가요?', name: 'who', value: '프로그래머' },
        { label: '어떤 것인가요?', name: 'what', value: '맛있는 라면' },
      ];

      controls.forEach(({ label, name, value }) => {
        fireEvent.change(screen.getByLabelText(label), { target: { value } });

        expect(dispatch).toBeCalledWith({
          type: 'contributing/setField',
          payload: { name, value },
        });
      });
    });

    it('renders "기여하기" button', () => {
      render(<ContributingContainer />);

      fireEvent.submit(screen.getByRole('button', { name: '기여하기' }));

      expect(dispatch).toBeCalled();
    });
  });

  context('when loading', () => {
    given('loading', () => true);

    it('renders loading', () => {
      render(<ContributingContainer />);

      expect(screen.getByRole('button', { name: '기여하기' })).toBeDisabled();
    });
  });
});
