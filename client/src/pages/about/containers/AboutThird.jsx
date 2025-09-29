import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PhotoGallery from "../../../components/carousel/Carousel";
import Trainercard from "../../../components/trainerCard/Trainercard";

import trainer1 from "../../../assets/trainers/gymtrainer1.webp";
import trainer2 from "../../../assets/trainers/gymtrainer2.webp";
import trainer3 from "../../../assets/trainers/gymtrainer3.webp";

import img1 from "../../../assets/carousel/brand-1.webp";
import img2 from "../../../assets/carousel/brand-2.webp";
import img3 from "../../../assets/carousel/brand-3.webp";
import img4 from "../../../assets/carousel/brand-4.webp";
import img5 from "../../../assets/carousel/brand-5.webp";

gsap.registerPlugin(ScrollTrigger);

const AboutThird = () => {
  const headingRef = useRef(null);
  const trainersRef = useRef([]);
  trainersRef.current = [];
  const carouselRef = useRef(null);

  const trainers = [
    { name: "Steve", image: trainer1 },
    { name: "Bob", image: trainer2 },
    { name: "Carla", image: trainer3 },
  ];

  const images = [img1, img2, img3, img4, img5];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // heading animation
      gsap.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        }
      );

      // trainers stagger
      gsap.fromTo(
        trainersRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: trainersRef.current[0]?.parentNode,
            start: "top 85%",
          },
        }
      );

      // carousel animation
      gsap.fromTo(
        carouselRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: carouselRef.current,
            start: "top 85%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="about__aboutthird">
      <div className="container">
        {/* Heading */}
        <div className="home__homefourth-heading" ref={headingRef}>
          <h2>Meet Our Team</h2>
          <h1>Meet Our Expert Trainers</h1>
        </div>

        {/* Trainers */}
        <div className="home__homefourth-experts">
          {trainers.map((trainer, i) => (
            <div key={i} ref={(el) => (trainersRef.current[i] = el)}>
              <Trainercard image={trainer.image} name={trainer.name} />
            </div>
          ))}
        </div>

        {/* Carousel */}
        <div className="home__homefourth-carousal" ref={carouselRef}>
          <PhotoGallery images={images} />
        </div>
      </div>
    </div>
  );
};

export default AboutThird;
