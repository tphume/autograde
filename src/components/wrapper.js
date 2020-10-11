import React from "react";

function Wrapper({ children }) {
  return (
    <main style={{ height: "100vh", padding: "3vh 0 3vh 0" }}>{children}</main>
  );
}

export default Wrapper;
