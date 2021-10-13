import React from "react";
import { Notification, Navbar } from "../../components/";

const LayoutMain = ({ children }) => (
  <div className="container">
    <Navbar />
    {children}
    <Notification />
  </div>
);

export default LayoutMain;
