import React, { useState, useEffect } from "react";

import { fetchStudentGradeList } from "../repo/grade";

function Grades({ current }) {
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    async function temp() {
      try {
        const arr = await fetchStudentGradeList();
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
      <ul>
        {grades.map((g) => {
          return (
            <li key={g.id}>
              <div>
                <div>
                  <h3>{g.name}</h3>
                  <h6>{g.id}</h6>
                </div>
                <div>
                  <h5>{g.start}</h5>
                  <h5>{g.due}</h5>
                </div>
              </div>
              <div>
                <h4>{g.type}</h4>
                <h4>{g.status}</h4>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Grades;
