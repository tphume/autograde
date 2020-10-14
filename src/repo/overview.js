async function fetchOverview(token, subject) {
  //TODO: call api endpoint to get overview of a subject
  // this is currently a mock api call that will always succeed
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
