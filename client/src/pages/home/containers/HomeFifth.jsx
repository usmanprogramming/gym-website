import React, { useEffect, useRef } from "react";
import Carousel from "../../../components/carousel/Carousel";
import img1 from "../../../assets/carousel/img1.webp";
import img2 from "../../../assets/carousel/img2.webp";
import img3 from "../../../assets/carousel/img3.webp";
import img4 from "../../../assets/carousel/img4.webp";
import gsap from "gsap";

const HomeFifth = () => {
  const headingRef = useRef(null);
  const carouselRef = useRef(null);

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
            start: "top bottom", // triggers when heading enters viewport
            toggleActions: "play none none none",
          },
        },
      );

      // Animate carousel
      gsap.fromTo(
        carouselRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3, // animates after heading
          ease: "power3.out",
          scrollTrigger: {
            trigger: carouselRef.current,
            start: "top bottom", // triggers when carousel enters viewport
            toggleActions: "play none none none",
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  const images = [img1, img2, img3, img4];

  return (
    <div className="home__homefifth hero-section">
      <div className="homefifth-container">
        <div className="home__homefifth-heading" ref={headingRef}>
          <h2>Photo Gallery</h2>
          <h1>Moments with Customers</h1>
        </div>
        <div className="home__homefifth-carousel" ref={carouselRef}>
          <Carousel images={images} />
        </div>
      </div>
    </div>
  );
};

export default HomeFifth;
