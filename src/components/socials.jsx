import React from "react";
import {
  AiFillGithub,
  // AiOutlineTwitter,
  // AiFillInstagram,
} from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";

const SocialsLink = (progs) => {
  console.log("ulCalssName : ", progs.uiClassName);
  console.log("llCalssName : ", progs);
  return (
    <ul className={progs.uiClassName}>
      <li className={progs.liClassName}>
        <a
          href="https://github.com/panther711"
          style={{ color: "white" }}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="github"
        >
          <AiFillGithub />
        </a>
      </li>
      {/* <li className={progs.liClassName}>
        <a
          href="https://twitter.com/panther711"
          style={{ color: "white" }}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="twitter"
        >
          <AiOutlineTwitter />
        </a>
      </li>
      <li className={progs.liClassName}>
        <a
          href="https://www.linkedin.com/ca/panther711/"
          style={{ color: "white" }}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="linkedin"
        >
          <FaLinkedinIn />
        </a>
      </li>
      <li className={progs.liClassName}>
        <a
          href="https://www.instagram.com/panther711"
          style={{ color: "white" }}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="instagram"
        >
          <AiFillInstagram />
        </a>
      </li> */}
    </ul>
  );
};

export default SocialsLink;
