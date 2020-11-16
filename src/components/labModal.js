import React, { useState, useEffect, useContext } from "react";

import { fetchLabDetail } from "../repo/lab";
import { AuthContext } from "../contexts/auth";

import styles from "./labModal.module.css";

function LabModal({ lang, setdetail, detail }) {
  const {
    state: { token },
  } = useContext(AuthContext);
  const [state, setState] = useState({});

  useEffect(() => {
    async function temp() {
      try {
        const q = await fetchLabDetail(token, detail);
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
        There are {state.questions ? state.questions.length : ""} questions in
        total
      </h2>
      {state.type === "Quiz" ? Quiz(state) : <></>}
      {state.type === "Prog" ? Prog(state) : <></>}
      <div className={styles.footer}>
        <button className={styles.save}>SAVE</button>
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
              {q.choices.map((c, j) => (
                <li key={j}>
                  <label>
                    {c}
                    <input
                      type="radio"
                      name={i}
                      value="randomfornow"
                      className={styles.radio}
                    />
                  </label>
                </li>
              ))}
            </ol>
          </li>
        );
      })}
    </ul>
  );
}

function Prog(s) {
  return (
    <ul className={styles.questions}>
      {s.questions.map((q, i) => {
        return (
          <li key={i} className={styles.item}>
            <h2>{q.question}</h2>
            {/* This text area needs to be replaced with code editor component */}
            <textarea className={styles.code} value={q.studentAnswer} />
            <button className={styles.run}>Run</button>
          </li>
        );
      })}
    </ul>
  );
}

export default LabModal;
