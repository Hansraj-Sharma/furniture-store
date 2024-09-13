import React from "react";
import styles from "./style.module.css";

const ImgBox = ({ imgUrl }) => {
  return (
    <div className={styles.img_box}>
      <img src={imgUrl} alt="img" />
    </div>
  );
};

export default ImgBox;
