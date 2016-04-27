'use strict';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {EE} from './emitter';
import * as actions from './redux';
import Modal from './Modal';

@connect(state => ({modals: state.modals.modals}), actions)
class ReduxModal extends Component {
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
          {this.props.modals.map((modal, i) => {
            return (
              <Modal
                index={i}
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

ReduxModal.displayName = 'ReduxModal';

ReduxModal.propTypes = {
  modals: PropTypes.array
};

export default ReduxModal;
