import React from "react";
import Nav from "./Nav";
import "./Header.css";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

function Header() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "terminatevirus",
    },
  });

  const hero = cld.image("corona");
  hero.format("auto");
  hero.quality("auto");

  return (
    <header>
      <Nav />
      <AdvancedImage cldImg={hero} />
      <h1 className="main-heading">
        Welcome to TerminateVirus.
        <br />
        Disinfect & Sanitize
      </h1>
    </header>
  );
}

export default Header;
