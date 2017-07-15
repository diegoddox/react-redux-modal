'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modal = exports.actions = exports.reducer = undefined;

var _ReduxModal = require('./ReduxModal');

var _ReduxModal2 = _interopRequireDefault(_ReduxModal);

var _redux = require('./redux');

var modalActions = _interopRequireWildcard(_redux);

var _emitter = require('./emitter');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ReduxModal2.default;
var reducer = exports.reducer = modalActions.default;
var actions = exports.actions = modalActions;
var modal = exports.modal = _emitter.modalEmitter;