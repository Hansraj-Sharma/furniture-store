import React, { Fragment, useEffect, useState } from "react";
import styles from "./style.module.css";
import HeroSection from "../../components/heroSection";
import Section from "../../components/section";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../../components/productCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SectionHeading from "../../components/sectionHeading";
import ShopCard from "../../components/shopCard";
import headBand01 from "../../assets/head-band01.png";
import earBuds from "../../assets/earbuds-img.png";
import Accessories from "../../assets/accessories-img.png";
import Banner from "../../components/banner";
import FeatureBox from "../../components/featureBox";
import ShippingIcon from "../../icons/shippingIcon";
import MoneyBackIcon from "../../icons/moneyBackIcon";
import SecureIcon from "../../icons/secureIcon";
import CallIcon from "../../icons/callIcon";
import Heading from "../../components/heading";
import ImgBox from "../../components/imgBox";
import Img01 from "../../assets/img01.png";
import Img02 from "../../assets/img02.png";
import Img03 from "../../assets/img03.png";
import Img04 from "../../assets/img04.png";
import Newsletter from "../../components/newsLetter";
import img01 from "../../assets/brand-logo01.png";
import img02 from "../../assets/brand-logo02.png";
import img03 from "../../assets/brand-logo03.png";
import img04 from "../../assets/brand-logo04.png";
import img05 from "../../assets/brand-logo05.png";
import img06 from "../../assets/brand-logo06.png";
import bgimg from "../../assets/newsletter-bg-img.png";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";

const BrandLogoData = [
  {
    imgUrl: img01,
  },
  {
    imgUrl: img02,
  },
  {
    imgUrl: img03,
  },
  {
    imgUrl: img04,
  },
  {
    imgUrl: img05,
  },
  {
    imgUrl: img06,
  },
];

const FeatureData = [
  {
    icon: <ShippingIcon />,
    title: "Free Shipping",
    description: "Order above $200",
  },
  {
    icon: <MoneyBackIcon />,
    title: "Money-back",
    description: "30 days guarantee",
  },
  {
    icon: <SecureIcon />,
    title: "Secure Payments",
    description: "Secured by Stripe",
  },
  {
    icon: <CallIcon />,
    title: "24/7 Support",
    description: "Phone and Email support",
  },
];

const ImageData = [
  {
    img: Img01,
  },
  {
    img: Img02,
  },
  {
    img: Img03,
  },
  {
    img: Img04,
  },
];

const Home = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=8")
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <Fragment>
      <HeroSection />

      <Section py={40}>
        <Container>
          <Row>
            <div className={styles.logo_main}>
              {BrandLogoData.map((value, index) => (
                <Col lg={2} md={4} sm={6} key={index}>
                  <ImgBox imgUrl={value.imgUrl} />
                </Col>
              ))}
            </div>
          </Row>
        </Container>
      </Section>

      <Section>
        <Container>
          <Row>
            <Col lg={12}>
              <SectionHeading title={"New Arrivals"} py={48} />
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Swiper
                modules={[Autoplay]}
                spaceBetween={40}
                slidesPerView={4}
                autoplay={{ delay: 2000 }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                  },
                  640: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  1024: {
                    slidesPerView: 4,
                  },
                }}
                scrollbar={{ draggable: true }}
                loop={true}
                pagination={{ clickable: true }}
              >
                {product.map((product, index) => (
                  <Col lg={3} key={index}>
                    <SwiperSlide>
                      <ProductCard
                        id={product.id}
                        productItem={product}
                        img={product.image}
                        name={product.title}
                        price={product.price}
                        isNew={product.rating.rate > 4}
                      />
                    </SwiperSlide>
                  </Col>
                ))}
              </Swiper>
            </Col>
          </Row>
        </Container>
      </Section>

      <Section>
        <Container>
          <Row>
            <SectionHeading title={"Shop Collection"} py={48} />
          </Row>
          <Row>
            <Col lg={6} className="pb-1">
              <ShopCard imgUrl={headBand01} name={"Headband"} />
            </Col>
            <Col lg={6} className="pb-1">
              <Row className="g-4">
                <Col lg={12}>
                  <ShopCard imgUrl={earBuds} name={"Earbuds"} />
                </Col>
                <Col lg={12}>
                  <ShopCard imgUrl={Accessories} name={"Accessories"} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Section>

      <Section>
        <Container>
          <Row>
            <SectionHeading title={"Best Seller"} py={48} />
          </Row>
          <Row>
            {product.map((product, index) => (
              <Col lg={3} md={6} key={index}>
                <ProductCard
                  id={product.id}
                  productItem={product}
                  img={product.image}
                  name={product.title}
                  price={product.price}
                  isNew={product.rating.rate > 4}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </Section>

      <Section>
        <Banner />
      </Section>

      <Section py={40}>
        <Container>
          <Row>
            {FeatureData.map((value, index) => (
              <Col lg={3} md={6} sm={6} key={index}>
                <FeatureBox
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                  bgColor={"light_brown"}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </Section>

      <Section py={40}>
        <Container>
          <Row>
            <Heading
              subtitle={"newsfeed"}
              title={"Instagram"}
              description={
                "Follow us on social media for more discount & promotions"
              }
              info={"@3legant_official"}
            />
          </Row>
          <div className={styles.img_box}>
            <Row>
              {ImageData.map((value, index) => (
                <Col lg={3} md={6} key={index}>
                  <ImgBox imgUrl={value.img} />
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </Section>

      <Section>
        <Container fluid className="g-0">
          <Newsletter bgImg={bgimg} />
        </Container>
      </Section>
    </Fragment>
  );
};

export default Home;
