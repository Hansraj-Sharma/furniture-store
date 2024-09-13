import React, { useContext, useState } from "react";
import styles from "./style.module.css";
import { Container, Row } from "react-bootstrap";
import HeaderLogo from "../headerLogo";
import MenuItem from "../menuItem";
import SearchIcon from "../../icons/searchIcon";
import UserIcon from "../../icons/userIcon";
import CartIcon from "../../icons/cartIcon";
import { Link } from "react-router-dom";
import CardSidebar from "../cartSidebar";
import { CartContext } from "../../context/cartProvider";
import HamburgerIcon from "../../icons/hamburger";

const MenuItems = [
  {
    id: 1,
    title: "Home",
    path: "/home",
  },
  {
    id: 2,
    title: "Shop",
    path: "/shop",
  },
  {
    id: 3,
    title: "Product",
  },
  {
    id: 4,
    title: "Contact Us",
  },
];

const Navbar = ({ navBgColor, navColor }) => {
  const {
    cart,
    openCartSideBar,
    handleOpenCartSideBar,
    handleCloseCartSideBar,
  } = useContext(CartContext);

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      className={`${styles.navbar} ${styles[navBgColor]} ${styles[navColor]}`}
    >
      <Container>
        <Row>
          <div className={styles.main_nav}>
            <div className={styles.nav_logo}>
              <span className={styles.hb_icon} onClick={handleMenuToggle}>
                <HamburgerIcon />
              </span>
              <HeaderLogo />
            </div>
            <div className={styles.nav_items}>
              <div
                className={`${styles.menubar}  ${
                  menuOpen ? styles.menuOpen : ""
                }`}
              >
                <div className={styles.clsMenu} onClick={handleMenuToggle}>
                  close
                </div>
                {MenuItems.map((item, index) => (
                  <MenuItem key={index} item={item} />
                ))}
              </div>
            </div>
            <div className={`${styles.nav_icon}  `}>
              <div className={styles.nav_icon}>
                <button className={styles.nav_btn}>
                  <SearchIcon />
                </button>
                <Link to={"/signUp"} className={styles.nav_btn}>
                  <UserIcon />
                </Link>

                <button
                  className={styles.cart_btn}
                  onClick={handleOpenCartSideBar}
                >
                  <CartIcon />
                  <span>{cart.length}</span>
                </button>
                {openCartSideBar && (
                  <CardSidebar
                    CartBar={openCartSideBar}
                    onClose={handleCloseCartSideBar}
                  />
                )}
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Navbar;
