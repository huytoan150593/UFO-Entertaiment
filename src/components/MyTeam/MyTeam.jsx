import React from "react";
import ImageList from "../ImagesList/ImageList";
import "./MyTeam.css";

const MyTeam = () => {
  return (
    <div id="production-team">
      <div className="page-header section-dark">
        <div className="filter"></div>
        <div className="container">
          <h2 className="presentation-subtitle text-center">Product Team</h2>
          <ImageList />
        </div>
        <div className="moving-clouds"></div>
      </div>
    </div>
  );
};

export default MyTeam;
