import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

import { useAuthContext } from "../../context/auth/auth.context";
import { useNotif } from "../../context/notifications.context";
import { signOut } from "../../auth/authUser";

const Navbar = () => {
  const history = useHistory();
  const { pushNotif } = useNotif();
  const { location } = useLocation();
  const {
    state: { isAuthenticated, user },
    logOutUser,
  } = useAuthContext();
  const [dropdownState, setDropdownState] = useState(false);

  const changeDropdownState = () => setDropdownState(!dropdownState);

  const handleSignOut = () => {
    signOut()
      .then(async () => {
        logOutUser();
        changeDropdownState();
        history.push("/log-in");
      })
      .catch((err) => pushNotif(err, "AWS err"));
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
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/pantry" className="navbar-item">
            Pantry
          </Link>
          {/*<Link to="/recipes" className="navbar-item">*/}
          {/*  Recipes*/}
          {/*</Link>*/}
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
