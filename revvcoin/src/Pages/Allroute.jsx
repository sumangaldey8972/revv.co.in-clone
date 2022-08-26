import React from "react";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "../AppContext/PrivateRoute";
import CarPayment from "./CarPayment";
import Home from "./Home";
import Hyundai from "./Hyundai";
import RentACar from "./RentACar";

const Allroute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hyundai" element={<Hyundai />} />
        <Route path="/rent" element={<RentACar />} />
        <Route path="/carddetail/:id" element={<CarPayment />} />
      </Routes>
    </>
  );
};

export default Allroute;
