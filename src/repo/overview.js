async function fetchOverview(token, subject) {
  //TODO: call api endpoint to get overview of a subject
  // this is currently a mock api call that will always succeed
  if (subject === "") return { grades: {}, labs: {} };

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
