import React, { useState } from "react";

import { fetchStudentGradeList } from "../repo/grade";
import CardList from "../components/cardList";
import GradeModal from "../components/gradeModal";

function Grade({ current }) {
  const [detail, setDetail] = useState("");

  if (current === "") {
    return <></>;
  }

  return (
    <>
      <CardList
        current={current}
        api={fetchStudentGradeList}
        detail={detail}
        setdetail={setDetail}
      >
        <GradeModal setdetail={setDetail} />
      </CardList>
    </>
  );
}

export default Grade;
