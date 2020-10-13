import React from "react";

import { fetchStudentLabList } from "../repo/lab";
import CardList from "../components/cardList";
import LabModal from "../components/labModal";

function Labs({ current }) {
  if (current === "") {
    return <></>;
  }

  return (
    <>
      <CardList current={current} api={fetchStudentLabList}>
        <LabModal />
      </CardList>
    </>
  );
}

export default Labs;
