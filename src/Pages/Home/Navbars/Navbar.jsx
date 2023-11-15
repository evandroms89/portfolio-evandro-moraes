import "./Navbar.css"
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {

  return (
    <nav className="navbar">
      <div className="logo">
        EVANDRO MORAES / DEV
      </div>
      <div className="navbar--items">
        <ul>
          <li>
            <Link
              activeClass="navbar--active-content"
              smooth={true}
              offset={-40}
              duration={500}
              to="heroSection"
              className="navbar--content"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="navbar--active-content"
              smooth={true}
              offset={-60}
              duration={500}
              to="mySkills"
              className="navbar--content"
            >
              Habilidades
            </Link>
          </li>
          <li>
            <Link
              activeClass="navbar--active-content"
              smooth={true}
              offset={-80}
              duration={500}
              to="AboutMe"
              className="navbar--content"
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link
              activeClass="navbar--active-content"
              smooth={true}
              offset={-20}
              duration={500}
              to="MyPortfolio"
              className="navbar--content"
            >
              Projetos
            </Link>
          </li>
        </ul>
      </div>
      <Link
        activeClass="navbar--active-content"
        smooth={true}
        offset={-60}
        duration={500}
        to="Contact"
        className="btn btn-outline-primary navbar-btn"
      >
        Contato
      </Link>
    </nav>
  );
}

export default Navbar;
