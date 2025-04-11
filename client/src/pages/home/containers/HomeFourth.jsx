import React from "react";
import trainer1 from "../../../assets/trainers/gymtrainer1.webp";
import trainer2 from "../../../assets/trainers/gymtrainer2.webp";
import trainer3 from "../../../assets/trainers/gymtrainer3.webp";

const HomeFourth = () => {
  const trainers = [
    { name: "Steve", image: trainer1 },
    { name: "Bob", image: trainer2 },
    { name: "Carla", image: trainer3 },
  ];

  return (
    <div className="home__homefourth">
      <div className="container">
        <div className="home__homefourth-heading">
          <h2>Meet Our Team</h2>
          <h1>Meet Our Expert Trainers</h1>
        </div>
        <div className="home__homefourth-experts">
          {trainers.map((trainer, index) => (
            <div key={index} className="home__homefourth-experts_card">
              <img
                src={trainer.image}
                alt={trainer.name}
                className="home__homefourth-experts_card-img"
              />
              <div className="home__homefourth-experts_overlay">
                <h3>{trainer.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeFourth;
