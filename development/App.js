'use strict';

import './index.less';
import './../src/less/index.less';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import ReduxModal, {modal} from './../src/';
import DevTools from './containers/DevTools';
import largeText from './largetext';
import config from './../config';

import loremIpsum from 'lorem-ipsum';

class myLargeModalComponent extends Component {
  static displayName = 'MySUperModal';

  constructor(props) {
    super(props);
    console.log('##myLargeModalComponent props##', this.props);
  }

  render() {
    return (
      <div>
        <p>{loremIpsum({count: 1})}</p>
        <button
          type="button"
          onClick={() => this.props.removeModal()}>Remove this modal</button>
      </div>
    );
  }
}

class modalComponentWithButton extends Component {
  static displayName = 'MySUperModal';

  render() {
    return (
        <div>
          <p>{loremIpsum({count: 1})}</p>
          <button
              type="button"
              onClick={() => this.props.removeModal()}>Remove this modal</button>
        </div>
    );
  }
}

class modalComponent extends Component {
  static displayName = 'MySUperModal';

  render() {
    return <p>{largeText}</p>;
  }
}

class myModalComponent extends Component {
  static displayName = 'MySUperModal';

  render() {
    return <p>:D {largeText}</p>;
  }
}

export default class App extends Component {
  static displayName = 'ReduxModalDev';

  static propTypes = {
    store: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.renderDev = this.renderDev.bind(this);
  }

  addModalLarge() {
    modal.add(myLargeModalComponent, {
      title: 'This one there is no close botton.',
      size: 'large',
      hideCloseButton: true
    });
  }

  addModalMedium() {
    modal.add(myModalComponent, {
      title: 'Time to get some food',
      size: 'medium'
    });
  }

  addModalSmall() {
    modal.add(modalComponent, {
      title: 'You got it',
      size: 'small'
    });
  }

  addOutsideClickCloseModal() {
    modal.add(modalComponent, {
      title: 'You got it',
      size: 'small',
      closeOnOutsideClick: true
    });
  }
  addModalWithoutTitle() {
    modal.add(modalComponentWithButton, {
      title: null,
      hideTitleBar: true,
      size: 'small'
    });
  }

  renderDev() {
    if (config.env !== 'production') {
      return <DevTools />;
    }
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <div className="wrapper">
          <div className="content">
            <button
              className="btn btn-primary"
              onClick={this.addModalLarge.bind(this)}>add large modal</button>
            <button
              className="btn btn-primary"
              onClick={this.addModalMedium.bind(this)}>add medium modal</button>

            <button
              className="btn btn-primary"
              onClick={this.addModalSmall.bind(this)}>add small modal</button>
            <button
                className="btn btn-primary"
                onClick={this.addModalWithoutTitle.bind(this)}>add modal without a title</button>
            <button
              className="btn btn-primary"
              onClick={this.addOutsideClickCloseModal.bind(this)}>add "click outside to close" modal</button>
          </div>
          <ReduxModal />
          {this.renderDev()}
        </div>
      </Provider>
    );
  }
}
