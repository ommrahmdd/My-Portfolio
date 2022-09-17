import React, { useEffect, useRef } from "react";
import gsap, { Power3 } from "gsap";
import { useHistory, Link } from "react-router-dom";
import Nav from "../../components/nav/Nav";
import Contact from "../../components/contact/Contact";
import {
  handleCloseOverlay,
  handleOpenFocus,
  handleOpenOverlay,
} from "../../components/projects/projectUtilities";
import { useSelector } from "react-redux";
import { IProject } from "../../models/IProject";
import ProjectsDetails from "../../components/projects/ProjectsDetails";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { getProjectsFromDB } from "./../../store/actions";
export default function Projects() {
  let overlay1: React.RefObject<HTMLDivElement> = useRef(null);
  let overlay2: React.RefObject<HTMLDivElement> = useRef(null);
  let projectsContent: React.RefObject<HTMLDivElement> = useRef(null);
  let pageQuote: React.RefObject<HTMLDivElement> = useRef(null);
  let projectOverlayRef: React.RefObject<HTMLDivElement> = useRef(null);
  let projectImgRef = useRef(null);
  let ProjectImgOverlayRef: React.RefObject<HTMLDivElement> = useRef(null);
  let projectsRef: React.RefObject<HTMLDivElement> = useRef(null);
  let projectFocus: React.RefObject<HTMLDivElement> = useRef(null);
  let dispatch: Dispatch<any> = useDispatch();

  let projects = useSelector((state: any) => {
    if (state.projects.projects.length == 0) dispatch(getProjectsFromDB());
    return state.projects.projects;
  });
  useEffect(() => {
    let myTimeLine = new (gsap.timeline as any)();
    myTimeLine
      .fromTo(
        [overlay2.current, overlay1.current],
        {
          opacity: 1,
          display: "block",
          left: "-90%",
        },
        {
          display: "none",
          left: "100%",
          duration: 1.5,
          ease: Power3.easeInOut,
          stagger: 0.15,
        }
      )
      .to(pageQuote.current, {
        duration: 0.5,
        opacity: 0.2,
        ease: Power3.easeInOut,
        delay: -0.5,
      })
      .to(projectsContent.current, {
        duration: 0.5,
        opacity: 1,
        ease: Power3.easeInOut,
        delay: -1,
      })
      .fromTo(
        projectsRef.current,
        {
          opacity: 0,
        },
        {
          duration: 1,
          opacity: 1,
          ease: Power3.easeInOut,
        }
      );
  }, []);
  return (
    <main className="projectsPage">
      <Nav name="Projects" />
      <i
        className="fa-solid fa-list-check aboutPage__quote"
        ref={pageQuote}
      ></i>
      <div className="page__overlay-1" ref={overlay1}></div>
      <div className="page__overlay-2" ref={overlay2}></div>
      <div className="customContainer">
        <div className="projectsPage__content" ref={projectsContent}>
          <h2 className="projectsPage__title">
            <div className="">Let's take a close</div>
            <div className="">look to the projects</div>
          </h2>
        </div>
      </div>
      <div className="projects" ref={projectsRef}>
        <div className="projects__overlay" ref={ProjectImgOverlayRef}></div>
        <div className="customContainer">
          <ProjectsDetails
            projectFocus={projectFocus}
            projects={projects}
            projectImgRef={projectImgRef}
            projectOverlayRef={projectOverlayRef}
          />
        </div>
      </div>
      <Contact />
    </main>
  );
}
