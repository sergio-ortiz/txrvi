import React from "react";
import OneTimeServiceTable from "./One-time-service-table";
import SubscriptionsTable from "./Subscriptions-table";
import Tab from "./Tab";
import "./Prices.css";

class Prices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [1, 0],
    };
  }

  handleClick(tab) {
    const tabs = [tab ? 0 : 1, tab];
    this.setState({ tabs });
  }

  render() {
    const tabs = this.state.tabs.map((e, i) => {
      const value = i ? "recurring service" : "one-time service";
      return (
        <Tab
          active={e}
          key={i}
          value={value}
          onClick={() => this.handleClick(i)}
        />
      );
    });

    const table = this.state.tabs[0] ? (
      <OneTimeServiceTable />
    ) : (
      <SubscriptionsTable />
    );

    return (
      <section id="prices">
        <div className="container">
          <div className="spacer"></div>
          <h2>Pricing</h2>
          {tabs}
          <div className="clearfix"></div>
          {table}
          <div className="spacer"></div>
        </div>
      </section>
    );
  }
}

export default Prices;
