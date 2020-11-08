import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

import Modal from "./modal";

import styles from "./info.module.css";

function Info({ modal, id, desc, setmodal }) {
  if (modal === id) {
    return (
      <Modal>
        <div className={styles.markdownWrapper}>
          <ReactMarkdown plugins={[gfm]} children={desc} />
        </div>
        <div className={styles.footer}>
          <button className={styles.exit} onClick={() => setmodal("")}>
            EXIT
          </button>
        </div>
      </Modal>
    );
  }

  return <></>;
}

export default Info;
