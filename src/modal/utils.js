'use strict';

export function createReducer(initialState, fnMap) {
  return (state = initialState, {type, payload}) => {
    const handle = fnMap[type];
    return handle ? handle(state, payload) : state;
  };
}

export function checkDuplicatedModal(state, newModal) {
  let isDuplicated = false;
  let modal = null;

  state.map(item => {
    if (item.component == newModal.component && item.options.title == newModal.options.title) {
      isDuplicated = true;
      modal = item;
    }
  });

  return {
    isDuplicated,
    modal
  };
}
