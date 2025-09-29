import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BlogFirst = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".blog__blogfirst .container",
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
    <div className="blog__blogfirst">
      <div className="container" ref={containerRef}>
        <h1>Blog</h1>
        <h2>Fitness - Blog</h2>
      </div>
    </div>
  );
};

export default BlogFirst;
