'use strict';

import uiid from 'uuid';
import {createReducer, checkDuplicatedModal}  from './utils.js';

export const ADD_MODAL = '@react-redux-modal.ADD_MODAL';
export const REMOVE_MODAL = '@react-redux-modal.REMOVE_MODAL';
export const ADD_PIN = '@react-redux-modal.ADD_PIN';
export const REMOVE_PIN = '@react-redux-modal.REMOVE_PIN';
export const CLEAR_ALL = '@react-redux-modal.CLEAR_ALL';

const initialSate = {
  modals: [],
  pins: []
};

export default createReducer(initialSate, {
  [ADD_MODAL]: (state, payload) => {
    const duplicated = checkDuplicatedModal(state.pins, payload);
    if (duplicated.isDuplicated) {
      return {
        ...state,
        pins: state.pins.filter(item => item.id !== duplicated.modal.id),
        modals: [
          ...state,
          {
            id: uiid.v1(),
            ...duplicated.modal
          }
        ]
      };
    }

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
  [REMOVE_PIN]: (state, id) => {
    return {
      ...state,
      pins: state.pins.filter(item => item.id !== id)
    };
  },
  [CLEAR_ALL]: () => {
    return {
      modals: [],
      pins: []
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

