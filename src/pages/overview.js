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
      <div className={styles.content}>
        <h2>Grades</h2>
        <p>
          There have been a total of{" "}
          <span className={styles.total}>{state.grades.total}</span> assigments
          graded
        </p>
        <p>
          You have{" "}
          <span className={styles.prog}>{state.grades.prog} Programming</span>{" "}
          assignments graded
        </p>
        <p>
          You have <span className={styles.quiz}>{state.grades.quiz} Quiz</span>{" "}
          assignments graded
        </p>
        <p>
          You have a total of{" "}
          <span className={styles.pass}>{state.grades.pass} passing </span>
          assignments grade
        </p>
        <p>
          You have a total of{" "}
          <span className={styles.fail}>{state.grades.fail} failing </span>
          assignments grade
        </p>
      </div>
      <div className={styles.content}>
        <h2>Labs</h2>
        <p>
          There are currently a total of{" "}
          <span className={styles.total}>{state.labs.total}</span> labs assigned
          to you
        </p>
        <p>
          You have{" "}
          <span className={styles.prog}>{state.labs.prog} Programming</span>{" "}
          labs
        </p>
        <p>
          You have <span className={styles.quiz}>{state.labs.quiz} Quiz</span>{" "}
          labs
        </p>
        <p>
          You have{" "}
          <span className={styles.pending}>{state.labs.pending} pending</span>{" "}
          labs
        </p>
        <p>
          You have <span className={styles.late}>{state.labs.late} late</span>{" "}
          labs
        </p>
        <p>
          The teacher is{" "}
          <span className={styles.grading}>grading {state.labs.grading} </span>
          of your labs
        </p>
      </div>
    </section>
  );
}

export default Overview;
