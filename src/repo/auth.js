async function authenticate(username, password) {
  if (process.env.NODE_ENV === "production") {
    //TODO: call api endpoint to authenticate user
    return;
  }

  // Below is the mock api
  return {
    token: "faketoken",
    user: {
      id: 2,
    },
  };
}
export { authenticate };
