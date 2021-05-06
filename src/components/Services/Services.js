import React, { useContext } from "react";
import "./Services.css";
import { TruckContext } from "../TruckContext";
import Truck from "./Truck";
import { Table } from "react-bootstrap";
import AddTruck from "./AddTruck";

const Services = () => {
  const [truck, setTruck] = useContext(TruckContext);
  return (
    <section>
      <div className="services">
        <div className="services__wrapper container">
          <div className="services__text">
            <h1>Welcome to the number one truck delivery service</h1>
          </div>
        </div>
      </div>
      <div className="services__content container">
        <AddTruck />
        {truck.map((item) => {
          return (
            <>
              <Truck
                name={item.name}
                plateNumber={item.plateNumber}
                key={item.id}
              />
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
