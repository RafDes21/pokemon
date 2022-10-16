import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import "./nav.css";

const Navbar = () => {
  const [state, setState] = useState(true);
  const [init, setInit] = useState(false);

  const control = () => {
    setState(!state);
  };

  window.addEventListener("scroll", () => {
    const ejeY = window.scrollY;
    if (ejeY < 100) {
      setInit(false);
    } else {
      setInit(true);
    }
  });

  return (
    <nav
      className="d-flex container justify-content-between align-items-center"
      id="nav"
    >
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
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-link">
          <Link className="link" to="/favorites">
            Favorites
          </Link>
        </li>
      </ul>

      <ul
        className="mobile"
        style={state ? { transform: "translateX(100%)" } : { transform: "" }}
      >
        <li onClick={control} className="nav-link">
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li onClick={control} className="nav-link">
          <Link className="link" to="/favorites">
            Favorites
          </Link>
        </li>
      </ul>
      {init ? (
        <a className="return" href="#nav">
          <BsArrowUpCircleFill />
        </a>
      ) : (
        <></>
      )}

      <div onClick={control} className="control">
        {state ? <GiHamburgerMenu /> : <AiOutlineClose />}
      </div>
    </nav>
  );
};

export default Navbar;
