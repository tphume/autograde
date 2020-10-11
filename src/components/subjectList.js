import React, { useContext } from "react";

import { AuthContext } from "../contexts/auth";

function SubjectList() {
  const { authState } = useContext(AuthContext);

  return <h1>I am SubjectList placholder</h1>;
}

export default SubjectList;
