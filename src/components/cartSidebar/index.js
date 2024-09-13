import React, { Fragment, useContext } from "react";
import styles from "./style.module.css";
import img from "../../assets/cartImg01.png";
import Button from "../button";
import CartItem from "./cartItem";
import CloseIcon from "../../icons/closeIcon";
import { CartContext } from "../../context/cartProvider";

const CardSidebar = ({ CartBar, onClose }) => {
  const { cart, removeFromCart, clearCart, updateQuantity } =
    useContext(CartContext);

  const handleQuantityChange = (itemId, newQuantity) => {
    updateQuantity(itemId, newQuantity);
  };

  return (
    <Fragment>
      <div className={`${styles.cardSidebar} ${CartBar ? styles.open : ""}`}>
        <div className={styles.cs_head}>
          <div className={styles.cs_inner}>
            <div className={styles.cs_title}>Cart</div>
            <button onClick={onClose} className={styles.cs_close_button}>
              <CloseIcon />
            </button>
          </div>
        </div>
        <div className={styles.cs_body}>
          {cart.map((value, index) => (
            <CartItem
              key={index}
              id={value.id}
              quantity={value.quantity}
              imgUrl={value.image}
              name={value.title}
              color={value.color}
              price={value.price}
              count={value.count}
              removeFromCart={removeFromCart}
              handleQuantityChange={handleQuantityChange}
            />
          ))}
        </div>
        <div className={styles.cs_footer}>
          <div className={styles.csf_inner}>
            <div className={styles.csf_info}>
              <div className={styles.sub_total}>
                Subtotal <span>$99.00</span>
              </div>
              <div className={styles.total}>
                Total <span>$234.00</span>
              </div>
              <div className={styles.btn}>
                {cart.length > 0 && (
                  <div className={styles.view_cart}>
                    <Button
                      btn={true}
                      title={"Clear cart"}
                      size={"b_medium"}
                      width={"full"}
                      customClass={styles.cart_btn}
                      onClick={clearCart}
                    />
                  </div>
                )}
                <div className={styles.checkout_btn}>
                  <Button
                    to={"/checkOut"}
                    title={"CheckOut"}
                    lbtn_size={"l_large"}
                    customClass={styles.check_btn}
                  />
                </div>
                <div className={styles.view_cart}>
                  <Button
                    to={"/cart"}
                    title={"View Cart"}
                    lbtn_size={"l_text"}
                    color={"l_black"}
                    customClass={styles.cart_btn}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={onClose}
        className={`${styles.cs_overlay} ${CartBar ? styles.open : ""}`}
      ></div>
    </Fragment>
  );
};

export default CardSidebar;
