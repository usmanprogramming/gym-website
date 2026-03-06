import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const ContactFirst = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact__contactfirst .container",
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
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="contact__contactfirst">
      <div className="container" ref={containerRef}>
        <h1>Contact</h1>
        <h2>Fitness - contact</h2>
      </div>
    </div>
  );
};

export default ContactFirst;
