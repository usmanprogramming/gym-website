import React, { useEffect, useRef } from "react";
import Trainercard from "../../../components/trainerCard/Trainercard";
import trainer1 from "../../../assets/trainers/gymtrainer1.webp";
import trainer2 from "../../../assets/trainers/gymtrainer2.webp";
import trainer3 from "../../../assets/trainers/gymtrainer3.webp";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HomeFourth = () => {
  const headingRef = useRef(null);
  const trainersRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top bottom",
            // end: "bottom top",
            toggleActions: "play none none none",
          },
        }
      );

      // Animate trainer cards one by one
      gsap.fromTo(
        ".home__homefourth-experts .components__trainercard",
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.5,
          scrollTrigger: {
            trigger: trainersRef.current,
            start: "top bottom",
            // end: "bottom top",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const trainers = [
    { name: "Usman", image: trainer1 },
    { name: "Random uncle", image: trainer2 },
    { name: "Sama", image: trainer3 },
  ];

  return (
    <div className="home__homefourth">
      <div className="container">
        <div className="home__homefourth-heading" ref={headingRef}>
          <h2>Meet Our Team</h2>
          <h1>Meet Our Expert Trainers</h1>
        </div>
        <div className="home__homefourth-experts" ref={trainersRef}>
          {trainers.map((trainer, index) => (
            <Trainercard
              key={index}
              image={trainer.image}
              name={trainer.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeFourth;
