import React, { useState, useEffect, useContext } from "react";
import AceEditor from "react-ace";

import { fetchGradeDetail } from "../repo/grade";
import { AuthContext } from "../contexts/auth";
import { LoadingContext } from "../contexts/loading";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";

import styles from "./gradeModal.module.css";

function GradeModal({ lang, setdetail, detail }) {
  const {
    state: { username, id: userId },
  } = useContext(AuthContext);

  const { setLoading } = useContext(LoadingContext);

  const [state, setState] = useState({});

  useEffect(() => {
    async function temp() {
      try {
        const q = await fetchGradeDetail(userId, {
          username,
          course_id: detail.course_id,
          id: detail.id,
        });
        setState(q);
      } catch (error) {
        console.log(error);
      }
    }

    setLoading(true);
    temp();
    setLoading(false);
  }, [detail, userId, username, setLoading]);

  return (
    <section>
      <h2 className={styles.title}>{state.name}</h2>
      {state.assign_type === "Quiz" ? Quiz(state) : <></>}
      {state.assign_type === "Prog" ? Prog(state, lang) : <></>}
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
            <h2>{`[${i + 1}] ${q.question}`}</h2>
            <ol className={styles.choices}>
              {q.choices.map((c, i) => {
                if (c === q.answer) {
                  // for correct choice
                  return (
                    <li key={i} style={{ color: "#4caf50" }}>
                      {c}
                    </li>
                  );
                } else if (c === q.studentanswer) {
                  // if user answer incorrectly
                  return (
                    <li key={i} style={{ color: "#c53a2a" }}>
                      {c}
                    </li>
                  );
                }

                return <li key={i}>{c}</li>;
              })}
            </ol>
            <h3
              className={
                q.studentanswer === q.answer ? styles.correct : styles.wrong
              }
            >
              STUDENT ANSWER [{q.studentanswer}]
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
            <h2>{`[${i + 1}] ${q.question}`}</h2>
            <AceEditor
              name={i.toString()}
              mode={lang}
              theme="monokai"
              value={q.studentanswer}
              fontSize={14}
              style={{ width: `50%`, margin: `1rem 0` }}
              readOnly
            />
            <h3>Expected Output</h3>
            <textarea style={{ width: `100%` }} readOnly>
              {q.answer}
            </textarea>
          </li>
        );
      })}
    </ul>
  );
}

export default GradeModal;
