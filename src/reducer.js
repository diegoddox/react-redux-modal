'use strict';
import {combineReducers} from 'redux';
import {reducer as modalReducer} from './modal/';
export default combineReducers({
  modals: modalReducer
});
