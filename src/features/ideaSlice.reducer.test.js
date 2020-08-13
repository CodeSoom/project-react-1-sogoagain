import ideaReducer, {
  setIdea, setLoading, setLiked, setAlert,
} from './ideaSlice';

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

    it('changes alert', () => {
      const previousState = {
        alert: {
          type: '',
          message: '',
        },
      };
      const alert = {
        type: 'error',
        message: '생각이 잘 안나네요, 다시 생각해볼까요?',
      };

      const state = ideaReducer(previousState, setAlert(alert));

      expect(state.alert).toEqual(alert);
    });
  });
});
