import React from "react";

export default function Celebrities(props, ...celebrities) {
  return (
    <div className="celebcard">
      <img
        className="celebimg"
        src={celebrities.imageURL}
        alt={celebrities.name}
      />
      <h2>{celebrities.name}</h2>

      {console.log(props.celebrities)}
    </div>
  );
}
