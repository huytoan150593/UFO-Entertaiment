import React from "react";
import "./Product.css";

const Product = ({ handlePlay, video }) => {
  return (
    <div className="our-works-content">
      <div className="pro-thumb">
        <img src={video.thumbnail} alt="" />
      </div>
      <div className="pro-detail">
        <h1>{video.name}</h1>
        <p>
          <strong>Singer:&nbsp;</strong> {video.singer}
        </p>
        <p>
          <strong>Type:&nbsp;</strong> {video.type}
        </p>
        <p>
          <strong>Producer:&nbsp;</strong> Vu Minh Anh
        </p>
        <p>
          <strong>Release Date:&nbsp;</strong> 17/05/2022
        </p>
        <div
          className="watch-btn"
          data-idx={video.id}
          onClick={(e) => handlePlay(e)}
        >
          Watch video
        </div>
      </div>
    </div>
  );
};

export default Product;
