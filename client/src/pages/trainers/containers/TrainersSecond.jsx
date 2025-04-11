import React from "react";
import trainer1 from "../../../assets/trainers/gymtrainer1.webp";
import trainer2 from "../../../assets/trainers/gymtrainer2.webp";
import trainer3 from "../../../assets/trainers/gymtrainer3.webp";
import trainer4 from "../../../assets/trainers/gymtrainer4.webp";
import trainer5 from "../../../assets/trainers/gymtrainer5.webp";
import trainer6 from "../../../assets/trainers/gymtrainer6.webp";

import Photogallery from "../../../components/carousel/Carousel";

import img1 from "../../../assets/carousel/brand-1.webp";
import img2 from "../../../assets/carousel/brand-2.webp";
import img3 from "../../../assets/carousel/brand-3.webp";
import img4 from "../../../assets/carousel/brand-4.webp";
import img5 from "../../../assets/carousel/brand-5.webp";

const TrainersSecond = () => {
  const trainers = [
    { name: "Steve", image: trainer1 },
    { name: "Bob", image: trainer2 },
    { name: "Carla", image: trainer3 },
    { name: "Jake", image: trainer4 },
    { name: "Ethan", image: trainer5 },
    { name: "Brooks", image: trainer6 },
  ];
  const images = [img1, img2, img3, img4, img5];

  return (
    <div className="trainers__trainerssecond">
      <div className="container">
        <div className="trainers__trainerssecond-heading">
          <h2>Meet Our Team</h2>
          <h1>Expert Trainers</h1>
        </div>
        <div className="trainers__trainerssecond-experts">
          {trainers.map((trainer, index) => (
            <div key={index} className="trainers__trainerssecond-experts_card">
              <img
                src={trainer.image}
                alt={trainer.name}
                className="trainers__trainerssecond-experts_card-img"
              />
              <div className="trainers__trainerssecond-experts_overlay">
                <h3>{trainer.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="trainers__trainerssecond-gallery">
          <Photogallery images={images} />
        </div>
      </div>
    </div>
  );
};

export default TrainersSecond;
