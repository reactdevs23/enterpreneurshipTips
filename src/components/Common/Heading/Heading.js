import React from "react";
import styles from "./Heading.module.css";

const Heading = ({ heading, headingIcon, headingBg, id, fontFamily }) => {
  return (
    <div
      className={styles.headingContainer}
      style={{ "--color": headingBg, fontFamily: fontFamily }}
    >
      {id % 2 !== 0 ? (
        <div className={styles.idContainer}>#{id}</div>
      ) : (
        <div className={styles.headingIcon}>{headingIcon}</div>
      )}
      <h2 className={styles.heading}>{heading}</h2>
      {id % 2 !== 0 ? (
        <div className={styles.headingIcon}>{headingIcon}</div>
      ) : (
        <div className={styles.idContainer}>#{id}</div>
      )}
      <div
        className={styles.circleContainer}
        style={{
          left: id % 2 === 0 ? "12%" : "auto",
          right: id % 2 === 0 ? "auto" : "12%",
        }}
      >
        {Array.from({ length: 3 }, (_, index) => (
          <div className={styles.circle} key={index}></div>
        ))}
      </div>
    </div>
  );
};

export default Heading;
