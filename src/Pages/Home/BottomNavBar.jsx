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
                        offset={-40}
                        duration={500}
                        to="heroSection"
                        >
                        <AiFillHome />
                        </Link>
                        <Link
                        smooth={true}
                        offset={-60}
                        duration={500}
                        to="mySkills"
                        >
                        <GiSkills />
                        </Link>
                        <Link
                        smooth={true}
                        offset={-80}
                        duration={500}
                        to="AboutMe"
                        >
                        <BsFillPersonFill />
                        </Link>
                        <Link
                        smooth={true}
                        offset={-45}
                        duration={500}
                        to="MyPortfolio"
                        >
                        <HiMiniComputerDesktop />
                        </Link>
                        <Link
                        smooth={true}
                        offset={-60}
                        duration={500}
                        to="Contact"
                        >
                        <BiSolidMessageAltDetail />
                        </Link>
        </div>
    )
}

export default BottomNavBar;