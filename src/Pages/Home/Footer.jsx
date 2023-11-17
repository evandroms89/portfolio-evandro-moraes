import "./Footer.css"
import { Link } from "react-scroll";
import React from "react";

function Footer() {
  return (
    <footer className="footer--container">
        <div className="footer--items">
          <ul>
            <li>
              <Link
                smooth={true}
                offset={-70}
                duration={500}
                to="heroSection"
                className="footer--nav"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                smooth={true}
                offset={-70}
                duration={500}
                to="mySkills"
                className="footer--nav"
              >
                Habilidades
              </Link>
            </li>
            <li>
              <Link
                smooth={true}
                offset={-70}
                duration={500}
                to="AboutMe"
                className="footer--nav"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                smooth={true}
                offset={-70}
                duration={500}
                to="MyPortfolio"
                className="footer--nav"
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                smooth={true}
                offset={-70}
                duration={500}
                to="Contact"
                className="footer--nav"
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>
    </footer>
  );
}

export default Footer;
