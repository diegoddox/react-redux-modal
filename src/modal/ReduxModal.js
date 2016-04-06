'use strict';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {EE} from './emitter';
import * as actions from './redux';
import Modal from './Modal';

@connect(state => ({modals: state.modals.modals}), actions)
export default class ReduxModal extends Component {
  static displayName = 'ReduxModal';

  static propTypes = {
    modals: PropTypes.array
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    EE.on('add/modal', obj => this.props.addModal(obj));
    EE.on('clear/all', this.props.clearAll);
  }

  componentWillUnmount() {
    EE.off('add/modal');
    EE.off('clear/all');
  }

  render() {
    return (
      <div className="react-redux-modal">

        <div className="rr-modals">
          {this.props.modals.map((modal, index) => {
            return (
              <Modal
                index={index}
                key={modal.id}
                removeModal={this.props.removeModal}
                {...modal}/>
            );
          })}
        </div>
      </div>
    );
  }
}
