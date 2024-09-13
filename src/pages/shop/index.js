import React, { Fragment, useEffect, useState } from "react";
import styles from "./style.module.css";
import Section from "../../components/section";
import { Col, Container, Row } from "react-bootstrap";
import BreadCrumb from "../../components/breadCrumb";
import SortBox from "../../components/sortBox";
import ProductCard from "../../components/productCard";
import Button from "../../components/button";
import Newsletter from "../../components/newsLetter";
import newsletterImg from "../../assets/newsletter-bg-img02.png";

const breadcrumbItems = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
];

const Shop = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=8")
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <Fragment>
      <Section>
        <Container>
          <Row>
            <Col lg={12} className="g-0">
              <BreadCrumb items={breadcrumbItems} />
            </Col>
          </Row>
        </Container>
      </Section>

      <Section pt={60} pb={50}>
        <SortBox />
      </Section>

      <Section pb={50}>
        <Container>
          <Row>
            {product.map((product, index) => (
              <Col lg={3} md={6} sm={6} xs={6} key={index}>
                <ProductCard
                  img={product.image}
                  name={product.title}
                  price={product.price}
                  isNew={product.rating.rate > 4}
                />
              </Col>
            ))}
          </Row>
          <Row>
            <Col lg={12}>
              <div className={styles.show_btn}>
                <Button btn={true} title={"Show more"} size={"round_btn"} />
              </div>
            </Col>
          </Row>
        </Container>
      </Section>

      <Section pt={50}>
        <Container fluid>
          <Row>
            <Col lg={12} className=" g-0">
              <Newsletter bgImg={newsletterImg} />
            </Col>
          </Row>
        </Container>
      </Section>
    </Fragment>
  );
};

export default Shop;
