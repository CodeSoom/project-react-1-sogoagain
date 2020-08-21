import { getDefaultMiddleware } from '@reduxjs/toolkit';

import configureStore from 'redux-mock-store';

import { fetchIdea, postIdea } from '../services/api';

import {
  setIdea, loadIdea, likeIdea, setAlert,
} from './ideaSlice';

import IDEA from '../__fixtures__/idea';

jest.mock('../services/api');

const mockStore = configureStore(getDefaultMiddleware());

describe('idea actions', () => {
  const initialIdea = {
    resource: {
      who: '',
      what: '',
    },
  };
  let store;

  beforeEach(() => {
    store = mockStore({ idea: initialIdea });
  });

  describe('loadIdea', () => {
    context('when idea is fetched', () => {
      beforeEach(() => {
        fetchIdea.mockClear();
        fetchIdea.mockResolvedValue(IDEA);
      });

      it('loads idea', async () => {
        await store.dispatch(loadIdea());

        const actions = store.getActions();

        expect(fetchIdea).toBeCalled();
        expect(actions[2]).toEqual(setIdea(IDEA));
      });
    });

    context('when idea cannot be fetched', () => {
      beforeEach(() => {
        fetchIdea.mockClear();
        fetchIdea.mockRejectedValue(new Error('Fetch error'));
      });

      it('renders question mark', async () => {
        await store.dispatch(loadIdea());

        const actions = store.getActions();

        expect(fetchIdea).toBeCalled();
        expect(actions[2]).toEqual(setAlert({
          type: 'error',
          message: '생각이 잘 안나네요, 다시 생각해볼까요?',
        }));
        expect(actions[3]).toEqual(setIdea({
          who: '?',
          what: '?',
        }));
      });
    });
  });

  describe('likeIdea', () => {
    beforeEach(() => {
      postIdea.mockClear();
    });

    it('likes idea', async () => {
      await store.dispatch(likeIdea());

      expect(postIdea).toBeCalledWith(initialIdea.resource);
    });
  });
});
