import { createSlice } from '@reduxjs/toolkit';

import { batch } from 'react-redux';
import { fetchIdea, postIdea } from '../services/api';

const { actions, reducer } = createSlice({
  name: 'idea',
  initialState: {
    loading: false,
    liked: false,
    resource: {
      who: '',
      what: '',
    },
  },
  reducers: {
    setIdea: (state, { payload: { who, what } }) => ({
      ...state,
      resource: {
        ...state.resource,
        who,
        what,
      },
    }),

    setLoading: (state, { payload: loading }) => ({
      ...state,
      loading,
    }),

    setLiked: (state, { payload: liked }) => ({
      ...state,
      liked,
    }),
  },
});

export const { setIdea, setLoading, setLiked } = actions;

export function loadIdea() {
  return async (dispatch) => {
    dispatch(setLoading(true));

    let idea;
    try {
      idea = await fetchIdea();
    } catch (err) {
      idea = {
        who: '?',
        what: '?',
      };
    }

    batch(() => {
      dispatch(setIdea(idea));
      dispatch(setLiked(false));
      dispatch(setLoading(false));
    });
  };
}

export function likeIdea() {
  return async (dispatch, getState) => {
    const { idea: { resource: { who, what } } } = getState();

    dispatch(setLiked(true));
    await postIdea({ who, what });
  };
}

export default reducer;
