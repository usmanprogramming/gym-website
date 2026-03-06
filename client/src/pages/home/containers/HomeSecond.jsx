import couple from "../../../assets/banners/couple.webp";
import progression from "../../../assets/icons/arm-muscle.webp";
import workout from "../../../assets/icons/barbell.webp";
import nutrition from "../../../assets/icons/diet.webp";
import selfdefence from "../../../assets/icons/martial-arts.webp";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const ReasonCard = ({ img, title, description }) => {
  return (
    <div className="home__homesecond-content_reasons-card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const HomeSecond = () => {
  const contentRef = useRef(null);
  const reasonsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top bottom",
            toggleActions: "play none none none",
          },
        },
      );

      // Animate cards one by one
      gsap.fromTo(
        ".home__homesecond-content_reasons-card",
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.5,
          scrollTrigger: {
            trigger: reasonsRef.current,
            start: "top bottom",
            toggleActions: "play none none none",
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  const reasons = [
    {
      img: progression,
      title: "Progression",
      description:
        "Achieve consistent growth with structured training programs and expert guidance.",
    },
    {
      img: workout,
      title: "Workout",
      description:
        "Engage in diverse workout routines designed to maximize strength, endurance, and flexibility.",
    },
    {
      img: nutrition,
      title: "Nutrition",
      description:
        "Fuel your body with proper meal plans and expert nutrition advice for optimal performance.",
    },
    {
      img: selfdefence,
      title: "Self Defence",
      description:
        "Learn essential self-defense techniques to boost confidence and ensure personal safety.",
    },
  ];

  return (
    <div className="home__homesecond hero-section hero-section">
      <div className="container">
        <div className="home__homesecond-img">
          <img src={couple} alt="banner" />
        </div>
        <div className="home__homesecond-content">
          <div className="home__homesecond-content_heading" ref={contentRef}>
            <h2>Our Best Features</h2>
            <h1>Why choose us?</h1>
          </div>
          <div className="home__homesecond-content_reasons" ref={reasonsRef}>
            {reasons.map((reason, index) => (
              <ReasonCard key={index} {...reason} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSecond;
