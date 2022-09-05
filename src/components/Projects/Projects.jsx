import React from "react";
import "./Projects.css";
import { musicVideo, musicVideo1, musicVideo2 } from "../../constains/data";
import OurWorks from "../OurWorks/OurWork";

const Projects = () => {
  return (
    <div className="projects">
      <OurWorks project={musicVideo} title="Music Video" />
      <OurWorks project={musicVideo1} title="TV Commerce" />
      <OurWorks project={musicVideo2} title="Viral Video" />
    </div>
  );
};

export default Projects;
