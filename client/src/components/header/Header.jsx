import React, { useState } from "react";
import "./header.css";
import { CiLocationOn } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import logo from "../../assets/icons/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle Menu and Prevent Scroll on Open
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  };

  return (
    <div className="components__header">
      {/* Upper Section */}
      <div className="components__header-upper">
        <div className="components__header-upper_location">
          <CiLocationOn
            style={{ color: "var(--primary-color)", fontSize: "24px" }}
          />
          <p>430 E State St Lola, Wisconsin</p>
        </div>
        <div className="components__header-upper_phone">
          <LuPhone
            style={{ color: "var(--primary-color)", fontSize: "24px" }}
          />
          <p>+1 234 567 8900</p>
        </div>
        <div className="components__header-upper_email">
          <MdOutlineMail
            style={{ color: "var(--primary-color)", fontSize: "24px" }}
          />
          <p>abc@xyz.com</p>
        </div>
      </div>

      <hr color="#2d2e30" />

      {/* Lower Section */}
      <div className="components__header-lower">
        {/* Logo */}
        <div className="components__header-lower_logo">
          <img src={logo} alt="Logo" className="logo" />
          <h1>
            Titan <span>Gym</span>
          </h1>
        </div>

        {/* Navigation */}
        <ul className={`components__header-lower_nav ${isOpen ? "open" : ""}`}>
          <li onClick={toggleMenu}>Home</li>
          <li onClick={toggleMenu}>Services</li>
          <li onClick={toggleMenu}>Trainers</li>
          <li onClick={toggleMenu}>Blog</li>
          <li onClick={toggleMenu}>About</li>
        </ul>

        {/* Contact Button & Hamburger */}
        <div className="components__header-lower_actions">
          <button className="btn">Contact Us</button>
          <div className="hamburger" onClick={toggleMenu}>
            {isOpen ? <IoMdClose size={30} /> : <FiMenu size={30} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
