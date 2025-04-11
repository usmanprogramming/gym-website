import React from "react";
import PhotoGallery from "../../../components/carousel/Carousel"
import trainer1 from "../../../assets/trainers/gymtrainer1.webp";
import trainer2 from "../../../assets/trainers/gymtrainer2.webp";
import trainer3 from "../../../assets/trainers/gymtrainer3.webp";

import img1 from "../../../assets/carousel/brand-1.webp";
import img2 from "../../../assets/carousel/brand-2.webp";
import img3 from "../../../assets/carousel/brand-3.webp";
import img4 from "../../../assets/carousel/brand-4.webp";
import img5 from "../../../assets/carousel/brand-5.webp";

const AboutThird = () => {
  const trainers = [
    { name: "Steve", image: trainer1 },
    { name: "Bob", image: trainer2 },
    { name: "Carla", image: trainer3 },
  ];
  const images = [img1, img2, img3, img4, img5];
  return (
    <div className="about__aboutthird">
      <div className="container">
        <div className="about__aboutthird-heading">
          <h2>Meet Our Team</h2>
          <h1>Meet Our Expert Trainers</h1>
        </div>
        <div className="about__aboutthird-experts">
          {trainers.map((trainer, index) => (
            <div key={index} className="about__aboutthird-experts_card">
              <img
                src={trainer.image}
                alt={trainer.name}
                className="about__aboutthird-experts_card-img"
              />
              <div className="about__aboutthird-experts_overlay">
                <h3>{trainer.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="about__aboutthird-gallery">
          <PhotoGallery images={images} />
        </div>
      </div>
    </div>
  );
};

export default AboutThird;
