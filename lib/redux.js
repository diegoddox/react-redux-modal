'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CLEAR_ALL = exports.REMOVE_MODAL = exports.ADD_MODAL = undefined;

var _createReducer;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.addModal = addModal;
exports.removeModal = removeModal;
exports.clearAll = clearAll;

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _utils = require('./utils.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var ADD_MODAL = exports.ADD_MODAL = '@react-redux-modal.ADD_MODAL';
var REMOVE_MODAL = exports.REMOVE_MODAL = '@react-redux-modal.REMOVE_MODAL';
var CLEAR_ALL = exports.CLEAR_ALL = '@react-redux-modal.CLEAR_ALL';

var initialSate = {
  modals: []
};

exports.default = (0, _utils.createReducer)(initialSate, (_createReducer = {}, _defineProperty(_createReducer, ADD_MODAL, function (state, payload) {
  return _extends({}, state, {
    modals: [].concat(_toConsumableArray(state.modals), [_extends({
      id: _uuid2.default.v1()
    }, payload)])
  });
}), _defineProperty(_createReducer, REMOVE_MODAL, function (state, id) {
  return _extends({}, state, {
    modals: state.modals.filter(function (modal) {
      return modal.id !== id;
    })
  });
}), _defineProperty(_createReducer, CLEAR_ALL, function () {
  return {
    modals: []
  };
}), _createReducer));
function addModal(payload) {
  return {
    type: ADD_MODAL,
    payload: payload
  };
}

function removeModal(id) {
  return {
    type: REMOVE_MODAL,
    payload: id
  };
}

function clearAll() {
  return {
    type: CLEAR_ALL
  };
}