'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _emitter = require('./emitter');

var _redux = require('./redux');

var actions = _interopRequireWildcard(_redux);

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var ReduxModal = (_dec = (0, _reactRedux.connect)(function (state) {
  return { modals: state.modals.modals };
}, actions), _dec(_class = function (_Component) {
  _inherits(ReduxModal, _Component);

  function ReduxModal(props) {
    _classCallCheck(this, ReduxModal);

    return _possibleConstructorReturn(this, _Component.call(this, props));
  }

  ReduxModal.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    _emitter.EE.on('add/modal', function (obj) {
      return _this2.props.addModal(obj);
    });
    _emitter.EE.on('clear/all', this.props.clearAll);
  };

  ReduxModal.prototype.componentWillUnmount = function componentWillUnmount() {
    _emitter.EE.off('add/modal');
    _emitter.EE.off('clear/all');
  };

  ReduxModal.prototype.render = function render() {
    var _this3 = this;

    return _react2.default.createElement(
      'div',
      { className: 'react-redux-modal' },
      _react2.default.createElement(
        'div',
        { className: 'rr-modals' },
        this.props.modals.map(function (modal, i) {
          return _react2.default.createElement(_Modal2.default, _extends({
            index: i,
            key: modal.id,
            removeModal: _this3.props.removeModal
          }, modal));
        })
      )
    );
  };

  return ReduxModal;
}(_react.Component)) || _class);


ReduxModal.displayName = 'ReduxModal';

ReduxModal.propTypes = {
  modals: _propTypes2.default.array
};

exports.default = ReduxModal;