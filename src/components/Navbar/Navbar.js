import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

import { useAuthContext } from "../../context/auth/auth.context";
import { useNotif } from "../../context/notif/notifications.context";
import { signOut } from "../../auth/authUser";
import routes from "../../router/routes";

const Navbar = () => {
  const history = useHistory();
  const { pushNotif } = useNotif();
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
        history.push(routes.logIn.pathName);
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
          {isAuthenticated ? (
            Object.values(routes).map((route) => {
              return (
                route.private && (
                  <Link to={route.pathName} className="navbar-item" />
                )
              );
            })
          ) : (
            <>
              <Link to="/sign-up" className="navbar-item">
                Sign up
              </Link>
              <Link to="/log-in" className="navbar-item">
                Log in
              </Link>
            </>
          )}
        </div>

        {isAuthenticated && (
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button className="button" onClick={handleSignOut}>
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
