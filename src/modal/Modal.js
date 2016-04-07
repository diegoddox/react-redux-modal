'use strict';

import React, {Component} from 'react';
import classnames from 'classnames';

export default class Modal extends Component {
  static displayName = 'rrModal';

  constructor(props) {
    super(props);
  }

  toggle() {
    if (this.props.showPin) {
      this.props.addPin(this.props);
      this.props.removeModal(this.props.id);
      return;
    }
    this.props.removeModal(this.props.id);
  }

  handleOnOutsideClick() {
    if (this.props.options.closeOnOutsideClick || false) {
      this.props.removeModal(this.props.id);
    }
  }

  remove() {
    this.props.removeModal(this.props.id);
  }

  render() {
    return (
      <div className="rrm-holder" style={{zIndex: `999${this.props.index}`}}
        onClick={this.handleOnOutsideClick.bind(this)}>
        <div className="scroll">

          <div className={classnames('rrm-content', `m-${this.props.options.size}` || 'm-medium')}>
            <div className="rrm-title">
              <h2>{this.props.options.title || ''}</h2>
              <div className="rr-title-actions">
                <button
                  type="button"
                  className="rr-close rrm-icon-cancel"
                  onClick={this.remove.bind(this)}>X</button>
              </div>
            </div>

            <div className="rrm-body">
              <this.props.component
                data={this.props.options.data || null}
                remove={() => this.props.removeModal(this.props.id)}/>
            </div>
          </div>

        </div>

        <div className="rrm-shadow"></div>
      </div>
    );
  }
}

