import "./BottomNavBar.css"
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import{BsFillPersonFill} from "react-icons/bs"
import{AiFillHome} from "react-icons/ai"
import{GiSkills} from "react-icons/gi"
import{HiMiniComputerDesktop} from "react-icons/hi2"
import{BiSolidMessageAltDetail} from "react-icons/bi"

function BottomNavBar({closeNewProject}) {
    
    const [isActive, setIsActive] = useState(false);
    const [buttonActive, setButtonActive] = useState("home");

    const skillsTop = 778
    const aboutTop = 1981
    const projectsTop = 3184
    const contactTop = 4548

    const activeColorButton = () => {
        setIsActive(true);
    };

    useEffect(() =>{
       window.addEventListener("scroll", () => {
        if(window.scrollY < skillsTop) {
            setButtonActive("home")
            activeColorButton()
        } else if(window.scrollY >= skillsTop && window.scrollY < aboutTop) {
            setButtonActive("skills")
            activeColorButton()
        } else if(window.scrollY >= aboutTop && window.scrollY < projectsTop) {
            setButtonActive("about")
            activeColorButton()
        } else if(window.scrollY >= projectsTop && window.scrollY < contactTop) {
            setButtonActive("projects")
            activeColorButton()
        } else if(window.scrollY >= contactTop) {
            setButtonActive("contact")
            activeColorButton()
        }
       })
    },[])

    return (
        <div className="bottom-nav-bar">
                        <Link
                        onClick={closeNewProject}
                        smooth={true}
                        offset={0}
                        duration={500}
                        to="heroSection"
                        className={`bottom-navbar--content ${buttonActive == "home" ? "active" : ""}`}
                        >
                        <AiFillHome />
                        </Link>
                        <Link
                        onClick={closeNewProject}
                        smooth={true}
                        offset={0}
                        duration={500}
                        to="mySkills"
                        className={`bottom-navbar--content ${isActive && buttonActive == "skills" ? "active" : ""}`}
                        >
                        <GiSkills />
                        </Link>
                        <Link
                        onClick={closeNewProject}
                        smooth={true}
                        offset={-90}
                        duration={500}
                        to="AboutMe"
                        className={`bottom-navbar--content ${isActive && buttonActive == "about" ? "active" : ""}`}
                        >
                        <BsFillPersonFill />
                        </Link>
                        <Link
                        onClick={closeNewProject}
                        smooth={true}
                        offset={-30}
                        duration={500}
                        to="MyPortfolio"
                        className={`bottom-navbar--content ${isActive && buttonActive == "projects" ? "active" : ""}`}
                        >
                        <HiMiniComputerDesktop />
                        </Link>
                        <Link
                        onClick={closeNewProject}
                        smooth={true}
                        offset={-20}
                        duration={500}
                        to="Contact"
                        className={`bottom-navbar--content ${isActive && buttonActive == "contact" ? "active" : ""}`}
                        >
                        <BiSolidMessageAltDetail />
                        </Link>
        </div>
    )
}

export default BottomNavBar;