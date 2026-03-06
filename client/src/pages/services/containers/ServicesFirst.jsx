import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const ServicesFirst = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".services__servicesfirst .container",
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            toggleActions: "play none none none",
          },
          immediateRender: false,
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="services__servicesfirst">
      <div className="container" ref={containerRef}>
        <h1>Services</h1>
        <h2>Fitness - services</h2>
      </div>
    </div>
  );
};

export default ServicesFirst;
