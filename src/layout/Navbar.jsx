import React from "react";
import { Link } from "react-router-dom";
import "./nav.css"

const Navbar = () => {
  return (
    <nav className="d-flex container justify-content-between align-items-center">
      <div>
        <Link className="navbar-brand" to="/">
          <img
            style={{ width: "150px" }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
            alt=""
            name=""
          />
        </Link>
      </div>

      <ul className="desktop">
        <li className="nav-link">
          <Link  className="link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-link">
          <Link className="link" to="/favorites">
            Favorites
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
