import React from "react";
import { AdvancedImage, responsive } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { crop } from "@cloudinary/url-gen/actions/resize";
import "./Hero.css";

function Hero() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "terminatevirus",
    },
  });
  const coronaImage = cld.image("corona");
  coronaImage.format("auto").quality("auto").resize(crop().aspectRatio(2.5));

  return (
    <AdvancedImage
      cldImg={coronaImage}
      plugins={[responsive({ steps: 200 })]}
    />
  );
}

export default Hero;
