import React from "react";

import styles from "./subjectList.module.css";

function SubjectList({ subjects }) {
  return (
    <section>
      <ul>{subjects.map((s) => subjectItem(s.id, s.name, s.prof))}</ul>
    </section>
  );
}

function subjectItem(id, name, prof) {
  return (
    <li key={id} className={styles.card}>
      <h3 className={styles.name}>{name}</h3>
      <h6 className={styles.id}>{id}</h6>
      <h4 className={styles.prof}>{prof}</h4>
    </li>
  );
}

export default SubjectList;
