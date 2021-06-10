import React, { useState, useRef } from "react";

const Email = () => {
  const [value, setValue] = useState("");
  const formRef = useRef(null);

  function validateEmail(email) {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!value) {
      formRef.current.classList.add("error");
    } else {
      formRef.current.classList.remove("error");
      if (value) {
        if (validateEmail(value)) {
          formRef.current.classList.remove("error");
          setValue("");
        } else {
          formRef.current.classList.add("error");
        }
      }
    }
  }

  return (
    <section className="join">
      <div className="container">
        <div className="email-container">
          <h4>35,000+ ALREADY JOINED</h4>
          <h3>Stay up-to-date with what we’re doing</h3>
          <form onSubmit={handleSubmit} ref={formRef}>
            <div>
              <label for="Email">Email Address</label>
              <input
                name="Email"
                id="Email"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="email"
                placeholder="Enter Email Address"
              />
              <img
                src="https://res.cloudinary.com/teja54/image/upload/v1617941805/icon-error_uzdthd.svg"
                class="error-icon"
                alt=""
              />
              <p class="error-text">Please Provide A Valid Email Address</p>
            </div>
            <button type="submit">Contact Us</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Email;
