import { getDefaultMiddleware } from '@reduxjs/toolkit';

import configureStore from 'redux-mock-store';

import { postItem } from '../services/api';

import { setField, contributeItem } from './contributingSlice';

jest.useFakeTimers();
jest.mock('../services/api');

const mockStore = configureStore(getDefaultMiddleware());

describe('contributing actions', () => {
  let store;

  describe('contributeItem', () => {
    const initialState = {
      contributing: {
        loading: false,
        fields: {
          who: '',
          what: '',
        },
      },
    };

    beforeEach(() => {
      store = mockStore(initialState);
      postItem.mockClear();
    });

    it('contribute item', async () => {
      await store.dispatch(contributeItem());

      const actions = store.getActions();

      jest.runAllTimers();

      expect(postItem).toBeCalled();
      expect(actions[1]).toEqual(setField({ name: 'who', value: '' }));
      expect(actions[2]).toEqual(setField({ name: 'what', value: '' }));
    });
  });
});
