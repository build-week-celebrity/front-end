function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";
import { Route, Redirect } from "react-router-dom";

var PrivateRoute = function PrivateRoute(_ref) {
  var Component = _ref.component,
      e = _objectWithoutProperties(_ref, ["component"]);

  return React.createElement(Route, Object.assign({}, e, {
    render: function render(props) {
      if (localStorage.getItem("token")) {
        return React.createElement(Component, props);
      } else {
        return React.createElement(Redirect, { to: "/" });
      }
    }
  }));
};

export default PrivateRoute;