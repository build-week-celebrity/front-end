import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { combinedReducer } from "./reducers/combinedReducer";
import App from "./App";
import "./index.css";
import "./App.css";

var store = createStore(combinedReducer, applyMiddleware(thunk));
var history = createBrowserHistory();

ReactDOM.render(React.createElement(
  Provider,
  { store: store },
  React.createElement(
    Router,
    { history: history },
    React.createElement(
      "div",
      { className: "background" },
      React.createElement(App, null)
    )
  )
), document.getElementById("root"));