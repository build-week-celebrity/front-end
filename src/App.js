import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./components/Landing";
import QuizSelector from "./components/QuizSelector";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import PrivateRoute from "./components/PrivateRoute";
import { createBrowserHistory } from "history";
import "./App.css";

function App() {
  const history = createBrowserHistory();
  return (
    <Router history={history}>
      <div className="App">
        <Route exact path="/" component={Landing} />
        <Route path="/Login" component={Login} />
        <Route path="/SignUp" component={SignUp} />
        <PrivateRoute path="/QuizSelector" component={QuizSelector} />
      </div>
    </Router>
  );
}

export default App;
