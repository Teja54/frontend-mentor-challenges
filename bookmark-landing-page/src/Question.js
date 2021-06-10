import React, { useState } from "react";

import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="question" onClick={() => setShowInfo(!showInfo)}>
      <header>
        <h4>{title}</h4>
        <button className="btn">
          {showInfo ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </div>
  );
};

export default Question;
