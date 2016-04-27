'use strict';

import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';

class Modal extends Component {
  constructor(props) {
    super(props);
  }

  handleOnOutsideClick() {
    if (this.props.options.closeOnOutsideClick || false) {
      this.props.removeModal(this.props.id);
    }
  }

  render() {
    return (
      <div className="rrm-holder"
        style={{zIndex: `999${this.props.index}`}}
        onClick={this.handleOnOutsideClick.bind(this)}>
        <div className="scroll">

          <div className={classnames('rrm-content', `m-${this.props.options.size}` || 'm-medium')}>
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

        <div className="rrm-shadow"></div>
      </div>
    );
  }
}

Modal.displayName = 'rrModal';

Modal.propTypes = {
  id: PropTypes.string,
  removeModal: PropTypes.func.isRequired,
  options: PropTypes.shape({
    size: PropTypes.string,
    title: PropTypes.string
  }).isRequired
};

export default Modal;
