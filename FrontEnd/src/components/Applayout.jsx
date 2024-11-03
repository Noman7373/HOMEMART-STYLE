import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import ScrollTop from "./ScrollTop";

const Applayout = () => {
  return (
    <>
      <ScrollTop />
      <Navbar />

      <Outlet />
      <Footer />
    </>
  );
};

export default Applayout;
