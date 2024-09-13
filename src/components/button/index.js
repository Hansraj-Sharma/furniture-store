import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

const Button = ({
  btn = false,
  title,
  type,
  size,
  lbtn_size,
  align,
  showArrow,
  width,
  color,
  fs,
  customClass,
  onClick,
  to,
}) => {
  return (
    <div className={`${styles.button}  `}>
      {btn ? (
        <button
          onClick={onClick}
          className={`${styles[type]} ${styles[size]} ${customClass}`}
        >
          {title}
        </button>
      ) : (
        <Link
          to={to}
          className={` ${styles.link} ${styles[lbtn_size]} ${styles[width]} ${
            styles[align]
          } ${styles[color]} ${styles["fs-" + fs]}  
          } ${customClass}`}
        >
          {title}
          {showArrow && <span className={styles.arrow}></span>}
        </Link>
      )}
    </div>
  );
};

export default Button;
