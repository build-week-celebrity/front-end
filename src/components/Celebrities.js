import React from "react";

export default function Celebrities(props) {
  return (
    <div className="celebcard">
      <img className="celebimg" src={props.imageURL} alt={props.name} />
      <h2>{props.name}</h2>

      {console.log(props.celebrities)}
    </div>
  );
}
