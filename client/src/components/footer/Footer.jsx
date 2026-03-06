import React from "react";
import "./footer.css";
import logo from "../../assets/icons/logo.png";

import Carousel from "../carousel/Carousel";
import img1 from "../../assets/carousel/img1.webp";
import img2 from "../../assets/carousel/img2.webp";
import img3 from "../../assets/carousel/img3.webp";
import img4 from "../../assets/carousel/img4.webp";

import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";

import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { MdDoubleArrow } from "react-icons/md";

import { Link } from "react-router-dom";

const Footer = () => {
  const images = [img1, img2, img3, img4];
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-upper">
          <div className="footer-upper-main">
            <div className="footer-upper-main-heading">
              <img src={logo} alt="Logo" />
              <h3>
                Titan <span>Gym</span>
              </h3>
            </div>
            <div className="footer-upper-main-rest">
              <p>
                Lorem Ipsum is simply dummy text and printing and typesetting
                industry has the industry's standardd.
              </p>
              <div className="footer-upper-main-rest-follow">
                <h6>Follow us today:</h6>
                <div className="footer-upper-main-rest-follow-icons">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF style={{ width: "20px", height: "20px" }} />
                  </a>
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaXTwitter style={{ width: "20px", height: "20px" }} />
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoLogoLinkedin style={{ width: "20px", height: "20px" }} />
                  </a>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoLogoInstagram
                      style={{ width: "20px", height: "20px" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-upper-links">
            <div className="footer-upper-links-heading">
              <h3>Quick Links</h3>
            </div>
            <ul className="footer-upper-links-rest">
              <li>
                <Link to="/contact">
                  <MdDoubleArrow />
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/services">
                  <MdDoubleArrow />
                  Services
                </Link>
              </li>
              <li>
                <Link to="/team">
                  <MdDoubleArrow />
                  Team
                </Link>
              </li>
              <li>
                <Link to="/blog">
                  <MdDoubleArrow />
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <MdDoubleArrow />
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-upper-contact">
            <div className="footer-upper-contact-heading">
              <h3>Contact Info:</h3>
            </div>
            <div className="footer-upper-contact-rest">
              <p>Visit our office or connect us via Phone and Email.</p>
              <div className="footer-upper-contact-rest-details">
                <div className="footer-upper-contact-rest-details-location">
                  <FaLocationDot />
                  Obere Haltenstrasse, Lugaggia. Switzerland - 6953
                </div>
                <div className="footer-upper-contact-rest-details-phone">
                  <FaPhone />
                  +410 123 456 789
                </div>
                <div className="footer-upper-contact-rest-details-email">
                  <MdEmail />
                  warlegend098@gmail.com
                </div>
              </div>
            </div>
          </div>
          {/* <div className="footer-upper-gallery">
            <div className="footer-upper-gallery-heading">
              <h3>Photo Gallery</h3>
            </div>
            <div className="footer-upper-gallery-rest">
              <Carousel images={images} />
            </div>
          </div> */}
        </div>
        <div className="footer-lower">
          <p>Titan Gym | Developed by: Usman Siddiqui</p>
          <p>© Fitnase 2026 | All Right Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
