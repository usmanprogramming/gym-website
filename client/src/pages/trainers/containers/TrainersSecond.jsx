import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import Photogallery from "../../../components/carousel/Carousel";
import Trainercard from "../../../components/trainerCard/Trainercard";
import trainersData from "../../../trainersData";

import img1 from "../../../assets/carousel/brand-1.webp";
import img2 from "../../../assets/carousel/brand-2.webp";
import img3 from "../../../assets/carousel/brand-3.webp";
import img4 from "../../../assets/carousel/brand-4.webp";
import img5 from "../../../assets/carousel/brand-5.webp";

const TrainersSecond = ({ count = 6 }) => {
  const sectionRef = useRef(null);

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
          {trainersData.slice(0, count).map((trainer) => (
            <Trainercard
              key={trainer.id}
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
