import React from "react";
import "./Box.css";

function Box({ children }) {
  return <div className="box">{children}</div>;
}

export default Box;
