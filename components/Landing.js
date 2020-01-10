import React from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import QuizSelector from "./QuizSelector";
import Header from "./Header";

function Landing() {
  return React.createElement(
    "div",
    { className: "landing" },
    React.createElement(Header, null),
    React.createElement(
      "h2",
      null,
      " Think you know everything about stars and celebrities ? "
    ),
    React.createElement(
      "h3",
      null,
      " You might be right...or wrong.. "
    ),
    " ",
    React.createElement(
      "h3",
      null,
      " DEAD WRONG. "
    ),
    React.createElement(
      "div",
      { className: "skullsimg" },
      React.createElement(
        "p",
        null,
        React.createElement("br", null),
        "The quiz game where getting a high score is a matter of life or death!"
      )
    ),
    React.createElement(
      "div",
      { className: "list" },
      React.createElement(
        "ul",
        null,
        React.createElement(
          "li",
          null,
          " Test your knowledge with 3 difficulty settings. "
        ),
        React.createElement(
          "li",
          null,
          " Leaderboards show how you stack up vs the world. "
        ),
        React.createElement(
          "li",
          null,
          " Create custom quizzes to challenge yourself or friends "
        )
      )
    ),
    React.createElement(
      Link,
      { to: "/QuizSelector", style: { textDecoration: "none" } },
      React.createElement(
        "div",
        { className: "getstarted" },
        React.createElement(
          "p",
          null,
          " Get Started "
        )
      )
    ),
    React.createElement(Route, { path: "/QuizSelector", component: QuizSelector })
  );
}

export default Landing;