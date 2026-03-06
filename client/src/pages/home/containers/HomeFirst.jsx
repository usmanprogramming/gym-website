import banner1 from "../../../assets/banners/lifting.webp";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const Homefirst = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
          immediateRender: false,
        },
      );
    }, contentRef);

    return () => ctx.revert();
  }, []);
  return (
    <div
      className="home__homefirst"
      style={{ backgroundImage: `url(${banner1})` }}
    >
      <div className="container">
        <div className="home__homefirst-content" ref={contentRef}>
          <h2>Since - 1998</h2>
          <h1>Make Your Body Shape</h1>
          <p>
            Beyond the iron and the sweat lies the strongest version of
            yourself, waiting to be forged through discipline and elite
            training.
          </p>
          <Link to="/about">
            <button className="btn">Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homefirst;
