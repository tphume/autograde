import React, { useState, useEffect, useContext } from "react";

import { fetchSubjectList } from "../repo/subject";
import { LoadingContext } from "../contexts/loading";
import SubjectList from "../components/subjectList";

import styles from "./wrapper.module.css";

function Wrapper({ children, current, setCurrent }) {
  const { setLoading } = useContext(LoadingContext);
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    async function temp() {
      try {
        setSubjects(await fetchSubjectList());
      } catch (error) {
        console.log(error);
      }
    }

    setLoading(true);
    temp();
    setLoading(false);

    // on logout
    return () => setCurrent({ id: "", name: "" });
  }, [setCurrent, setLoading]);

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
