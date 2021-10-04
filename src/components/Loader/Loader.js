import React from "react";
import "./Loader.styles.scss";

const Loader = () => (
  <span
    className="block bulma-loader-mixin"
    style={{
      height: "300px",
      width: "500px",
    }}
  />
);

export default Loader;
