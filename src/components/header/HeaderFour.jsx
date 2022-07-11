import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";

import MegaMenu from "./mega-menu/MegaMenu";
import MegaMenuMobile from "./mega-menu/MegaMenuMobile";

const HeaderFour = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 68) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <div
        className={
          navbar
            ? "theme-main-menu sticky-menu theme-menu-four bg-none fixed"
            : "theme-main-menu sticky-menu theme-menu-four bg-none"
        }
      >
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo">
            <Link
              to="home"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <img
                src="images/logo/favicon-256.png"
                alt="brand logo"
                style={{ maxWidth: "50px" }}
              />
            </Link>
          </div>
          {/* End Logo */}

          <nav id="mega-menu-holder" className="navbar navbar-expand-lg">
            <div className="container nav-container">
              <div
                className="navbar-collapse collapse"
                id="navbarSupportedContent"
              >
                <div className="d-lg-flex align-items-center">
                  <MegaMenu />
                  {/* End MegaMenu */}

                  <ul className="right-button-group d-flex align-items-center justify-content-center">
                    {/* <li>
                      <Link to="login" className="signIn-action">
                        Login
                      </Link>
                    </li> */}
                    <li>
                      <Link
                        to="waitlist"
                        style={{ color: "white" }}
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="theme-btn-five"
                      >
                        Join Waitlist
                      </Link>
                    </li>
                  </ul>
                  {/* End right-button-group  */}
                </div>
              </div>
            </div>
          </nav>
          {/* End nav */}
        </div>

        <MegaMenuMobile />
        {/* 	End Mega Menu for Mobile */}
      </div>
      {/* /.theme-main-menu */}
    </>
  );
};

export default HeaderFour;
