import React from "react";

import illustration from "./images/illustration-hero.svg";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header">
          <div className="header-img">
            <img src={illustration} alt="" class="illustration" />
          </div>
          <div className="header-text">
            <h2>A Simple Bookmark Manager</h2>
            <p>
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
            <div className="btn-container">
              <a href="/">Get it on Chrome</a>
              <a href="/">Get it on Firefox</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
