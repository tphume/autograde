import axios from "axios";

async function fetchStudentGradeList(userId, { username, course_id }) {
  if (course_id === "") return [];

  if (process.env.NODE_ENV === "production") {
    const endpoint = `${process.env.REACT_APP_URL}/user/${userId}/courses/${course_id}/gradedassignments/`;

    try {
      const response = await axios.get(endpoint);
      const res = response.data.map((l) => {
        return {
          id: l.assignment.id, // use assignment id instead
          name: l.assignment.name,
          grade: Math.round(l.grade),
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
    const endpoint = `${process.env.REACT_APP_URL}/courses/${course_id}/assignments/${id}/`;

    try {
      const response = await axios.get(endpoint);

      const question = response.data[0].questions.map((q) => {
        const studentanswer = q.studentanswer.find((a) => a.student === userId);

        return {
          ...q,
          studentanswer: studentanswer !== undefined ? studentanswer.title : "",
        };
      });

      const assign_type =
        response.data[0].assign_type !== "Quiz" ? "Prog" : "Quiz";

      return { ...response.data[0], questions: question, assign_type };
    } catch (e) {
      throw e;
    }
  }

  // Below is the mock api
  if (id === "875958198" || id === "3430958198" || id === "9430948198") {
    return {
      name: "Hello",
      assign_type: "Prog",
      due_date: "somethingdewdewd",
      questions: [
        {
          question: "This is just an example question?",
          studentanswer: `print("Hello World!")`,
          answer: "Hello World!",
        },
        {
          question: "This is just an example question?",
          studentanswer: `print("Hello World!")`,
          answer: "Hello World!",
        },
        {
          question: "This is just an example question?",
          studentanswer: `print("Hello World!")`,
          answer: "Hello World!",
        },
        {
          question: "This is just an example question?",
          studentanswer: `print("Hello World!")`,
          answer: "Hello World!",
        },
      ],
    };
  }

  return {
    name: "Hello",
    assign_type: "Quiz",
    due_date: "somethingdewdewd",
    questions: [
      {
        question: "This is just an example question?",
        choices: ["A", "B", "C", "D"],
        studentanswer: "C",
        answer: "A",
      },
      {
        question: "This is just an example question?",
        choices: ["someanswer", "someanswer", "someanswer", "someanswer"],
        studentanswer: "B",
        answer: "someanswer",
      },
      {
        question: "This is just an example question?",
        choices: ["someanswer", "someanswer", "someanswer", "someanswer"],
        studentanswer: "someanswer",
        answer: "someanswer",
      },
      {
        question: "This is just an example question?",
        choices: ["someanswer", "someanswer", "someanswer", "someanswer"],
        studentanswer: "D",
        answer: "someanswer",
      },
      {
        question: "This is just an example question?",
        choices: ["someanswer", "someanswer", "someanswer", "someanswer"],
        studentanswer: "someanswer",
        answer: "someanswer",
      },
    ],
  };
}

export { fetchStudentGradeList, fetchGradeDetail };
