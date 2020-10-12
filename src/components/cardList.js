import React, { useState, useEffect, useContext } from "react";

import { AuthContext } from "../contexts/auth";

import styles from "./cardList.module.css";

function CardList({ current, api }) {
  const {
    state: { token },
  } = useContext(AuthContext);

  const [state, setState] = useState([]);

  useEffect(() => {
    async function temp() {
      try {
        const arr = await api(token, current);
        setState(arr);
      } catch (error) {
        console.log(error);
      }
    }

    temp();
  }, [token, current, api]);

  // Return nothing if have not selected subject
  if (current === "") {
    return <></>;
  }

  return (
    <>
      <ul>
        {state.map((s) => {
          let statusClass;

          switch (s.status) {
            case "Pass":
              statusClass = styles.statusPass;
              break;
            case "Fail":
            case "Late":
              statusClass = styles.statusFail;
              break;
            case "Grading":
              statusClass = styles.statusGrading;
              break;
            default:
              statusClass = styles.statusPending;
          }

          return (
            <li key={s.id} className={styles.card}>
              <div className={styles.cardTop}>
                <div>
                  <h3 className={styles.name}>{s.name}</h3>
                  <h6 className={styles.id}>{s.id}</h6>
                </div>
                <h5 className={styles.date}>{`${s.start}-${s.due}`}</h5>
              </div>
              <div className={styles.cardBottom}>
                <h4
                  className={
                    s.type === "Quiz" ? styles.typeQuiz : styles.typeProg
                  }
                >
                  {s.type}
                </h4>
                <h4 className={statusClass}>{s.status}</h4>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default CardList;