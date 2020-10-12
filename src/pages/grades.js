import React, { useState, useEffect } from "react";

import { fetchStudentGradeList } from "../repo/grade";

function Grades({ current }) {
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    async function temp() {
      try {
        const arr = fetchStudentGradeList();
        setGrades(arr);
      } catch (error) {
        console.log(error);
      }
    }

    temp();
  }, [current]);

  // Return nothing if have not selected subject
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
