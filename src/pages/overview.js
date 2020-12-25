import React, { useState, useEffect, useContext } from "react";

import { fetchOverview } from "../repo/overview";
import { AuthContext } from "../contexts/auth";
import { LoadingContext } from "../contexts/loading";

import styles from "./overview.module.css";

function Overview({ current }) {
  const {
    state: { id: userId },
  } = useContext(AuthContext);

  const { setLoading } = useContext(LoadingContext);

  const [state, setState] = useState({
    course_avg: 0,
    student_avg: 0,
  });

  useEffect(() => {
    async function temp() {
      setState(await fetchOverview(userId, current.id));
    }

    setLoading(true);
    temp();
    setLoading(false);
  }, [userId, current.id, setLoading]);

  if (current.id === "") {
    return <></>;
  }

  return (
    <section className={styles.container}>
      <div className={styles.content}></div>
    </section>
  );
}

export default Overview;
