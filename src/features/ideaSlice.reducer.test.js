import ideaReducer, { setIdea, setLoading, setLiked } from './ideaSlice';

import IDEA from '../__fixtures__/idea';

describe('idea reducer', () => {
  describe('setIdea', () => {
    it('changes idea', () => {
      const previousState = {
        resource: {
          who: '',
          what: '',
        },
      };

      const state = ideaReducer(previousState, setIdea(IDEA));

      expect(state.resource).toEqual(IDEA);
    });

    it('changes loading state', () => {
      const previousState = {
        loading: false,
      };

      const state = ideaReducer(previousState, setLoading(true));

      expect(state.loading).toBeTruthy();
    });

    it('changes liked state', () => {
      const previousState = {
        liked: false,
      };

      const state = ideaReducer(previousState, setLiked(true));

      expect(state.liked).toBeTruthy();
    });
  });
});
