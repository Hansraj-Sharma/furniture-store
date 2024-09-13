import React from "react";
import styles from "./style.module.css";
import { Container, Row, Col } from "react-bootstrap";
import SortIcon01 from "../../icons/sortIcon01";
import SortIcon02 from "../../icons/sortIcon02";
import SortIcon03 from "../../icons/sortIcon03";
import SortIcon04 from "../../icons/sortIcon04";

const CategoriesOptions = [
  {
    value: "LivingRoom",
    label: "Living Room",
  },
  {
    value: "Electronics",
    label: "Electronics",
  },
  {
    value: "Sports",
    label: "Sports",
  },
  {
    value: "Clothing",
    label: "Clothing",
  },
];

const PriceOptions = [
  {
    value: "All Price",
    label: "AllPrice",
  },
  { value: "lth", label: "Price: Low to High" },
  { value: "htl", label: "Price: High to Low" },
];

const sortOptions = [
  { value: "sortBy", label: "Sort by" },
  { value: "latest", label: "Latest" },
  { value: "oldest", label: "Oldest" },
  { value: "lth", label: "Price: Low to High" },
  { value: "htl", label: "Price: High to Low" },
];

const SortBox = () => {
  return (
    <Container>
      <Row className="align-items-center">
        <Col lg={3} className="ps-0">
          <div className={styles.sort_first}>
            <form>
              <label for="first">CATEGORIES</label>
              <br />
              <select id="first">
                {CategoriesOptions.map((item, index) => (
                  <option key={index} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </form>
          </div>
        </Col>
        <Col lg={3}>
          <div className={styles.sort_first}>
            <form>
              <label for="second">PRICE</label>
              <br />
              <select id="second">
                {PriceOptions.map((item, index) => (
                  <option key={index} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </form>
          </div>
        </Col>

        <Col lg={6} className="pe-0">
          <div className={styles.sort_third}>
            <form>
              <select>
                {sortOptions.map((item, index) => (
                  <option key={index} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </form>
            <div className={styles.sort_icon}>
              <div className={styles.icon}>
                <SortIcon01 />
              </div>
              <div className={styles.icon}>
                <SortIcon02 />
              </div>
              <div className={styles.icon}>
                <SortIcon03 />
              </div>
              <div className={styles.icon}>
                <SortIcon04 />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SortBox;
