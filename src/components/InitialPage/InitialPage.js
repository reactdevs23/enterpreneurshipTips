import React from "react";
import styles from "./InitialPage.module.css";
import { dot } from "../../images";

const InitialPage = ({ heading, title, img, link, fontFamily, background }) => {
  return (
    <section
      className={styles.wrapper}
      style={{ fontFamily: fontFamily, background: background }}
    >
      <div className={styles.headingContainer}>
        <img src={dot} alt="#" className={styles.dot} />{" "}
        <h2 className={styles.heading}>{heading}</h2>
        <img src={dot} alt="#" className={styles.dot} />{" "}
      </div>
      <h1
        className={styles.title}
        dangerouslySetInnerHTML={{ __html: title }}
      ></h1>
      <img src={img} alt="#" className={styles.img1} />
      <div className={styles.linkContainer}>
        <i className="fa-solid fa-ellipsis"></i>
        <a href={link} target="_blank" rel="noreferrer" className={styles.link}>
          {link}
        </a>{" "}
        <i className="fa-solid fa-ellipsis"></i>
      </div>
    </section>
  );
};

export default InitialPage;
