import React, { useState, useEffect, useContext } from "react";

import { fetchGradeDetail } from "../repo/grade";
import { AuthContext } from "../contexts/auth";

import styles from "./gradeModal.module.css";

function GradeModal({ setdetail, detail }) {
  const {
    state: { token },
  } = useContext(AuthContext);
  const [state, setState] = useState({});

  useEffect(() => {
    async function temp() {
      try {
        const q = await fetchGradeDetail(token, detail);
        setState(q);
      } catch (error) {
        console.log(error);
      }
    }

    temp();
  }, [detail, token]);

  return (
    <section>
      <h2 className={styles.title}>
        For this assignment you scored{" "}
        <span className={styles.score}>{`${state.points}/${state.total}`}</span>
      </h2>
      {state.type === "Quiz" ? Quiz(state) : <></>}
      {state.type === "Prog" ? Prog(state) : <></>}
      <div className={styles.footer}>
        <button className={styles.exit} onClick={() => setdetail("")}>
          EXIT
        </button>
      </div>
    </section>
  );
}

function Quiz(s) {
  return (
    <ul className={styles.questions}>
      {s.questions.map((q, i) => {
        return (
          <li key={i} className={styles.item}>
            <h2>{q.question}</h2>
            <ol className={styles.choices}>
              {q.choices.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ol>
            <h3
              className={
                q.userAnswer === q.answer ? styles.correct : styles.wrong
              }
            >
              You answered {q.userAnswer} - Correct answer {q.answer}
            </h3>
          </li>
        );
      })}
    </ul>
  );
}

function Prog(s) {
  console.log(s);
  return (
    <ul className={styles.questions}>
      {s.questions.map((q, i) => {
        return (
          <li key={i} className={styles.item}>
            <h2>{q.question}</h2>
            <textarea readOnly className={styles.code}>
              {q.userAnswer}
            </textarea>
            {q.fail !== true ? (
              <h3 className={styles.correct}>Pass</h3>
            ) : (
              <>
                <p className={styles.info}>
                  Expected output{" "}
                  <span className={styles.correct}>{q.expect}</span>
                </p>
                <p className={styles.info}>
                  Output from user's code -{" "}
                  <span className={styles.wrong}>{q.got}</span>
                </p>
                <h3 className={styles.wrong}>Fail</h3>
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default GradeModal;
