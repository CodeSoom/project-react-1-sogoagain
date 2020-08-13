import { createSlice } from '@reduxjs/toolkit';

import { fetchIdea, postIdea } from '../services/api';

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

export function likeIdea() {
  return async (dispatch, getState) => {
    const { idea: { who, what } } = getState();
    await postIdea({ who, what });
  };
}

export default reducer;
