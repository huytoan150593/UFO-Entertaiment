import React, { useState } from "react";
import { musicVideo } from "../../constains/data";
import "./OurWorks.css";
const OurWorks = () => {
  const [url, setUrl] = useState("https://www.youtube.com/embed/DuFHaVJpcr4");
  const handleOverlay = () => {
    const iframe = document.querySelector("iframe");
    var iframeSrc = iframe.src;
    iframe.src = iframeSrc;
  };
  const handlePlay = (e) => {
    const id = Number(e.target.dataset.idx);
    const myCheck = document.getElementById("my-check");
    myCheck.checked = true;
    const newUrl = musicVideo.find((item) => item.id === id).url;
    setUrl(newUrl);
  };
  return (
    <div id="our-works">
      <input hidden type="checkbox" className="checkbox-btn" id="my-check" />
      <label
        htmlFor="my-check"
        className="overlay"
        onClick={handleOverlay}
      ></label>
      <iframe
        title="video"
        className="iframe"
        src={url}
        frameBorder="0"
        allow="accelerometer"
        allowFullScreen
      ></iframe>
      <div className="title">Our Works</div>
      <div className="reel-container">
        <div className="slogan">
          Coined by one of the company’s advertising agencies back in 1988, this
          slogan is extremely action-oriented and does a great job of
          communicating one of the core messages of Nike’s brand—to give people
          the tools to be active and perform better.
        </div>
        <div className="product-card">
          {musicVideo.map((item) => {
            return (
              <div key={item.id} data-index={item.id} className="pro">
                <img src={item.thumbnail} alt="" />
                <div className="des">
                  <p>{item.name}</p>
                  <p>{item.description}</p>
                  <p data-idx={item.id} onClick={(e) => handlePlay(e)}>
                    Watch video
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="showWorks-btn">See More</div>
      </div>
    </div>
  );
};

export default OurWorks;
