import React from "react";
import OneTimeServiceTable from "./One-time-service-table";
import SubscriptionsTable from "./Subscriptions-table";
import Tab from "./Tab";
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
          <Tab
            value="one-time service"
            onClick={() => this.handleClick(true)}
          />
          <Tab
            value="recurring service"
            onClick={() => this.handleClick(false)}
          />
          <div className="clearfix"></div>
          {table}
          <div className="spacer"></div>
        </div>
      </section>
    );
  }
}

export default Prices;
