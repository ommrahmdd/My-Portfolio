import React, { Ref } from "react";
import {
  handleCloseOverlay,
  handleOpenFocus,
  handleOpenOverlay,
} from "./projectUtilities";
import { useHistory } from "react-router-dom";
type IPDetails = {
  projects: {}[];
  projectFocus: React.Ref<HTMLDivElement>;
  projectOverlayRef: React.Ref<HTMLDivElement>;
  projectImgRef: React.Ref<HTMLDivElement>;
};
export default function ProjectsDetails({
  projects,
  projectFocus,
  projectOverlayRef,
  projectImgRef,
}: IPDetails) {
  let history = useHistory();

  return (
    <div className="projects__content">
      {projects &&
        projects.map((project: any, index: number) => (
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
            <div className="projects__focus" ref={projectFocus}>
              <img src="" alt="focus image" className="projects__focus-img" />
            </div>
            <div className="projects__project-overlay" ref={projectOverlayRef}>
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleOpenFocus(project?.img, 15);
                  setTimeout(() => {
                    history.push(`/project/${project.projectID}`);
                  }, 3000);
                }}
              >
                <i className="fa-solid fa-circle-info"></i>
              </a>
              <a href={`https://${project.live}`} target="_blank">
                <i className="fa-solid fa-eye"></i>
              </a>
              <a href={`https://${project.github}`} target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
            <div className="projects__project-imgBox" ref={projectImgRef}>
              <img
                src={project.img}
                alt="project image"
                className="projects__project-img"
              />
            </div>
            <div className="projects__project-txt">
              <h4>{project.name}</h4>
            </div>
            <div className="projects__project-stack">
              {project.stack.map((item: string, index: number) => (
                <div className="project__stack-item" key={index}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}
