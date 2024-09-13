import React, { useContext } from "react";
import styles from "./style.module.css";
import { SnackContext } from "../../context/snackProvider";

const Snackbar = () => {
  const { snackShow, showMessage } = useContext(SnackContext);
  return (
    <>
      {snackShow && (
        <div className={`${styles.snackbar} ${snackShow ? styles.show : ""}  `}>
          {showMessage}
        </div>
      )}
    </>
  );
};

export default Snackbar;
