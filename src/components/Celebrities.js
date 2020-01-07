import React from "react";
export default function Celebrities({ celebrities }) {
  return (
    <div className="celebcard">
      <img
        className="celebimg"
        src={celebrities.imageURL}
        alt={celebrities.name}
      />
      <h2 className="celebname"> {celebrities.name} </h2>
    </div>
  );
}
