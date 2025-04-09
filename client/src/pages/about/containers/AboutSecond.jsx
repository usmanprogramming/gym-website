import React from "react";
import banner from "../../../assets/banners/couple.webp";
import icon1 from "../../../assets/icons/arm-muscle.webp";
import icon2 from "../../../assets/icons/barbell.webp";
import icon3 from "../../../assets/icons/diet.webp";
import icon4 from "../../../assets/icons/martial-arts.webp";

const Card = ({ img, title, description }) => {
  return (
    <div className="about__aboutsecond-lower_card">
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
    description:
      "Our certified trainers help you achieve your fitness goals efficiently.",
  },
  {
    img: icon2,
    title: "Personalized Nutrition",
    description:
      "Get customized diet plans to complement your workout routine.",
  },
  {
    img: icon3,
    title: "Modern Equipment",
    description:
      "Train with the latest high-quality gym equipment for the best results.",
  },
  {
    img: icon4,
    title: "Supportive Community",
    description:
      "Join a friendly and motivating fitness community to stay inspired.",
  },
];

const AboutSecond = () => {
  return (
    <div className="about__aboutsecond">
      <div className="container">
        <div className="about__aboutsecond-upper">
          <div className="about__aboutsecond-upper_img">
            <img src={banner} alt="Banner" />
          </div>
          <div className="about__aboutsecond-upper_content">
            <div className="about__aboutsecond-upper_content-heading">
              <h2>Our Best Features</h2>
              <h1>
                We have <span>25+</span> Years of Experience.
              </h1>
            </div>
            <p>
              This website is a portfolio project and not a real business. It
              was created to showcase web development skills, including design,
              functionality, and responsiveness. All content, services, and
              branding are for demonstration purposes only.
            </p>
            <button className="btn">Our Services</button>
          </div>
        </div>
        <div className="about__aboutsecond-lower">
          {cardData.map((card, index) => (
            <Card
              key={index}
              img={card.img}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSecond;
