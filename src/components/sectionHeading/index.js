import React from "react";
import styles from "./style.module.css";

const SectionHeading = ({ title, py }) => {
  return (
    <div className={`${styles.heading} ${styles["py-" + py]}`}>{title}</div>
  );
};

export default SectionHeading;
