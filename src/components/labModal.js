import React, { useState, useEffect, useContext } from "react";
import AceEditor from "react-ace";

import { fetchLabDetail, saveQuestion, submitLab } from "../repo/lab";
import { AuthContext } from "../contexts/auth";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";

import styles from "./labModal.module.css";

function LabModal({ lang, setdetail, detail }) {
  const {
    state: { token, username },
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
      {state.type === "Quiz" ? Quiz(token, username, state, setState) : <></>}
      {state.type === "Prog" ? (
        Prog(token, username, state, setState, lang)
      ) : (
        <></>
      )}
      <div className={styles.footer}>
        <button
          className={styles.submit}
          onClick={(e) => {
            e.preventDefault();
            try {
              submitLab(token, { course_id: detail, username });
            } catch (error) {
              console.log(error);
            }
          }}
        >
          SUBMIT
        </button>
        <button className={styles.exit} onClick={() => setdetail("")}>
          EXIT
        </button>
      </div>
    </section>
  );
}

function Quiz(token, username, state, setState) {
  return (
    <ul className={styles.questions}>
      {state.questions.map((q, i) => {
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
                      value={c}
                      className={styles.radio}
                      checked={q.studentAnswer === c}
                      onChange={(e) => {
                        let newState = { ...state };
                        newState.questions[i].studentAnswer =
                          e.currentTarget.value;
                        setState(newState);
                      }}
                    />
                  </label>
                </li>
              ))}
            </ol>
            <button
              className={styles.save}
              onClick={(e) => {
                e.preventDefault();
                try {
                  saveQuestion(token, {
                    username,
                    assignment: state.id,
                    question: i + 1,
                    answer: state.questions[i].studentAnswer,
                  });
                } catch (error) {
                  console.log(error);
                }
              }}
            >
              Save
            </button>
          </li>
        );
      })}
    </ul>
  );
}

function Prog(token, username, state, setState, lang) {
  return (
    <ul className={styles.questions}>
      {state.questions.map((q, i) => {
        return (
          <li key={i} className={styles.item}>
            <h2>{q.question}</h2>
            <AceEditor
              name={i.toString()}
              mode={lang}
              theme="monokai"
              value={q.studentAnswer}
              fontSize={14}
              onChange={(v) => {
                let newState = { ...state };
                newState.questions[i].studentAnswer = v;
                setState(newState);
              }}
              style={{ width: `100%`, margin: `1rem 0` }}
            />
            <button
              className={styles.save}
              onClick={(e) => {
                e.preventDefault();
                try {
                  saveQuestion(token, {
                    username,
                    assignment: state.id,
                    question: i + 1,
                    answer: state.questions[i].studentAnswer,
                  });
                } catch (error) {
                  console.log(error);
                }
              }}
            >
              Save
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default LabModal;
