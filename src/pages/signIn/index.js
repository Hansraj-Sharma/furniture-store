import React, { useContext, useState } from "react";
import styles from "./style.module.css";
import { Col, Container, Row } from "react-bootstrap";
import img from "../../assets/sign-up-in-img.png";
import logoImg from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import EyeIcon from "../../icons/eyeIcon";
import { SignContext } from "../../context/registerProvider";
import Button from "../../components/button";

const SignIn = ({ SignIn }) => {
  const { signInUser } = useContext(SignContext);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formValues;

    if (email && password) {
      const success = signInUser(email, password);
      if (success) {
        navigate("/");
      }
    } else {
      alert("please fill every field.");
    }
  };

  return (
    <Container>
      <Row className={`${SignIn ? styles.open : ""} align-items-center`}>
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
            <div className={styles.title}>Sign In</div>
            <div className={styles.description}>
              Already have an account?<Link to="/signUp"> Sign up</Link>
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleInputChange}
                placeholder="Your usernam or email address"
              />
              <div className={styles.password}>
                <input
                  type="password"
                  name="password"
                  value={formValues.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                />
                <EyeIcon />
              </div>
              <div className={styles.check_input}>
                <div className={styles.remember}>
                  <input type="checkbox" />
                  <div className={styles.checkbox}>Remember me</div>
                </div>
                <Link to="#">Forgot password?</Link>
              </div>
              <div className={styles.button}>
                <Button
                  btn={true}
                  title={"Sign In"}
                  size={"b_medium"}
                  customClass={styles.btn}
                />
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
