import axios from "axios";

async function fetchOverview(userId, course_id) {
  if (process.env.NODE_ENV === "production") {
    const endpoint = `${process.env.REACT_APP_URL}/gradeoverview/user/${userId}/courses/${course_id}/`;

    try {
      const response = await axios.get(endpoint);

      return {
        course_avg:
          response.data.course_avg !== null ? response.data.course_avg : 0,
        student_avg:
          response.data.student_average !== null
            ? response.data.student_average
            : 0,
      };
    } catch (e) {
      throw e;
    }
  }

  return {
    course_avg: 50,
    student_avg: 70,
  };
}
export { fetchOverview };
