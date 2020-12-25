import React, { useState } from "react";

import Info from "./info";

import styles from "./subjectList.module.css";

function SubjectList({ subjects, current, setCurrent }) {
  const [info, setInfo] = useState({ id: "" });

  return (
    <section>
      <ul>
        {subjects.map((s) => {
          return (
            <li
              key={s.id}
              className={`${styles.card} ${current.id === s.id ? styles.current : ""
                }`}
              onClick={() => setCurrent(s)}
            >
              <h3 className={styles.name}>{s.name}</h3>
              <h6 className={styles.id}>{`ID: ${s.id}`}</h6>
              <div className={styles.bottom}>
                <h4 className={styles.prof}>{s.prof}</h4>
                <button className={styles.info} onClick={() => setInfo(s)}>
                  INFO
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <Info info={info} setinfo={setInfo} />
    </section>
  );
}

export default SubjectList;
