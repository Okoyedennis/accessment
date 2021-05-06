import React, { useState } from "react";
import "./Nav.css";
import { Link, NavLink } from "react-router-dom";
import { Clear, Menu } from "@material-ui/icons";
import { menuItem } from "../Data";

function Navbar() {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [data] = useState(menuItem);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  const changeBackground = () => {
    if (window.scrollY >= 20) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className={navbar ? "wrapper active" : "wrapper"}>
      <nav className="navbarItems container">
        <Link to="/" className="navbar-logo">
          <h2 className={navbar ? "nav-links active" : "nav-links"}>
            Truckify
          </h2>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <Clear className="icons" /> : <Menu className="icons" />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {data.map((item, index) => {
            return (
              <li key={index}>
                <NavLink
                  exact={true}
                  activeClassName="is-active"
                  className={navbar ? "nav-links active" : "nav-links"}
                  to={item.url}
                  onClick={closeMobileMenu}
                >
                  {item.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
