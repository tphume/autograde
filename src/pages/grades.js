import React from "react";

import { fetchStudentGradeList } from "../repo/grade";
import CardList from "../components/cardList";
import GradeModal from "../components/gradeModal";

function Grade({ current }) {
  if (current === "") {
    return <></>;
  }

  return (
    <>
      <CardList current={current} api={fetchStudentGradeList}>
        <GradeModal />
      </CardList>
    </>
  );
}

export default Grade;
