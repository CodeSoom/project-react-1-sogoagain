import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import { fetchIdea, postIdea } from '../services/api';

import { setIdea, loadIdea, likeIdea } from './ideaSlice';

import IDEA from '../__fixtures__/idea';

jest.mock('../services/api');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('idea actions', () => {
  let store;

  describe('loadIdea', () => {
    const initialIdea = {
      resource: {
        who: '',
        what: '',
      },
    };

    beforeEach(() => {
      store = mockStore({ idea: initialIdea });
      fetchIdea.mockClear();
      fetchIdea.mockResolvedValue(IDEA);
      postIdea.mockClear();
    });

    it('loads idea', async () => {
      await store.dispatch(loadIdea());

      const actions = store.getActions();

      expect(fetchIdea).toBeCalled();
      expect(actions[1]).toEqual(setIdea(IDEA));
    });

    it('likes idea', async () => {
      await store.dispatch(likeIdea());

      expect(postIdea).toBeCalledWith(initialIdea.resource);
    });
  });
});
