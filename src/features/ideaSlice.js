import { createSlice } from '@reduxjs/toolkit';

import { batch } from 'react-redux';
import { fetchIdea, postIdea } from '../services/api';

const { actions, reducer } = createSlice({
  name: 'idea',
  initialState: {
    loading: false,
    liked: false,
    alert: {
      type: '',
      message: '',
    },
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

    setAlert: (state, { payload: { type, message } }) => ({
      ...state,
      alert: {
        ...state.alert,
        type,
        message,
      },
    }),
  },
});

export const {
  setIdea,
  setLoading,
  setLiked,
  setAlert,
} = actions;

export function loadIdea() {
  return async (dispatch) => {
    batch(() => {
      dispatch(setLoading(true));
      dispatch(setAlert({ type: '', message: '' }));
      dispatch(setIdea({ who: '', what: '' }));
    });

    let idea;
    try {
      idea = await fetchIdea();
    } catch (err) {
      dispatch(setAlert({
        type: 'error',
        message: '생각이 잘 안나네요, 다시 생각해볼까요?',
      }));
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
