import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import { fetchIdea } from '../services/api';

import { setIdea, loadIdea } from './ideaSlice';

import IDEA from '../__fixtures__/idea';

jest.mock('../services/api');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('idea actions', () => {
  let store;

  describe('loadIdea', () => {
    const initialIdea = {
      who: '',
      what: '',
    };

    beforeEach(() => {
      store = mockStore({ idea: initialIdea });
      fetchIdea.mockClear();
      fetchIdea.mockResolvedValue(IDEA);
    });

    it('fetch idea', async () => {
      await store.dispatch(loadIdea());

      const actions = store.getActions();

      expect(fetchIdea).toBeCalled();
      expect(actions[0]).toEqual(setIdea(initialIdea));
      expect(actions[1]).toEqual(setIdea(IDEA));
    });
  });
});
