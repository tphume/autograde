import React, { useState, useEffect, useContext } from "react";

import { fetchLabDetail } from "../repo/lab";
import { AuthContext } from "../contexts/auth";

import styles from "./labModal.module.css";

function LabModal({ setdetail, detail }) {
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
        There are {state.total} questions in total
      </h2>
      {state.type === "Quiz" ? Quiz(state) : Prog(state)}
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
          </li>
        );
      })}
    </ul>
  );
}

function Prog() {}

export default LabModal;
