async function fetchStudentGradeList(token, subject) {
  //TODO: call api endpoint to fetch a student grade list by subject
  // this is currently a mock api call that will always succeed
  if (subject === "") return [];

  return [
    {
      id: "fakeid1",
      name: "Python Lab 1",
      type: "Programming Assignment",
      status: "Pass",
      start: "09/10/2020",
      due: "17/10/2020",
    },
    {
      id: "fakeid2",
      name: "Data types in Python",
      type: "Quiz",
      status: "Pass",
      start: "09/10/2020",
      due: "17/10/2020",
    },
  ];
}

export { fetchStudentGradeList };
