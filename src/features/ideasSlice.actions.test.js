import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import { fetchIdeas } from '../services/api';

import {
  loadIdeas, setIdeas,
} from './ideasSlice';

import IDEAS from '../__fixtures__/ideas';

jest.mock('../services/api');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('ideas actions', () => {
  const initialIdea = {
    resources: [],
    loading: false,
  };
  let store;

  beforeEach(() => {
    store = mockStore({ ideas: initialIdea });
  });

  describe('loadIdeas', () => {
    beforeEach(() => {
      fetchIdeas.mockClear();
      fetchIdeas.mockResolvedValue(IDEAS);
    });

    it('load ideas', async () => {
      await store.dispatch(loadIdeas());

      const actions = store.getActions();

      expect(fetchIdeas).toBeCalled();
      expect(actions[1]).toEqual(setIdeas(IDEAS));
    });
  });
});
