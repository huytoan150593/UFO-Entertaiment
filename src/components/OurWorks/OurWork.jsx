import React from "react";
import { musicVideo } from "../../constains/data";
import "./OurWorks.css";
const OurWorks = () => {
  const handlePlay = (e) => {
    const id = e.target.dataset.idx;
    const video = document.getElementById(`video${id}`);
    video.classList.remove("hidden");
  }
  return (
    <div id="our-works">
      <div className="title">Our Works</div>
      <div className="reel-container">
        <div className="product-card">
          {musicVideo.map((item) => {
            return (
              <div key={item.id} data-index={item.id} className="pro">
                <img src={item.thumbnail} alt="" />
                <div className="des">
                  <p>{item.name}</p>
                  <p>{item.description}</p>
                  <span data-idx={item.id} onClick={e => handlePlay(e)}>Watch video</span>                     
                </div>
                <div className="overlay hidden" id={`video${item.id}`} >
                <iframe title={`video${item.id}`}
                className="iframe" src="https://www.youtube.com/embed/tgbNymZ7vqY">
  </iframe>
                </div>
              </div>
            )
            } 
          )}
        </div>
      </div>
    </div>
  );
};

export default OurWorks;
