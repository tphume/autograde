async function fetchStudentGradeList(token, subject) {
  //TODO: call api endpoint to fetch a student grade list by subject
  // this is currently a mock api call that will always succeed
  if (subject === "") return [];

  return [
    {
      id: "fakeid1",
      name: "Python Lab 1",
      type: "Programming Assignment",
      status: "Passed",
      start: "",
      due: "",
      weight: 15,
      grade: 90,
    },
    {
      id: "fakeid2",
      name: "Data types in Python",
      type: "Quiz",
      status: "Passed",
      start: "",
      due: "",
      weight: 5,
      grade: 100,
    },
  ];
}

export { fetchStudentGradeList };
