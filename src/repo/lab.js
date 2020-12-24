import axios from "axios";

async function fetchStudentLabList(token, { username, course_id }) {
  if (course_id === "") return [];

  if (process.env.NODE_ENV === "production") {
    const endpoint = process.env.REACT_APP_URL + "/assignments/";

    try {
      const response = await axios.get(endpoint, {
        data: { course_id, username },
      });
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

async function fetchLabDetail(token, { username, course_id, id }) {
  if (id === "") return [];

  if (process.env.NODE_ENV === "production") {
    const endpoint = process.env.REACT_APP_URL + `/assignments/${id}/`;

    try {
      const response = await axios.get(endpoint, {
        data: { course_id, username },
      });
      return response.data;
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
    const endpoint = process.env.REACT_APP_URL + "/answer";

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

async function submitLab(token, { course_id, username }) {
  if (process.env.NODE_ENV === "production") {
    //TODO: call api endpoint to submit entire lab
    return;
  }
}

export { fetchStudentLabList, fetchLabDetail, saveQuestion, submitLab };
