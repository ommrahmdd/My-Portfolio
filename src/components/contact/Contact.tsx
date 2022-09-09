import React, { useEffect, useState } from "react";

export default function Contact() {
  return (
    <div className="contact">
      <div className="customContainer">
        <h3 className="contact__title">Contact Me</h3>
        <div className="contact__content">
          <img
            src={require("./../../assets/contact.jpg")}
            alt="contact image"
          />
          <div className="contact__content-links">
            <a href="">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
          <p className="contact__content-fellFree">OR</p>
          <p className="contact__content-gmail">ommrahmdd@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
