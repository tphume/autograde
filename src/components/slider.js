import React, { useState } from "react";

import styles from "./slider.module.css";
import SliderContent from "./sliderContent";

function Slider() {
  const [state, setState] = useState({
    translate: 0,
    transition: 0.45,
  });

  const { translate, transition } = state;

  return (
    <section className={styles.container}>
      <SliderContent
        translate={translate}
        transition={transition}
      ></SliderContent>
    </section>
  );
}

export default Slider;
