async function fetchStudentGradeList(token, subject) {
  //TODO: call api endpoint to fetch a student grade list by subject
  // this is currently a mock api call that will always succeed
  if (subject === "") return [];

  if (subject === "100543432") {
    return [
      {
        id: "875958198",
        name: "C++ Lab 1",
        type: "Programming Assignment",
        status: "Pass",
        start: "09/10/2020",
        due: "17/10/2020",
      },
      {
        id: "0430948389",
        name: "Data types in C++ 1",
        type: "Quiz",
        status: "Pass",
        start: "09/10/2020",
        due: "17/10/2020",
      },
    ];
  }

  return [
    {
      id: "3430958198",
      name: "Python Lab 2",
      type: "Programming Assignment",
      status: "Pass",
      start: "09/10/2020",
      due: "17/10/2020",
    },
    {
      id: "7410948389",
      name: "Data types in Python 1",
      type: "Quiz",
      status: "Pass",
      start: "09/10/2020",
      due: "17/10/2020",
    },
    {
      id: "9430948198",
      name: "Python Lab 1",
      type: "Programming Assignment",
      status: "Fail",
      start: "04/10/2020",
      due: "09/10/2020",
    },
    {
      id: "6560948389",
      name: "Data types in Python 2",
      type: "Quiz",
      status: "Pass",
      start: "04/10/2020",
      due: "09/10/2020",
    },
  ];
}

export { fetchStudentGradeList };
