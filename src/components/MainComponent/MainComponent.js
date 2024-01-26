import React from "react";
import styles from "./MainComponent.module.css";

import Heading from "../Common/Heading/Heading";
import SwipeButton from "../Common/SwipeButton/SwipeButton";
import TextContainer from "../Common/TextContainer/TextContainer";

const MainComponent = ({
  id,
  headingInfo,
  title,
  info,
  task,
  img,
  email,
  fontFamily,
  background,
  bottomLeftIcon,
  topRightIcon,
  totalData,
}) => {
  return (
    <section
      className={styles.wrapper}
      style={{
        fontFamily: fontFamily,
        background: background,
      }}
    >
      <Heading id={id} {...headingInfo} />
      <div className={styles.container}>
        <TextContainer title={title} info={info} task={task} />
        {totalData !== id && <SwipeButton onClick={() => {}} />}
        {totalData === id && (
          <a href={`mailto:${email}`} className={styles.email}>
            {email}
          </a>
        )}
      </div>
      {img && <img src={img} alt="#" className={styles.img} />}
      {bottomLeftIcon && (
        <img src={bottomLeftIcon} alt="#" className={styles.bottomLeftIcon} />
      )}{" "}
      {topRightIcon && (
        <img src={topRightIcon} alt="#" className={styles.topRightIcon} />
      )}
    </section>
  );
};

export default MainComponent;
