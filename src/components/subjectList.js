import React, { useState } from "react";

import Info from "./info";

import styles from "./subjectList.module.css";

function SubjectList({ subjects, current, setCurrent }) {
  const [modal, setModal] = useState("");

  return (
    <section>
      <ul>
        {subjects.map((s) => {
          return (
            <li
              key={s.id}
              className={`${styles.card} ${
                current === s.id ? styles.current : ""
              }`}
              onClick={() => setCurrent(s.id)}
            >
              <h3 className={styles.name}>{s.name}</h3>
              <h6 className={styles.id}>{s.id}</h6>
              <div className={styles.bottom}>
                <h4 className={styles.prof}>{s.prof}</h4>
                <button className={styles.info} onClick={() => setModal(s.id)}>
                  INFO
                </button>
              </div>
              <Info modal={modal} id={s.id} desc={s.desc} setmodal={setModal} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default SubjectList;
