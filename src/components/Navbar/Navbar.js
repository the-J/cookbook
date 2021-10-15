import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { useAuthContext } from "../../context/auth/auth.context";
import { useError } from "../../context/error.context";
import { signOut } from "../../auth/authUser";

const Navbar = () => {
  const history = useHistory();
  const { addError } = useError();
  const {
    state: { isAuthenticated, user },
    initializeUser,
  } = useAuthContext();
  const [dropdownState, setDropdownState] = useState(false);

  const changeDropdownState = () => setDropdownState(!dropdownState);

  const handleSignOut = () => {
    signOut()
      .then(async () => {
        await initializeUser();
        changeDropdownState();
        history.push("/log-in");
      })
      .catch((err) => addError(err, "AWS err"));
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
          className={`navbar-burger ${dropdownState && "is-active"}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={changeDropdownState}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div className={`navbar-menu ${dropdownState && "is-active"}`}>
        <div className="navbar-start" onClick={changeDropdownState}>
          <Link to="/sign-up" className="navbar-item">
            Sign up
          </Link>
          <Link to="/log-in" className="navbar-item">
            Log in
          </Link>
        </div>

        {isAuthenticated && (
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button className="button is-primary" onClick={handleSignOut}>
                  <strong>Log out</strong>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
