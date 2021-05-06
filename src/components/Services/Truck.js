import React from "react";
import { Table } from "react-bootstrap";

const Truck = ({ name, plateNumber }) => {
  return (
    <div className="truck">
      <div className="truck__container">
        <h5>{name}</h5>
        <h5>{plateNumber}</h5>
      </div>
    </div>
  );
};

export default Truck;
