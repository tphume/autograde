import React, { useState } from "react";

import Slide from "./slide";
import styles from "./slider.module.css";
import rightArrow from "../images/utils/right-arrow.svg";
import leftArrow from "../images/utils/left-arrow.svg";

function Slider({ slides }) {
  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
  });

  const { translate, transition, activeIndex } = state;

  function nextSlide() {
    if (activeIndex === slides.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0,
      });
    }

    setState({
      ...state,
      translate: (activeIndex + 1) * 1080,
      activeIndex: activeIndex + 1,
    });
  }

  function prevSlide() {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (slides.length - 1) * 1080,
        activeIndex: slides.length - 1,
      });
    }

    setState({
      ...state,
      translate: (activeIndex - 1) * 1080,
      activeIndex: activeIndex - 1,
    });
  }

  return (
    <section className={styles.container}>
      <SliderContent translate={translate} transition={transition}>
        {slides.map((slide, i) => (
          <Slide key={slide + i} content={slide} />
        ))}
      </SliderContent>
      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />
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
