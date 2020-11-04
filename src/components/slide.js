import React from "react";

function Slide({ content }) {
  return (
    <div
      style={{
        height: `100%`,
        width: `100%`,
        backgroundImage: `url('${content}')`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
      }}
    />
  );
}

export default Slide;
