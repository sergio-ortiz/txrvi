import React from "react";
import OneTimeServiceTable from "./One-time-service-table";
import SubscriptionsTable from "./Subscriptions-table";
import "./Prices.css";

class Prices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultTab: true,
    };
  }

  handleClick(defaultTab) {
    this.setState({ defaultTab });
  }

  render() {
    const table = this.state.defaultTab ? (
      <OneTimeServiceTable />
    ) : (
      <SubscriptionsTable />
    );

    return (
      <section id="prices">
        <div className="container">
          <div className="spacer"></div>
          <h2>Pricing</h2>
          <div className="tab" onClick={() => this.handleClick(true)}>
            one-time service
          </div>
          <div
            className="tab un-selected-tab"
            onClick={() => this.handleClick(false)}
          >
            recurring service
          </div>
          <div className="clearfix"></div>
          {table}
          <div className="spacer"></div>
        </div>
      </section>
    );
  }
}

export default Prices;
