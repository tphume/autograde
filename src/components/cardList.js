import React, { useState, useEffect, useContext } from "react";

import { AuthContext } from "../contexts/auth";
import { LoadingContext } from "../contexts/loading";
import Modal from "../components/modal";
import Info from "./info";

import styles from "./cardList.module.css";

function CardList({ current, api, detail, setdetail, children }) {
  const {
    state: { token, username },
  } = useContext(AuthContext);

  const { setLoading } = useContext(LoadingContext);

  const [state, setState] = useState([]);
  const [info, setInfo] = useState({ id: "" });

  useEffect(() => {
    async function temp() {
      try {
        setState(await api(token, { username, course_id: current.id }));
      } catch (error) {
        console.log(error);
      }
    }

    setLoading(true);
    temp();
    setLoading(false);
  }, [token, username, current.id, api, setLoading]);

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
                      s.assign_type === "Quiz"
                        ? styles.typeQuiz
                        : styles.typeProg
                    }
                  >
                    {s.assign_type}
                  </h4>
                </div>
                <div>
                  <button
                    className={styles.view}
                    onClick={() =>
                      setdetail({ id: s.id, course_id: current.id })
                    }
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
