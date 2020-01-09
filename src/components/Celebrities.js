import React from "react";
export default function Celebrities({ celebrities }) {
  return (
    <div className="celebcard" id={celebrities.id}>
      {console.log(
        "Celebrity Card Data:",
        celebrities.id,
        celebrities.isAlive,
        celebrities.difficulty,
        celebrities.name
      )}
      <img
        className="celebimg"
        src={celebrities.imageURL}
        alt={celebrities.name}
      />
      <h2 className="celebname"> {celebrities.name} </h2>
    </div>
  );
}
