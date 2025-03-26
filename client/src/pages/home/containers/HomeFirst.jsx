import React, { useState, useEffect } from "react";
import banner1 from "../../../assets/banners/Home/lifting.webp";
import banner2 from "../../../assets/banners/Home/dumbell.webp";
import banner3 from "../../../assets/banners/Home/rope.webp";

const banners = [banner1, banner2, banner3];

const Homefirst = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="home__homefirst"
      style={{ backgroundImage: `url(${banners[currentIndex]})` }}
    >
      <div className="container">
        <div className="home__homefirst-content">
          <h2>Since - 1998</h2>
          <h1>Make Your Body Shape</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            readable content of a page when looking at its layout.
          </p>
          <button className="btn">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Homefirst;
