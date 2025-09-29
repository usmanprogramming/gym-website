import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import couple from "../../../assets/banners/couple.webp";
import icon1 from "../../../assets/icons/arm-muscle.webp";
import icon2 from "../../../assets/icons/barbell.webp";
import icon3 from "../../../assets/icons/diet.webp";
import icon4 from "../../../assets/icons/martial-arts.webp";

gsap.registerPlugin(ScrollTrigger);

const Card = ({ img, title, description, forwardedRef }) => {
  return (
    <div className="about__aboutsecond-lower_card" ref={forwardedRef}>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const cardData = [
  {
    img: icon1,
    title: "Expert Trainers",
    description: "Our certified trainers...",
  },
  {
    img: icon2,
    title: "Personalized Nutrition",
    description: "Get customized diet plans...",
  },
  {
    img: icon3,
    title: "Modern Equipment",
    description: "Train with the latest equipment...",
  },
  {
    img: icon4,
    title: "Supportive Community",
    description: "Join a friendly and motivating community.",
  },
];

const AboutSecond = () => {
  const contentRef = useRef(null);
  const cardsRef = useRef([]); // array of card nodes
  cardsRef.current = []; // ensure fresh on each render

  useEffect(() => {
    const ctx = gsap.context(() => {
      // heading/content animation
      gsap.fromTo(
        contentRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top bottom",
            toggleActions: "play none none none",
          },
          immediateRender: false,
          overwrite: "auto",
        }
      );

      // cards – use fromTo and immediateRender:false to avoid jumpy behavior
      const cards = cardsRef.current.filter(Boolean);
      if (cards.length) {
        gsap.fromTo(
          cards,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            stagger: 0.5,
            scrollTrigger: {
              trigger: cards[0].parentNode, // the .about__aboutsecond-lower container
              start: "top bottom", // adjust to taste
              toggleActions: "play none none none",
            },
            immediateRender: false,
            overwrite: "auto",
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="about__aboutsecond">
      <div className="container">
        <div className="about__aboutsecond-upper">
          <div className="about__aboutsecond-upper_img">
            <img src={couple} alt="Banner" />
          </div>
          <div className="about__aboutsecond-upper_content" ref={contentRef}>
            <div className="about__aboutsecond-upper_content-heading">
              <h2>Our Best Features</h2>
              <h1>
                We have <span>25+</span> Years of Experience.
              </h1>
            </div>
            <p>
              This website is a portfolio project and not a real business. It
              was created to showcase web development skills...
            </p>
            <button className="btn">Our Services</button>
          </div>
        </div>

        <div className="about__aboutsecond-lower">
          {cardData.map((card, i) => (
            <Card
              key={i}
              img={card.img}
              title={card.title}
              description={card.description}
              forwardedRef={(el) => (cardsRef.current[i] = el)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSecond;
