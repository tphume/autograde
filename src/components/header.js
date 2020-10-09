import React from "react";

function Header({ username }) {
  return (
    <header>
      <h1>AutoGrade</h1>
      <h4>{username}</h4>
    </header>
  );
}

export default Header;
