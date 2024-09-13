import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

const BreadCrumb = ({ items }) => {
  return (
    <div className={styles.breadcrumb_box}>
      <nav className={styles.breadcrumb_pages}>
        <div className={styles.shop_btns}>
          {items.map((item, index) => (
            <div key={item.label} className={styles.shop_page}>
              <Link to={item.to}>{item.label}</Link>
              {index < items.length - 1 && (
                <span className={styles.separator}>›</span>
              )}
            </div>
          ))}
        </div>
        <h3 className={styles.title}>Shop Page</h3>
        <p className={styles.description}>
          Let’s design the place you always imagined.
        </p>
      </nav>
    </div>
  );
};

export default BreadCrumb;
