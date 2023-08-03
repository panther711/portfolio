import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Social.css";
import ContactSocialLinks from "../contactSocialLinks";

const Social = () => {
  return (
    <Container style={{ padding: "30px" }}>
      <Row>
        <Col md={12} className="contact-social">
          <div className="contact-text">
            <ContactSocialLinks
              ulClassName="contact-social-links"
              liClassName="contact-icons"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Social;
