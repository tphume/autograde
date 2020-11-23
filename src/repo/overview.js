async function fetchOverview(token, subject) {
  if (subject === "") return { grades: {}, labs: {} };

  if (process.env === "production") {
    //TODO: call api endpoint to get overview of a subject
    return;
  }

  // Below is the mock api
  if (subject === "100543432") {
    return {
      grades: {
        total: 2,
        pass: 2,
        fail: 0,
        quiz: 1,
        prog: 1,
      },
      labs: {
        total: 2,
        pending: 1,
        grading: 1,
        late: 0,
        quiz: 1,
        prog: 1,
      },
    };
  }

  return {
    grades: {
      total: 4,
      pass: 3,
      fail: 1,
      quiz: 2,
      prog: 2,
    },
    labs: {
      total: 4,
      pending: 2,
      grading: 1,
      late: 1,
      quiz: 2,
      prog: 2,
    },
  };
}
export { fetchOverview };
