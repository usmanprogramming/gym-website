import React, { useEffect, useRef } from "react";
import Programcard from "../../../components/programCard/Programcard";
import strength from "../../../assets/services/strength.webp";
import cardio from "../../../assets/services/cardio.webp";
import yoga from "../../../assets/services/yoga.webp";
import weight from "../../../assets/services/weight.webp";
import martial from "../../../assets/services/martial-art.webp";
import athletic from "../../../assets/services/athlete.webp";
import gsap from "gsap";

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
        "Build lean muscle and increase raw power through structured weightlifting and progressive resistance training.",
    },
    {
      img: cardio,
      title: "Cardio Workouts",
      description:
        "Ignite your metabolism and improve cardiovascular health with high-energy interval and endurance sessions.",
    },
    {
      img: yoga,
      title: "Yoga & Flexibility",
      description:
        "Enhance your mobility, reduce stress, and find balance with guided yoga and functional stretching classes.",
    },
    {
      img: weight,
      title: "Weight Loss",
      description:
        "Transform your body with efficient calorie-burning workouts paired with expert nutritional guidance.",
    },
    {
      img: martial,
      title: "Martial Arts",
      description:
        "Master self-defense techniques and build incredible discipline through our elite combat training programs.",
    },
    {
      img: athletic,
      title: "Athletic Performance",
      description:
        "Unlock your peak potential with specialized drills focusing on agility, explosive speed, and core stability.",
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
