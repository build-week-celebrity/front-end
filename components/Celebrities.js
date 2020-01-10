import React from "react";
export default function Celebrities(_ref) {
  var celebrities = _ref.celebrities;

  return React.createElement(
    "div",
    { className: "celebcard", id: celebrities.id },
    console.log("Celebrity Card Data:", celebrities.id, celebrities.isAlive, celebrities.difficulty, celebrities.name),
    React.createElement("img", {
      className: "celebimg",
      src: celebrities.imageURL,
      alt: celebrities.name
    }),
    React.createElement(
      "h2",
      { className: "celebname" },
      " ",
      celebrities.name,
      " "
    )
  );
}