import gsap, { Power3 } from "gsap";
import React, { useEffect, useRef } from "react";

import Nav from "../../components/nav/Nav";
type skillType = {
  skill: string;
}[];
export default function About() {
  let overlay1: React.RefObject<HTMLDivElement> = useRef(null);
  let overlay2: React.RefObject<HTMLDivElement> = useRef(null);
  let aboutPage: React.RefObject<HTMLDivElement> = useRef(null);
  let aboutTxt: React.RefObject<HTMLDivElement> = useRef(null);
  let skillsRef: React.RefObject<HTMLDivElement> = useRef(null);
  let pageQuote: React.RefObject<HTMLDivElement> = useRef(null);
  let skills: skillType = [
    { skill: "HTML5" },
    { skill: "CSS3" },
    { skill: "SASS (SCSS)" },
    { skill: "JavaScript (ES6+)" },
    { skill: "TypeScript" },
    { skill: "React.js" },
    { skill: "Next.js" },
    { skill: "Redux Toolkit" },
    { skill: "Redux Thunk" },
    { skill: "Zustand" },
    { skill: "Tailwind CSS" },
    { skill: "Bootstrap" },
    { skill: "Ant Design" },
    { skill: "I18next" },
    { skill: "Formik" },
    { skill: "React Hook Form" },
    { skill: "Yup" },
    { skill: "Zod" },
    { skill: "React Testing Library" },
    { skill: "Jest" },
    { skill: "Git & GitHub" },
    { skill: "Bitbucket" },
    { skill: "Jira" },
    { skill: "Jenkins" },
    { skill: "Node.js (Basics)" },
    { skill: "Express.js (Basics)" },
    { skill: "MongoDB (Basics)" },
    { skill: "Firebase" },
    { skill: "Micro-Frontend (Webpack + NPM)" },
  ];

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
      .to(aboutPage.current, {
        duration: 0.5,
        opacity: 1,
        ease: Power3.easeInOut,
        delay: -1,
      })
      .fromTo(
        [...(aboutTxt.current as any).children],
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: Power3.easeInOut,
          stagger: 0.2,
          delay: -0.5,
        }
      )
      .to(pageQuote.current, {
        duration: 0.5,
        opacity: 0.2,
        ease: Power3.easeInOut,
        // delay: -0.5,
      })
      .to(skillsRef.current, {
        duration: 0.5,
        opacity: 1,
        ease: Power3.easeInOut,
        delay: -0.5,
      });
  }, []);

  return (
    <main className="aboutPage">
      <i
        className="fa-solid fa-quote-right aboutPage__quote"
        ref={pageQuote}
      ></i>
      <div className="page__overlay-1" ref={overlay1}></div>
      <div className="page__overlay-2" ref={overlay2}></div>
      <div className="customContainer">
        <Nav name="About" />
        <div className="aboutPage__content" ref={aboutPage}>
          <h2 className="aboutPage__title">
            <div>More Information</div>
            <div className="">About.</div>
          </h2>
          <div className="aboutPage__about" ref={aboutTxt}>
            <div className="">
              I enjoy turning ideas into simple, usable, and visually clear web
              experiences.
            </div>
            <div className="">
              I work mainly with React and modern UI tools, and I like focusing
              on small details that make a design feel natural.
            </div>
            <div className="">
              I believe in continuous learning, clean code, and communication. I
              try to improve a little every day — in development, design sense,
              and teamwork.
            </div>
          </div>

          <h2 className="aboutPage__skillsTitle" ref={skillsRef}>
            <div className="">Let's talk about</div>
            <div className="">skills.</div>
          </h2>

          <div className="aboutPage__skills">
            {skills.map((skill, index) => (
              <div className="aboutPage__skills-box" key={index}>
                <p>{skill.skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
