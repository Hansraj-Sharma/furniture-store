import React, { useState, useEffect, useRef } from "react";
import styles from "./style.module.css";
import { Col, Container, Row } from "react-bootstrap";
import StarIcon from "../../icons/starIcon";
import Button from "../button";
import WishListIcon from "../../icons/wishlistIcons";
import { Link } from "react-router-dom";
import img4 from "../../assets/review-user-img.png";
import "swiper/css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactImageMagnify from "react-image-magnify";

const UserData = [
  {
    img: img4,
    name: "Sofia Harvetz",
    description:
      "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
  },
  {
    img: img4,
    name: "Sofia Harvetz",
    description:
      "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
  },
  {
    img: img4,
    name: "Sofia Harvetz",
    description:
      "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
  },
  {
    img: img4,
    name: "Sofia Harvetz",
    description:
      "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
  },
  {
    imgUrl: img4,
    name: "Sofia Harvetz",
    description:
      "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
  },
];

const SProduct = ({ img, name, id, addToCart, item, price, cart }) => {
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sliderRef = useRef(null);
  const images = [img, img, img];

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    afterChange: (current) => setCurrentImageIndex(current),
  };

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  const handleQuantityChange = (type) => {
    if (type === "minus" && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (type === "plus") {
      setQuantity(quantity + 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(item, quantity);
  };

  const [showGOToCart, setShowGoToCart] = useState(false);

  useEffect(() => {
    const existingItemIndex = cart.findIndex((item) => item.id === id);
    if (existingItemIndex !== -1) {
      setShowGoToCart(true);
    } else {
      setShowGoToCart(false);
    }
  }, [cart, id]);

  return (
    <Container>
      <Row>
        <Col lg={6}>
          <div className={styles.product_slider}>
            <div className={`${styles.product_big_img}`}>
              <Slider {...settings} ref={sliderRef}>
                {images.map((image, imgIndex) => (
                  <div key={imgIndex}>
                    <ReactImageMagnify
                      {...{
                        smallImage: {
                          src: image,
                          alt: `Product Image ${imgIndex}`,
                          isFluidWidth: true,
                        },
                        largeImage: {
                          src: image,
                          width: 1200,
                          height: 1800,
                        },
                        isHintEnabled: true,
                        shouldHideHintAfterFirstActivation: false,
                        enlargedImagePosition: "over",
                      }}
                    />
                  </div>
                ))}
              </Slider>
            </div>
            <div className={styles.product_small_img}>
              {images.map((image, imgIndex) => (
                <div
                  key={imgIndex}
                  className={`${styles.small_img} ${
                    currentImageIndex === imgIndex ? styles.active : ""
                  }`}
                  onClick={() => handleImageClick(imgIndex)}
                >
                  <img src={image} alt={`Image ${imgIndex}`} />
                </div>
              ))}
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <div className={styles.product_details}>
            <div className={styles.review}>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <span>11 Reviews</span>
            </div>
            <h2 className={styles.title}> {name}</h2>
            <p>
              Buy one or buy a few and make every space where you sit more
              convenient. Light and easy to move around with removable tray top,
              handy for serving snacks.
            </p>
            <div className={styles.price}>
              ${price}
              <del>$400.00</del>
            </div>
            <div className={styles.expires_datdline}>
              <div className={styles.expires_date_text}>Offer expires in:</div>
              <div className={styles.expires_date}>
                <div className={styles.expires_date_time}>
                  <div className={styles.title}>02</div>
                  <span>Days</span>
                </div>
                <div className={styles.expires_date_time}>
                  <div className={styles.title}>12</div>
                  <span>Hours</span>
                </div>
                <div className={styles.expires_date_time}>
                  <div className={styles.title}>45</div>
                  <span>Minutes</span>
                </div>
                <div className={styles.expires_date_time}>
                  <div className={styles.title}>05</div>
                  <span>Seconds</span>
                </div>
              </div>
            </div>
            <div className={styles.other_info}>
              <div className={styles.measurements}>
                Measurements
                <span>17 1/2x20 5/8 "</span>
              </div>
              <div className={styles.choose_color}>
                <div className={styles.color_title}>Choose Color</div>
              </div>
              <div className={styles.color_name}>Black</div>
              <div className={styles.color_img}>
                <img src={img} alt="product color" />
                <img src={img} alt="product color" />
                <img src={img} alt="product color" />
                <img src={img} alt="product color" />
              </div>
            </div>
            <div className={styles.wish_cart_btn}>
              <div className={styles.wish_qua}>
                <div className={styles.product_quotient}>
                  <button onClick={() => handleQuantityChange(`minus`)}>
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    className={styles.product_count}
                  />
                  <button onClick={() => handleQuantityChange(`plus`)}>
                    +
                  </button>
                </div>
                <div className={styles.buttons}>
                  <Button
                    btn={true}
                    size={"b_medium"}
                    title={"Wishlist"}
                    customClass={styles.wishlist_btn}
                  />
                  <div className={styles.wishlist_icon}>
                    <WishListIcon />
                  </div>
                </div>
              </div>
              <div className={styles.add_cart_button}>
                {!showGOToCart ? (
                  <Button
                    btn={true}
                    size={"b_large"}
                    title={"Add to Cart"}
                    customClass={styles.cart_btn}
                    onClick={handleAddToCart}
                  />
                ) : (
                  <Button
                    btn={true}
                    size={"b_large"}
                    title={"Go to Cart"}
                    customClass={styles.cart_btn}
                    onClick={handleAddToCart}
                  />
                )}
              </div>
            </div>
            <div className={styles.sku_category}>
              <div className={styles.sku}>
                SKU <span>1117</span>
              </div>
              <div className={styles.category}>
                CATEGORY <span>Living Room, Bedroom</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <div className={styles.product_features}>
          <div className={styles.pf_option}>
            <Link className={styles.additional_info}>Additional Info</Link>
            <Link className={styles.additional_info}>Questions</Link>
            <Link className={styles.additional_info}>Reviews</Link>
          </div>
          <div className={styles.customer_reviews}>
            <div className={styles.cr_title}>Customer Reviews</div>
            <div className={styles.review}>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <span>11 Reviews</span>
            </div>
            <div className={styles.tray_table}>Tray Table</div>
            <div className={styles.review_btn}>
              <Button
                btn={true}
                size={"round_btn"}
                title={"Write Review"}
                customClass={styles.btn}
              />
            </div>
            <div className={styles.review_details}>
              <div className={styles.review_details_inner}>
                <div className={styles.review_count}>
                  <span>11 Reviews</span>
                  <select>
                    <option value={"newest01"}>Newest01</option>
                    <option value={"newest01"}>Newest02</option>
                    <option value={"newest01"}>Newest03</option>
                  </select>
                </div>
                {UserData.map((value, index) => (
                  <div className={styles.user_info} key={index}>
                    <div className={styles.user_img}>
                      <img src={value.imgUrl} alt="user-img" />
                    </div>
                    <div className={styles.user_data}>
                      <div className={styles.user_name}>{value.name}</div>
                      <div className={styles.review}>
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                      </div>
                      <p className={styles.description}>{value.description}</p>
                      <div className={styles.like_reply_btn}>
                        <button>Like</button>
                        <button>Reply</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.load_more_btn}>
              <Button btn={true} title={"Load more"} size={"round_btn"} />
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default SProduct;
