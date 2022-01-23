import React from "react";
import "./Tab.css";

function Tab(props) {
  return (
    <div className="tab" onClick={props.onClick}>
      {props.value}
    </div>
  );
}

export default Tab;
