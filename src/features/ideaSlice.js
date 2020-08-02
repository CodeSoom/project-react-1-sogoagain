import { createSlice } from '@reduxjs/toolkit';

import { fetchIdea } from '../services/api';

const initialState = {
  who: '',
  what: '',
};

const { actions, reducer } = createSlice({
  name: 'idea',
  initialState,
  reducers: {
    setIdea: (state, { payload: { who, what } }) => ({ ...state, who, what }),
  },
});

export const { setIdea } = actions;

export function loadIdea() {
  return async (dispatch) => {
    dispatch(setIdea(initialState));
    const idea = await fetchIdea();
    dispatch(setIdea(idea));
  };
}

export default reducer;
