import axios from "axios";

async function authenticate(username, password) {
  if (process.env.NODE_ENV === "production") {
    const endpoint = process.env.REACT_APP_URL + "/api/auth/login/";

    try {
      const response = await axios.post(endpoint, { username, password });
      return response.data;
    } catch (e) {
      throw e;
    }
  }

  // Below is the mock api
  return {
    token: "faketoken",
    user: {
      id: 2,
    },
  };
}

async function register(name, username, email, password) {
  if (process.env.NODE_ENV === "production") {
    const endpoint = process.env.REACT_APP_URL + "/api/auth/register/";

    try {
      const response = await axios.post(endpoint, {
        name,
        username,
        email,
        password,
      });
      return response.data;
    } catch (e) {
      throw e;
    }
  }

  // Below is the mock api
  return {
    token: "faketoken",
    user: {
      id: 2,
    },
  };
}

export { authenticate, register };
