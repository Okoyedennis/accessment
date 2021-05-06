import React, { useState } from "react";
import "./Home.css";
import { homeItem1 } from "../Data";
import { homeItem2 } from "../Data";

const Home = () => {
  const [data1] = useState(homeItem1);
  const [data2] = useState(homeItem2);
  return (
    <section>
      <div className="home">
        <div className="home__wrapper container">
          <div className="home__text">
            <h1>Welcome to the number one truck delivery service</h1>
          </div>
        </div>
      </div>
      <div className="home__about container">
        <div className="home__aboutInfo">
          <h2>What we offer</h2>
          <p>tailored services</p>
        </div>
        <div className="home__aboutFlexContainer">
          {data1.map((item) => {
            return (
              <div className="aboutFLex">
                <div className="home__aboutIcon">{item.icon}</div>
                <div className="home__aboutText">
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="home__aboutFlexContainer">
          {data2.map((item) => {
            return (
              <div className="aboutFLex">
                <div className="home__aboutIcon">{item.icon}</div>
                <div className="home__aboutText">
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Home;
