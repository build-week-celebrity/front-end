import React from "react";
import Login from "./Login";
import { BrowserRouter as Route, Link } from "react-router-dom";

function Header() {
  return React.createElement(
    "div",
    { className: "Header" },
    React.createElement(
      "div",
      { className: "Logo" },
      React.createElement(
        "h1",
        null,
        " Dead or Alive "
      ),
      " ",
      React.createElement(
        "h3",
        null,
        " Do you know who is ? "
      )
    ),
    React.createElement(
      Link,
      {
        to: "/Login",
        style: { color: "white", textDecoration: "none", marginTop: "1rem" } },
      React.createElement(
        "p",
        null,
        "LogIn"
      )
    ),
    React.createElement(Route, { path: "/Login", component: Login })
  );
}
export default Header;