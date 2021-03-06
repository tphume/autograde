import React from "react";

import styles from "./modal.module.css";

function Modal({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>{children}</div>
    </div>
  );
}

export default Modal;
