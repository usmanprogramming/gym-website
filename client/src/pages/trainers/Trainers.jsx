import React from "react";
import "./trainers.css";
import TrainersFirst from "./containers/TrainersFirst";
import TrainersSecond from "./containers/TrainersSecond";

const Trainers = () => {
  return (
    <div className="trainers">
      <TrainersFirst />
      <TrainersSecond />
    </div>
  );
};

export default Trainers;
