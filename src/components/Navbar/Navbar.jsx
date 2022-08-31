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
              <a href="#production-team">Production Team</a>
            </li>
            <li className="nav-item">
              <a href="#features">Features</a>
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
      <div className="nav-content">
        <h1>UFO Entertaiment</h1>
        <p>
          UFO is a full service production house based in Saigon Vietnam. We
          keep our overheads to a minimum so we can maximize the budget to do
          the best work possible and put the workss money where it belongs, on
          the screen.
        </p>
        <div className="main-btn" onClick={console.log(123)}>
          <img src="/assets/aLongStrek.png" alt="" />
          <p>Watch Video</p>
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
              <a href="#product-team">Product Team</a>
            </li>
            <li
              onClick={() =>
                document.getElementById("mobile-menu-icons").click()
              }>
              <a href="#features">Features</a>
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
