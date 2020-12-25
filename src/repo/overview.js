async function fetchOverview(userId, course_id) {
  if (course_id === "") return { grades: {}, labs: {} };

  if (process.env === "production") {
    //TODO: call api endpoint to get overview of a subject
    return;
  }

  return {
    course_avg: 50,
    student_avg: 70,
  };
}
export { fetchOverview };
