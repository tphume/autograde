import React, { useState } from "react";

import styles from "./slider.module.css";
import SliderContent from "./sliderContent";
import Slide from "./slide";

function Slider({ slides }) {
  const [state, setState] = useState({
    translate: 0,
    transition: 0.45,
  });

  const { translate, transition } = state;

  return (
    <section className={styles.container}>
      <SliderContent translate={translate} transition={transition}>
        {slides.map((slide, i) => (
          <Slide key={slide + i} content={slide} />
        ))}
      </SliderContent>
    </section>
  );
}

export default Slider;
