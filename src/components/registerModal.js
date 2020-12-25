import React, { useState } from "react";

import { register } from "../repo/auth";
import Modal from "./modal";

import styles from "./registerModal.module.css";
import loginStyles from "./login.module.css";

function RegisterModal({ setShowReg, dispatch }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onSubmit(e) {
    e.preventDefault();

    try {
      const { token, user } = await register(name, username, email, password);
      dispatch({ type: "LOGIN", payload: { username, token, id: user.id } });
      setShowReg(false);
    } catch (error) {
      // TODO: add error displaying logic
      console.log(error);
    }
  }

  return (
    <Modal>
      <section className={styles.root}>
        <h1 className={loginStyles.title}>Create account</h1>
        <h4 className={loginStyles.subTitle}>
          Fill in all the filed to continue
        </h4>
        <form className={loginStyles.formContainer} onSubmit={onSubmit}>
          <div className={loginStyles.inputContainer}>
            <label className={loginStyles.inputLabel}>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              minLength={3}
              maxLength={30}
              required
              className={loginStyles.inputText}
            ></input>
          </div>
          <div className={loginStyles.inputContainer}>
            <label className={loginStyles.inputLabel}>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              minLength={4}
              maxLength={16}
              required
              className={loginStyles.inputText}
            ></input>
          </div>
          <div className={loginStyles.inputContainer}>
            <label className={loginStyles.inputLabel}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={loginStyles.inputText}
            ></input>
          </div>
          <div className={loginStyles.inputContainer}>
            <label className={loginStyles.inputLabel}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={4}
              maxLength={16}
              required
              className={loginStyles.inputText}
            ></input>
          </div>
          <input type="submit" value="Signup" className={loginStyles.login} />
        </form>
        <button onClick={() => setShowReg(false)} className={styles.exit}>
          Cancel
        </button>
      </section>
    </Modal>
  );
}

export default RegisterModal;
