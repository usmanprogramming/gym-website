import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import phone from "../../../assets/icons/phone.webp";
import email from "../../../assets/icons/email.webp";
import address from "../../../assets/icons/address.webp";

gsap.registerPlugin(ScrollTrigger);

const Detail = ({ img, heading, para }) => {
  return (
    <div className="contact__contactsecond-right_detail">
      <div className="contact__contactsecond-right_detail-img">
        <img src={img} alt="img" />
      </div>
      <div className="contact__contactsecond-right_detail-img_content">
        <h3>{heading}</h3>
        <p>{para}</p>
      </div>
    </div>
  );
};

const contactDetails = [
  { img: phone, heading: "Phone:", para: "+123 456 789" },
  { img: email, heading: "Email:", para: "info@example.com" },
  { img: address, heading: "Address", para: "123 Street, City, Country" },
];

const ContactSecond = () => {
  const headingRef = useRef(null);
  const detailsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      gsap.from(headingRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      });

      // Animate details one by one
      gsap.from(detailsRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: detailsRef.current[0]?.parentNode, // parent container
          start: "top 85%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="contact__contactsecond">
      <div className="container">
        <div className="contact__contactsecond-left">
          <div className="contact__contactsecond-left_heading" ref={headingRef}>
            <h2>Contact us</h2>
            <h1>Need any help? Feel free to contact us.</h1>
          </div>
          <form className="contact__contactsecond-left_form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="tel" placeholder="Your Phone Number" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Your Message" rows="6" required></textarea>
            <button type="submit" className="btn">
              Send Message
            </button>
          </form>
        </div>
        <div className="contact__contactsecond-right">
          {contactDetails.map((detail, index) => (
            <div key={index} ref={(el) => (detailsRef.current[index] = el)}>
              <Detail
                img={detail.img}
                heading={detail.heading}
                para={detail.para}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactSecond;
