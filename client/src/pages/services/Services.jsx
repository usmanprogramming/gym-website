import React from "react";
import "./services.css";
import ServicesFirst from "./containers/ServicesFirst";
import ServicesSecond from "./containers/ServicesSecond";
import ServicesThird from "./containers/ServicesThird";

const Services = () => {
  return (
    <div className="services">
      <ServicesFirst />
      <ServicesSecond />
      <ServicesThird />
    </div>
  );
};

export default Services;
