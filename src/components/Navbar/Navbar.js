import React, { useState } from "react";

const Navbar = () => {
  const [openState, setOpenState] = useState(false);

  const handleChangeState = () => setOpenState(!openState);

  return (
    <nav
      className="navbar"
      role="navigation"
      aria-label="main navigation"
      onClick={handleChangeState}
    >
      <a
        role="button"
        className={openState ? "navbar-burger is-active" : "navbar-burger"}
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>

      {/*<div*/}
      {/*  id="navbarBasicExample"*/}
      {/*  className={openState ? "navbar-menu is-active" : "navbar-menu "}*/}
      {/*>*/}
      {/*  <div className="navbar-start">*/}
      {/*    <a className="navbar-item">Settings</a>*/}
      {/*    <hr className="navbar-divider" />*/}
      {/*    <a className="navbar-item">Log out</a>*/}
      {/*  </div>*/}

      {/*  <div className="navbar-end">*/}
      {/*    <div className="navbar-item">*/}
      {/*      <div className="buttons">*/}
      {/*        <a className="button is-primary">*/}
      {/*          <strong>Sign up</strong>*/}
      {/*        </a>*/}
      {/*        <a className="button is-light">Log in</a>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/*<div>*/}
      {/*  <button className="button">button</button>*/}
      {/*  <button className="button">button</button>*/}
      {/*  <button className="button">button</button>*/}
      {/*</div>*/}
    </nav>
  );
};

export default Navbar;
