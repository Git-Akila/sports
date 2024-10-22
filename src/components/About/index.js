import React from "react";
// import aboutImg from "../../images/image2.jpg";
import aboutImg from "../../images/aboutus5.jpg";
import "./About.css";

const About = () => {
  return (
    <section className="container p-3 about">
      <figure className="about__img">
        <img
          loading="lazy"
          src={aboutImg}
          alt="FitClub About Ilustration"
          aria-label="FitClub Image Example"
        />
      </figure>
      <header className="about__header">
        <h2>
          About <span>Us</span>
        </h2>
        <p className="txt-justify">
        At Kairaa Sports Club, we believe in pushing boundaries, fostering teamwork, and creating a community that thrives on passion and sportsmanship. Our club offers a variety of sports activities and events, catering to all skill levels. Whether 
        you’re looking to compete, stay fit, or simply have fun, we provide a supportive environment for everyone.
        </p>
      </header>
    </section>
  );
};

export default About;
