async function fetchStudentLabList(token, subject) {
  //TODO: call api endpoint to fetch a student ungraded lab
  // this is currently a mock api call that will always succeed
  if (subject === "") return [];

  if (subject === "100543432") {
    return [
      {
        id: "775958198",
        name: "C++ Lab 2",
        type: "Programming Assignment",
        status: "Grading",
        start: "10/10/2020",
        due: "10/20/2020",
      },
      {
        id: "0030948389",
        name: "Data types in C++ 2",
        type: "Quiz",
        status: "Pending",
        start: "10/10/2020",
        due: "20/10/2020",
      },
    ];
  }

  return [
    {
      id: "3430958198",
      name: "Python Lab 3",
      type: "Programming Assignment",
      status: "Late",
      start: "10/10/2020",
      due: "20/10/2020",
    },
    {
      id: "7410948389",
      name: "Data types in Python 3",
      type: "Quiz",
      status: "Grading",
      start: "10/10/2020",
      due: "20/10/2020",
    },
    {
      id: "9430948198",
      name: "Python Lab 4",
      type: "Programming Assignment",
      status: "Pending",
      start: "10/10/2020",
      due: "30/10/2020",
    },
    {
      id: "6560948389",
      name: "Data types in Python 4",
      type: "Quiz",
      status: "Pending",
      start: "10/10/2020",
      due: "30/10/2020",
    },
  ];
}

async function fetchLabDetail(token, id) {
  //TODO: call api endpoint to fetch a student grade individual detail
  // this is currently a mock api call that will always succeed
  if (id === "") return [];

  if (
    id === "775958198" ||
    id === "3430958198" ||
    id === "Programming Assignment"
  ) {
    return {
      type: "Prog",
      total: "5",
      questions: [
        {
          question: "This is just an example question?",
        },
        {
          question: "This is just an example question?",
        },
        {
          question: "This is just an example question?",
        },
        {
          question: "This is just an example question?",
        },
        {
          question: "This is just an example question?",
        },
      ],
    };
  }

  return {
    type: "Quiz",
    total: "5",
    questions: [
      {
        question: "This is just an example question?",
        choices: ["someanswer", "someanswer", "someanswer", "someanswer"],
      },
      {
        question: "This is just an example question?",
        choices: ["someanswer", "someanswer", "someanswer", "someanswer"],
      },
      {
        question: "This is just an example question?",
        choices: ["someanswer", "someanswer", "someanswer", "someanswer"],
      },
      {
        question: "This is just an example question?",
        choices: ["someanswer", "someanswer", "someanswer", "someanswer"],
      },
      {
        question: "This is just an example question?",
        choices: ["someanswer", "someanswer", "someanswer", "someanswer"],
      },
    ],
  };
}

export { fetchStudentLabList, fetchLabDetail };
