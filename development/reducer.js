'use strict';
import {combineReducers} from 'redux';
import {reducer as modalReducer} from './../src/';
export default combineReducers({
  modals: modalReducer
});
