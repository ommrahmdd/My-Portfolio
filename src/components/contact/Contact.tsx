import React, { useEffect, useState } from "react";

export default function Contact() {
  return (
    <section className="contact">
      <div className="customContainer">
        <h3 className="contact__title">Contact Me</h3>
        <div className="contact__content">
          <img src={require("./../../assets/bg2.jpg")} alt="contact image" />
          <div className="contact__content-links">
            <a
              href="https://www.linkedin.com/in/omar-ahmed-615795151"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/ommrahmdd" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://twitter.com/ommrahmdd" target="_blank">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
          <p className="contact__content-fellFree">- OR -</p>
          <p className="contact__content-gmail">ommrahmdd@gmail.com</p>
        </div>
      </div>
    </section>
  );
}
