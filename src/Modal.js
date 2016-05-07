'use strict';

import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';

class Modal extends Component {
  constructor(props) {
    super(props);
  }

  handleOnOutsideClick(e) {
    if (this.props.options.closeOnOutsideClick && !this.isChildOf(e.target, this.refs.modalContent) || false) {
      this.props.removeModal(this.props.id);
    }
  }

  isChildOf(child, parent) {
    if (child.parentNode === parent) {
      return true;
    } else if (child.parentNode === null) {
      return false;
    } else {
      return this.isChildOf(child.parentNode, parent);
    }
  }

  render() {
    return (
      <div className="rrm-holder" style={{zIndex: `999${this.props.index}`}}>
        <div className="scroll" onClick={this.handleOnOutsideClick.bind(this)}>

          <div ref="modalContent" className={classnames('rrm-content', `m-${this.props.options.size}` || 'm-medium')}>
            <div className="rrm-title">
              <h2>{this.props.options.title}</h2>
              <div className="rr-title-actions">
                {this.props.options.hideCloseButton ? null :
                <button
                  type="button"
                  className="rr-close rrm-icon-cancel"
                  onClick={this.props.removeModal.bind(this, this.props.id)}>X</button>
                }
              </div>
            </div>

            <div className="rrm-body">
              <this.props.component {...this.props.options} removeModal={() => this.props.removeModal(this.props.id)}/>
            </div>
          </div>

        </div>

        <div className="rrm-shadow" />
      </div>
    );
  }
}

Modal.displayName = 'rrModal';

Modal.propTypes = {
  id: PropTypes.string,
  index: PropTypes.number,
  removeModal: PropTypes.func.isRequired,
  options: PropTypes.shape({
    size: PropTypes.string,
    title: PropTypes.string,
    hideCloseButton: PropTypes.bool,
    closeOnOutsideClick: PropTypes.bool
  }).isRequired
};

export default Modal;
