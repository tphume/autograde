import React, { useState, useEffect } from "react";

import { fetchSubjectList } from "../repo/subject";

import SubjectList from "../components/subjectList";

import styles from "./wrapper.module.css";

function Wrapper({ children, current, setCurrent }) {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    async function temp() {
      try {
        setSubjects(await fetchSubjectList());
      } catch (error) {
        console.log(error);
      }
    }

    temp();

    return () => setCurrent({ id: "", name: "" });
  }, [setCurrent]);

  return (
    <main className={styles.container}>
      <SubjectList
        subjects={subjects}
        current={current}
        setCurrent={setCurrent}
      />
      {children}
    </main>
  );
}

export default Wrapper;
