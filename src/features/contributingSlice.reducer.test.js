import contributingReducer, { setField, setLoading, setMessage } from './contributingSlice';

describe('contributing reducer', () => {
  describe('setField', () => {
    it('changes field', () => {
      const previousState = {
        fields: {
          who: '',
          what: '',
        },
      };

      const state = contributingReducer(previousState, setField({
        name: 'who',
        value: '프로그래머',
      }));

      expect(state.fields.who).toBe('프로그래머');
      expect(state.fields.what).toBe('');
    });
  });

  describe('setLoading', () => {
    it('changes loading', () => {
      const previousState = {
        loading: false,
      };

      const state = contributingReducer(previousState, setLoading(true));

      expect(state.loading).toBeTruthy();
    });
  });

  describe('setMessage', () => {
    it('changes message', () => {
      const previousState = {
        message: '',
      };

      const state = contributingReducer(previousState, setMessage('좋은 아이디어네요! 감사합니다.'));

      expect(state.message).toBe('좋은 아이디어네요! 감사합니다.');
    });
  });
});
