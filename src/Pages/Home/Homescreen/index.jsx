import AboutMe from "../AboutMe";
import BottomNavBar from "../Navbars/BottomNavBar";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Navbar from "../Navbars/Navbar";

import { useState } from "react";

export default function Home() {
  const [portfolioContainer, setPortfolioContainer] = useState(true);
  const [newProject, setNewProject] = useState(false);
  const [projectId, setProjectId] = useState(0);

  const showNewProject = () => {
    setNewProject(true);
  }

  const closeNewProject = () => {
    setNewProject(false)
    setPortfolioContainer(true)
  }

  const showNewProject1 = () => {
    showNewProject()
    setProjectId(1)
    setPortfolioContainer(false)
  }

  const showNewProject2 = () => {
    showNewProject()
    setProjectId(2)
    setPortfolioContainer(false)
  }

  const showNewProject3 = () => {
    showNewProject()
    setProjectId(3)
    setPortfolioContainer(false)
  }

  const showNewProject4 = () => {
    showNewProject()
    setProjectId(4)
    setPortfolioContainer(false)
  }

  const showNewProject5 = () => {
    showNewProject()
    setProjectId(5)
    setPortfolioContainer(false)
  }

  const showNewProject6 = () => {
    showNewProject()
    setProjectId(6)
    setPortfolioContainer(false)
  }
  return (
    <>
      <Navbar closeNewProject={closeNewProject} />
      <HeroSection closeNewProject={closeNewProject} />
      <MySkills />
      <AboutMe />
      <MyPortfolio portfolioContainer={portfolioContainer} newProject={newProject} projectId={projectId} showNewProject={showNewProject} closeNewProject={closeNewProject} showNewProject1={showNewProject1} showNewProject2={showNewProject2} showNewProject3={showNewProject3} showNewProject4={showNewProject4} showNewProject5={showNewProject5} showNewProject6={showNewProject6} />
      <ContactMe />
      <Footer />
      <BottomNavBar closeNewProject={closeNewProject} />
    </>
  );
}
