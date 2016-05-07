'use strict';

import ReduxModal from './ReduxModal';
import reduxDuck from './redux';
import {modalEmitter} from './emitter';
import * as modalActions from './redux';

export default ReduxModal;
export const reducer = reduxDuck;
export const actions = modalActions;
export const modal = modalEmitter;
