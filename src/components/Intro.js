import React from "react";

import logo from "../assets/admin.jpg";
import MyPDF from "../assets/Adesh_CV.PDF";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Intro() {
  let keyDownHandler = (evt) => {
    if (evt.key === "VolumeDown") {
      alert("VolumeDown");
    } else if (evt.key === "VolumeUp") {
      alert("VolumeUp");
    }
    evt.preventDefault(); // to stop system app from processing keydown event
  };

  useEffect(() => {
    if (window) {
      window.addEventListener("keydown", keyDownHandler);
    }
    return () => {
      window.removeEventListener("keydown", keyDownHandler);
    };
  }, []);
  return (
    <div className="main">
      <div className="container">
        <div className="banner">
          <div className="alert-warn">In development mode.</div>
          <div className="banner__fig">
            <img src={logo} alt="my_profile_picture" />
          </div>
          <div className="caption-box">
            <h1 className="caption-box__designation" style={{ margin: 0 }}>
              UI Engineer
            </h1>
            <div className="caption-box__title">
              <span className="caption-box__title__bold">Adesh</span> Kumar
            </div>
            <div className="caption-box__description">
              Hi, I'm a UI Engineer with 3.8+ years of experience in UI
              development and currently working with{" "}
              <a
                href="https://www.bold.com/"
                target="_blank"
                style={{ color: "#f8991d" }}
              >
                BOLD
              </a>
              . I'm quite familar with developing the core products and handling
              the larger applications. When I am not busy solving a technical
              problem, I love cooking and catching a movie.
            </div>
            <div className="action-btn">
              <Link
                to={MyPDF}
                target="_blank"
                className="action-btn__home action-btn__home__download"
                download
              >
                Download CV
              </Link>
              <Link
                to="/contact"
                className="action-btn__home action-btn__home__contact"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="text-bg">
            <span>Adesh</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
