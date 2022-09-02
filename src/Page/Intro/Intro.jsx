import React from "react";
import { Link } from "react-router-dom";
import "./Intro.css";

const Intro = () => {
  return (
    <div id="intro-video">
      <video autoPlay muted loop id="myVideo">
        <source src="./assets/intro-video.mp4" type="video/mp4" />
      </video>
      <div id="ufo">
        <img src="/assets/ufo3.png" alt="" />
      </div>
      <Link to="home" style={{ textDecoration: "none" }}>
        <div id="intro-btn">Explore</div>
      </Link>
    </div>
  );
};

export default Intro;
