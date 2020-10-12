import React from "react";

function Grades({ current }) {
  if (current === "") {
    return <></>;
  }

  return (
    <>
      <h1>Grades</h1>
    </>
  );
}

export default Grades;
