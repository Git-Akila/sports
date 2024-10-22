import React from "react";

import "./Footer.css";
import { Link as LinkR } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
   
  return (
    <>
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div>
            <h2 className="footer-title">About Us</h2>
            <p>
              We are a Sports community that aims to inspire you to reach your
              goals. Join us to challenge your limits and be a part of the best
              Sports club.
            </p>
          </div>

          <div>
            <h2 className="footer-title">Quick Links</h2>
            <ul className="space-y-8">
              <li className="footer-link">
                <a href="/" className="hover:underline">
                  About
                </a>
              </li>
              <li className="footer-link">
                <a href="/" className="hover:underline">
                  Services
                </a>
              </li>
              <li className="footer-link">
                <a href="/" className="hover:underline">
                  Contact
                </a>
              </li>
              <li className="footer-link">
                <a href="/" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li className="footer-link">
                <a href="/" className="hover:underline">
                 Terms and Conditions
                </a>
              </li>
            </ul>
          </div>
          
          {/* Social Media Section */}
          <div>
            <h3 className="footer-title">Follow Us</h3>
            <div className="social-media">
              <a
                href="https://facebook.com"
                className="social-media-link facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                className="social-media-link twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                className="social-media-link instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>
          <span className="highlight">2024 </span>© {new Date().getFullYear()} Sports Club. All Rights Reserved.
        </p>
      </div>
    </footer>
    </>
  );
};

export default Footer;
