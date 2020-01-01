import React from "react";

export default function Celebrities(celebrities) {
  return (
    <div className="celebcard" id={celebrities.id}>
      <img
        className="celebimg"
        src={celebrities.imageURL}
        alt={celebrities.name}
      />
      <h2>{celebrities.name}</h2>

      {console.log(celebrities)}
    </div>
  );
}
