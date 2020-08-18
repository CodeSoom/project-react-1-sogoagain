import { createSlice } from '@reduxjs/toolkit';

import { batch } from 'react-redux';
import { fetchIdeas } from '../services/api';

const { actions, reducer } = createSlice({
  name: 'ideas',
  initialState: {
    resources: [],
    loading: false,
  },
  reducers: {
    setIdeas: (state, { payload: ideas }) => ({
      ...state,
      resources: ideas,
    }),

    setLoading: (state, { payload: loading }) => ({
      ...state,
      loading,
    }),
  },
});

export const {
  setIdeas,
  setLoading,
} = actions;

export function loadIdeas() {
  return async (dispatch) => {
    dispatch(setLoading(true));

    const ideas = await fetchIdeas();

    batch(() => {
      dispatch(setIdeas(ideas));
      dispatch(setLoading(false));
    });
  };
}

export default reducer;
