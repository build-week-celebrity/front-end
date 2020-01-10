var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";

import { connect } from "react-redux";
import { getCelebs } from "../actions/actionCreators";
import Timer from "./Timer";
import Celebrities from "./Celebrities";
import { setScore } from "../actions/actionSetScore";

var Quiz = function (_Component) {
  _inherits(Quiz, _Component);

  function Quiz(props) {
    _classCallCheck(this, Quiz);

    var _this = _possibleConstructorReturn(this, (Quiz.__proto__ || Object.getPrototypeOf(Quiz)).call(this, props));

    _this.GradeScore = function (answer) {
      if (answer === _this.props.celebrities.filter(function (el) {
        return el.difficulty === _this.props.location.state.difficulty;
      })[_this.state.selectedIndex].isAlive) {
        _this.setState({ score: _this.state.score + 1 });
        console.log("point added");
        if (_this.state.selectedIndex + 1 === _this.props.celebrities.filter(function (el) {
          return el.difficulty === _this.props.location.state.difficulty;
        }).length) {
          console.log("you won!");
          console.log(_this.state.score);
          _this.props.setScore(_this.state.score);
          _this.props.history.push("/SubmitScore");
        } else {
          _this._ToggleNext();
        }
      } else {
        if (_this.state.selectedIndex + 1 === _this.props.celebrities.filter(function (el) {
          return el.difficulty === _this.props.location.state.difficulty;
        }).length) {
          console.log("Game Over Loser!");
          _this.props.setScore(_this.state.score);
          console.log(_this.state.score);
          _this.props.history.push("/SubmitScore");
          //this.render(<SubmitScore />);
        } else _this._ToggleNext();
      }
    };

    _this.state = {
      score: 0,
      selectedIndex: 0,
      transaction: false
    };
    // this._TogglePrev = this._TogglePrev.bind(this);
    _this._ToggleNext = _this._ToggleNext.bind(_this);
    return _this;
  }

  _createClass(Quiz, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getCelebs();
    }
  }, {
    key: "_ToggleNext",
    value: function _ToggleNext() {
      var _this2 = this;

      if (this.state.selectedIndex === this.props.celebrities.filter(function (el) {
        return el.difficulty === _this2.props.location.state.difficulty;
      }).length - 1) return;

      this.setState(function (prevState) {
        return {
          selectedIndex: prevState.selectedIndex + 1
        };
      });
    }
    //_TogglePrev() {
    //   if (this.state.selectedIndex === 0) return;
    //
    //   this.setState(prevState => ({
    //     selectedIndex: prevState.selectedIndex - 1
    //   }));
    // }

  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (!this.props.transaction) {
        return React.createElement(
          "div",
          { className: "status" },
          React.createElement(
            "h3",
            null,
            "Loading Quiz Data"
          )
        );
      }

      return React.createElement(
        "div",
        { className: "Quiz" },
        console.log("Current Item Being Scored:", this.props.celebrities.filter(function (el) {
          return el.difficulty === _this3.props.location.state.difficulty;
        })[this.state.selectedIndex].isAlive, this.props.celebrities.filter(function (el) {
          return el.difficulty === _this3.props.location.state.difficulty;
        })[this.state.selectedIndex].name),
        React.createElement(
          "div",
          { className: "stats" },
          React.createElement(
            "p",
            null,
            " Easy "
          ),
          React.createElement(
            "p",
            null,
            "Time: ",
            React.createElement(Timer, null)
          ),
          React.createElement(
            "p",
            null,
            "Score: ",
            this.state.score
          ),
          React.createElement(
            "p",
            null,
            console.log("Current Quiz Selected Index:", this.state.selectedIndex),
            this.state.selectedIndex + 1,
            "/",
            this.props.celebrities.filter(function (el) {
              return el.difficulty === _this3.props.location.state.difficulty;
            }).length
          )
        ),
        React.createElement(
          "div",
          { className: "celebQuiz" },
          React.createElement(Celebrities, {
            celebrities: this.props.celebrities.filter(function (el) {
              return el.difficulty === _this3.props.location.state.difficulty;
            })[this.state.selectedIndex]
          }),
          React.createElement(
            "div",
            { className: "answerbox" },
            React.createElement(
              "button",
              {
                className: "deadBtn",
                onClick: function onClick(e) {
                  e.preventDefault();
                  _this3.GradeScore(0);
                }
              },
              "Dead"
            ),
            React.createElement(
              "button",
              {
                className: "aliveBtn",
                onClick: function onClick(e) {
                  e.preventDefault();
                  _this3.GradeScore(1);
                }
              },
              "Alive"
            )
          )
        )
      );
    }
  }]);

  return Quiz;
}(Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    celebrities: state.celebrities,
    transaction: state.transaction,
    token: state.token,
    user: state.user,
    score: state.score
  };
};
export default connect(mapStateToProps, { getCelebs: getCelebs, setScore: setScore })(Quiz);