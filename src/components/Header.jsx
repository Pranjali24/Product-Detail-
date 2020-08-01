import React from "react";
export default function Header(props) {
  return (
    <div>
      <h1 className="heading">{props.title}</h1>
    </div>
  );
}
