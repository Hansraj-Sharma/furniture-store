import React, { useContext } from "react";
import styles from "./style.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { CartContext } from "../../context/cartProvider";
import Button from "../../components/button";
import CartItem from "../../components/cartSidebar/cartItem";
import Section from "../../components/section";
import { AddressContext } from "../../context/addressProvider";

const CheckOut = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const { address, setAddress } = useContext(AddressContext);

  const handleQuantityChange = (itemId, newQuantity) => {
    updateQuantity(itemId, newQuantity);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddress({
      ...address,
      [name]: value,
    });
  };

  const subtotal = cart.reduce(
    (stotle, item) => stotle + item.price * item.quantity,
    0
  );

  const total = subtotal === 0 ? 0 : subtotal - 25;

  return (
    <Section py={40}>
      <Container>
        <Row>
          <Col lg={7}>
            <div className={`${styles.contact_info} mb-4`}>
              <div className={styles.title}>Contact Infomation</div>
              <div className={`${styles.user_name} pt-3`}>
                <div className="w-100">
                  <label htmlFor="f_name">FIRST NAME</label>
                  <br />

                  <input
                    type="text"
                    id="f_name"
                    placeholder="First name"
                    name="firstName"
                    value={address.firstName || ""}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="w-100">
                  <label htmlFor="l_name">LAST NAME</label>
                  <br />
                  <input
                    type="text"
                    id="l_name"
                    placeholder="Last name"
                    name="lastName"
                    value={address.lastName || ""}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="w-100 pt-3">
                <label htmlFor="p_number">PHONE NUMBER</label>
                <br />
                <input
                  type="number"
                  id="p_number"
                  placeholder="Phone number"
                  name="phoneNumber"
                  value={address.phoneNumber || ""}
                  onChange={handleInputChange}
                />
              </div>

              <div className="w-100 pt-3">
                <label htmlFor="email">EMAIL ADDRESS</label>
                <br />
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  name="email"
                  value={address.email || ""}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className={`${styles.shipping_address} mb-4`}>
              <div className={styles.title}>Shipping Address</div>
              <div className="w-100 pt-3">
                <label htmlFor="address">STREET ADDRESS *</label>
                <br />
                <input
                  type="text"
                  id="address"
                  placeholder="Street Address"
                  name="streetAddress"
                  value={address.streetAddress || ""}
                  onChange={handleInputChange}
                />
              </div>

              <div className="w-100 pt-3">
                <label htmlFor="country">COUNTRY *</label>
                <br />
                <select id="country">
                  <option value={"country"}>Country</option>
                  <option value={"india"}>India</option>
                  <option value={"gova"}>Gova</option>
                </select>
              </div>

              <div className="w-100 pt-3">
                <label htmlFor="address">TOWN / CITY *</label>
                <br />
                <input
                  type="text"
                  id="address"
                  placeholder="Town / City"
                  name="townAddress"
                  value={address.townAddress || ""}
                  onChange={handleInputChange}
                />
              </div>

              <div className={`${styles.state_zip} pt-3`}>
                <div className="w-100">
                  <label htmlFor="state">STATE</label>
                  <br />
                  <input
                    type="text"
                    id="state"
                    placeholder="State"
                    name="state"
                    value={address.state || ""}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="w-100">
                  <label htmlFor="code">ZIP CODE</label>
                  <br />
                  <input
                    type="number"
                    id="code"
                    placeholder="Zip code"
                    name="zipCode"
                    value={address.zipCode || ""}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className={styles.b_address}>
                <input type="checkbox" id="b_address" />
                <label htmlFor="b_address">
                  Use a different billing address (optional)
                </label>
              </div>
            </div>

            <div className={`${styles.payment_method} mb-4`}>
              <div className={styles.title}>Payment method</div>
              <div className="pt-3">
                <div className={`${styles.pay_method}  `}>
                  <input type="radio" id="credit" />
                  <label htmlFor="credit">Pay by Card Credit</label>
                </div>
              </div>

              <div className={`${styles.pay_pal} pt-3 pb-4 `}>
                <div className={`${styles.pay_method} `}>
                  <input type="radio" id="paypal" />
                  <label htmlFor="paypal">Paypal</label>
                </div>
              </div>

              <div className="w-100 pt-3">
                <label htmlFor="card">CARD NUMBER</label>
                <br />
                <input type="number" id="card" placeholder="1234 1234 1234" />
              </div>

              <div className={`${styles.state_zip} pt-3`}>
                <div className="w-100">
                  <label htmlFor="date"> EXPIRATION DATE</label>
                  <br />
                  <input type="number" id="date" placeholder="MM/YY" />
                </div>

                <div className="w-100">
                  <label htmlFor="cvc">CVC</label>
                  <br />
                  <input type="number" id="cvc" placeholder="CVC code" />
                </div>
              </div>
            </div>

            <div className={styles.btn}>
              <Button
                title={"Place Order"}
                lbtn_size={"l_large"}
                customClass={styles.order_btn}
              />
            </div>
          </Col>
          <Col lg={5}>
            <div className={styles.order_summary}>
              <div className={styles.os_title}>Order summary</div>
              <div className={styles.product_main}>
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
              <div className={styles.os_footer}>
                <div className={styles.in_apply}>
                  <input
                    className={styles.apply_input}
                    type="text"
                    placeholder="Input"
                  />
                  <Button
                    title={"Apply"}
                    lbtn_size={"l_medium"}
                    customClass={styles.apply_btn}
                  />
                </div>
                <ul className={styles.os_other_info}>
                  <li className={styles.list_wrap}>
                    JenkateMW<span>-$25.00 [Remove]</span>
                  </li>
                  <li>
                    Shipping<span>Free</span>
                  </li>
                  <li>
                    Subtotal<span>${subtotal.toFixed(2)} </span>
                  </li>
                  <li className={styles.total}>
                    Total<span>${total.toFixed(2)}</span>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default CheckOut;
