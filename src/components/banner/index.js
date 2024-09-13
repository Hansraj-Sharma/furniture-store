import React from "react";
import styles from "./style.module.css";
import { Col, Container, Row } from "react-bootstrap";
import ima01 from "../../assets/banner-img01.png";
import SectionHeading from "../sectionHeading";
import Button from "../button";

const Banner = () => {
  return (
    <Container fluid>
      <Row className={styles.banner_main}>
        <Col lg={6} className="g-0">
          <div className={styles.banner_img}>
            <img src={ima01} alt="banner img" />
          </div>
        </Col>
        <Col lg={6} className="g-0">
          <div className={styles.banner_content_main}>
            <div className={styles.banner_content}>
              <div className={styles.banner_subtitle}>PROMOTION</div>
              <div className={styles.banner_title}>
                <SectionHeading title={"Hurry up! 40% OFF"} />
              </div>
              <div className={styles.banner_discription}>
                Thousands of high tech are waiting for you
              </div>
              <div className={styles.expires_datdline}>
                <div className={styles.expires_date_text}>
                  Offer expires in:
                </div>
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
              <div className={styles.shop_btn}>
                <Button title={"Shop now"} btn={true} size={"b_medium"} />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
