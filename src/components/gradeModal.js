import React, { useState, useEffect } from "react";

import styles from "./gradeModal.module.css";

function GradeModal({ setdetail }) {
  const [state, setState] = useState();

  useEffect(() => {}, []);

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
