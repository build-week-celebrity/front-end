var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
import { connect } from "react-redux";

var UserList = function (_Component) {
  _inherits(UserList, _Component);

  function UserList(props) {
    _classCallCheck(this, UserList);

    var _this = _possibleConstructorReturn(this, (UserList.__proto__ || Object.getPrototypeOf(UserList)).call(this, props));

    _this.handleclose = function () {
      _this.props.history.goBack();
    };

    _this.state = {
      usertransaction: false
    };
    return _this;
  }

  _createClass(UserList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.displayUserList();
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.transaction) {
        return React.createElement(
          "div",
          { className: "status" },
          React.createElement(
            "h3",
            null,
            " Loading User Data "
          ),
          " "
        );
      }
      return React.createElement(
        "div",
        { className: "AdminConsole" },
        React.createElement(
          "h1",
          null,
          " Registered Users: "
        ),
        " ",
        React.createElement(
          "div",
          { className: "userlist" },
          " ",
          this.props.users.map(function (user) {
            return React.createElement(
              "div",
              { className: "usercard", key: user.id },
              React.createElement(
                "p",
                null,
                " ",
                user.username,
                " "
              ),
              " "
            );
          }),
          " "
        ),
        " ",
        React.createElement(
          "div",
          { className: "closebutton", onClick: this.handleclose() },
          "Close",
          " "
        ),
        " "
      );
    }
  }]);

  return UserList;
}(Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    users: state.users,
    transaction: state.transaction
  };
};
export default connect(mapStateToProps, {})(UserList);