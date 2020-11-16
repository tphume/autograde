import React, { useState, useEffect, useContext } from "react";

import { fetchSubjectList } from "../repo/subject";

import { AuthContext } from "../contexts/auth";
import SubjectList from "../components/subjectList";

import styles from "./wrapper.module.css";

function Wrapper({ children, current, setCurrent }) {
  const {
    state: { token },
  } = useContext(AuthContext);
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    async function temp() {
      try {
        setSubjects(await fetchSubjectList(token));
      } catch (error) {
        console.log(error);
      }
    }

    temp();

    return () => setCurrent({ id: "" });
  }, [token, setCurrent]);

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
