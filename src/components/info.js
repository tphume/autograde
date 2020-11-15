import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

import Modal from "./modal";

import styles from "./info.module.css";

function Info({ info, setinfo }) {
  if (info.id === "") {
    return <></>;
  }

  return (
    <Modal>
      <div className={styles.markdownWrapper}>
        <ReactMarkdown plugins={[gfm]} children={info.description} />
      </div>
      <div className={styles.footer}>
        <button className={styles.exit} onClick={() => setinfo({ id: "" })}>
          EXIT
        </button>
      </div>
    </Modal>
  );
}

export default Info;
