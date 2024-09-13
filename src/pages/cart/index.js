import React, { useContext, useState, useCallback } from "react";
import Button from "../../components/button";
import TicketPerIcon from "../../icons/ticketPerIcon";
import styles from "./style.module.css";
import { Col, Row } from "react-bootstrap";
import { CartContext } from "../../context/cartProvider";
import CartItem from "../../components/cartSidebar/cartItem";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const handleQuantityChange = (itemId, newQuantity) => {
    updateQuantity(itemId, newQuantity);
  };
  const quantityChange = useCallback(
    (id, quantity, type) => {
      if (type === "minus" && quantity > 1) {
        handleQuantityChange(id, quantity - 1);
      } else if (type === "plus") {
        handleQuantityChange(id, quantity + 1);
      } else {
        removeFromCart(id);
      }
    },
    [handleQuantityChange, removeFromCart]
  );

  return (
    <div className={styles.cartBox}>
      <h1 className={styles.heading}>Cart</h1>

      <div className={styles.steps}>
        <div className={`${styles.step} ${styles.active}`}>
          <span>1</span> Shopping cart
        </div>
        <div className={styles.step}>
          <span>2</span> Checkout details
        </div>
        <div className={styles.step}>
          <span>3</span> Order complete
        </div>
      </div>

      <div className={styles.cartContent}>
        <Row>
          <Col lg={8}>
            <table className={styles.cartTable}>
              <thead>
                <tr>
                  <th colspan="2">Product</th>
                  <th className={styles.ct_head}>Quantity</th>
                  <th className={styles.ct_head}>Price</th>
                  <th className={styles.ct_head}>Subtotal</th>
                </tr>
              </thead>

              <tbody className={styles.ct_items}>
                {cart.map((value, index) => (
                  <tr key={index}>
                    <td colspan="2">
                      <div className={styles.product}>
                        <div className={styles.imgbox}>
                          <img
                            src={value.image}
                            alt={`${value.name} ${value.color}`}
                          />
                        </div>
                        <div className={styles.p_detile}>
                          <p>{value.title}</p>
                          <p>Color: black</p>
                          <button
                            className={styles.removeBtn}
                            onClick={() => {
                              removeFromCart(value.id);
                            }}
                          >
                            ✕ Remove
                          </button>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className={styles.product_quotient}>
                        <button
                          onClick={() =>
                            quantityChange(value.id, value.quantity, "minus")
                          }
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={value.quantity}
                          className={styles.product_count}
                          onChange={(e) =>
                            handleQuantityChange(
                              value.id,
                              Number(e.target.value)
                            )
                          }
                        />

                        <button
                          onClick={() =>
                            quantityChange(value.id, value.quantity, "plus")
                          }
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>${value.price.toFixed(2)}</td>
                    <td>${(value.quantity * value.price).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>

              <div className={styles.cart_items}>
                {cart.map((value, index) => (
                  <CartItem
                    key={index}
                    id={value.id}
                    imgUrl={value.image}
                    name={value.title}
                    price={value.price}
                    quantity={value.quantity}
                    removeFromCart={removeFromCart}
                    handleQuantityChange={handleQuantityChange}
                    color={"black"}
                  />
                ))}
              </div>
            </table>
          </Col>
          <Col lg={4}>
            <div className={styles.cartSummary}>
              <h2>Cart summary</h2>
              <div className={styles.shippingOptions}>
                <div className={styles.cs_option}>
                  <input
                    type="radio"
                    name="shipping"
                    id="option01"
                    defaultChecked
                  />
                  <label htmlFor="option01" className={styles.cs_label}>
                    Free shipping
                  </label>
                  <span>$0.00</span>
                </div>
                <div className={styles.cs_option}>
                  <input type="radio" name="shipping" id="option02" />
                  <label htmlFor="option02" className={styles.cs_label}>
                    Express shipping
                  </label>
                  <span>+$15.00</span>
                </div>
                <div className={styles.cs_option}>
                  <input type="radio" name="shipping" id="option03" />
                  <label htmlFor="option03" className={styles.cs_label}>
                    Pick Up
                  </label>
                  <span>%21.00</span>
                </div>
              </div>
              <div className={styles.total}>
                <p>
                  Subtotal <span>$1234.00</span>
                </p>
                <p>
                  Total <span>$1345.00</span>
                </p>
              </div>
              <Button
                to={"/checkOut"}
                lbtn_size={"l_large"}
                title={"Checkout"}
                customClass={styles.checkout_btn}
              />
            </div>
          </Col>
        </Row>
      </div>
      <Row>
        <Col lg={5}>
          <div className={styles.couponSection}>
            <h4>Have a coupon?</h4>
            <p>Add your code for an instant cart discount</p>
            <div className={styles.couponInput}>
              <TicketPerIcon color="#6C7275" />
              <input type="text" placeholder="Coupon Code" />
              <button>Apply</button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Cart;
