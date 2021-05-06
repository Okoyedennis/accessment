import React from "react";

const AboutItem2 = ({ title, img, text }) => {
  return (
    <div className="aboutItem">
      <div className="aboutItem__content">
        <div className="aboutItem__img">
          <img src={img} alt="" />
        </div>
        <div className="aboutItem__text gap">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutItem2;
