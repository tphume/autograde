import React, { useState, useEffect, useContext } from "react";
import AceEditor from "react-ace";

import { fetchGradeDetail } from "../repo/grade";
import { AuthContext } from "../contexts/auth";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";

import styles from "./gradeModal.module.css";

function GradeModal({ lang, setdetail, detail }) {
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
        For this assignment you scored {state.grade}
      </h2>
      {state.type === "Quiz" ? Quiz(state) : <></>}
      {state.type === "Prog" ? Prog(state, lang) : <></>}
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
                q.studentAnswer === q.answer ? styles.correct : styles.wrong
              }
            >
              You answered {q.studentAnswer} - Correct answer {q.answer}
            </h3>
          </li>
        );
      })}
    </ul>
  );
}

function Prog(s, lang) {
  return (
    <ul className={styles.questions}>
      {s.questions.map((q, i) => {
        return (
          <li key={i} className={styles.item}>
            <h2>{q.question}</h2>
            <AceEditor
              name={i.toString()}
              mode={lang}
              theme="monokai"
              value={q.studentAnswer}
              fontSize={14}
              style={{ width: `100%`, margin: `1rem 0` }}
              readOnly
            />
          </li>
        );
      })}
    </ul>
  );
}

export default GradeModal;
