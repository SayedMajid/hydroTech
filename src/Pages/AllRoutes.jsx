import React from "react";
import { Route, Routes } from "react-router-dom";
import Aboutus from "./Aboutus";
import Contactus from "./Contactus";
import Homepage from "./Homepage";
import Login from "./Login";
import Products from "./Products";
import Services from "./Services";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/services" element={<Services />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contactus" element={<Contactus />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AllRoutes;
