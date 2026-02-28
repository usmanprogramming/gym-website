import React, { useEffect, useRef } from "react";
import Trainercard from "../../../components/trainerCard/Trainercard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import trainers from "../../../trainersData";

gsap.registerPlugin(ScrollTrigger);

const HomeFourth = ({ count = 3 }) => {
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
        },
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
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="home__homefourth">
      <div className="container">
        <div className="home__homefourth-heading" ref={headingRef}>
          <h2>Meet Our Team</h2>
          <h1>Meet Our Expert Trainers</h1>
        </div>
        <div className="home__homefourth-experts" ref={trainersRef}>
          {trainers.slice(0, count).map((trainer) => (
            <Trainercard
              key={trainer.id}
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
