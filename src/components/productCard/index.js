import React, { useContext, useEffect, useState } from "react";
import styles from "./style.module.css";
import StarIcon from "../../icons/starIcon";
import WishListIcon from "../../icons/wishlistIcons";
import { Link } from "react-router-dom";
import Button from "../button";
import { CartContext } from "../../context/cartProvider";
import Snackbar from "../snackbar";
import { SnackContext } from "../../context/snackProvider";

const ProductCard = ({ productItem, name, price, img, isNew, id }) => {
  const { handleSnackBar, snackId } = useContext(SnackContext);
  const { cart, addToCart } = useContext(CartContext);
  const [showGOToCart, setShowGoToCart] = useState(false);

  useEffect(() => {
    const existingItemIndex = cart.findIndex((item) => item.id === id);
    if (existingItemIndex !== -1) {
      setShowGoToCart(true);
    } else {
      setShowGoToCart(false);
    }
  }, [cart, id]);

  const handleAddToCart = (item) => {
    addToCart(item);
    handleSnackBar(id, "added product");
  };

  return (
    <div className={styles.product_card}>
      <div className={styles.product_thumb}>
        <div className={styles.product_thumb_img}>
          <Link to={`/singleProduct/${id}`}>
            <img src={img} alt="product img" />
          </Link>
        </div>
        {isNew && <div className={styles.new}>New</div>}
        <div className={styles.wishlist}>
          <button to="#">
            <WishListIcon />
          </button>
        </div>
        <div className={styles.btn}>
          {!showGOToCart ? (
            <Button
              customClass={styles.button}
              btn={true}
              title={"Add to cart"}
              size={"b_medium"}
              width={"full"}
              onClick={() => handleAddToCart(productItem)}
            />
          ) : (
            <Button
              title={"Go to cart"}
              lbtn_size={"l_medium"}
              width={"full"}
              to={"/cart"}
            />
          )}
        </div>
      </div>
      <div className={styles.product_content}>
        <div className={styles.product_content_rating}>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
        <div className={styles.product_name}>
          <Link to={`/singleProduct/${id}`}>{name}</Link>
        </div>
        <div className={styles.product_price}>${price}</div>
      </div>
      {snackId === id && <Snackbar />}
    </div>
  );
};

export default ProductCard;
