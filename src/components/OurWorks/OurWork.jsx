import React, { useState } from "react";
// import { project } from "../../constains/data";
import Product from "../Product/Product";
import "./OurWorks.css";

const OurWorks = ({ project, title }) => {
  const [url, setUrl] = useState("https://www.youtube.com/embed/tgbNymZ7vqY");
  const [video, setVideo] = useState(project[0]);
  const handleOverlay = () => {
    const iframe = document.querySelector("iframe");
    var iframeSrc = iframe.src;
    iframe.src = iframeSrc;
  };
  const handlePlay = (e) => {
    const id = Number(e.target.dataset.idx);
    const myCheck = document.getElementById("my-check");
    myCheck.checked = true;
    const newUrl = project.find((item) => item.id === id).url;
    setUrl(newUrl);
  };
  const handleHover = (e) => {
    const id = Number(e.target.dataset.idx);
    const newVideo = project.find((item) => item.id === id);
    setVideo(newVideo);
  };

  const handleSelect = (e) => {
    const id = Number(e.target.innerText);
    const newVideo = project.find((item) => item.id === id);
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
          <p>{title}</p>
          <ul>
            {project.map((video) => (
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
          {project.map((video) => (
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
