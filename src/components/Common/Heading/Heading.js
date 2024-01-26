import React from "react";
import styles from "./Heading.module.css";

const Heading = ({ heading, headingIcon, headingBg, id }) => {
  return (
    <div className={styles.headingContainer} style={{ "--color": headingBg }}>
      {id % 2 !== 0 ? (
        <div className={styles.idContainer}>#{id}</div>
      ) : (
        <img src={headingIcon} alt="#" className={styles.headingIcon} />
      )}
      <h2 className={styles.heading}>{heading}</h2>
      {id % 2 !== 0 ? (
        <img src={headingIcon} alt="#" className={styles.headingIcon} />
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
