import React from "react";
import { Redirect } from "react-router-dom";

import { LayoutMain } from "../../layouts";

const HomeView = () => (
  <LayoutMain>
    <Redirect to="/pantry" />
  </LayoutMain>
);

export default HomeView;
