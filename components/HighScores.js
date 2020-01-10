var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
import { connect } from "react-redux";
import { getHighScores } from "../actions/actionCreators";

var HighScores = function (_Component) {
  _inherits(HighScores, _Component);

  function HighScores(props) {
    _classCallCheck(this, HighScores);

    var _this = _possibleConstructorReturn(this, (HighScores.__proto__ || Object.getPrototypeOf(HighScores)).call(this, props));

    _this.handleclose = function () {
      _this.props.history.goBack();
      _this.setState(_this.highscores = []);
    };

    _this.state = {
      scorestransaction: false
    };
    return _this;
  }

  _createClass(HighScores, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getHighScores();
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.scorestransaction) {
        return React.createElement(
          "div",
          { className: "status" },
          React.createElement(
            "h3",
            null,
            "Loading High Scores"
          )
        );
      }
      return React.createElement(
        "div",
        { className: "ScoreList" },
        React.createElement(
          "h1",
          null,
          " High Scores: "
        ),
        React.createElement(
          "div",
          { className: "userscore" },
          console.log("user in localStorage:", localStorage.getItem("user")),
          React.createElement(
            "ol",
            null,
            this.props.highscores.map(function (score, index) {
              return React.createElement(
                "li",
                { key: index },
                React.createElement(
                  "p",
                  null,
                  " ",
                  score.username,
                  " "
                ),
                React.createElement(
                  "p",
                  null,
                  " ",
                  score.score,
                  " "
                )
              );
            })
          )
        ),
        React.createElement(
          "div",
          { className: "closebutton", onClick: this.handleclose },
          "Close"
        )
      );
    }
  }]);

  return HighScores;
}(Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    highscores: state.highscores,
    scorestransaction: state.scorestransaction
  };
};
export default connect(mapStateToProps, { getHighScores: getHighScores })(HighScores);