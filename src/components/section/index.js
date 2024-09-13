import React from "react";
import styles from "./style.module.css";

const Section = ({ bgColor, pb, pt, py, children }) => {
  return (
    <div
      className={`${styles.section} ${styles[bgColor]} ${styles["pb-" + pb]} ${
        styles["pt-" + pt]
      } ${styles["py-" + py]} `}
    >
      {children}
    </div>
  );
};

export default Section;
