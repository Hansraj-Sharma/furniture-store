import React from "react";
import styles from "./style.module.css";

const Heading = ({ subtitle, title, description, info, align = "center" }) => {
  return (
    <div className={`${styles.heading_box} ${styles[align]}`}>
      <div className={styles.subtitle}>{subtitle}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      <div className={styles.info}>{info}</div>
    </div>
  );
};

export default Heading;
