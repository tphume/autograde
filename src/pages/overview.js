import React from "react";

function Overview({ current }) {
  if (current === "") {
    return <></>;
  }

  return (
    <>
      <h1>Overview</h1>
    </>
  );
}

export default Overview;
