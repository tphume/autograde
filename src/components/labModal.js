import React from "react";

import styles from "./labModal.module.css";

function LabModal({ setdetail }) {
  return (
    <section>
      <div className={styles.footer}>
        <button className={styles.save}>SAVE</button>
        <button className={styles.exit} onClick={() => setdetail("")}>
          EXIT
        </button>
      </div>
    </section>
  );
}

export default LabModal;
