import React from "react";
import "./Tab.css";

function Tab(props) {
  let className = "tab";
  if (props.active) {
    className += " active";
  }

  return (
    <div className={className} onClick={props.onClick}>
      {props.value}
    </div>
  );
}

export default Tab;
