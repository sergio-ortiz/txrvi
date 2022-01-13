import React from "react";

function Prices() {
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
        <table id="one-time-service-table">
          <thead>
            <tr>
              <th>Square Feet</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1000</td>
              <td>$220.00</td>
            </tr>
            <tr>
              <td>2000</td>
              <td>$315.00</td>
            </tr>
            <tr>
              <td>4000</td>
              <td>$520.00</td>
            </tr>
            <tr>
              <td>6000</td>
              <td>$750.00</td>
            </tr>
            <tr>
              <td>12000</td>
              <td>$1190.00</td>
            </tr>
          </tbody>
        </table>
        <p id="subscriptions-info">4 service days per month*</p>
        <div className="horizontalOverflow">
          <table id="subscriptions-table">
            <thead>
              <tr>
                <th>Square Feet</th>
                <th>1 month</th>
                <th>3 months</th>
                <th>6 months</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1500</td>
                <td>$550.00/mo</td>
                <td>$495.00/mo</td>
                <td>$420.75/mo</td>
              </tr>
              <tr>
                <td>3500</td>
                <td>$787.50/mo</td>
                <td>$708.75/mo</td>
                <td>$602.44/mo</td>
              </tr>
              <tr>
                <td>5500</td>
                <td>$1,300.00/mo</td>
                <td>$1,170.00/mo</td>
                <td>$994.50/mo</td>
              </tr>
              <tr>
                <td>11000</td>
                <td>$1,875.00/mo</td>
                <td>$1,687.50/mo</td>
                <td>$1,434.38/mo</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="spacer"></div>
      </div>
    </section>
  );
}

export default Prices;
