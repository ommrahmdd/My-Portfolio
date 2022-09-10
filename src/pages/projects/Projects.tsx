import React, { useEffect, useRef } from "react";
import gsap, { Power3 } from "gsap";
import Nav from "../../components/nav/Nav";

export default function Projects() {
  let overlay1 = useRef(null);
  let overlay2 = useRef(null);
  let projectsContent = useRef(null);
  let pageQuote = useRef(null);
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
        // delay: -0.5,
      })
      .to(projectsContent.current, {
        duration: 0.5,
        opacity: 1,
        ease: Power3.easeInOut,
        delay: -1,
      });
  }, []);
  return (
    <div className="projectsPage">
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
    </div>
  );
}
