import React from "react";
import styles from "./style.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Button from "../button";

const HeroSection = () => {
  return (
    <div className={styles.hero_section}>
      <Container>
        <Row>
          <Col lg={12} className={styles.hero_section_main}>
            <div className={styles.hero_section_content}>
              <div className={styles.hero_section_content_text}>
                <h1 className={styles.title}>
                  Listen to the <span>amazing</span> music sound.
                </h1>
                <p>Experience music like never before</p>
                <div>
                  <Button title={"Shopping Now"} lbtn_size={"l_large"} />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
