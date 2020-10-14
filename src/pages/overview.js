import React, { useState, useEffect, useContext } from "react";

import { fetchOverview } from "../repo/overview";
import { AuthContext } from "../contexts/auth";

import styles from "./overview.module.css";

function Overview({ current }) {
  const {
    state: { token },
  } = useContext(AuthContext);
  const [state, setState] = useState({ grades: {}, labs: {} });

  useEffect(() => {
    async function temp() {
      setState(await fetchOverview(token, current));
    }

    temp();
  }, [token, current]);

  if (current === "") {
    return <></>;
  }

  return (
    <section className={styles.container}>
      <div>
        <h2>Grades</h2>
        <p>
          There have been a total of <span>{state.grades.total}</span>{" "}
          assigments graded
        </p>
        <p>
          {state.grades.prog} of your assignments are of{" "}
          <span>Programming Assigment</span> type
        </p>
        <p>
          {state.grades.quiz} of your assignments are of <span>Quiz</span> type
        </p>
        <p>
          You have a total of <span>{state.grades.pass} passing </span>
          assignments grade
        </p>
        <p>
          You have a total of <span>{state.grades.fail} failing </span>
          assignments grade
        </p>
      </div>
      <div>
        <h2>Labs</h2>
        <p>
          There are currently a total of <span>{state.labs.total}</span> labs
          assigned to you
        </p>
        <p>
          {state.labs.prog} of your assignments are of{" "}
          <span>Programming Assigment</span> type
        </p>
        <p>
          {state.labs.quiz} of your assignments are of <span>Quiz</span> type
        </p>
        <p>
          You have <span>{state.labs.pending} pending</span> labs
        </p>
        <p>
          You have <span>{state.labs.late} late</span> labs
        </p>
        <p>
          The teacher is <span>grading {state.labs.grading} </span>of your labs
        </p>
      </div>
    </section>
  );
}

export default Overview;
