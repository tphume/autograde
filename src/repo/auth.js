async function authenticate(username, password, role) {
  //TODO: call api endpoint to authenticate user
  // this is currently a mock api call that will always succeed
  return {
    token: "faketoken",
    subjects: [
      { id: "1", name: "Python" },
      { id: "2", name: "C++" },
    ],
  };
}
export { authenticate };
