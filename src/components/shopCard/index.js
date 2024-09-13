import React from "react";
import styles from "./style.module.css";
import Button from "../button";

const ShopCard = ({ imgUrl, name }) => {
  return (
    <div className={`${styles.shop_card} `}>
      <div className={`${styles.shop_card} `}>
        <img src={imgUrl} alt="img" />
      </div>
      <div className={styles.shop_content}>
        <div className={styles.shop_title}>{name}</div>
        <div className={styles.shop_btn}>
          <Button
            title={"Collection"}
            lbtn_size={"l_text"}
            showArrow={true}
            color={"l_black"}
            fs={16}
          />
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
