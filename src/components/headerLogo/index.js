import React from "react";
import styles from "./style.module.css";
import logoImg from "../../assets/logo.png";

const HeaderLogo = ({ imgUrl = logoImg }) => {
  return <img src={imgUrl} alt="logo img" className={ styles.logo_img} />;
};

export default HeaderLogo;
