import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/sLogo.png";
import SocialsLink from "../socials";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <span>Dedicated to creating impactful solutions!</span>
        </Col>
        <Col md="4" className="footer-copywright">
          <span>Copyright © {year}</span>&nbsp;&nbsp;
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Col>
        <Col md="4" className="footer-body">
          <SocialsLink uiClassName="footer-icons" liClassName="social-icons" />
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
