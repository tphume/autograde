import React, { useState } from "react";

import { fetchStudentLabList } from "../repo/lab";
import CardList from "../components/cardList";
import LabModal from "../components/labModal";

function Labs({ current }) {
  const [detail, setDetail] = useState("");

  if (current === "") {
    return <></>;
  }

  return (
    <>
      <CardList
        current={current}
        api={fetchStudentLabList}
        detail={detail}
        setdetail={setDetail}
      >
        <LabModal />
      </CardList>
    </>
  );
}

export default Labs;
