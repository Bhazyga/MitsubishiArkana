import React from "react";
import { Parallax } from 'react-parallax';

export default function ParallaxImage({ bgImage, strengthValue }) {
  return (
    <Parallax
      blur={{ min: 0, max: 0 }}
      bgImage={bgImage}
      bgImageAlt="background"
      strength={525}  // Dynamic strength for parallax effect
      bgStyle={{ width: "auto", height: "100%" }}
      style={{ position: "absolute", width: "100%", height: "100%" }}
    />
  );
}
