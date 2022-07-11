import React, { useState } from "react";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  SidebarHeader,
  Menu,
  MenuItem,
  SidebarContent,
} from "react-pro-sidebar";

const MegaMenuMobile = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="mega-menu-wrapper">
      <div className="mob-header multi-mob-header">
        <button className="toggler-menu" onClick={handleClick}>
          <div className={click ? "active" : ""}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      {/* End Header */}

      <ProSidebar
        className={click ? "mega-mobile-menu menu-open" : "mega-mobile-menu"}
      >
        <SidebarHeader>
          <div className="logo position-static">
            <a href="index.html">
              <img
                src="/images/logo/favicon-256.png"
                style={{ maxWidth: "50px" }}
                alt="home-demo"
              />
            </a>
          </div>
          <div className="fix-icon text-dark" onClick={handleClick}>
            <img src="images/icon/close-w.svg" alt="icon" />
          </div>
          {/* Mobile Menu close icon */}

          {/* End logo */}
        </SidebarHeader>
        <SidebarContent>
          <Menu>
            <MenuItem>
              <Link to="#home">Home</Link>
            </MenuItem>
            <MenuItem>
              <Link to="#features">Features</Link>
            </MenuItem>
            <MenuItem>
              <Link to="#pricing">Pricing</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/login">Login</Link>
            </MenuItem>
          </Menu>
        </SidebarContent>
      </ProSidebar>
    </div>
  );
};

export default MegaMenuMobile;
