import React from "react";
import "./Features.css";
import calendario from "../../assets/calendario.svg";
// import ducha from "../../assets/ducha.svg";
import ducha from '../../images/playerfacilities.png'
import pesa from "../../images/equipement1.png";
import salud from "../../assets/salud.svg";


const Features = () => {
  return (
    <section id="features" className="container m-3 center">
      <h2 className="m-3">Our Features</h2>
      <div className="features">
        <div className="feature">
          <img className="feature__img" src={calendario} alt="FitClub events" />
          <h4>COOL EVENTS</h4>
        </div>
        <div className="feature">
          <img
            className="feature__img"
            src={salud}
            alt="Medical Attention FitClub"
          />
          <h4>MEDICAL ATTENTION</h4>
        </div>
        <div className="feature">
          <img className="feature__img" src={pesa} alt="FitClub Equipment" />
          <h4>EQUIPEMENT</h4>
        </div>
        <div className="feature">
          <img className="feature__img" src={ducha} alt="FitClub Showers" />
          <h4>PLAYER FACILITIES</h4>
        </div>
      </div>
    </section>
  );
};

export default Features;
