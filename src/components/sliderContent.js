import React from "react";

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

export default SliderContent;
