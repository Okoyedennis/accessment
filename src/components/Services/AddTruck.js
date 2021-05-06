import React, { useState, useContext } from "react";
import { Badge, Button } from "react-bootstrap";
import { TruckContext } from "../TruckContext";

const AddTruck = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [truck, setTruck] = useContext(TruckContext);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateNumber = (e) => {
    setNumber(e.target.value);
  };

  const addTruck = (e) => {
    e.preventDefault();
    setTruck((prevTrucks) => [
      ...prevTrucks,
      { name: name, plateNumber: number },
    ]);

    e.target.reset();
  };

  return (
    <form className="form" onSubmit={addTruck}>
      <input
        className="input"
        type="text"
        name="name"
        value={name}
        placeholder="Enter Name of Truck"
        onChange={updateName}
      />
      <input
        className="input"
        placeholder="Enter Truck ID"
        type="text"
        name="number"
        value={number}
        onChange={updateNumber}
      />

      <Button className="button" variant="primary" type="submit">
        Submit{" "}
        <Badge on variant="light">
          {truck.length}
        </Badge>
      </Button>
    </form>
  );
};

export default AddTruck;
