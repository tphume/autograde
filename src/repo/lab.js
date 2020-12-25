import axios from "axios";

async function fetchStudentLabList(token, { username, course_id }) {
  if (course_id === "") return [];

  if (process.env.NODE_ENV === "production") {
    const endpoint = `${process.env.REACT_APP_URL}/courses/${course_id}/assignments/`;

    try {
      const response = await axios.get(endpoint);
      return response.data;
    } catch (e) {
      throw e;
    }
  }

  // Below is the mock api
  if (course_id === "100543432") {
    return [
      {
        id: "775958198",
        name: "Javascript Lab 2",
        assign_type: "Programming Assignment",
        due_date: "10/20/2020",
        description: `
# Javascript Programming Assignment
        `,
      },
      {
        id: "0030948389",
        name: "Data types in Javascript 2",
        assign_type: "Quiz",
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
      assign_type: "Programming Assignment",
      due_date: "20/10/2020",
      description: `
# Python Programming Assignment
        `,
    },
    {
      id: "7410948389",
      name: "Data types in Python 3",
      assign_type: "Quiz",
      due_date: "20/10/2020",
      description: `
# Quiz Programming Assignment
        `,
    },
    {
      id: "9430948198",
      name: "Python Lab 4",
      assign_type: "Programming Assignment",
      due_date: "30/10/2020",
      description: `
# Python Programming Assignment
        `,
    },
    {
      id: "6560948389",
      name: "Data types in Python 4",
      assign_type: "Quiz",
      due_date: "30/10/2020",
      description: `
# Quiz Programming Assignment
        `,
    },
  ];
}

async function fetchLabDetail(userId, { username, course_id, id }) {
  if (id === "") return [];

  if (process.env.NODE_ENV === "production") {
    const endpoint = `${process.env.REACT_APP_URL}/courses/${course_id}/assignments/${id}/`;

    try {
      const response = await axios.get(endpoint);

      // parses response here into better format
      // for answer
      const studentAnswer = response.data[0].questions.map((q) => {
        const answer = q.studentanswer.find((a) => a.student === userId);
        return answer !== undefined ? answer : { title: "" };
      });

      // for question
      var newQuestions = {};

      if (response.data[0].assign_type === "Prog") {
        newQuestions = response.data[0].questions.map((q) => {
          return { question: q.question };
        });
      } else {
        newQuestions = response.data[0].questions.map((q) => {
          return { question: q.question, choices: q.choices };
        });
      }

      // return new format
      const res = {
        id,
        assign_type: response.data[0].assign_type,
        questions: newQuestions,
        studentAnswer: studentAnswer,
      };
      return res;
    } catch (e) {
      throw e;
    }
  }

  // Below is the mock api
  if (id === "775958198" || id === "3430958198" || id === "9430948198") {
    return {
      id,
      assign_type: "Prog",
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
      studentAnswer: [
        {
          title: "",
        },
        {
          title: "",
        },
        {
          title: "",
        },
        {
          title: "",
        },
        {
          title: "",
        },
      ],
    };
  }

  return {
    id,
    assign_type: "Quiz",
    questions: [
      {
        question: "This is just an example question?",
        choices: ["someanswer1", "someanswer2", "someanswer3", "someanswer4"],
      },
      {
        question: "This is just an example question?",
        choices: ["someanswer1", "someanswer2", "someanswer3", "someanswer4"],
      },
      {
        question: "This is just an example question?",
        choices: ["someanswer1", "someanswer2", "someanswer3", "someanswer4"],
      },
      {
        question: "This is just an example question?",
        choices: ["someanswer1", "someanswer2", "someanswer3", "someanswer4"],
      },
      {
        question: "This is just an example question?",
        choices: ["someanswer1", "someanswer2", "someanswer3", "someanswer4"],
      },
    ],
    studentAnswer: [
      {
        title: "",
      },
      {
        title: "",
      },
      {
        title: "",
      },
      {
        title: "",
      },
      {
        title: "",
      },
    ],
  };
}

async function saveQuestion(token, { username, assignment, question, answer }) {
  if (process.env.NODE_ENV === "production") {
    const endpoint = process.env.REACT_APP_URL + "/answer/";

    try {
      const response = axios.post(endpoint, {
        username,
        assignment,
        question,
        answer,
      });
      return response.data;
    } catch (e) {
      throw e;
    }
  }
}

async function submitLab(token, { id, username }) {
  if (process.env.NODE_ENV === "production") {
    const endpoint = process.env.REACT_APP_URL + "/submit/assignment/";

    try {
      const response = await axios.post(endpoint, { username, assignment: id });
      return response.data;
    } catch (e) {
      throw e;
    }
  }
}

export { fetchStudentLabList, fetchLabDetail, saveQuestion, submitLab };
