import React, { useState, useEffect, useContext } from "react";

import { AuthContext } from "../contexts/auth";
import { fetchStudentGradeList } from "../repo/grade";

import styles from "./grades.module.css";

function Grades({ current }) {
  const {
    state: { token },
  } = useContext(AuthContext);

  const [grades, setGrades] = useState([]);

  useEffect(() => {
    async function temp() {
      try {
        const arr = await fetchStudentGradeList(token, current);
        setGrades(arr);
      } catch (error) {
        console.log(error);
      }
    }

    temp();
  }, [token, current]);

  // Return nothing if have not selected subject
  if (current === "") {
    return <></>;
  }

  return (
    <>
      <ul>
        {grades.map((g) => {
          return (
            <li key={g.id} className={styles.card}>
              <div className={styles.cardTop}>
                <div>
                  <h3 className={styles.name}>{g.name}</h3>
                  <h6 className={styles.id}>{g.id}</h6>
                </div>
                <h5 className={styles.date}>{`${g.start}-${g.due}`}</h5>
              </div>
              <div className={styles.cardBottom}>
                <h4
                  className={
                    g.type === "Quiz" ? styles.typeQuiz : styles.typeProg
                  }
                >
                  {g.type}
                </h4>
                <h4
                  className={
                    g.status === "Pass" ? styles.statusPass : styles.statusFail
                  }
                >
                  {g.status}
                </h4>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Grades;
