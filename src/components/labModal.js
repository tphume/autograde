import React, { useState, useEffect, useContext } from "react";
import AceEditor from "react-ace";
import { useSnackbar } from "react-simple-snackbar";

import { fetchLabDetail, saveQuestion, submitLab } from "../repo/lab";
import { AuthContext } from "../contexts/auth";
import { LoadingContext } from "../contexts/loading";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";

import styles from "./labModal.module.css";

// styles for snackbar
const optionsSuccess = {
  style: {
    backgroundColor: "#4caf50",
  },
};

const optionsError = {
  style: {
    backgroundColor: "#c53a2a",
  },
};

// main component
function LabModal({ lang, setdetail, detail }) {
  const {
    state: { token, username, id: userId },
  } = useContext(AuthContext);

  const { setLoading } = useContext(LoadingContext);

  const [state, setState] = useState({});

  const [openSuccess] = useSnackbar(optionsSuccess);
  const [openError] = useSnackbar(optionsError);

  useEffect(() => {
    async function temp() {
      try {
        const q = await fetchLabDetail(userId, {
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
  }, [detail, token, username, userId, setLoading]);

  return (
    <section>
      <h2 className={styles.title}>
        There are {state.questions ? state.questions.length : ""} questions in
        total
      </h2>
      {state.assign_type === "Quiz" ? (
        Quiz(token, username, state, setState, { openSuccess, openError })
      ) : (
        <></>
      )}
      {state.assign_type === "Prog" ? (
        Prog(token, username, state, setState, lang, { openSuccess, openError })
      ) : (
        <></>
      )}
      <div className={styles.footer}>
        <button
          className={styles.submit}
          onClick={async (e) => {
            e.preventDefault();
            setLoading(true);

            try {
              const { message } = await submitLab(token, {
                id: state.id,
                username,
              });
              if (message === "previously submitted") {
                openError("Assignment already submitted", 3000);
              } else {
                openSuccess("Assignment submitted", 3000);
              }
            } catch (error) {
              openError("An error occurred", 3000);
              console.log(error);
            }

            setLoading(false);
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

function Quiz(token, username, state, setState, { openSuccess, openError }) {
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
                      checked={state.studentAnswer[i].title === c}
                      onChange={(e) => {
                        let newState = { ...state };
                        newState.studentAnswer[i].title = e.currentTarget.value;
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
                    answer: state.studentAnswer[i].title,
                  });
                  openSuccess("Answer saved", 3000);
                } catch (error) {
                  console.log(error);
                  openError("Error saving", 3000);
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

function Prog(
  token,
  username,
  state,
  setState,
  lang,
  { openSuccess, openError }
) {
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
              value={state.studentAnswer[i].title}
              fontSize={14}
              onChange={(v) => {
                let newState = { ...state };
                newState.studentAnswer[i].title = v;
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
                    answer: state.studentAnswer[i].title,
                  });
                  openSuccess("Answer saved", 3000);
                } catch (error) {
                  console.log(error);
                  openError("Error saving", 3000);
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
