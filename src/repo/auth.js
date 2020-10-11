async function authenticate(username, password, role) {
  //TODO: call api endpoint to authenticate user
  // this is currently a mock api call that will always succeed
  return {
    token: "faketoken",
    subjects: [
      { id: "100434324", name: "Python", prof: "Dr.Snake Cobra" },
      { id: "100543432", name: "C++", prof: "Dr.Eye Glasses" },
    ],
  };
}
export { authenticate };
