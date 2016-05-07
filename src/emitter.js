'use strict';
import EventEmitter from 'eventemitter3';
const emitter = new EventEmitter();

export const EE = emitter;
export const modalEmitter = {
  add: (component, options) => emitter.emit('add/modal', {component, options}),
  remove: id => emitter.emit('remove/modal', id),
  clear: () => emitter.emit('clear/all')
};

