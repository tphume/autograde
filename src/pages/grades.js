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
        <GradeModal
          lang={current.name.toLowerCase()}
          setdetail={setDetail}
          detail={detail}
        />
      </CardList>
    </>
  );
}

export default Grade;
