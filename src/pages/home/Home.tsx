import React, { useEffect, useRef } from "react";
import Nav from "../../components/nav/Nav";
import gsap, { Power3 } from "gsap";
import Contact from "../../components/contact/Contact";
export default function Home() {
  let imgDivRef = useRef<HTMLDivElement | null>(null);
  let imgRef = useRef<HTMLImageElement | null>(null);
  let div1 = useRef<HTMLDivElement | null>(null);
  let div2 = useRef<HTMLDivElement | null>(null);
  let div3 = useRef<HTMLDivElement | null>(null);
  let txtRef = useRef<HTMLHeadingElement | null>(null);
  let pageContent = useRef<HTMLHeadingElement | null>(null);
  useEffect(() => {
    let tl = new (gsap.timeline as any)();
    tl.to(imgDivRef.current, {
      duration: 1.5,
      ease: Power3.easeInOut,
      width: "50rem",
      height: "30rem",
      delay: 0.7,
    })
      .to([div1.current, div2.current, div3.current], {
        duration: 0.4,
        ease: Power3.easeInOut,
        opacity: 1,
        y: -10,
        // delay: 2,
        stagger: 0.3,
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
    <div className="home">
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
      {/* ------------ END ABOUT */}
      {/* ------------ START Contact */}
      <div className="">
        <Contact />
      </div>
      {/* ------------ END Contact */}
    </div>
  );
}
