import React, { useEffect, useRef, useState } from "react";
import gsap, { Power3, Power0 } from "gsap";
import { Link, useHistory } from "react-router-dom";
export default function Projects() {
  let stack = ["HTML5", "CSS3", "Reactjs", "Firebase", "Sass", "Bootstrap"];
  let projectOverlayRef = useRef(null);
  let projectImgRef = useRef(null);
  let ProjectImgOverlayRef = useRef(null);
  let [isOverlayActive, setActive] = useState(false);
  let history = useHistory();
  let projects = [
    {
      title: "Amazon Clone",
      img: "header.jpg",
    },
    {
      title: "M'aak",
      img: "g-2.jpg",
    },
    {
      title: "Pomodoro",
      img: "g-3.jpg",
    },
    {
      img: "g-1.jpg",
      title: "Dine",
    },
  ];
  let handleOpenOverlay = (index: number) => {
    gsap.to(document.querySelectorAll(".projects__project-overlay")[index], {
      duration: 0.5,
      ease: Power3.easeInOut,
      opacity: 1,
      display: "flex",
      y: 0,
      zIndex: 5,
    });
  };
  let handleCloseOverlay = (index: number) => {
    gsap.to(document.querySelectorAll(".projects__project-overlay")[index], {
      duration: 0.5,
      ease: Power3.easeInOut,
      opacity: 0,
      display: "none",
      y: -20,
      zIndex: 1,
    });
  };

  let handleOpenProject = (e: React.MouseEvent, index: number) => {
    let tl = new (gsap.timeline as any)();
    e.preventDefault();
    handleCloseOverlay(index);
    console.log(document.querySelectorAll(".projects__project-overlay")[index]);
    tl.to(ProjectImgOverlayRef.current, {
      duration: 0.8,
      opacity: 0.9,
      display: "block",
      ease: Power3.easeIn,
    })
      .to(document.querySelectorAll(".projects__project-img")[index + 1], {
        opacity: 0,
        duration: 0.2,
        ease: Power3.easeOut,
      })
      .to(document.querySelectorAll(".projects__project-img")[index], {
        zIndex: 4,
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        duration: 1,
        delay: 0.6,
        ease: Power3.easeInOut,
      })
      .to(ProjectImgOverlayRef.current, {
        duration: 2,
        opacity: 2,
        display: "block",
        ease: Power3.easeInOut,
        // delay: 1,
      });

    setTimeout(() => {
      history.push(`/project/15`);
    }, 4000);
  };

  return (
    <section className="projects">
      <div className="projects__overlay" ref={ProjectImgOverlayRef}></div>
      <div className="customContainer">
        <div className="projects__title">Projects</div>
        <div className="projects__content">
          {projects.map((project, index) => (
            <div
              className="projects__project"
              onMouseOver={() => {
                handleOpenOverlay(index);
              }}
              onMouseLeave={() => {
                handleCloseOverlay(index);
              }}
              key={index}
            >
              <div
                className="projects__project-overlay"
                ref={projectOverlayRef}
              >
                <a
                  href="/"
                  onClick={(e) => {
                    handleOpenProject(e, index);
                  }}
                >
                  <i className="fa-solid fa-circle-info"></i>
                </a>
                <a href="/">
                  <i className="fa-solid fa-eye"></i>
                </a>
                <a href="/">
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
              <div className="projects__project-imgBox" ref={projectImgRef}>
                <img
                  src={require(`./../../assets/${project.img}`)}
                  alt="project image"
                  className="projects__project-img"
                />
              </div>
              <div className="projects__project-txt">
                <h4>{project.title}</h4>
              </div>
              <div className="projects__project-stack">
                {stack.map((item, index) => (
                  <div className="project__stack-item" key={index}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
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
