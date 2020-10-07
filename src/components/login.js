import React, { useState } from "react";

import { authenticate } from "../repo/auth";

function Login({ dispatch }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");

  async function submitForm(e) {
    e.preventDefault();

    try {
      const token = await authenticate(username, password, role);
      dispatch({ type: "LOGIN", payload: { role, username, token } });
    } catch (error) {
      // TODO: add error displaying logic
      console.log(error);
    }
  }

  return (
    <main>
      <h1>Placeholder</h1>
      <form onSubmit={submitForm}>
        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.value)}
          ></input>
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.value)}
          ></input>
        </label>
        <label>
          Role
          <select value={role} onChange={(e) => setRole(e.value)}>
            <option value="teacher">teacher</option>
            <option value="student">student</option>
          </select>
        </label>
        <input type="submit" value="Login" />
      </form>
    </main>
  );
}

export default Login;
