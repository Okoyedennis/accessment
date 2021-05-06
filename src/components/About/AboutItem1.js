import React from "react";
import "./AboutItem.css";

const AboutItem1 = ({ title, img, text }) => {
  return (
    <div className="aboutItem">
      <div className="aboutItem__content">
        <div className="aboutItem__text">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
        <div className="aboutItem__img">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutItem1;
