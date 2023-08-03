import React from "react";
import { Container } from "react-bootstrap";
import {
  AiFillGithub,
  // AiOutlineTwitter,
  // AiFillInstagram,
} from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";

const ContactSocialLinks = (progs) => {
  return (
    <Container>
      <h1>FIND ME ON</h1>
      <p>
        Please don't hesitate to reach out to me and{" "}
        <span className="yellow">connect.</span>
      </p>
      <ul className={progs.ulClassName}>
        <li className={progs.liClassName}>
          <a
            href="https://github.com/panther711"
            target="_blank"
            rel="noreferrer"
            className="icon-colour  home-social-icons"
            aria-label="github"
          >
            <AiFillGithub />
          </a>
        </li>
        {/* <li className={progs.liClassName}>
          <a
            href="https://twitter.com/panther711"
            target="_blank"
            rel="noreferrer"
            className="icon-colour  home-social-icons"
            aria-label="twitter"
          >
            <AiOutlineTwitter />
          </a>
        </li>
        <li className={progs.liClassName}>
          <a
            href="https://www.linkedin.com/ca/panther711/"
            target="_blank"
            rel="noreferrer"
            className="icon-colour  home-social-icons"
            aria-label="linkedin"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li className={progs.liClassName}>
          <a
            href="https://www.instagram.com/panther711"
            target="_blank"
            rel="noreferrer"
            className="icon-colour home-social-icons"
            aria-label="instagram"
          >
            <AiFillInstagram />
          </a>
        </li> */}
      </ul>
    </Container>
  );
};

export default ContactSocialLinks;
