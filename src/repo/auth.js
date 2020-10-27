async function authenticate(username, password) {
  //TODO: call api endpoint to authenticate user
  // this is currently a mock api call that will always succeed
  return {
    token: "faketoken",
  };
}
export { authenticate };
