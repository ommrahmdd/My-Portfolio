import React, { useEffect, useRef } from "react";
import Nav from "../../components/nav/Nav";
import gsap, { Power3 } from "gsap";
import Contact from "../../components/contact/Contact";
import Projects from "../../components/projects/Projects";
import { getProjectsFromDB } from "./../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
export default function Home() {
  let dispatch: Dispatch<any> = useDispatch();
  let projects = useSelector((state: any) => state.projects);
  let imgDivRef = useRef<HTMLDivElement | null>(null);
  let imgRef = useRef<HTMLImageElement | null>(null);
  let div1 = useRef<HTMLDivElement | null>(null);
  let div2 = useRef<HTMLDivElement | null>(null);
  let div3 = useRef<HTMLDivElement | null>(null);
  let txtRef = useRef<HTMLHeadingElement | null>(null);
  let pageContent = useRef<HTMLHeadingElement | null>(null);
  let headerImgOverlay = useRef<HTMLHeadingElement | null>(null);
  useEffect(() => {
    dispatch(getProjectsFromDB());
    let tl = new (gsap.timeline as any)();
    tl.to(imgDivRef.current, {
      duration: 1,
      ease: Power3.easeInOut,
      width: "50rem",
      height: "30rem",
      delay: 0.4,
      marginTop: 0,
    })
      .to(headerImgOverlay.current, {
        duration: 1,
        ease: Power3.easeInOut,
        left: "-100%",
        display: "none",
        // delay: 0.3,
        marginTop: 0,
      })

      .to([...(txtRef.current as any).children], {
        duration: 0.4,
        ease: Power3.easeInOut,
        opacity: 1,
        y: -10,
        stagger: 0.15,
        delay: -0.5,
      })
      .fromTo(
        pageContent.current,
        {
          opacity: 0,
        },
        {
          duration: 0.4,
          ease: Power3.easeInOut,
          opacity: 1,
        }
      );
  }, []);
  return (
    <main className="home">
      <Nav name="Home" />
      {/* ------------------ START HEADER */}
      <header className="home__header">
        {/* Header left */}
        <div className="home__header-left">
          <h1 ref={txtRef}>
            <div ref={div1}>I'm</div>
            <div className="" ref={div2}>
              Omar-
            </div>
            <div ref={div3}>Youssef</div>
          </h1>
        </div>
        {/* Header right */}
        <div className="home__header-right">
          <div className="homeHeader__imgBox" ref={imgDivRef}>
            <img
              src={require("./../../assets/bg.jpg")}
              alt="header image"
              ref={imgRef}
            />
            <div className="homeHeader__imgBox-overlay" ref={headerImgOverlay}>
              <img
                src={require("./../../assets/headerOverlay.png")}
                alt="header image"
              />
            </div>
          </div>
        </div>
      </header>
      {/* ------------ END HEADER */}
      {/* ------------ START ABOUT */}
      <section className="about" ref={pageContent}>
        <div className="customContainer">
          <h2 className="about__title">About</h2>
          <p>
            <div className="">
              <span className="about__quote">&ldquo;</span>Hi !
            </div>
            <div className="">
              My name is <span className="about__span">Omar Ahmed Youssef</span>
              . I'm a{" "}
              <span className="about__span">fresh front-end developer</span>{" "}
              with 1 year experience in web development mainly in{" "}
              <span className="about__span">Reactjs</span>.
            </div>
            <div className="">
              I implement websites and landing pages from concept through
              developement and develop it to be compatible with all cross
              browser.<span className="about__quote">&rdquo;</span>
            </div>
          </p>
        </div>
      </section>
      {projects && console.log("Projects", projects)}
      {/* ------------ END ABOUT */}
      {/* ------------ START PROJECTS */}
      <Projects />
      {/* ------------ END PROJECTS */}
      {/* ------------ START Contact */}
      <div className="">
        <Contact />
      </div>
      {/* ------------ END Contact */}
    </main>
  );
}
