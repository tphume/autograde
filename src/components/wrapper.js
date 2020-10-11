import React from "react";

import SubjectList from "../components/subjectList";

import styles from "./wrapper.module.css";

function Wrapper({ children }) {
  return (
    <main className={styles.container}>
      <SubjectList />
      {children}
    </main>
  );
}

export default Wrapper;
