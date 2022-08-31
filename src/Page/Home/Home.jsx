import React from "react";
import MyTeam from "../../components/MyTeam/MyTeam";
import Navbar from "../../components/Navbar/Navbar";
import OurWorks from "../../components/OurWorks/OurWork";

const Home = () => {
  return (
    <div id="home">
      <Navbar />
      <OurWorks />
      <MyTeam />
    </div>
  );
};

export default Home;
