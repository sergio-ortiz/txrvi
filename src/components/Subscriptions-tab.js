import React from "react";

function SubscriptionsTab(props) {
  return (
    <div className="tab un-selected-tab" onClick={props.onClick}>
      recurring service
    </div>
  );
}

export default SubscriptionsTab;
