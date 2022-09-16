import gsap, { Power3 } from "gsap";
import React, { useEffect, useRef } from "react";

import Nav from "../../components/nav/Nav";
type skillType = {
  skill: string;
  img: string;
}[];
export default function About() {
  let overlay1: React.RefObject<HTMLDivElement> = useRef(null);
  let overlay2: React.RefObject<HTMLDivElement> = useRef(null);
  let aboutPage: React.RefObject<HTMLDivElement> = useRef(null);
  let aboutTxt: React.RefObject<HTMLDivElement> = useRef(null);
  let skillsRef: React.RefObject<HTMLDivElement> = useRef(null);
  let pageQuote: React.RefObject<HTMLDivElement> = useRef(null);
  let skills: skillType = [
    {
      skill: "HTML5",
      img: "html.png",
    },
    {
      skill: "CSS3",
      img: "css-3.png",
    },
    {
      skill: "SASS",
      img: "sass.png",
    },
    {
      skill: "JS",
      img: "js-1.jpg",
    },
    {
      skill: "Typescript",
      img: "js-1.jpg",
    },
    {
      skill: "Reactjs",
      img: "react.png",
    },
    {
      skill: "Nodejs",
      img: "nodejs.png",
    },
    {
      skill: "MongoDB",
      img: "mongo.png",
    },
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
              As i told you i'am a fresh front-end devloper with 1 year
              experience who's seeking for his first job :).
            </div>
            <div className="">
              I graduated from faculty of computer and information system but
              also i'm a self toughter build myself step by step and still
              continue.
            </div>
            <div className="">
              I'm trying to be a good developer throught improve my skills not
              just in coding also in like communication skills and others.
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
                <img
                  src={require(`./../../assets/${skill.img}`)}
                  alt="html"
                  className="aboutPage__skills-img"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
