import React from "react";

import styles from "./subjectList.module.css";

function SubjectList({ subjects, current, setCurrent }) {
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
              <h4 className={styles.prof}>{s.prof}</h4>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default SubjectList;
