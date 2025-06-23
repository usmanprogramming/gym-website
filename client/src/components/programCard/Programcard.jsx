import React from "react";
import "./programcard.css"

const Programcard = ({ img, title, description }) => {
  return (
    <div className="components__programcard">
      <div className="components__programcard-img">
        <img src={img} alt={title} />
      </div>
      <div className="components__programcard-details">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Programcard;
