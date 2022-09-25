import React, { useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { useSelector } from "react-redux";
import ProjectsDetails from "./ProjectsDetails";
export default function Projects() {
  let projectOverlayRef = useRef<HTMLDivElement | null>(null);
  let projectImgRef = useRef(null);
  let ProjectImgOverlayRef = useRef<HTMLDivElement | null>(null);
  let projectFocus = useRef(null);
  let history = useHistory();
  let projectsFromDB = useSelector((state: any) => state.projects.projects);
  return (
    <section className="projects">
      <div className="projects__overlay" ref={ProjectImgOverlayRef}></div>
      <div className="customContainer">
        <div className="projects__title">Projects</div>
        <ProjectsDetails
          projectFocus={projectFocus}
          projects={projectsFromDB.slice(0, 4)}
          projectImgRef={projectImgRef}
          projectOverlayRef={projectOverlayRef}
        />
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
