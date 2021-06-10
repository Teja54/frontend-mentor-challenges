import React from "react";
import { extensions } from "./data";

const Extension = () => {
  return (
    <section>
      <div className="container">
        <div className="title">
          <h2>Download the extension</h2>
          <p>
            We’ve got more browsers in the pipeline. Please do let us know if
            you’ve got a favourite you’d like us to prioritize.
          </p>
        </div>
        <div className="extension-container">
          {extensions.map((extension) => {
            const { id, url, name, version } = extension;
            return (
              <div className="browser" key={id}>
                <img src={url} alt="" className="browser-logo" />
                <h3>{name}</h3>
                <p className="version">{version}</p>
                <img
                  src="https://res.cloudinary.com/teja54/image/upload/v1623308230/bg-dots_dy1uay.svg"
                  alt=""
                />
                <button className="btn-primary">Add & Install Extension</button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Extension;
