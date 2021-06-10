import React, { useState } from "react";
import { links, social } from "./data";
import logo from "./logo.svg";
import logowhite from "./logo-white.svg";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <nav>
      <div className="container">
        <div className="navbar">
          <img
            src={`${showLinks ? logowhite : logo}`}
            alt="logo"
            class="logo"
          />
          <div
            className={`${showLinks ? "hamburger active" : "hamburger"}`}
            onClick={() => setShowLinks(!showLinks)}
          >
            <span className="bar bar1"></span>
            <span className="bar bar2"></span>
            <span className="bar bar3"></span>
          </div>
          <div className={`${showLinks ? "nav-links active" : "nav-links"}`}>
            <ul className="links">
              {links.map((link) => {
                const { id, url, text, classname } = link;

                return (
                  <li key={id}>
                    <a href={url} className={classname}>
                      {text}
                    </a>
                  </li>
                );
              })}
            </ul>
            <ul className="social-icons">
              {social.map((socialIcon) => {
                const { id, url, icon } = socialIcon;
                return (
                  <li key={id}>
                    <a href={url}>{icon}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
