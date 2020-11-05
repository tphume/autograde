import React, { useState } from "react";

import Slide from "./slide";
import styles from "./slider.module.css";
import rightArrow from "../images/utils/right-arrow.svg";
import leftArrow from "../images/utils/left-arrow.svg";

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

function Arrow({ direction, handleClick }) {
  return (
    <div
      onClick={handleClick}
      className={direction === "left" ? styles.left : styles.right}
    >
      {direction === "left" ? (
        <img src={leftArrow} className={styles.imgLeft} alt="Left arrow" />
      ) : (
        <img src={rightArrow} className={styles.imgRight} alt="Right arrow" />
      )}
    </div>
  );
}

export default Slider;
