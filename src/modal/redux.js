'use strict';

import uiid from 'uuid';
import {createReducer}  from './utils.js';

export const ADD_MODAL = '@react-redux-modal.ADD_MODAL';
export const REMOVE_MODAL = '@react-redux-modal.REMOVE_MODAL';
export const CLEAR_ALL = '@react-redux-modal.CLEAR_ALL';

const initialSate = {
  modals: []
};

export default createReducer(initialSate, {
  [ADD_MODAL]: (state, payload) => {
    return {
      ...state,
      modals: [
        ...state.modals,
        {
          id: uiid.v1(),
          ...payload
        }
      ]
    };
  },
  [REMOVE_MODAL]: (state, id) => {
    return {
      ...state,
      modals: state.modals.filter(modal => modal.id !== id)
    };
  },
  [CLEAR_ALL]: () => {
    return {
      modals: []
    };
  }
});

export function addModal(payload) {
  return {
    type: ADD_MODAL,
    payload: payload
  };
}

export function removeModal(id) {
  return {
    type: REMOVE_MODAL,
    payload: id
  };
}

export function clearAll() {
  return {
    type: CLEAR_ALL
  };
}

