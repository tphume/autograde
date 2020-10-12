import React, { useState, useEffect, useContext } from "react";

import { fetchSubjectList } from "../repo/subject";

import { AuthContext } from "../contexts/auth";
import SubjectList from "../components/subjectList";

import styles from "./wrapper.module.css";

function Wrapper({ children }) {
  const { state: auth } = useContext(AuthContext);
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    async function temp() {
      try {
        const arr = await fetchSubjectList(auth.token);
        setSubjects(arr);
      } catch (error) {
        console.log(error);
      }
    }

    temp();
  }, [auth.token]);

  return (
    <main className={styles.container}>
      <SubjectList subjects={subjects} />
      {children}
    </main>
  );
}

export default Wrapper;
