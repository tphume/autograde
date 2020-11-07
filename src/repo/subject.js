async function fetchSubjectList(token) {
  //TODO: call api endpoint to fetch list of subjects
  // this is currently a mock api call that will always succeed
  return [
    {
      id: "100434324",
      name: "Python",
      prof: "Dr.Snake Cobra",
      desc: `
      # About Python
      Python is a strong language for beginners.
      There are many resources available for programmers of all levels, 
      the code is highly readable, and in many cases phrases are comparable to those in the English language.
      `,
    },
    {
      id: "100543432",
      name: "C++",
      prof: "Dr.Eye Glasses",
      desc: `
      # About C++
      C++ (pronounced cee plus plus) is a general purpose programming language developed by Bjarne Stroustrup
      starting in 1979 at Bell Labs. It is immensely popular, particularly for applications that require speed
      and/or access to some low-level features. It is considered to be an intermediate level language,
      as it encapsulates both high and low level language features.
      `,
    },
  ];
}
export { fetchSubjectList };
