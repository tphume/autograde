import React from "react";

import { fetchStudentLabList } from "../repo/lab";
import CardList from "../components/cardList";

function Labs({ current }) {
  if (current === "") {
    return <></>;
  }

  return (
    <>
      <CardList current={current} api={fetchStudentLabList} />
    </>
  );
}

export default Labs;
