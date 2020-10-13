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
      {state.type === "Quiz" ? Quiz(state) : Prog(state)}
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
    <ul>
      {s.questions.map((q, i) => {
        return (
          <li key={i}>
            <h2>{q.question}</h2>
            <ol>
              {q.choices.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ol>
            <h3>Your answer {q.userAnswer}</h3>
            <h3>Correct answer {q.answer}</h3>
          </li>
        );
      })}
    </ul>
  );
}

function Prog(s) {
  return <div></div>;
}

export default GradeModal;
