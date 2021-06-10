import React, { useState } from "react";
import data from "./data";

const Tabs = () => {
  const [tabs, setTabs] = useState(data);
  const [value, setValue] = useState(0);

  const { url, heading, text } = tabs[value];

  return (
    <section>
      <div className="tabs-section">
        <div className="title">
          <h2>Features</h2>
          <p>
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
      </div>
      <div className="tabs">
        <div className="btns-container">
          {tabs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`feature-btn ${index === value && "active-btn"}`}
              >
                {item.title}
              </button>
            );
          })}
        </div>
        <article className="tabs-info">
          <img src={url} alt="" />
          <div className="tabs-text">
            <h3>{heading}</h3>
            <p>{text}</p>
            <a href="/" className="btn-primary">
              More Info
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Tabs;
