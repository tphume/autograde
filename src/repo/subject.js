async function fetchSubjectList(token) {
  //TODO: call api endpoint to fetch list of subjects
  // this is currently a mock api call that will always succeed
  return [
    { id: "100434324", name: "Python", prof: "Dr.Snake Cobra" },
    { id: "100543432", name: "C++", prof: "Dr.Eye Glasses" },
  ];
}
export { fetchSubjectList };
