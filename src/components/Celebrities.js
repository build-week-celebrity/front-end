import React from "react";

export default function Celebrities({ celebrities, props }) {
  return (
    <div className="celebcard" id={celebrities.id}>
      <div className="stats">
        <p>Easy</p>
        <p>Time</p>
        <p>{celebrities.id} / 15</p>
      </div>
      <img
        className="celebimg"
        src={celebrities.imageURL}
        alt={celebrities.name}
      />
      <h2 className="celebname">{celebrities.name}</h2>
    </div>
  );
}
