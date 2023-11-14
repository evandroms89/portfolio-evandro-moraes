import "./BottomNavBar.css"
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import{BsSquareFill, BsFillPersonFill} from "react-icons/bs"
import{AiFillHome} from "react-icons/ai"
import{GiSkills} from "react-icons/gi"
import{HiMiniComputerDesktop} from "react-icons/hi2"
import{BiSolidMessageAltDetail} from "react-icons/bi"

function BottomNavBar() {
    return (
        <div className="bottom-nav-bar">
                        <Link
                        smooth={true}
                        offset={-30}
                        duration={500}
                        to="heroSection"
                        className="bottom-navbar--content"
                        >
                        <AiFillHome />
                        </Link>
                        <Link
                        smooth={true}
                        offset={-30}
                        duration={500}
                        to="mySkills"
                        className="bottom-navbar--content"
                        >
                        <GiSkills />
                        </Link>
                        <Link
                        smooth={true}
                        offset={-50}
                        duration={500}
                        to="AboutMe"
                        className="bottom-navbar--content"
                        >
                        <BsFillPersonFill />
                        </Link>
                        <Link
                        smooth={true}
                        offset={-30}
                        duration={500}
                        to="MyPortfolio"
                        className="bottom-navbar--content"
                        >
                        <HiMiniComputerDesktop />
                        </Link>
                        <Link
                        smooth={true}
                        offset={-30}
                        duration={500}
                        to="Contact"
                        className="bottom-navbar--content"
                        >
                        <BiSolidMessageAltDetail />
                        </Link>
        </div>
    )
}

export default BottomNavBar;