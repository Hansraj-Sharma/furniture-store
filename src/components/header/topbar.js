import React from "react";
import styles from "./style.module.css";
import TicketPerIcon from "../../icons/ticketPerIcon";
import Button from "../button";

const Topbar = ({ topBgColor, topColor }) => {
  return (
    <div
      className={`${styles.topbar}  ${styles[topBgColor]} ${styles[topColor]}`}
    >
      <TicketPerIcon />
      <span>30% off storewide — Limited time! </span>
      <div className={styles.btn}>
        <Button title={"Shop Now"} lbtn_size={"l_text"} />
      </div>
    </div>
  );
};

export default Topbar;
