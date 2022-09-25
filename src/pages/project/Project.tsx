import React, { useEffect, useRef, useLayoutEffect } from "react";
import gsap, { Power3 } from "gsap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProjectsFromDB } from "../../store/actions";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { IProject } from "./../../models/IProject";
export default function Project() {
  let headerRef: React.RefObject<HTMLDivElement> = useRef(null);
  let pageOverlay: React.RefObject<HTMLDivElement> = useRef(null);
  let pageTitleRef: React.RefObject<HTMLDivElement> = useRef(null);
  let pageRef: React.RefObject<HTMLDivElement> = useRef(null);
  let dispatch: Dispatch<any> = useDispatch();
  let {
    projectID,
  }: {
    projectID: string;
  } = useParams();
  let stack = ["html", "css3", "reactjs", "sass", "bootstrap", "typescript"];
  let project: IProject = useSelector((state: any) => {
    if (state.projects.projects.length == 0) {
      dispatch(getProjectsFromDB());
    }
    return state.projects.projects.find(
      (project: any) => project.projectID == projectID
    );
  });
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    let tl = new (gsap.timeline as any)();
    tl.to(pageOverlay.current, {
      duration: 1,
      ease: Power3.easeInOut,
      delay: 0.4,
      display: "none",
      opacity: 0,
    }).to(pageTitleRef.current, {
      duration: 0.5,
      ease: Power3.easeInOut,
      delay: 0,
      opacity: 1,
      y: 30,
    });
  }, []);
  return (
    <main className="projectPage" ref={pageRef}>
      <div className="projectPage__overlay" ref={pageOverlay}></div>
      <header className="projectPage__header" ref={headerRef}>
        <div
          className="projectPage__header-box"
          style={{
            height: "100vh",
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.822), rgba(0, 0, 0, 0.822)),url(${project?.img})`,
            backgroundAttachment: "fixed",
          }}
        >
          <div className="customContainer">
            <h2 ref={pageTitleRef}>{project?.name}</h2>
          </div>
        </div>
      </header>
      <section className="projectPage__content">
        <div className="customContainer">
          <div className="projectPage__content-description">
            <h3>About Project</h3>
            <p>{project?.description}</p>
          </div>

          <div className="projectPage__content-stack">
            <h3>Stack</h3>
            <p>
              {project?.stack.map((lang: string, index: number) => (
                <span key={index}>{lang}</span>
              ))}
            </p>
          </div>
          <div className="projectPage__content-links">
            <h3>Links</h3>
            <div className="">
              <a href={`${project?.live}`} target="_blank">
                Live
              </a>
              <a href={`${project?.github}`} target="_blank">
                Github
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
