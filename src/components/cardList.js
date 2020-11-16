import React, { useState, useEffect, useContext } from "react";

import { AuthContext } from "../contexts/auth";
import Modal from "../components/modal";
import Info from "./info";

import styles from "./cardList.module.css";

function CardList({ current, api, detail, setdetail, children }) {
  const {
    state: { token },
  } = useContext(AuthContext);

  const [state, setState] = useState([]);
  const [info, setInfo] = useState({ id: "" });

  useEffect(() => {
    async function temp() {
      try {
        setState(await api(token, current.id));
      } catch (error) {
        console.log(error);
      }
    }

    temp();
  }, [token, current.id, api]);

  // Return nothing if have not selected subject
  if (current.id === "") {
    return <></>;
  }

  return (
    <>
      <ul>
        {state.map((s) => {
          return (
            <li key={s.id} className={styles.card}>
              <div className={styles.cardTop}>
                <div>
                  <h3 className={styles.name}>{s.name}</h3>
                  <h6 className={styles.id}>{s.id}</h6>
                </div>
                <h5 className={styles.date}>{s.due_date}</h5>
              </div>
              <div className={styles.cardBottom}>
                <div className={styles.innerBottom}>
                  <h4
                    className={
                      s.type === "Quiz" ? styles.typeQuiz : styles.typeProg
                    }
                  >
                    {s.type}
                  </h4>
                </div>
                <div>
                  <button
                    className={styles.view}
                    onClick={() => setdetail(s.id)}
                  >
                    VIEW
                  </button>
                  <button className={styles.info} onClick={() => setInfo(s)}>
                    INFO
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <Info info={info} setinfo={setInfo} />
      {detail !== "" && <Modal>{children}</Modal>}
    </>
  );
}

export default CardList;
