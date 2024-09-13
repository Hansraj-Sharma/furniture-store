import React from "react";
import EmailIcon from "../../icons/e-mailIcon";
import styles from "./style.module.css";

const Newsletter = ({ bgImg }) => {
  return (
    <div
      className={`${styles.newsletter}
     ${bgImg ? styles.bgImg : ""}`}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className={styles.newsletter_content}>
        <h4 className={styles.nc_title}>Join Our Newsletter</h4>
        <p>Sign up for deals, new products and promotions</p>
        <div className={styles.singup_input}>
          <EmailIcon />
          <input
            type="email"
            placeholder="Email address"
            aria-label="Email address"
          />
          <button>Signup</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
