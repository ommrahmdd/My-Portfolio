import gsap, { Power3 } from "gsap";
import React, { useEffect, useRef } from "react";

import Nav from "../../components/nav/Nav";
export default function About() {
  let overlay1 = useRef(null);
  let overlay2 = useRef(null);
  let aboutPage = useRef(null);
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
      });
  }, []);

  let handleMouseOver = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    (e.target as HTMLDivElement).children[1].setAttribute("style", "opacity:1");
  };
  let handleMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    (e.target as HTMLDivElement).children[1].setAttribute("style", "opacity:0");
  };
  return (
    <div className="aboutPage">
      <i className="fa-solid fa-quote-right aboutPage__quote"></i>
      <div className="page__overlay-1" ref={overlay1}></div>
      <div className="page__overlay-2" ref={overlay2}></div>
      <div className="customContainer">
        <Nav name="About" />
        <div className="aboutPage__content" ref={aboutPage}>
          <h2 className="aboutPage__title">
            <div>More Information</div>
            <div className="">About Me.</div>
          </h2>
          <div className="aboutPage__about">
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

          <h2 className="aboutPage__skillsTitle">
            <div className="">Let's talk about</div>
            <div className="">my skills</div>
          </h2>

          <div className="aboutPage__skills">
            <div
              className="aboutPage__skills-box"
              onMouseOver={(e) => handleMouseOver(e)}
              onMouseOut={(e) => handleMouseLeave(e)}
            >
              <p>HTML5</p>
              <img src={require("./../../assets/html.png")} alt="html" />
            </div>
            <div
              className="aboutPage__skills-box"
              onMouseOver={(e) => handleMouseOver(e)}
              onMouseOut={(e) => handleMouseLeave(e)}
            >
              <p>CSS3</p>
              <img src={require("./../../assets/css-3-1.jpg")} alt="html" />
            </div>
            <div
              className="aboutPage__skills-box"
              onMouseOver={(e) => handleMouseOver(e)}
              onMouseOut={(e) => handleMouseLeave(e)}
            >
              <p>JS</p>
              <img src={require("./../../assets/js-1.jpg")} alt="html" />
            </div>
            <div
              className="aboutPage__skills-box"
              onMouseOver={(e) => handleMouseOver(e)}
              onMouseOut={(e) => handleMouseLeave(e)}
            >
              <p>SASS</p>
              <img src={require("./../../assets/sass.png")} alt="html" />
            </div>
            <div
              className="aboutPage__skills-box"
              onMouseOver={(e) => handleMouseOver(e)}
              onMouseOut={(e) => handleMouseLeave(e)}
            >
              <p>Reactjs</p>
              <img src={require("./../../assets/react.png")} alt="html" />
            </div>
            <div
              className="aboutPage__skills-box"
              onMouseOver={(e) => handleMouseOver(e)}
              onMouseOut={(e) => handleMouseLeave(e)}
            >
              <p>Nodejs</p>
              <img src={require("./../../assets/nodejs.png")} alt="html" />
            </div>
            <div
              className="aboutPage__skills-box"
              onMouseOver={(e) => handleMouseOver(e)}
              onMouseOut={(e) => handleMouseLeave(e)}
            >
              <p>MongoDB</p>
              <img src={require("./../../assets/mongo.png")} alt="html" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
