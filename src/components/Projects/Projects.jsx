import React from "react";
import "./Projects.css";
import { musicVideo, tvc, viralVideo } from "../../constains/data";
import OurWorks from "../OurWorks/OurWork";

const Projects = () => {
  return (
    <div id="projects">
      <OurWorks project={musicVideo} title="Music Video" />
      <OurWorks project={tvc} title="TV Commerce" reverse="reverse" />
      <OurWorks project={viralVideo} title="Viral Video" />
    </div>
  );
};

export default Projects;
