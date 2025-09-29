import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import trainer1 from "../../../assets/trainers/gymtrainer1.webp";
import trainer2 from "../../../assets/trainers/gymtrainer2.webp";
import trainer3 from "../../../assets/trainers/gymtrainer3.webp";
import trainer4 from "../../../assets/trainers/gymtrainer4.webp";
import trainer5 from "../../../assets/trainers/gymtrainer5.webp";
import trainer6 from "../../../assets/trainers/gymtrainer6.webp";

import img1 from "../../../assets/carousel/brand-1.webp";
import img2 from "../../../assets/carousel/brand-2.webp";
import img3 from "../../../assets/carousel/brand-3.webp";
import img4 from "../../../assets/carousel/brand-4.webp";
import img5 from "../../../assets/carousel/brand-5.webp";

import Photogallery from "../../../components/carousel/Carousel";
import Trainercard from "../../../components/trainerCard/Trainercard";

const TrainersSecond = () => {
  const sectionRef = useRef(null);

  const trainers = [
    { name: "Steve", image: trainer1 },
    { name: "Bob", image: trainer2 },
    { name: "Carla", image: trainer3 },
    { name: "Logan", image: trainer4 },
    { name: "Ethan", image: trainer5 },
    { name: "Jake", image: trainer6 },
  ];
  const images = [img1, img2, img3, img4, img5];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(".trainers__trainerssecond-heading", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Trainer cards stagger
      gsap.from(".trainers__trainerssecond-experts > *", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.5,
      });

      // Gallery animation
      gsap.from(".trainers__trainerssecond-gallery", {
        scale: 1,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="trainers__trainerssecond" ref={sectionRef}>
      <div className="container">
        <div className="trainers__trainerssecond-heading">
          <h2>Meet Our Team</h2>
          <h1>Expert Trainers</h1>
        </div>

        <div className="trainers__trainerssecond-experts">
          {trainers.map((trainer, index) => (
            <Trainercard
              key={index}
              image={trainer.image}
              name={trainer.name}
            />
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
