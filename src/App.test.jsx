import React from 'react';

import {
  MemoryRouter,
} from 'react-router-dom';

import { render, screen } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

import IDEA from './__fixtures__/idea';

jest.mock('react-redux');

function renderApp({ path }) {
  return render((
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  ));
}

describe('App', () => {
  beforeEach(() => {
    useDispatch.mockImplementation(() => jest.fn());
    useSelector.mockImplementation((selector) => selector({
      idea: IDEA,
    }));
  });

  it('renders title', () => {
    renderApp({ path: '/' });

    expect(screen.getByText(/창업하자, 아이디어는 내게 맡겨./)).toBeInTheDocument();
  });

  context('with path /', () => {
    it('renders the idea page', () => {
      renderApp({ path: '/' });

      expect(screen.getByText(/'프로그래머'를 위한 '맛있는 라면' 어때\?/)).toBeInTheDocument();
    });
  });
});
