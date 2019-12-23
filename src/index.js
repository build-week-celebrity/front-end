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

const store = createStore(combinedReducer, applyMiddleware(thunk));
const history = createBrowserHistory();
const location = history.location;
const unlisten = history.listen((location, action) => {
  // location is an object like window.location
  console.log(action, location.pathname, location.state);
});

console.log(store);

console.log(Provider);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div className="background">
        <App />
      </div>
    </Router>
  </Provider>,

  document.getElementById("root")
);
