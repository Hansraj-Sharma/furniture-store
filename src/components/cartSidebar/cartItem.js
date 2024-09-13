import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { type } from "@testing-library/user-event/dist/type";

const CartItem = ({
  id,
  imgUrl,
  name,
  color,
  price,
  count,
  quantity,
  removeFromCart,
  handleQuantityChange,
}) => {
  const quantityChange = useCallback(
    (type) => {
      if (type === "minus" && quantity > 1) {
        handleQuantityChange(id, quantity - 1);
      } else if (type === "plus") {
        handleQuantityChange(id, quantity + 1);
      } else {
        removeFromCart(id);
      }
    },
    [handleQuantityChange, id, quantity]
  );

  return (
    <div className={styles.product_box}>
      <div className={styles.product_detail}>
        <Link to={"#"} className={styles.product_img}>
          <img src={imgUrl} alt="product-img" />
        </Link>
        <div className={styles.product_info}>
          <div className={styles.product_name}>{name}</div>
          <div className={styles.product_color}>color: {color}</div>
          <div className={styles.product_quotient}>
            <button onClick={() => quantityChange(`minus`)}>-</button>
            <input
              type="number"
              value={quantity}
              className={styles.product_count}
              onChange={(e) => handleQuantityChange(id, Number(e.target.value))}
            />

            <button onClick={() => quantityChange(`plus`)}>+</button>
          </div>
        </div>
      </div>
      <div className={styles.product_price}>
        <div className={styles.price}>${price}</div>
        <button
          className={styles.close_button}
          onClick={() => {
            removeFromCart(id);
          }}
        >
          x
        </button>
      </div>
    </div>
  );
};

export default CartItem;
