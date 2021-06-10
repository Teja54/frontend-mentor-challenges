import React, { useState } from "react";
import { qA } from "./data";
import SingleQuestion from "./Question";

const FAQ = () => {
  const [questions, setQuestions] = useState(qA);
  return (
    <section className="faq">
      <div className="container">
        <div className="title">
          <h3>Frequently Asked Questions</h3>
          <p>
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </p>
        </div>
        <article className="info">
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </article>
        <button className="btn-primary btn-secondary">More Info</button>
      </div>
    </section>
  );
};

export default FAQ;
