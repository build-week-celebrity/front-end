import React from "react";

export default function Celebrities(props) {
  return (
    <div className="celebcard">
      <img className="celebimg" src="" alt="" />
      <h2>Celeb Name</h2>
      {console.log(props.celebrities)}
    </div>
  );
}
