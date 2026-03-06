import React, { useEffect, useRef, useState } from "react";
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [status, setStatus] = useState({ type: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const res = await fetch("https://titan-gym-sigma.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({
          name: "",
          email: "",
          number: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus({ type: "error", message: data.error || "Something went wrong" });
      }
    } catch (error) {
      console.error(error);
      setStatus({ type: "error", message: "Server error. Please try again later." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact__contactsecond">
      <div className="container">
        <div className="contact__contactsecond-left">
          <div className="contact__contactsecond-left_heading" ref={headingRef}>
            <h2>Contact us</h2>
            <h1>Need any help? Feel free to contact us.</h1>
          </div>
          <form
            className="contact__contactsecond-left_form"
            onSubmit={handleSubmit}
          >
            {status.message && (
              <div style={{ 
                padding: '1rem', 
                marginBottom: '1rem', 
                borderRadius: '5px',
                backgroundColor: status.type === 'success' ? '#4caf5022' : '#f4433622',
                color: status.type === 'success' ? '#4caf50' : '#f44336',
                border: `1px solid ${status.type === 'success' ? '#4caf50' : '#f44336'}`,
                textAlign: 'center'
              }}>
                {status.message}
              </div>
            )}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="number"
              placeholder="Your Phone Number"
              value={formData.number}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="btn" disabled={isLoading}>
              {isLoading ? "Sending..." : "Send Message"}
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
