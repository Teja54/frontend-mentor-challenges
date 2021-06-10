import React from "react";
import { links, social } from "./data";
import logowhite from "./logo-white.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="footer-logo">
            <img src={logowhite} alt="" />
          </div>
          <ul className="footer-links">
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
          <ul className="social-icons">
            {social.map((socialLink) => {
              const { id, url, icon } = socialLink;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <p class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="https://www.github.com/Teja54">Teja Devisetti</a>.
      </p>
    </footer>
  );
};

export default Footer;
