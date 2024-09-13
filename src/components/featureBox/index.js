import React from "react";
import styles from "./style.module.css";
import { Col } from "react-bootstrap";

const FeatureBox = ({ bgColor, icon, title, description }) => {
  return (
      <div className={`${styles.feature_box} ${styles[bgColor]}`}>
        <div>
          <div className={`${styles.feature_icon} `}>{icon}</div>
          <div className={styles.feature_title}>{title}</div>
          <div className={styles.feature_description}>{description}</div>
        </div>
      </div>
  );
};

export default FeatureBox;
