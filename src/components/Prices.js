import React from "react";
import OneTimeServiceTable from "./One-time-service-table";
import SubscriptionsTable from "./Subscriptions-table";

class Prices extends React.Component {
  render() {
    return (
      <section id="prices">
        <div className="container">
          <div className="spacer"></div>
          <h2>Pricing</h2>
          <div id="one-time-service-tab" className="tab">
            one-time service
          </div>
          <div id="subscriptions-tab" className="tab">
            recurring service
          </div>
          <div className="clearfix"></div>
          <OneTimeServiceTable />
          <SubscriptionsTable />
          <div className="spacer"></div>
        </div>
      </section>
    );
  }
}

export default Prices;
