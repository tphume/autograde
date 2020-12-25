import React, { useState, useEffect, useContext } from "react";
import Chart from "react-apexcharts";

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

  const options = {
    chart: {
      height: 350,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "22px",
          },
          value: {
            fontSize: "16px",
          },
          total: {
            show: true,
            label: "Max Score",
            formatter: function (w) {
              return 100;
            },
          },
        },
      },
    },
    labels: ["Course Average", "Your Average"],
  };

  useEffect(() => {
    async function temp() {
      setState(await fetchOverview(userId, current.id));
    }

    if (current.id !== "") {
      setLoading(true);
      temp();
      setLoading(false);
    }
  }, [userId, current.id, setLoading]);

  if (current.id === "") {
    return <></>;
  }

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <Chart
          options={options}
          series={[state.course_avg, state.student_avg]}
          type="radialBar"
          height={350}
        />
      </div>
      <h4>
        The average score among all students for this course is{" "}
        <span style={{ color: "#259efa" }}>{state.course_avg}</span>
      </h4>
      <h4>
        Your average score for this course is{" "}
        <span style={{ color: "#25e6a4" }}>{state.student_avg}</span>
      </h4>
    </section>
  );
}

export default Overview;
