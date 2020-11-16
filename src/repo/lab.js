async function fetchStudentLabList(token, subject) {
  //TODO: call api endpoint to fetch a student ungraded lab
  // this is currently a mock api call that will always succeed
  if (subject === "") return [];

  if (subject === "100543432") {
    return [
      {
        id: "775958198",
        name: "Javascript Lab 2",
        type: "Programming Assignment",
        due_date: "10/20/2020",
        description: `
# Javascript Programming Assignment
        `,
      },
      {
        id: "0030948389",
        name: "Data types in Javascript 2",
        type: "Quiz",
        due_date: "20/10/2020",
        description: `
# Javascript Quiz
        `,
      },
    ];
  }

  return [
    {
      id: "3430958198",
      name: "Python Lab 3",
      type: "Programming Assignment",
      due_date: "20/10/2020",
      description: `
# Python Programming Assignment
        `,
    },
    {
      id: "7410948389",
      name: "Data types in Python 3",
      type: "Quiz",
      due_date: "20/10/2020",
      description: `
# Quiz Programming Assignment
        `,
    },
    {
      id: "9430948198",
      name: "Python Lab 4",
      type: "Programming Assignment",
      due_date: "30/10/2020",
      description: `
# Python Programming Assignment
        `,
    },
    {
      id: "6560948389",
      name: "Data types in Python 4",
      type: "Quiz",
      due_date: "30/10/2020",
      description: `
# Quiz Programming Assignment
        `,
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
      questions: [
        {
          question: "This is just an example question?",
          studentAnswer: "",
        },
        {
          question: "This is just an example question?",
          studentAnswer: "",
        },
        {
          question: "This is just an example question?",
          studentAnswer: "",
        },
        {
          question: "This is just an example question?",
          studentAnswer: "",
        },
        {
          question: "This is just an example question?",
          studentAnswer: "",
        },
      ],
    };
  }

  return {
    type: "Quiz",
    questions: [
      {
        question: "This is just an example question?",
        choices: ["someanswer", "someanswer", "someanswer", "someanswer"],
        studentAnswer: "",
      },
      {
        question: "This is just an example question?",
        choices: ["someanswer", "someanswer", "someanswer", "someanswer"],
        studentAnswer: "",
      },
      {
        question: "This is just an example question?",
        choices: ["someanswer", "someanswer", "someanswer", "someanswer"],
        studentAnswer: "",
      },
      {
        question: "This is just an example question?",
        choices: ["someanswer", "someanswer", "someanswer", "someanswer"],
        studentAnswer: "",
      },
      {
        question: "This is just an example question?",
        choices: ["someanswer", "someanswer", "someanswer", "someanswer"],
        studentAnswer: "",
      },
    ],
  };
}

export { fetchStudentLabList, fetchLabDetail };
