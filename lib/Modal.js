'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal(props) {
    _classCallCheck(this, Modal);

    return _possibleConstructorReturn(this, _Component.call(this, props));
  }

  Modal.prototype.handleOnOutsideClick = function handleOnOutsideClick(e) {
    if (this.props.options.closeOnOutsideClick && !this.isChildOf(e.target, this.refs.modalContent) || false) {
      this.props.removeModal(this.props.id);
    }
  };

  Modal.prototype.isChildOf = function isChildOf(child, parent) {
    if (child.parentNode === parent) {
      return true;
    } else if (child.parentNode === null) {
      return false;
    } else {
      return this.isChildOf(child.parentNode, parent);
    }
  };

  Modal.prototype.render = function render() {
    var _this2 = this;

    return _react2.default.createElement(
      'div',
      { className: 'rrm-holder', style: { zIndex: '999' + this.props.index } },
      _react2.default.createElement(
        'div',
        { className: 'scroll', onClick: this.handleOnOutsideClick.bind(this) },
        _react2.default.createElement(
          'div',
          { ref: 'modalContent', className: (0, _classnames2.default)('rrm-content', 'm-' + this.props.options.size || 'm-medium') },
          this.props.options.hideTitleBar ? null : _react2.default.createElement(
            'div',
            { className: 'rrm-title' },
            _react2.default.createElement(
              'h2',
              null,
              this.props.options.title
            ),
            _react2.default.createElement(
              'div',
              { className: 'rr-title-actions' },
              this.props.options.hideCloseButton ? null : _react2.default.createElement(
                'button',
                {
                  type: 'button',
                  className: 'rr-close rrm-icon-cancel',
                  onClick: this.props.removeModal.bind(this, this.props.id) },
                'X'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'rrm-body' },
            _react2.default.createElement(this.props.component, _extends({}, this.props.options, { removeModal: function removeModal() {
                return _this2.props.removeModal(_this2.props.id);
              } }))
          )
        )
      ),
      _react2.default.createElement('div', { className: 'rrm-shadow' })
    );
  };

  return Modal;
}(_react.Component);

Modal.displayName = 'rrModal';

Modal.propTypes = {
  id: _propTypes2.default.string,
  index: _propTypes2.default.number,
  removeModal: _propTypes2.default.func.isRequired,
  options: _propTypes2.default.shape({
    size: _propTypes2.default.string,
    title: _propTypes2.default.string,
    hideCloseButton: _propTypes2.default.bool,
    hideTitleBar: _propTypes2.default.bool,
    closeOnOutsideClick: _propTypes2.default.bool
  }).isRequired
};

exports.default = Modal;