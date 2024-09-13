import React, { useContext, useState } from "react";
import styles from "./style.module.css";
import { Col, Container, Row } from "react-bootstrap";
import img from "../../assets/sign-up-in-img.png";
import logoImg from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import EyeIcon from "../../icons/eyeIcon";
import { SignContext } from "../../context/registerProvider";
import Button from "../../components/button";
import Section from "../../components/section";

const SignUp = () => {
  const { signUpUser } = useContext(SignContext);
  const [formvalue, setFormValue] = useState({
    name: "",
    Username: "",
    email: "",
    password: "",
    terms: false,
  });

  const nevigate = useNavigate();

  const handleInPutChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormValue({
      ...formvalue,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formvalue.terms &&
      formvalue.name &&
      formvalue.Username &&
      formvalue.email &&
      formvalue.password
    ) {
      signUpUser(formvalue);
      nevigate("/");
    } else {
      alert("please fill every field.");
    }
  };

  return (
    <Section>
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className={styles.image}>
              <img src={img} alt="img" />
              <div className={styles.logo}>
                <img src={logoImg} alt="logo img" />
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className={styles.sign}>
              <div className={styles.title}>Sign up</div>
              <div className={styles.description}>
                Already have an account? <Link to="/signIn"> Sign in</Link>
              </div>
              <form className={styles.form} onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  value={formvalue.name}
                  placeholder="Your name"
                  onChange={handleInPutChange}
                />
                <input
                  type="text"
                  name="Username"
                  value={formvalue.Username}
                  placeholder="Username"
                  onChange={handleInPutChange}
                />
                <input
                  type="email"
                  name="email"
                  value={formvalue.email}
                  placeholder="Email address"
                  onChange={handleInPutChange}
                />
                <div className={styles.password}>
                  <input
                    type="password"
                    name="password"
                    value={formvalue.password}
                    placeholder="Password"
                    onChange={handleInPutChange}
                  />
                  <EyeIcon />
                </div>
                <div className={styles.check_input}>
                  <input
                    type="checkbox"
                    name="terms"
                    value={formvalue.terms}
                    onChange={handleInPutChange}
                  />
                  <div className={styles.checkbox}>
                    I agree with <span>Privacy Policy</span> and
                    <span>Terms of Use</span>
                  </div>
                </div>
                <div className={`${styles.button} `}>
                  <Button
                    btn={true}
                    title={"Sign Up"}
                    size={"b_medium"}
                    customClass={styles.btn}
                  />
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default SignUp;
