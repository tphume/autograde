import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

import Modal from "./modal";

import styles from "./subjectList.module.css";

function SubjectList({ subjects, current, setCurrent }) {
  const [modal, setModal] = useState("");

  return (
    <section>
      <ul>
        {subjects.map((s) => {
          return (
            <li
              key={s.id}
              className={`${styles.card} ${
                current === s.id ? styles.current : ""
              }`}
              onClick={() => setCurrent(s.id)}
            >
              <h3 className={styles.name}>{s.name}</h3>
              <h6 className={styles.id}>{s.id}</h6>
              <div className={styles.bottom}>
                <h4 className={styles.prof}>{s.prof}</h4>
                <button className={styles.info} onClick={() => setModal(s.id)}>
                  INFO
                </button>
              </div>
              <Info modal={modal} id={s.id} desc={s.desc} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function Info({ modal, id, desc }) {
  if (modal === id) {
    return (
      <Modal>
        <div className={styles.markdownWrapper}>
          <ReactMarkdown plugins={[gfm]} children={desc} />
        </div>
      </Modal>
    );
  }

  return <></>;
}

export default SubjectList;
