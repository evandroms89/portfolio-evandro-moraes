import "./MyPortfolio.css"
import data from "../../data/index.json";

import { useState } from "react";
import{BsFillArrowLeftSquareFill,BsFillArrowUpRightSquareFill} from "react-icons/bs"
import{BsGithub} from "react-icons/bs"
import { Link } from "react-scroll";
import AnimatedPage from "./Effects/AnimatedPage";

import Slider from "./Sliders/Slider";
import Slider2 from "./Sliders/Slider2";
import Slider3 from "./Sliders/Slider3";
import Slider4 from "./Sliders/Slider4";
import Slider5 from "./Sliders/Slider5";
import Slider6 from "./Sliders/Slider6";

export default function MyPortfolio({portfolioContainer, newProject, projectId, showNewProject, closeNewProject, showNewProject1, showNewProject2, showNewProject3, showNewProject4, showNewProject5, showNewProject6}) {

  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
          <h2 className="portfolio--section--heading">projetos<span>&#40;&#41;</span></h2>
      </div>
      {portfolioContainer &&
      <AnimatedPage>
      <div className="portfolio--section--container">
            <Link
              onClick={showNewProject1}
              smooth={true}
              offset={-20}
              duration={100}
              to="MyPortfolio"
              className="portfolio--section--card"
            >
              <img src="img/projects/project1-cover.jpg" alt="capa projeto" />
            </Link>
            <Link
              onClick={showNewProject3}
              smooth={true}
              offset={-20}
              duration={100}
              to="MyPortfolio"
              className="portfolio--section--card"
            >
                <img src="img/projects/project3-cover.jpg" alt="capa projeto" />
            </Link>
            <Link
              onClick={showNewProject4}
              smooth={true}
              offset={-20}
              duration={100}
              to="MyPortfolio"
              className="portfolio--section--card"
            >
                <img src="img/projects/project4-cover.jpg" alt="capa projeto" />
            </Link>
            <Link
              onClick={showNewProject2}
              smooth={true}
              offset={-20}
              duration={100}
              to="MyPortfolio"
              className="portfolio--section--card"
            >
                <img src="img/projects/project2-cover.jpg" alt="capa projeto" />
            </Link>
            <Link
              onClick={showNewProject5}
              smooth={true}
              offset={-20}
              duration={100}
              to="MyPortfolio"
              className="portfolio--section--card"
            >
                <img src="img/projects/project5-cover.jpg" alt="capa projeto" />
            </Link>
            <Link
              onClick={showNewProject6}
              smooth={true}
              offset={-20}
              duration={100}
              to="MyPortfolio"
              className="portfolio--section--card"
            >
              <img src="img/projects/project6-cover.jpg" alt="capa projeto" />
            </Link>
      </div>
      </AnimatedPage>}
      <div id="portfolio--project">
        {newProject ?
          <div className="portfolio--project--content">
            <div className="portfolio--project--slider">
              {projectId == 1 ? <AnimatedPage><Slider /></AnimatedPage> : projectId == 2 ? <AnimatedPage><Slider2 /></AnimatedPage> : projectId == 3 ? <AnimatedPage><Slider3 /></AnimatedPage> : projectId == 4 ?<AnimatedPage><Slider4 /></AnimatedPage> : projectId == 5 ? <AnimatedPage><Slider5 /></AnimatedPage> : projectId == 6 ? <AnimatedPage><Slider6 /></AnimatedPage> : ""}
            </div>
            <AnimatedPage>
            <div className="portfolio--project--text">
              {data.projects.map((item,index) => (
                item.id == projectId &&
                <div key={index} className="portfolio--project--title">
                  {item.title}
                  <div key={index} className="portfolio--project--description">
                    <div className="portfolio--project--description--top">{item.description}</div>
                    {item.tech.map((item, index) => (
                      <ul>
                        <li key={index}>{item}</li>
                      </ul>
                    ))}
                </div>
              </div>
              ))}
              <div className="portfolio--project--btns">
                <div>
                  <Link
                        onClick={closeNewProject}
                        smooth={true}
                        offset={-20}
                        duration={100}
                        to="MyPortfolio"
                        className="portfolio--project--btn-close"
                  >
                        <div className="portfolio--project--btn--container">
                          <BsFillArrowLeftSquareFill /><span>voltar</span>
                        </div>
                  </Link>
                </div>
                {data.projects.map((item,index) => (
                  item.id == projectId &&
                    <div key={index} className="portfolio--project--btn--site">
                      <a href={item.link2} target="_blank">
                       <div className="portfolio--project--btn--container">
                          <BsGithub /><span>código</span>
                        </div>
                      </a>
                    </div>
                ))}
                {data.projects.map((item,index) => (
                  item.id == projectId &&
                    <div key={index} className="portfolio--project--btn--site">
                      <a href={item.link} target="_blank">
                        <div className="portfolio--project--btn--container">
                          <BsFillArrowUpRightSquareFill /><span>abrir</span>
                        </div>
                      </a>
                    </div>
                ))}
              </div>
            </div>
            </AnimatedPage>
          </div>
          : "" }
      </div>
    </section>
  );
}
