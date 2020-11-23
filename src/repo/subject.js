async function fetchSubjectList() {
  if (process.env.NODE_ENV === "production") {
    // TODO: call api endpoint to fetch list of subjects
    return;
  }

  // Below is the mock api
  return [
    {
      id: "100434324",
      name: "Python",
      prof: "Dr.Snake Cobra",
      description: `
# About Python
- [Overview](#overview)
- [Usecase](#usecase)
## Overview
**Python** is a strong language for beginners.
There are many resources available for programmers of all levels, 
the code is highly readable, and in many cases phrases are comparable to those in the English language.
## Usecase
      `,
    },
    {
      id: "100543432",
      name: "Javascript",
      prof: "Dr.Eye Glasses",
      description: `
# About Javascript
- [Overview](#overview)
- [Usecase](#usecase)
## Overviews
## Usecase
      `,
    },
  ];
}
export { fetchSubjectList };
