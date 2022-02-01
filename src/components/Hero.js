import React from "react";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import "./Hero.css";

function Hero() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "terminatevirus",
    },
  });
  const coronaImage = cld.image("corona");
  coronaImage.format("auto").quality("auto");

  return <AdvancedImage cldImg={coronaImage} />;
}

export default Hero;
