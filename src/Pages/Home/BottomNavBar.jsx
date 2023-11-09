import "./BottomNavBar.css"
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import{BsSquareFill} from "react-icons/bs"

function BottomNavBar() {
    return (
        <div className="bottom-nav-bar">
                        <Link
                        smooth={true}
                        offset={-40}
                        duration={500}
                        to="heroSection"
                        >
                        <BsSquareFill />
                        </Link>
                        <Link
                        smooth={true}
                        offset={-60}
                        duration={500}
                        to="mySkills"
                        >
                        <BsSquareFill />
                        </Link>
                        <Link
                        smooth={true}
                        offset={-80}
                        duration={500}
                        to="AboutMe"
                        >
                        <BsSquareFill />
                        </Link>
                        <Link
                        smooth={true}
                        offset={-45}
                        duration={500}
                        to="MyPortfolio"
                        >
                        <BsSquareFill />
                        </Link>
                        <Link
                        smooth={true}
                        offset={-60}
                        duration={500}
                        to="Contact"
                        >
                        <BsSquareFill />
                        </Link>
        </div>
    )
}

export default BottomNavBar;