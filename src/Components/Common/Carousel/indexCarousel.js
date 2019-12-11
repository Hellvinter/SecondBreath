import React, { useState } from "react";

import { data } from "../../../Data/fake_database/fake_estate";

import ItemOfCarousel from "./carouselItems";

function Carousel() {
  // State of current slide.
  const [current, setCurrent] = useState(0);

  // Init object for contain state.
  const estate = {
    properties: data.properties,
    property: data.properties[current]
  };

  // Left button function.
  const previous = () => setCurrent((current - 1) % estate.properties.length);

  // Right button function.
  const next = () => setCurrent((current + 1) % estate.properties.length);

  console.log(current);
  return (
    <ItemOfCarousel
      data={estate.properties}
      count={estate.property}
      previous={previous}
      next={next}
    />
  );
}

export default Carousel;
