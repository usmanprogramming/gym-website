import React from "react";
import strength from "../../../assets/services/strength.webp";
import cardio from "../../../assets/services/cardio.webp";
import yoga from "../../../assets/services/yoga.webp";
import weight from "../../../assets/services/weight.webp";
import martial from "../../../assets/services/martial-art.webp";
import athletic from "../../../assets/services/athlete.webp";

const Card = ({ img, title, description }) => {
  return (
    <div className="home__homethird-cards_card">
      <div className="home__homethird-cards_card-img">
        <img src={img} alt={title} />
      </div>
      <div className="home__homethird-cards_card-detail">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const HomeThird = () => {
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
    <div className="home__homethird">
      <div className="container">
        <div className="home__homethird-heading">
          <h2>Our Services</h2>
          <h1>Training Programs</h1>
        </div>
        <div className="home__homethird-cards">
          {trainingPrograms.map((program, index) => (
            <Card key={index} {...program} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeThird;
