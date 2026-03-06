import React from "react";
import "./trainercard.css";

const Trainercard = ({ image, name }) => {
  return (
    <div className="components__trainercard">
      <img
        src={image}
        alt={name}
        className="components__trainercard-img"
        loading="lazy"
      />
      <div className="components__trainercard-overlay">
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default Trainercard;
