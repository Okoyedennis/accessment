import React, { createContext, useState } from "react";

export const TruckContext = createContext();

export const TruckProvider = (props) => {
  const [truck, setTruck] = useState([
    {
      name: "Fire engine",
      plateNumber: 2123223,
      id: 1,
    },
    {
      name: "Tow truck",
      plateNumber: 6578349,
      id: 2,
    },
    {
      name: "Tractor",
      plateNumber: 2145983,
      id: 3,
    },
  ]);
  return (
    <TruckContext.Provider value={[truck, setTruck]}>
      {props.children}
    </TruckContext.Provider>
  );
};
