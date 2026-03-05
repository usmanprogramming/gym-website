import React, { useEffect, useRef } from "react";
import Programcard from "../../../components/programCard/Programcard";
import strength from "../../../assets/services/strength.webp";
import cardio from "../../../assets/services/cardio.webp";
import yoga from "../../../assets/services/yoga.webp";
import weight from "../../../assets/services/weight.webp";
import martial from "../../../assets/services/martial-art.webp";
import athletic from "../../../assets/services/athlete.webp";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HomeThird = () => {
  const headingRef = useRef(null);
  const cardsRef = useRef(null);

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
            toggleActions: "play none none none",
          },
        },
      );

      // Animate cards one by one
      gsap.fromTo(
        ".home__homethird-cards .components__programcard",
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.5,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top bottom",
            toggleActions: "play none none none",
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  const trainingPrograms = [
    {
      img: strength,
      title: "Strength Training",
      description:
        "It is long estabas and many lished fact will been distracted atempts by them content system and looking for its layout.",
    },
    {
      img: cardio,
      title: "Cardio Workouts",
      description:
        "It is long estabas and many lished fact will been distracted atempts by them content system and looking for its layout.",
    },
    {
      img: yoga,
      title: "Yoga & Flexibility",
      description:
        "It is long estabas and many lished fact will been distracted atempts by them content system and looking for its layout.",
    },
    {
      img: weight,
      title: "Weight Loss",
      description:
        "It is long estabas and many lished fact will been distracted atempts by them content system and looking for its layout.",
    },
    {
      img: martial,
      title: "Martial Arts",
      description:
        "It is long estabas and many lished fact will been distracted atempts by them content system and looking for its layout.",
    },
    {
      img: athletic,
      title: "Athletic Performance",
      description:
        "It is long estabas and many lished fact will been distracted atempts by them content system and looking for its layout.",
    },
  ];

  return (
    <div className="home__homethird hero-section">
      <div className="container">
        <div className="home__homethird-heading" ref={headingRef}>
          <h2>Our Services</h2>
          <h1>Training Programs</h1>
        </div>
        <div className="home__homethird-cards" ref={cardsRef}>
          {trainingPrograms.map((program, index) => (
            <Programcard key={index} {...program} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeThird;
