'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modalEmitter = exports.EE = undefined;

var _eventemitter = require('eventemitter3');

var _eventemitter2 = _interopRequireDefault(_eventemitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var emitter = new _eventemitter2.default();

var EE = exports.EE = emitter;
var modalEmitter = exports.modalEmitter = {
  add: function add(component, options) {
    return emitter.emit('add/modal', { component: component, options: options });
  },
  remove: function remove(id) {
    return emitter.emit('remove/modal', id);
  },
  clear: function clear() {
    return emitter.emit('clear/all');
  }
};