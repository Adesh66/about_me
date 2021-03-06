import React from "react";

import logo from "../assets/admin.jpg";
import MyPDF from "../assets/Adesh_CV.PDF";
import { Link } from "react-router-dom";

function Intro() {
  function getTotalExpr() {
    const starting = new Date(2017, 5, 15);
    const todate = new Date();
    let months = (todate.getFullYear() - starting.getFullYear()) * 12;
    months -= starting.getMonth();
    months += todate.getMonth();
    console.log(months);
    return (months / 12).toFixed(1);
  }

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
              Hi, I'm a UI Engineer with {getTotalExpr()}+ years of experience
              in UI development and currently working with{" "}
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
