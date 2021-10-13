import React from "react";
import { Navbar } from "../../components/";

const LayoutMain = ({ children }) => (
  <div className="container">
    <Navbar />
    {children}
  </div>
);

export default LayoutMain;
