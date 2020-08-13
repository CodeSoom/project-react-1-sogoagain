import React from 'react';

import { MemoryRouter } from 'react-router-dom';

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
  useDispatch.mockImplementation(() => jest.fn());
  useSelector.mockImplementation((selector) => selector({
    idea: {
      resource: IDEA,
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

    expect(container).toHaveTextContent('창업하자, 아이디어는 내게 맡겨.');
  });

  it('renders links', () => {
    renderApp({ path: '/' });

    expect(screen.getByRole('link', { name: /아이디어 기여하기/ })).toBeInTheDocument();
  });

  context('with path /', () => {
    it('renders the idea page', () => {
      const { container } = renderApp({ path: '/' });

      expect(container)
        .toHaveTextContent(`'${IDEA.who}'를 위한 '${IDEA.what}' 어때?`);
    });
  });

  context('with path /contribute', () => {
    it('renders the contributing page', () => {
      const { container } = renderApp({ path: '/contributing' });

      expect(container).toHaveTextContent('누구를 위한 것인가요?');
    });
  });
});
