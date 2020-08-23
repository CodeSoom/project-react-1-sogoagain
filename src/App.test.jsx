import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

import IDEA from './__fixtures__/idea';
import IDEAS from './__fixtures__/ideas';

jest.mock('react-redux');
jest.mock('./assets');

function renderApp({ path }) {
  return render((
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  ));
}

describe('App', () => {
  useDispatch.mockImplementation(() => jest.fn());
  useSelector.mockImplementation((selector) => selector({
    idea: {
      alert: {
        type: 'error',
        message: '생각이 잘 안나네요, 다시 생각해볼까요?',
      },
      resource: IDEA,
    },
    ideas: {
      resources: IDEAS,
      loading: false,
    },
    contributing: {
      fields: {
        who: '',
        what: '',
      },
    },
  }));

  it('renders title', () => {
    const { container } = renderApp({ path: '/' });

    expect(container).toHaveTextContent('창업하자!아이디어는 내게 맡겨!');
  });

  it('renders links', () => {
    renderApp({ path: '/' });

    expect(screen.getByRole('link', { name: /구경가기/ })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /기여하기/ })).toBeInTheDocument();
  });

  context('with path /', () => {
    it('renders the idea page', () => {
      const { container } = renderApp({ path: '/' });

      expect(container)
        .toHaveTextContent(`${IDEA.who}을(를) 위한${IDEA.what}`);
    });
  });

  context('with path /contributing', () => {
    it('renders the contributing page', () => {
      const { container } = renderApp({ path: '/contributing' });

      expect(container).toHaveTextContent('누구를 위한 것인가요?');
    });
  });

  context('with path /ideas', () => {
    it('renders the idea list page', () => {
      const { container } = renderApp({ path: '/ideas' });

      expect(container).toHaveTextContent('좋은 아이디어들을 구경해요');
    });
  });
});
