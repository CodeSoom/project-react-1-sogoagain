import ideaReducer, { setIdea } from './ideaSlice';

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
  });
});
