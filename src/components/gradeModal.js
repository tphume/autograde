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
      <h2>
        For this assignment you scored{" "}
        <span>{`${state.points}/${state.total}!`}</span>
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
  return <div></div>;
}

function Prog(s) {
  return <div></div>;
}

export default GradeModal;
