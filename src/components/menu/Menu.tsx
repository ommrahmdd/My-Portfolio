import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap, { Power3 } from "gsap";
export default function Menu() {
  let [active, setActive] = useState<boolean>(false);
  let item1 = useRef(null);
  let item2 = useRef(null);
  let item3 = useRef(null);
  let overlay = useRef(null);
  let fadeIn = (el: any, x: number, y: number, d: number) => {
    let tl = new (gsap.timeline as any)();
    tl.to(overlay.current, {
      duration: 0.5,
      x: 0,
      opacity: 1,
      display: "block",
      ease: Power3.easeInOut,
      delay: 0.2,
    }).to(el, {
      duration: 0.3,
      x: x,
      y: y,
      opacity: 1,
      display: "flex",
      ease: Power3.easeInOut,
      delay: d,
    });
  };
  let fadeOut = (el: any, delay: number) => {
    gsap.to(overlay.current, {
      duration: 0.6,
      x: "-100%",
      opacity: 0,
      display: "none",
      ease: Power3.easeInOut,
      delay: 0.2,
    });
    gsap.to(el, {
      duration: 0.3,
      opacity: 0,
      y: 65,
      display: "none",
      ease: Power3.easeInOut,
      delay: delay,
    });
  };
  let fadeOutAllItems = () => {
    fadeOut(item1.current, 0);
    fadeOut(item2.current, 0.05);
    fadeOut(item3.current, 0.1);
  };

  let handleClose = () => {
    fadeOutAllItems();
    (document.querySelector(".menu__box-item") as any).classList.remove(
      "active"
    );
    setActive(false);
  };

  let handleOpen = () => {
    fadeIn(item1.current, -91, -93, 0);
    fadeIn(item2.current, -130, 7, 0.05);
    fadeIn(item3.current, -91, 100, 0.1);
    (document.querySelector(".menu__box-item") as any).classList.remove(
      "active"
    );
    setActive(true);
  };
  return (
    <div className="menu">
      <div className="menu__overlay" ref={overlay} onClick={handleClose}></div>
      <div className={`menu__box `}>
        <div
          className={`menu__box-item ${active ? "active" : ""}`}
          onClick={() => {
            if (
              (
                document.querySelector(".menu__box-item") as any
              ).classList.contains("active")
            ) {
              handleClose();
            } else {
              handleOpen();
            }
          }}
        >
          {/* <i className="fa-solid fa-ellipsis-vertical"></i> */}
          {/* <i className="fa-solid fa-mug-saucer"></i> */}
          <i className="fa-solid fa-gears"></i>
        </div>
        <div className="menu__box-item" ref={item1} onClick={handleClose}>
          <Link
            to="/"
            className="menu__box-link"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <i className="fa-solid fa-house-chimney"></i>
          </Link>
        </div>
        <div className="menu__box-item" ref={item2} onClick={handleClose}>
          <Link
            to="/about"
            className="menu__box-link"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <i className="fa-solid fa-address-card"></i>
          </Link>
        </div>
        <div className="menu__box-item" ref={item3} onClick={handleClose}>
          <Link
            to="/projects"
            className="menu__box-link"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <i className="fa-sharp fa-solid fa-list-check"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
