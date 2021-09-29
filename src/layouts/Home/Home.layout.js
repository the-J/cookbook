import React from "react";
import { Navbar } from "../../components/";

const HomeLayout = ({ children }) => (
  <div className="container">
    <Navbar />
    {children}
  </div>
);

export default HomeLayout;
