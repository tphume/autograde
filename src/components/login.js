import React, { useState, useContext } from "react";
import { useSnackbar } from "react-simple-snackbar";

import { LoadingContext } from "../contexts/loading";
import { authenticate } from "../repo/auth";
import RegisterModal from "./registerModal";

import styles from "./login.module.css";

const options = {
  style: {
    backgroundColor: "#c53a2a",
  },
};

function Login({ dispatch }) {
  const load = useContext(LoadingContext);
  const [openSnackbar] = useSnackbar(options);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showReg, setShowReg] = useState(false);

  async function submitForm(e) {
    e.preventDefault();
    load.setLoading(true);

    try {
      const { token, user } = await authenticate(username, password);
      dispatch({ type: "LOGIN", payload: { username, token, id: user.id } });
    } catch (error) {
      console.log(error);
      openSnackbar("Authentication error", 3000);
    }

    load.setLoading(false);
  }

  return (
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
        <button
          className={styles.signupButton}
          onClick={() => setShowReg(true)}
        >
          Signup
        </button>
      </p>
      {showReg && <RegisterModal setShowReg={setShowReg} dispatch={dispatch} />}
    </section>
  );
}

export default Login;
