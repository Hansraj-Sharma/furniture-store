import React from "react";
import styles from "./style.module.css";
import img01 from "../../assets/brand-logo01.png";
import img02 from "../../assets/brand-logo02.png";
import img03 from "../../assets/brand-logo03.png";
import img04 from "../../assets/brand-logo04.png";
import img05 from "../../assets/brand-logo05.png";
import img06 from "../../assets/brand-logo06.png";

const BrandLogoData = [
  {
    imgUrl: img01,
  },
  {
    imgUrl: img02,
  },
  {
    imgUrl: img03,
  },
  {
    imgUrl: img04,
  },
  {
    imgUrl: img05,
  },
  {
    imgUrl: img06,
  },
];

const BrandLogo = () => {
  return (
    <div className={styles.brand_logo}>
      {BrandLogoData.map((value, index) => (
        <img src={value.imgUrl} alt="logo img" key={index} />
      ))}
    </div>
  );
};

export default BrandLogo;
