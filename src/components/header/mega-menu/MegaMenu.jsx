import React from "react";
import { Link } from "react-scroll";

const MegaMenu = () => {
  return (
    <ul className="navbar-nav">
      <li className="nav-item position-static">
        <Link
          className="nav-link"
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Home
        </Link>
        {/* /.dropdown-menu */}
      </li>
      {/* End li */}
      {/* End li */}

      <li className="nav-item">
        <Link
          className="nav-link"
          activeClass="active"
          to="features"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Features
        </Link>
      </li>
      {/* End li */}

      <li className="nav-item">
        <Link
          className="nav-link"
          activeClass="active"
          to="pricing"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Pricing
        </Link>
      </li>

      {/* End li */}
      {/* End li */}
      {/* End li */}
    </ul>
  );
  // End navbar nav mega menu main
};

export default MegaMenu;
