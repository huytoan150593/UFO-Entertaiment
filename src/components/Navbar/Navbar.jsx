import React, { useState } from "react";
import "./Navbar.css";
import {
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandTiktok,
  TbMenu2,
  TbX,
} from "react-icons/tb";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const style = {
    color: "white",
    fontSize: "30px",
    backgroundColor: "transparent",
  };
  const showMainVideo = () => {
    const video = document.getElementById("main-video");
    const mainBtnText = document.querySelector(".main-btn > span");
    const mainBtn = document.querySelector(".main-btn");
    const navContentTitle = document.querySelector(".nav-content > h1");
    const navContentDetail = document.querySelector(".nav-content > p");
    const isCheck = video.classList.contains("hidden");
    if (isCheck) {
      video.classList.remove("hidden");
      navContentTitle.classList.add("hidden");
      navContentDetail.classList.add("hidden");
      mainBtnText.textContent = "Stop <---";
      if (window.innerWidth <= 480) {
        mainBtn.classList.add("small-style-btn");
      } else {
      }
      video.play();
    } else {
      video.classList.add("hidden");
      navContentTitle.classList.remove("hidden");
      navContentDetail.classList.remove("hidden");
      mainBtnText.textContent = "Watch Video";
      mainBtn.classList.remove("small-style-btn");
      video.pause();
    }
  };
  const handleShowMenu = () => {
    const tbMenu = document.getElementById("tb-menu");
    const tbX = document.getElementById("tb-x");
    tbMenu.classList.toggle("hidden");
    tbX.classList.toggle("hidden");
    setShow(!show);
  };
  return (
    <div id="navbar">
      <div className="nav-wrapper">
        <div className="logo">
          <img src="/assets/logo3.png" alt="" />
        </div>
        <div className="nav-menu">
          <ul>
            <li className="nav-item">
              <a href="#our-works">Our works</a>
            </li>
            <li className="nav-item">
              <a href="#producer">Producer</a>
            </li>
            <li className="nav-item">
              <a href="#create-team">Create Team</a>
            </li>
            <li className="nav-item">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="nav-icons">
          <div className="nav-icon">
            <TbBrandFacebook style={style} />
          </div>
          <div className="nav-icon">
            <TbBrandInstagram style={style} />
          </div>
          <div className="nav-icon">
            <TbBrandTiktok style={style} />
          </div>
        </div>
        <div id="mobile-menu-icons" onClick={handleShowMenu}>
          <TbMenu2 id="tb-x" />
          <TbX id="tb-menu" className="hidden" />
        </div>
      </div>
      <video
        id="main-video"
        className="hidden"
        src="/assets/main-video.mp4"
        controls></video>
      <div className="nav-content">
        <h1>UFO Entertaiment</h1>
        <p>
          UFO is a full service production house based in Saigon Vietnam. We
          keep our overheads to a minimum so we can maximize the budget to do
          the best work possible and put the workss money where it belongs, on
          the screen.
        </p>
        <div className="main-btn" onClick={showMainVideo}>
          <span>Watch Video</span>
        </div>
      </div>
      {show && (
        <div className="nav-mobile">
          <ul>
            <li
              onClick={() =>
                document.getElementById("mobile-menu-icons").click()
              }>
              <a href="#our-works">Our works</a>
            </li>
            <li
              onClick={() =>
                document.getElementById("mobile-menu-icons").click()
              }>
              <a href="#producer">Producer</a>
            </li>
            <li
              onClick={() =>
                document.getElementById("mobile-menu-icons").click()
              }>
              <a href="#create-team">Create Team</a>
            </li>
            <li
              onClick={() =>
                document.getElementById("mobile-menu-icons").click()
              }>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
