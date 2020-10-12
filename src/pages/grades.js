import React from "react";

import { fetchStudentGradeList } from "../repo/grade";
import CardList from "../components/cardList";

function Grade({ current }) {
  if (current === "") {
    return <></>;
  }

  return (
    <>
      <CardList current={current} api={fetchStudentGradeList} />
    </>
  );
}

export default Grade;
