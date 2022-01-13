import React from "react";
import Nav from "./Nav";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <Nav />
          <div className="spacer"></div>
          <h1 className="main-heading">
            Welcome to TerminateVirus.
            <br />
            Disinfect & Sanitize
          </h1>
        </header>
        <main id="about">
          <div className="container">
            <h2>About</h2>
            <p>We are a facility disinfecting service provider.</p>
            <p>
              <strong>
                We are certified by ACE (Academy of Cleaning Experts) Infection
                Prevention Experts Bloodborne for Bloodborne Pathogens and other
                Infectious Diseases Cleaning, Decontamination, Disinfection and
                Sanitation certification OSHA.
                <a href="./assets/certification.pdf" target="_blank">
                  View Certification
                </a>
              </strong>
            </p>
            <p>
              TerminateVirus SARS-CoV-2, COVID-19 Having a disinfected and
              sanitized environment is every business priority. Together we will
              face this unparalleled global pandemic we find ourselves in, by
              keeping your home and workplace safe. Our certified professional
              staff will conduct decontamination of confirmed and non-confirmed
              sites disinfecting and sanitizing all high touch and open areas to
              reduce the risk of exposure and stop the spread of Coronavirus.
            </p>
            <p>
              Open your company’s doors by showing employees and customers that
              your business is utilizing a professional disinfecting service
              provider to keep our community safe.
            </p>
            <p>
              We have 2 different types of disinfecting foggers, with each one
              having their own specific use. The Hudson FOG Electric Atomizer is
              used to disinfect open areas as well as warehouses. The GDAE10
              Electric Intelligent ULV Sprayer Fogger is used for offices
              disinfecting as well as stores, homes, cars, buses, and buildings.
            </p>
            <p>
              We use disinfectants approved by the CDC and the EPA to eliminate
              SARS-CoV-2.
            </p>
            <p>
              TerminateVirus now added the Premium Portable UV Surface and Air
              Sanitizer System This is a strong antimicrobial ultraviolet
              disinfection system that will treat all exposed areas and will
              eliminate Bacteria, Viruses, Corona Virus, Mold Spores.
            </p>
            <p>
              It is recommended by the CDC disinfect frequently touched surfaces
              daily. This includes tables, doorknobs, light switches,
              countertops, handles, desks, phones, keyboards, toilets, faucets,
              and sinks. <br />
              <a
                href="https://www.cdc.gov/coronavirus/2019-ncov/community/disinfecting-building-facility.html"
                target="_blank"
                rel="noreferrer"
              >
                https://www.cdc.gov/coronavirus/2019-ncov/community/disinfecting-building-facility.html
              </a>
            </p>
            <p>
              "EPA has updated List N to include the types of surfaces products
              can be used on (e.g., hard or soft) and use sites (e.g., hospital,
              institutional or residential). Products that can be applied via
              fogging are now noted in the formulation column. This additional
              information will empower the public to choose products that are
              appropriate for their specific circumstances." <br />
              <a
                href="https://www.epa.gov/newsreleases/epa-continues-add-new-surface-disinfectant-products-list-n-effort-combat-covid-19
          "
                target="_blank"
                rel="noreferrer"
              >
                https://www.epa.gov/newsreleases/epa-continues-add-new-surface-disinfectant-products-list-n-effort-combat-covid-19
              </a>
            </p>
            <p>
              Other useful links <br />
              <a
                href="https://www.cdc.gov/coronavirus/2019-ncov/downloads/stop-the-spread-of-germs-11x17-en.pdf"
                target="_blank"
                rel="noreferrer"
              >
                https://www.cdc.gov/coronavirus/2019-ncov/downloads/stop-the-spread-of-germs-11x17-en.pdf
              </a>
              <br />
              <a
                href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention-H.pdf
          "
                target="_blank"
                rel="noreferrer"
              >
                https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention-H.pdf
              </a>
            </p>
            <div id="epa" class="logo-box"></div>
            <div id="cdc" class="logo-box"></div>
          </div>
          <div className="clearfix"></div>
        </main>
      </div>
    );
  }
}

export default App;
