import axios from "axios";

async function fetchStudentGradeList(userId, { username, course_id }) {
  if (course_id === "") return [];

  if (process.env.NODE_ENV === "production") {
    const endpoint = `${process.env.REACT_APP_URL}/${userId}/courses/${course_id}/gradedassignments/`;

    try {
      const response = await axios.get(endpoint);
      const res = response.map((l) => {
        return {
          id: l.assignment.id, // use assignment id instead
          name: l.assignment.name,
          grade: l.grade,
          assign_type: l.assignment.assign_type,
          due_date: l.assignment.due_date,
          description: l.assignment.description,
        };
      });
      return res;
    } catch (e) {
      throw e;
    }
  }

  // Below is the mock api
  if (course_id === "100543432") {
    return [
      {
        id: "875958198",
        name: "Javascript Lab 1",
        grade: 100,
        assign_type: "Programming Assignment",
        due_date: "17/10/2020",
        description: `
# Javascript Programming Assignment
        `,
      },
      {
        id: "0430948389",
        name: "Data types in Javascript 1",
        grade: 100,
        assign_type: "Quiz",
        due_date: "17/10/2020",
        description: `
# Javascript Quiz
        `,
      },
    ];
  }

  return [
    {
      id: "3430958198",
      name: "Python Lab 2",
      grade: 100,
      assign_type: "Programming Assignment",
      due_date: "17/10/2020",
      description: `
# Python Programming Assignment
      `,
    },
    {
      id: "7410948389",
      name: "Data types in Python 1",
      grade: 100,
      assign_type: "Quiz",
      due_date: "17/10/2020",
      description: `
# Python Quiz
      `,
    },
    {
      id: "9430948198",
      name: "Python Lab 1",
      grade: 100,
      assign_type: "Programming Assignment",
      due_date: "09/10/2020",
      description: `
# Python Programming Assignment
      `,
    },
    {
      id: "6560948389",
      name: "Data types in Python 2",
      grade: 100,
      assign_type: "Quiz",
      due_date: "09/10/2020",
      description: `
# Python Quiz
      `,
    },
  ];
}

async function fetchGradeDetail(userId, { username, course_id, id }) {
  if (id === "") return [];

  if (process.env.NODE_ENV === "production") {
    return; // do nothing yet
  }

  // Below is the mock api
  if (id === "875958198" || id === "3430958198" || id === "9430948198") {
    return {
      name: "Hello",
      assign_type: "Prog",
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
    name: "Hello",
    assign_type: "Quiz",
    grade: 3,
    questions: [
      {
        question: "This is just an example question?",
        choices: ["someanswer", "someanswer", "someanswer", "someanswer"],
        studentAnswer: "someanswer",
        answer: "someanswer",
      },
      {
        question: "This is just an example question?",
        choices: ["someanswer", "someanswer", "someanswer", "someanswer"],
        studentAnswer: "B",
        answer: "someanswer",
      },
      {
        question: "This is just an example question?",
        choices: ["someanswer", "someanswer", "someanswer", "someanswer"],
        studentAnswer: "someanswer",
        answer: "someanswer",
      },
      {
        question: "This is just an example question?",
        choices: ["someanswer", "someanswer", "someanswer", "someanswer"],
        studentAnswer: "D",
        answer: "someanswer",
      },
      {
        question: "This is just an example question?",
        choices: ["someanswer", "someanswer", "someanswer", "someanswer"],
        studentAnswer: "someanswer",
        answer: "someanswer",
      },
    ],
  };
}

export { fetchStudentGradeList, fetchGradeDetail };
