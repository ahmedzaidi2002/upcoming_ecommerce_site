import React from "react";
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>MBA Burger Wala</h2>

        <p>We are trying to give you the best taste possible.</p>
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All rights reserved @mbaburgerwala</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>

        <a href="https://instagram.com/ahmedhusainzaidi">
          <AiFillInstagram />
        </a>
        <a href="https://github.com/ahmedzaidi2002">
          <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/in/ahmed-zaidi-6186ba202/">
          <AiFillLinkedin />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;