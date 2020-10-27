import React, { useState } from "react";

import { authenticate } from "../repo/auth";

import styles from "./login.module.css";

function Login({ dispatch }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function submitForm(e) {
    e.preventDefault();

    try {
      const { token } = await authenticate(username, password);
      dispatch({ type: "LOGIN", payload: { username, token } });
    } catch (error) {
      // TODO: add error displaying logic
      console.log(error);
    }
  }

  return (
    <main>
      <section className={styles.container}>
        <h1 className={styles.title}>AutoGrade</h1>
        <h4 className={styles.subTitle}>Sign in to continue</h4>
        <form onSubmit={submitForm} className={styles.formContainer}>
          <div className={styles.inputContainer}>
            <label className={styles.inputLabel}>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              minLength={4}
              maxLength={16}
              required
              className={styles.inputText}
            ></input>
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.inputLabel}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={4}
              maxLength={16}
              required
              className={styles.inputText}
            ></input>
          </div>
          <input type="submit" value="LOGIN" className={styles.login} />
        </form>
        <p className={styles.signup}>
          Don't have an account?{" "}
          <button className={styles.signupButton}>Signup</button>
        </p>
      </section>
    </main>
  );
}

export default Login;
