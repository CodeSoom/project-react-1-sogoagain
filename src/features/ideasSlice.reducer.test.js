import ideasReducer, {
  setIdeas, setLoading,
} from './ideasSlice';

import IDEAS from '../__fixtures__/ideas';

describe('ideas reducer', () => {
  describe('setIdeas', () => {
    it('changes ideas', () => {
      const previousState = {
        resources: [],
      };

      const state = ideasReducer(previousState, setIdeas(IDEAS));

      expect(state.resources).toEqual(IDEAS);
    });

    it('changes loading state', () => {
      const previousState = {
        loading: false,
      };

      const state = ideasReducer(previousState, setLoading(true));

      expect(state.loading).toBeTruthy();
    });
  });
});
