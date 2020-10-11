import React, { useContext } from "react";

import { AuthContext } from "../contexts/auth";

function SubjectList() {
  const { state } = useContext(AuthContext);

  return (
    <section>
      <ul>{state.subjects.map((s) => subjectItem(s.id, s.name, s.prof))}</ul>
    </section>
  );
}

function subjectItem(id, name, prof) {
  return (
    <li key={id}>
      <h3>{name}</h3>
      <h6>{id}</h6>
      <h4>{prof}</h4>
    </li>
  );
}

export default SubjectList;
