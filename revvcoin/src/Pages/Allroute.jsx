import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './Home';
import Hyundai from './Hyundai';
const Allroute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hyundai" element={<Hyundai />} />
      </Routes>
    </>
  );
}

export default Allroute