import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

import Modal from "./modal";

import styles from "./info.module.css";

function Info({ info, setinfo }) {
  if (info.id === "") {
    return <></>;
  }

  const renderers = {
    //This custom renderer changes how images are rendered
    //we use it to constrain the max width of an image to its container
    image: ({
      alt,
      src,
      title,
    }: {
      alt?: string,
      src?: string,
      title?: string,
    }) => <img alt={alt} src={src} title={title} style={{ maxWidth: 873 }} />,
  };

  return (
    <Modal>
      <div className={styles.markdownWrapper}>
        <ReactMarkdown
          plugins={[gfm]}
          children={info.description}
          renderers={renderers}
        />
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
