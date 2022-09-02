import React, { useState } from "react";
import { musicVideo } from "../../constains/data";
import Product from "../Product/Product";
import "./OurWorks.css";

const OurWorks = () => {
  const [url, setUrl] = useState("https://www.youtube.com/embed/tgbNymZ7vqY");
  const [video, setVideo] = useState(musicVideo[0]);
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
  const handleHover = (e) => {
    const id = Number(e.target.dataset.idx);
    const newVideo = musicVideo.find((item) => item.id === id);
    setVideo(newVideo);
  };

  const handleSelect = (e) => {
    const id = Number(e.target.innerText);
    const newVideo = musicVideo.find((item) => item.id === id);
    setVideo(newVideo);
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
      <div className="reel-container">
        <div className="our-works-title">
          <p>Our Project</p>
          <ul>
            {musicVideo.map((video) => (
              <li
                key={video.id}
                data-idx={video.id}
                onMouseOver={(e) => handleHover(e)}
              >
                {video.name}
              </li>
            ))}
          </ul>
        </div>
        <Product key={video.id} handlePlay={handlePlay} video={video} />
        <div className="small-list">
          {musicVideo.map((video) => (
            <div key={video.id} onClick={(e) => handleSelect(e)}>
              {video.id}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurWorks;
