import gsap, { Power0, Power3 } from "gsap";

export let handleOpenFocus = (imgSrc: string, projecId: number) => {
  let tl = new (gsap.timeline as any)();
  // document
  //   .querySelector(".projects__focus-img")
  //   ?.setAttribute("src", require(`./../../assets/${imgSrc}`));
  document.querySelector(".projects__focus-img")?.setAttribute("src", imgSrc);
  tl.to(document.querySelector(".projects__focus"), {
    duration: 1,
    ease: Power0.easeInOut,
    opacity: 1,
    display: "block",
  }).to(document.querySelector(".projects__focus-img"), {
    duration: 0.5,
    opacity: 0,
    ease: Power0.easeInOut,
    delay: 0.5,
  });
};

export let handleOpenOverlay = (index: number) => {
  gsap.to(document.querySelectorAll(".projects__project-overlay")[index], {
    duration: 0.5,
    ease: Power3.easeInOut,
    opacity: 1,
    display: "flex",
    y: 0,
    zIndex: 5,
  });
};
export let handleCloseOverlay = (index: number) => {
  gsap.to(document.querySelectorAll(".projects__project-overlay")[index], {
    duration: 0.5,
    ease: Power3.easeInOut,
    opacity: 0,
    display: "none",
    y: -40,
    zIndex: 1,
  });
};

export let stack = [
  "HTML5",
  "CSS3",
  "Reactjs",
  "Firebase",
  "Sass",
  "Bootstrap",
];

export let projects = [
  {
    title: "Amazon Clone",
    img: "header.jpg",
  },
  {
    title: "M'aak",
    img: "g-2.jpg",
  },
  {
    title: "Pomodoro",
    img: "g-3.jpg",
  },
  {
    img: "g-1.jpg",
    title: "Dine",
  },
  {
    title: "Todo dashboard",
    img: "project-2-2.jpg",
  },
];
