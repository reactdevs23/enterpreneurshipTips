import React from "react";
import styles from "./TextContainer.module.css";

const TextContainer = ({ title, info, task }) => {
  return (
    <>
      {title && (
        <h1
          className={styles.title}
          dangerouslySetInnerHTML={{ __html: title }}
        ></h1>
      )}
      {info && <p className={styles.info}>{info}</p>}

      {task && (
        <ul
          className={styles.listContainer}
          style={{ background: task.background }}
        >
          {task.taskList.map((task, i) => (
            <li className={styles.list} key={i}>
              {task}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default TextContainer;
