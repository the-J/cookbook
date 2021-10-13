import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openState, setOpenState] = useState(false);
  const handleChangeState = () => {
    setOpenState(!openState);
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        {/*<a className="navbar-item" href="https://bulma.io">*/}
        {/*  <img*/}
        {/*    src="https://bulma.io/images/bulma-logo.png"*/}
        {/*    width="112"*/}
        {/*    height="28"*/}
        {/*  />*/}
        {/*</a>*/}

        <a
          role="button"
          className={`navbar-burger ${openState && "is-active"}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={handleChangeState}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div className={`navbar-menu ${openState && "is-active"}`}>
        <div className="navbar-start">
          <Link to="/sign-up" className="navbar-item">
            Sign up
          </Link>
          <Link to="/sign-in" className="navbar-item">
            Sign in
          </Link>
        </div>

        {/*<div className="navbar-end">*/}
        {/*  <div className="navbar-item">*/}
        {/*    <div className="buttons">*/}
        {/*      <a className="button is-primary">*/}
        {/*        <strong>Sign up</strong>*/}
        {/*      </a>*/}
        {/*      <a className="button is-light">Log in</a>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </nav>
  );
};

export default Navbar;
