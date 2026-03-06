import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/icons/logo.png";
import "./header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      {/* Upper Section */}
      <div className="header-container">
        <div className="header-upper">
          <div className="header-upper_item">
            <CiLocationOn size={16} />
            <p>430 E State St, Lola</p>
          </div>
          <span>|</span>
          <div className="header-upper_item">
            <LuPhone size={16} />
            <p>+1 234 567 8900</p>
          </div>
          <span>|</span>
          <div className="header-upper_item">
            <MdOutlineMail size={16} />
            <p>warlegend098@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Lower Section */}
      <div className="header-container">
        <div className="header-lower">
          {/* Logo */}
          <div className="header-lower_logo">
            <Link to="/" onClick={() => setIsOpen(false)}>
              <img src={logo} alt="Logo" />
            </Link>
            <h1>
              Titan <span>Gym</span>
            </h1>
          </div>

          {/* Navigation */}
          <nav className={`nav-links ${isOpen ? "open" : ""}`}>
            {/* Close button inside nav panel (visible only on mobile) */}
            <div className="nav-close-btn" onClick={toggleMenu}>
              <IoMdClose size={30} />
            </div>
            <ul>
              {["Home", "Services", "Team", "Blog", "About"].map((item) => (
                <li key={item}>
                  {/* Convert item text to proper route path */}
                  <NavLink
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    onClick={toggleMenu}
                    className={({ isActive }) =>
                      isActive ? "active-link" : ""
                    }
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Button & Hamburger */}
          <div className="header-actions">
            <Link to="/contact">
              <button className="btn">Contact Us</button>
            </Link>
            <div className="hamburger" onClick={toggleMenu}>
              {isOpen ? <IoMdClose size={30} /> : <FiMenu size={30} />}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
