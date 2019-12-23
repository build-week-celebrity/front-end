import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { createStore, applyMiddleware } from "redux";

import { Provider } from "react-redux";

import thunk from "redux-thunk";

import { combinedReducer } from "./reducers/combinedReducer";
import App from "./App";
import "./index.css";
import "./App.css";

const store = createStore(combinedReducer, applyMiddleware(thunk));

console.log(store);

console.log(Provider);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className="background">
        <App />
      </div>
    </Router>
  </Provider>,

  document.getElementById("root")
);
