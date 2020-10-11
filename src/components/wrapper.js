import React from "react";

function Wrapper({ children }) {
  return (
    <main style={{ height: "100vh", padding: "3vh 10px 3vh 10px" }}>
      {children}
    </main>
  );
}

export default Wrapper;
