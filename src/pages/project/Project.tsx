import React, { useEffect, useRef, useLayoutEffect } from "react";
import gsap, { Power3 } from "gsap";
export default function Project() {
  let headerRef = useRef(null);
  let pageOverlay = useRef(null);
  let pageTitleRef = useRef(null);
  let pageRef = useRef(null);
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
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.822), rgba(0, 0, 0, 0.822)),url(${require("./../../assets/header.jpg")})`,
            backgroundAttachment: "fixed",
          }}
        >
          <div className="customContainer">
            <h2 ref={pageTitleRef}>Amazon-Clone</h2>
          </div>
        </div>
      </header>
      <section className="projectPage__content">
        <div className="customContainer">
          <div className="projectPage__content-description">
            <h3>About Project</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              totam, at tempora sed ducimus impedit! Nesciunt soluta cupiditate
              impedit illum! Aut hic deleniti voluptates ipsa esse, consectetur
              iusto animi omnis.
            </p>
          </div>
          <div className="projectPage__content-creation">
            <h3>Creation Date</h3>
            <p>7/8/2022</p>
          </div>
          <div className="projectPage__content-stack">
            <h3>Stack</h3>
          </div>
        </div>
      </section>
    </main>
  );
}
