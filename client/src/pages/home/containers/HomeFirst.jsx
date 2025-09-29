import banner1 from "../../../assets/banners/lifting.webp";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
        }
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
