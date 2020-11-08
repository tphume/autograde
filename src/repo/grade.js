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
        desc: `
# C++ Programming Assignment
        `,
      },
      {
        id: "0430948389",
        name: "Data types in C++ 1",
        type: "Quiz",
        status: "Pass",
        start: "09/10/2020",
        due: "17/10/2020",
        desc: `
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
      status: "Pass",
      start: "09/10/2020",
      due: "17/10/2020",
      desc: `
# Python Programming Assignment
      `,
    },
    {
      id: "7410948389",
      name: "Data types in Python 1",
      type: "Quiz",
      status: "Pass",
      start: "09/10/2020",
      due: "17/10/2020",
      desc: `
# Python Quiz
      `,
    },
    {
      id: "9430948198",
      name: "Python Lab 1",
      type: "Programming Assignment",
      status: "Fail",
      start: "04/10/2020",
      due: "09/10/2020",
      desc: `
# Python Programming Assignment
      `,
    },
    {
      id: "6560948389",
      name: "Data types in Python 2",
      type: "Quiz",
      status: "Pass",
      start: "04/10/2020",
      due: "09/10/2020",
      desc: `
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
      points: 4,
      total: 5,
      questions: [
        {
          question: "This is just an example question?",
          userAnswer: `print("Hello World!")`,
        },
        {
          question: "This is just an example question?",
          userAnswer: `print("Hello World!")`,
        },
        {
          question: "This is just an example question?",
          userAnswer: `notprint("Hello World!")`,
          fail: true,
          expect: "Hello World!",
          got: "Syntax Error",
        },
        {
          question: "This is just an example question?",
          userAnswer: `print("Hello World!")`,
        },
        {
          question: "This is just an example question?",
          userAnswer: `print("Hello World!")`,
        },
      ],
    };
  }

  return {
    type: "Quiz",
    points: 3,
    total: 5,
    questions: [
      {
        question: "This is just an example question?",
        choices: ["someanswer", "someanswer", "someanswer", "someanswer"],
        userAnswer: "B",
        answer: "B",
      },
      {
        question: "This is just an example question?",
        choices: ["someanswer", "someanswer", "someanswer", "someanswer"],
        userAnswer: "B",
        answer: "C",
      },
      {
        question: "This is just an example question?",
        choices: ["someanswer", "someanswer", "someanswer", "someanswer"],
        userAnswer: "A",
        answer: "A",
      },
      {
        question: "This is just an example question?",
        choices: ["someanswer", "someanswer", "someanswer", "someanswer"],
        userAnswer: "D",
        answer: "B",
      },
      {
        question: "This is just an example question?",
        choices: ["someanswer", "someanswer", "someanswer", "someanswer"],
        userAnswer: "B",
        answer: "B",
      },
    ],
  };
}

export { fetchStudentGradeList, fetchGradeDetail };
