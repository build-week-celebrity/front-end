var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
// import { Form} from "formik";
// import * as Yup from "yup";
// import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
// import * as actionCreators from "../actions/actionCreators";
import { axiosWithAuth } from "../utils/axiosWithAuth";

var SubmitScore = function (_Component) {
  _inherits(SubmitScore, _Component);

  function SubmitScore() {
    _classCallCheck(this, SubmitScore);

    return _possibleConstructorReturn(this, (SubmitScore.__proto__ || Object.getPrototypeOf(SubmitScore)).apply(this, arguments));
  }

  _createClass(SubmitScore, [{
    key: "handleSubmit",

    //componentDidMount() {
    //     };

    value: function handleSubmit(score) {
      console.log("Sending Score:", score);
      axiosWithAuth().put("/users/:1", score).then(function (res) {
        return console.log(res);
      }).catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "div",
        null,
        console.log(this.props.user),
        React.createElement(
          "form",
          {
            onSubmit: function onSubmit(e) {
              e.preventDefault();
              _this2.handleSubmit(_this2.props.my_score);
            }
          },
          React.createElement(
            "div",
            { className: "header" },
            React.createElement(
              "h1",
              null,
              " Submit Score ? "
            ),
            " ",
            React.createElement(
              "p",
              null,
              "Score:",
              this.props.my_score
            )
          ),
          React.createElement(
            "button",
            null,
            " Submit "
          )
        )
      );
    }
  }]);

  return SubmitScore;
}(Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    celebrities: state.celebrities,
    transaction: state.transaction,
    token: state.token,
    user: state.user,
    my_score: state.my_score
  };
};
export default connect(mapStateToProps, {})(SubmitScore);