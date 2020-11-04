import React, { useState } from "react";

import styles from "./slider.module.css";
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

function SliderContent({ children, translate, transition }) {
  return (
    <div
      style={{
        transform: `translateX(-${translate}px)`,
        transition: `transform ease-out ${transition}s`,
        height: `100%`,
        width: `100%`,
        display: `flex`,
      }}
    >
      {children}
    </div>
  );
}

export default Slider;
