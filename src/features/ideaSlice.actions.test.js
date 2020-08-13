import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import { fetchIdea, postIdea } from '../services/api';

import { setIdea, loadIdea, likeIdea } from './ideaSlice';

import IDEA from '../__fixtures__/idea';

jest.mock('../services/api');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

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
        expect(actions[1]).toEqual(setIdea(IDEA));
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
        expect(actions[1]).toEqual(setIdea({
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
