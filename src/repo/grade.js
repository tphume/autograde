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
        due_date: "17/10/2020",
        description: `
# C++ Programming Assignment
        `,
      },
      {
        id: "0430948389",
        name: "Data types in C++ 1",
        type: "Quiz",
        due_date: "17/10/2020",
        description: `
# C++ Quiz
        `,
      },
    ];
  }

  return [
    {
      id: "3430958198",
      name: "Python Lab 2",
      type: "Programming Assignment",
      due_date: "17/10/2020",
      description: `
# Python Programming Assignment
      `,
    },
    {
      id: "7410948389",
      name: "Data types in Python 1",
      type: "Quiz",
      due_date: "17/10/2020",
      description: `
# Python Quiz
      `,
    },
    {
      id: "9430948198",
      name: "Python Lab 1",
      type: "Programming Assignment",
      due_date: "09/10/2020",
      description: `
# Python Programming Assignment
      `,
    },
    {
      id: "6560948389",
      name: "Data types in Python 2",
      type: "Quiz",
      due_date: "09/10/2020",
      description: `
# Python Quiz
      `,
    },
  ];
}

async function fetchGradeDetail(token, id) {
  //TODO: call api endpoint to fetch a student grade individual detail
  // this is currently a mock api call that will always succeed
  if (id === "") return [];

  if (id === "875958198" || id === "3430958198" || id === "9430948198") {
    return {
      type: "Prog",
      grade: 4,
      questions: [
        {
          question: "This is just an example question?",
          studentAnswer: `print("Hello World!")`,
        },
        {
          question: "This is just an example question?",
          studentAnswer: `print("Hello World!")`,
        },
        {
          question: "This is just an example question?",
          studentAnswer: `notprint("Hello World!")`,
          fail: true,
          expect: "Hello World!",
          got: "Syntax Error",
        },
        {
          question: "This is just an example question?",
          studentAnswer: `print("Hello World!")`,
        },
        {
          question: "This is just an example question?",
          studentAnswer: `print("Hello World!")`,
        },
      ],
    };
  }

  return {
    type: "Quiz",
    grade: 3,
    questions: [
      {
        question: "This is just an example question?",
        choices: ["someanswer", "someanswer", "someanswer", "someanswer"],
        studentAnswer: "B",
        answer: "B",
      },
      {
        question: "This is just an example question?",
        choices: ["someanswer", "someanswer", "someanswer", "someanswer"],
        studentAnswer: "B",
        answer: "C",
      },
      {
        question: "This is just an example question?",
        choices: ["someanswer", "someanswer", "someanswer", "someanswer"],
        studentAnswer: "A",
        answer: "A",
      },
      {
        question: "This is just an example question?",
        choices: ["someanswer", "someanswer", "someanswer", "someanswer"],
        studentAnswer: "D",
        answer: "B",
      },
      {
        question: "This is just an example question?",
        choices: ["someanswer", "someanswer", "someanswer", "someanswer"],
        studentAnswer: "B",
        answer: "B",
      },
    ],
  };
}

export { fetchStudentGradeList, fetchGradeDetail };
