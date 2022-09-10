import React, { useEffect, useRef, useState } from "react";
import gsap, { Power3 } from "gsap";
import { Link } from "react-router-dom";
export default function Projects() {
  let stack = ["HTML5", "CSS3", "Reactjs", "Firebase", "Sass", "Bootstrap"];
  let projectOverlayRef = useRef(null);
  let [isOverlayActive, setActive] = useState(false);
  let handleOpenOverlay = () => {
    gsap.to(projectOverlayRef.current, {
      duration: 0.8,
      ease: Power3.easeInOut,
      opacity: 1,
      display: "flex",
      zIndex: 3,
      y: 0,
    });
  };
  let handleCloseOverlay = () => {
    gsap.to(projectOverlayRef.current, {
      duration: 0.8,
      ease: Power3.easeInOut,
      opacity: 0,
      display: "none",
      y: -20,
    });
  };

  return (
    <section className="projects">
      <div className="customContainer">
        <div className="projects__title">Projects</div>
        <div className="projects__content">
          <div
            className="projects__project"
            onClick={() => {
              if (isOverlayActive) {
                handleCloseOverlay();
                setActive(false);
              } else {
                handleOpenOverlay();
                setActive(true);
              }
            }}
          >
            <div className="projects__project-overlay" ref={projectOverlayRef}>
              <a href="/">
                <i className="fa-solid fa-eye"></i>
              </a>
              <a href="/">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
            <div className="projects__project-imgBox">
              <img
                src={require("./../../assets/project.jpg")}
                alt="project image"
              />
            </div>
            <div className="projects__project-txt">
              <h4>Amazon-Clone</h4>
            </div>
            <div className="projects__project-stack">
              {stack.map((item, index) => (
                <div className="project__stack-item" key={index}>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="projects__project">
            <div className="projects__project-imgBox">
              <img
                src={require("./../../assets/project.jpg")}
                alt="project image"
              />
            </div>
            <div className="projects__project-txt">
              <h4>M'aak</h4>
            </div>
            <div className="projects__project-stack">
              {stack.map((item, index) => (
                <div className="project__stack-item" key={index}>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="projects__project">
            <div className="projects__project-imgBox">
              <img
                src={require("./../../assets/project.jpg")}
                alt="project image"
              />
            </div>
            <div className="projects__project-txt">
              <h4>Pomodoro</h4>
            </div>
            <div className="projects__project-stack">
              {stack.map((item, index) => (
                <div className="project__stack-item" key={index}>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="projects__project">
            <div className="projects__project-imgBox">
              <img
                src={require("./../../assets/project.jpg")}
                alt="project image"
              />
            </div>
            <div className="projects__project-txt">
              <h4>Pomodoro</h4>
            </div>
            <div className="projects__project-stack">
              {stack.map((item, index) => (
                <div className="project__stack-item" key={index}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="projects__more">
          <Link
            to="/projects"
            className="projects__more-link"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            View More
          </Link>
          <div className="projects__more-span"></div>
        </div>
      </div>
    </section>
  );
}
