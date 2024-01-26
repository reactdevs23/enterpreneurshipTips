import React from "react";
import styles from "./SwipeButton.module.css";

const SwipeButton = ({ onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      Swip
      <i
        className={["fa-solid fa-arrow-right-long", styles.arrow].join(" ")}
      ></i>
    </button>
  );
};

export default SwipeButton;
