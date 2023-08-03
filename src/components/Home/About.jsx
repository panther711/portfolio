import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import ContactSocialLinks from "../contactSocialLinks";

const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="yellow"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, my name is <span className="yellow">James Han </span>
              and I'm from <span className="yellow"> Montreal QC, Canada.</span>
              <br />
              <br />
              I already graduated with a Bachelor's degree in Computer Science
              and Engineering in 2015.
              <br />
              <br />
              As a<b className="yellow"> Full-Stack </b>developer, I enjoy
              tackling new challenges and continuously expanding my skillset.
              <br />
              <br />I am proficient in
              <b className="yellow"> Javascript, </b>
              as well as have knowledge in programming languages such as C,
              Java, Python,
              <b className="yellow"> GraphQL, and Solidity.</b>
              <br />
              <br />I have a passion for working with{" "}
              <b className="yellow">Node.js, MongoDB,</b> and
              <i>
                <b className="yellow">
                  {" "}
                  modern Javascript libraries and frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="yellow"> React.js</b>
              </i>
              <br />
              <br />I am also interested in building new
              <i>
                <b className="yellow"> Web Technologies and Products, </b>
                as well as exploring areas related to
                <b className="yellow"> Artificial Intelligence.</b>
              </i>
              &nbsp;&nbsp;This is my <b className="yellow">second area of expertise.</b>
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={LaptopImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <ContactSocialLinks
              ulClassName="home-about-social-links"
              liClassName="social-icons"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
