import React from "react";

import styles from "./gradeModal.module.css";

function GradeModal({ setdetail }) {
  return (
    <section>
      <div className={styles.footer}>
        <button className={styles.exit} onClick={() => setdetail("")}>
          EXIT
        </button>
      </div>
    </section>
  );
}

export default GradeModal;
